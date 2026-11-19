// Vercel serverless function: creates a Stripe Checkout Session for a donation.
// Requires the STRIPE_SECRET_KEY environment variable. Card details never touch this site.
const INTERVALS = { Weekly: "week", Monthly: "month", Annually: "year" };
const PURPOSES = [
  "General Donation/Annual Contribution", "Antiochian Women Humanitarian Initiative", "Christmas Hampers",
  "Baptism/Wedding", "Beautification", "Camp St. Elias", "Church School", "Cookbooks",
  "Food For Hungry/Humanitarian Efforts", "Funeral", "Memorial (NOT FUNERAL)", "Orben (Bread)",
  "St. Ignatius", "Marching Band", "St. Thekla Mission", "Other",
];
const clip = (v, n = 450) => String(v ?? "").trim().slice(0, n); // Stripe metadata values max 500 chars

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).json({ error: "POST only" });
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) return res.status(500).json({ error: "Online giving is not configured yet." });

  const b = typeof req.body === "string" ? JSON.parse(req.body) : req.body ?? {};
  const kind = b.kind === "contribution" ? "contribution" : "donation";
  const amount = Math.round(Number(b.amount) * 100);
  const interval = INTERVALS[b.frequency];
  if (!(amount >= 100 && amount <= 5_000_000)) return res.status(400).json({ error: "Enter an amount between $1 and $50,000." });
  if (kind === "contribution" && !interval) return res.status(400).json({ error: "Choose a frequency." });
  if (!/^\S+@\S+\.\S+$/.test(b.email ?? "") || !clip(b.first) || !clip(b.last) || !clip(b.phone) || !clip(b.envelope))
    return res.status(400).json({ error: "Please fill in all required fields." });
  const purpose = PURPOSES.includes(b.purpose) ? b.purpose : "General Donation/Annual Contribution";

  const origin = process.env.SITE_URL || `https://${req.headers.host}`;
  const meta = {
    kind, purpose, name: `${clip(b.first)} ${clip(b.last)}`, phone: clip(b.phone), envelope_number: clip(b.envelope),
    address: [b.street, b.street2, b.city, b.province, b.postal].map((x) => clip(x, 80)).filter(Boolean).join(", "),
    specify: clip(b.specify), on_behalf_or_memory_of: clip(b.honoree), notes: clip(b.notes),
  };

  const form = new URLSearchParams({
    mode: interval ? "subscription" : "payment",
    customer_email: clip(b.email, 200),
    success_url: `${origin}/${kind}?thanks=1`,
    cancel_url: `${origin}/${kind}`,
    "line_items[0][quantity]": "1",
    "line_items[0][price_data][currency]": "cad",
    "line_items[0][price_data][unit_amount]": String(amount),
    "line_items[0][price_data][product_data][name]": `St. Elias Cathedral: ${purpose}`,
  });
  if (interval) form.set("line_items[0][price_data][recurring][interval]", interval);
  for (const [k, v] of Object.entries(meta)) {
    form.set(`metadata[${k}]`, v);
    if (interval) form.set(`subscription_data[metadata][${k}]`, v);
    else form.set(`payment_intent_data[metadata][${k}]`, v);
  }

  const r = await fetch("https://api.stripe.com/v1/checkout/sessions", {
    method: "POST",
    headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/x-www-form-urlencoded" },
    body: form,
  });
  const data = await r.json();
  if (!r.ok) return res.status(502).json({ error: "Payment provider error. Please try again or call the office." });
  res.status(200).json({ url: data.url });
}

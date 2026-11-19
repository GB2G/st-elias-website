import { useState } from "react";

const PURPOSES = [
  "General Donation/Annual Contribution", "Antiochian Women Humanitarian Initiative", "Christmas Hampers",
  "Baptism/Wedding", "Beautification", "Camp St. Elias", "Church School", "Cookbooks",
  "Food For Hungry/Humanitarian Efforts", "Funeral", "Memorial (NOT FUNERAL)", "Orben (Bread)",
  "St. Ignatius", "Marching Band", "St. Thekla Mission", "Other",
];
const PLANS = [["Weekly", 10], ["Monthly", 43], ["Annually", 500]];

// kind="contribution": recurring giving. kind="donation": one-time gift with a fund.
export default function DonateForm({ kind }) {
  const recurring = kind === "contribution";
  const [plan, setPlan] = useState("Monthly");
  const [custom, setCustom] = useState(false);
  const [freq, setFreq] = useState("Monthly");
  const [purpose, setPurpose] = useState(PURPOSES[0]);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();
    setBusy(true);
    setError("");
    const f = Object.fromEntries(new FormData(e.target));
    const body = { ...f, kind };
    if (recurring) {
      body.frequency = custom ? freq : plan;
      body.amount = custom ? f.amount : PLANS.find(([n]) => n === plan)[1];
    }
    try {
      const r = await fetch("/api/checkout", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const data = await r.json();
      if (!r.ok) throw new Error(data.error);
      window.location.href = data.url; // Stripe-hosted card page
    } catch (err) {
      setError(err.message || "Something went wrong. Please call the office at 613-738-2222.");
      setBusy(false);
    }
  }

  const input = (name, label, props = {}) => (
    <label className="field">{label}{props.required && " *"}
      <input name={name} {...props} />
    </label>
  );

  return (
    <form className="donate" onSubmit={submit}>
      <fieldset>
        <legend>About you</legend>
        <div className="row2">{input("first", "First name", { required: true, autoComplete: "given-name" })}{input("last", "Last name", { required: true, autoComplete: "family-name" })}</div>
        <div className="row2">{input("email", "Email", { required: true, type: "email", autoComplete: "email" })}{input("phone", "Phone", { required: true, type: "tel", autoComplete: "tel" })}</div>
        {input("street", "Street address", { autoComplete: "address-line1" })}
        {input("street2", "Address line 2", { autoComplete: "address-line2" })}
        <div className="row3">{input("city", "City", {})}{input("province", "Province / State", {})}{input("postal", "Postal code", {})}</div>
        {input("envelope", "Parish (envelope) number", { required: true })}
        <small>If you do not know or have a parish envelope number, please enter ***.</small>
      </fieldset>

      <fieldset>
        <legend>Your {recurring ? "contribution" : "gift"}</legend>
        <label className="field">What is your donation for? *
          <select name="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}>
            {(recurring ? PURPOSES.slice(0, 1) : PURPOSES).map((p) => <option key={p}>{p}</option>)}
          </select>
        </label>
        {(purpose === "Other" || purpose.startsWith("Funeral")) && input("specify", "Please specify", { required: true })}
        {input("honoree", recurring ? "Who is this donation on behalf of?" : "Who is this donation in memory of?")}
        {!recurring && input("notes", "Notes")}
        <small>Donations must come from one person for tax receipt purposes. Use the field above to note a family or a memorial.</small>

        {recurring ? (
          <div className="plans">
            {PLANS.map(([n, amt]) => (
              <label key={n} className={!custom && plan === n ? "plan on" : "plan"}>
                <input type="radio" name="plan" checked={!custom && plan === n} onChange={() => { setCustom(false); setPlan(n); }} />
                <strong>{n}</strong><span>${amt} CAD</span>
              </label>
            ))}
            <label className={custom ? "plan on" : "plan"}>
              <input type="radio" name="plan" checked={custom} onChange={() => setCustom(true)} />
              <strong>Other amount</strong>
              {custom && (
                <>
                  <select value={freq} onChange={(e) => setFreq(e.target.value)}>{PLANS.map(([n]) => <option key={n}>{n}</option>)}</select>
                  <input name="amount" type="number" min="1" step="0.01" required placeholder="Amount (CAD)" />
                </>
              )}
            </label>
          </div>
        ) : (
          input("amount", "Donation amount (CAD)", { required: true, type: "number", min: 1, step: "0.01", placeholder: "50.00" })
        )}
      </fieldset>

      {error && <p className="error" role="alert">{error}</p>}
      <button className="btn" type="submit" disabled={busy}>{busy ? "Redirecting…" : "Continue to secure payment"}</button>
      <small>You will enter your card details on Stripe's secure page. Payments are in Canadian dollars.</small>
    </form>
  );
}

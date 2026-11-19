// Mirrors "Thought for the Day" from antiochian.org's homepage into public/thought.json.
// (Readings, saints and fasting come from the planner instead; see build-planner.mjs.)
// The page renders client-side, so we read it from a headless browser.
import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto("https://www.antiochian.org/", { waitUntil: "networkidle" });
  await page.getByText(/thought for the day/i).first().waitFor({ timeout: 15000 });
  const lines = (await page.locator("body").innerText()).split("\n").map((l) => l.trim()).filter(Boolean);

  const t = lines.findIndex((l) => /^thought for the day$/i.test(l));
  const text = lines[t + 1] ?? "";
  if (!text) throw new Error("Thought for the Day not found");
  // "Quote – Author": only treat the tail as an author if it is short and capitalised
  // (some thoughts name the speaker inside the text and carry no attribution).
  const m = text.match(/^(.*\S)\s[–—-]\s([A-Z][^–—-]{2,60})$/s);
  const [quote, author] = m && !/[.:;”"]$/.test(m[2]) ? [m[1], m[2]] : [text, ""];

  const out = { quote: quote.trim(), author: author.trim(), fetched: new Date().toISOString() };
  await writeFile(new URL("../public/thought.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
  console.log(out);
} finally {
  await browser.close();
}

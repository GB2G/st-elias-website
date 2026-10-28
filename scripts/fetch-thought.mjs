// Mirrors the daily content from antiochian.org's homepage into public/daily.json:
// Thought for the Day, the day's feast, epistle/gospel references and the fasting rule.
// The page renders client-side, so we read it from a headless browser.
import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";

const titleCase = (s) =>
  s.toLowerCase()
    .replace(/(^|[\s(])([a-z])/g, (_, a, b) => a + b.toUpperCase())
    .replace(/(?<=\S )(Of|The|And|To|In|On|For)\b/g, (w) => w.toLowerCase());

const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.goto("https://www.antiochian.org/", { waitUntil: "networkidle" });
  await page.getByText(/thought for the day/i).first().waitFor({ timeout: 15000 });
  const lines = (await page.locator("body").innerText()).split("\n").map((l) => l.trim()).filter(Boolean);

  // Daily block: date line, then "TITLE >" headings (feast, epistle, gospel), fast line, then "LITURGICS>"
  const dateIdx = lines.findIndex((l) => /^[A-Z]+, [A-Z]+ \d{1,2}, \d{4}$/.test(l));
  const endIdx = lines.findIndex((l) => /^LITURGICS\s*>/.test(l));
  if (dateIdx < 0 || endIdx < 0) throw new Error("Daily block not found");
  const block = lines.slice(dateIdx, endIdx);
  const heads = block.filter((l) => l.endsWith(">")).map((l) => l.replace(/\s*>$/, ""));
  const fast = block.find((l) => /^abstain|^fast|^no fast|fast[- ]free/i.test(l)) ?? "";

  const t = lines.findIndex((l) => /^thought for the day$/i.test(l));
  const [quote, author] = lines[t + 1].split(/\s[–—-]\s(?=[^–—-]+$)/);
  if (heads.length < 3 || !quote || !author) throw new Error(`Unexpected format: ${block.join(" | ")}`);

  const out = {
    date: titleCase(lines[dateIdx]),
    feast: titleCase(heads[0]),
    epistle: titleCase(heads[1]),
    gospel: titleCase(heads[2]),
    fast: fast.charAt(0) + fast.slice(1).toLowerCase(),
    thought: { quote: quote.trim(), author: author.trim() },
    fetched: new Date().toISOString(),
  };
  await writeFile(new URL("../public/daily.json", import.meta.url), JSON.stringify(out, null, 2) + "\n");
  console.log(out);
} finally {
  await browser.close();
}

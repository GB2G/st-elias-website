// Turns the Orthodox planner .ics (saints, fasting, readings) into public/planner.json,
// keyed by date (YYYY-MM-DD). The home page looks up today's entry in the browser.
// Usage: node scripts/build-planner.mjs [path/to/planner2026-en.ics]
import { mkdir, readFile, writeFile } from "node:fs/promises";

const src = process.argv[2] ?? "/Users/GB2G/Downloads/Planner 2026-2027/planner2026-en.ics";
const unescape = (s) => s.replace(/\\([nN,;"\\])/g, (_, c) => (c === "n" || c === "N" ? "\n" : c));

// Full reading texts: one section per "<Kind> Reading: <ref>" line, paragraphs split on blank lines.
const KINDS = { "Epistle Reading": "epistle", "Gospel Reading": "gospel", "Matins Gospel Reading": "matinsGospel", "Old Testament Reading": "oldTestament" };
function readingTexts(lines) {
  const out = [];
  let cur;
  for (const line of lines) {
    const m = line.match(/^(Epistle|Gospel|Matins Gospel|Old Testament) Reading: (.+)/);
    if (m) out.push((cur = { kind: KINDS[`${m[1]} Reading`], ref: m[2].trim(), paras: [""] }));
    else if (cur) line.trim() ? (cur.paras[cur.paras.length - 1] += (cur.paras.at(-1) ? " " : "") + line.trim()) : cur.paras.push("");
  }
  for (const r of out) r.paras = r.paras.filter(Boolean);
  return out;
}

const ics = await readFile(src, "utf8");
const days = {};
const months = {}; // "2026-11" -> { "2026-11-19": [readings] }
for (const [, ev] of ics.matchAll(/BEGIN:VEVENT(.*?)END:VEVENT/gs)) {
  const d = ev.match(/DTSTART;VALUE=DATE:(\d{4})(\d{2})(\d{2})/);
  const title = ev.match(/SUMMARY:(.*)/)?.[1];
  const desc = ev.match(/DESCRIPTION:(.*)/)?.[1];
  if (!d || !title || !desc) continue;

  const lines = unescape(desc).split("\n");
  const refs = (label) =>
    lines.filter((l) => l.startsWith(`${label}: `)).map((l) => l.slice(label.length + 2).trim());

  const iso = `${d[1]}-${d[2]}-${d[3]}`;
  (months[`${d[1]}-${d[2]}`] ??= {})[iso] = readingTexts(lines);
  days[iso] = {
    title: unescape(title).trim(),
    saints: (lines.find((l) => l.startsWith("Saints and Feasts: ")) ?? "")
      .slice("Saints and Feasts: ".length).split("; ").map((s) => s.trim()).filter(Boolean),
    fast: lines.find((l) => /^(Strict Fast|Fast Free|Fast Day)/.test(l)) ?? "",
    epistle: refs("Epistle Reading")[0] ?? "",
    gospel: refs("Gospel Reading")[0] ?? "",
    matinsGospel: refs("Matins Gospel Reading")[0] ?? "",
    oldTestament: refs("Old Testament Reading"),
  };
}

const dates = Object.keys(days).sort();
await writeFile(new URL("../public/planner.json", import.meta.url), JSON.stringify(days));
await mkdir(new URL("../public/readings/", import.meta.url), { recursive: true });
for (const [month, data] of Object.entries(months))
  await writeFile(new URL(`../public/readings/${month}.json`, import.meta.url), JSON.stringify(data));
console.log(`${dates.length} days, ${dates[0]} to ${dates.at(-1)}`);

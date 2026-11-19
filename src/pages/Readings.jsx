import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

const LABELS = { epistle: "Epistle", gospel: "Gospel", matinsGospel: "Matins Gospel", oldTestament: "Old Testament" };
const ORDER = ["epistle", "gospel", "matinsGospel", "oldTestament"];
const todayIso = () => new Date().toLocaleDateString("en-CA", { timeZone: "America/Toronto" });
const shift = (iso, days) => {
  const d = new Date(`${iso}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + days);
  return d.toISOString().slice(0, 10);
};
const longDate = (iso) =>
  new Date(`${iso}T12:00:00`).toLocaleDateString("en-CA", { weekday: "long", year: "numeric", month: "long", day: "numeric" });

function useJson(url) {
  const [state, setState] = useState({ url, data: null });
  useEffect(() => {
    let live = true;
    fetch(url).then((r) => (r.ok ? r.json() : null)).catch(() => null).then((data) => live && setState({ url, data }));
    return () => { live = false; };
  }, [url]);
  return state.url === url ? state.data : null;
}

export default function Readings() {
  const [params, setParams] = useSearchParams();
  const iso = /^\d{4}-\d{2}-\d{2}$/.test(params.get("date") ?? "") ? params.get("date") : todayIso();
  const day = useJson("/planner.json")?.[iso];
  const readings = useJson(`/readings/${iso.slice(0, 7)}.json`)?.[iso];
  const go = (d) => setParams(d === todayIso() ? {} : { date: d });

  return (
    <>
      <PageHero eyebrow="Daily Readings" title={longDate(iso)}>
        {day ? day.title : "Readings are not available for this date."}
      </PageHero>
      <section>
        <div className="wrap prose readings">
          <div className="day-nav">
            <button className="btn outline" onClick={() => go(shift(iso, -1))}>← Previous day</button>
            {iso !== todayIso() && <button className="btn outline" onClick={() => go(todayIso())}>Today</button>}
            <button className="btn outline" onClick={() => go(shift(iso, 1))}>Next day →</button>
          </div>

          {day && (
            <>
              {day.fast && <p><span className="pill">{day.fast}</span></p>}
              {day.saints.length > 0 && <p className="saints">Commemorated today: {day.saints.join("; ")}</p>}
            </>
          )}

          {readings
            ?.slice()
            .sort((a, b) => ORDER.indexOf(a.kind) - ORDER.indexOf(b.kind))
            .map((r) => (
              <article key={r.kind + r.ref} className="reading-text">
                <p className="eyebrow">{LABELS[r.kind]}</p>
                <h2>{r.ref}</h2>
                {r.paras.map((p, i) => <p key={i}>{p}</p>)}
              </article>
            ))}

          {day && readings && readings.length === 0 && <p>No scripture readings are listed for this day.</p>}
          <p className="source">
            Saints, fasting and readings from the Greek Orthodox Archdiocese of America Planner 2026–2027.{" "}
            <Link to="/">Back to home</Link>
          </p>
        </div>
      </section>
    </>
  );
}

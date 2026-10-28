import { useState } from "react";
import PageHero from "../components/PageHero.jsx";
import { businesses } from "../data/beehive.js";

export default function Beehive() {
  const [q, setQ] = useState("");
  const term = q.trim().toLowerCase();
  const shown = businesses.filter((b) => `${b.name} ${b.what}`.toLowerCase().includes(term));

  return (
    <>
      <PageHero eyebrow="Parish Life" title="Beehive Businesses">
        A directory of businesses run by parishioners of St. Elias.
      </PageHero>
      <section>
        <div className="wrap">
          <p className="notice">
            The cathedral does not endorse the listed businesses and shares in no profits from them.
          </p>
          <input
            className="search"
            type="search"
            placeholder={`Search ${businesses.length} businesses (e.g. mortgage, pharmacy, flowers)`}
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <div className="grid cols3">
            {shown.map((b) => (
              <article key={b.name} className="card">
                <h3>{b.name}</h3>
                <p>{b.what}</p>
                <span className="biz-links">
                  {b.phone && <a href={`tel:${b.phone.replace(/[^\d+]/g, "")}`}>{b.phone}</a>}
                  {b.site && <a href={`https://${b.site}`}>{b.site}</a>}
                </span>
              </article>
            ))}
          </div>
          {!shown.length && <p>No matches.</p>}
        </div>
      </section>
    </>
  );
}

import { Link, useParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import { events } from "../data/events.js";
import NotFound from "./NotFound.jsx";

export function Events() {
  return (
    <>
      <PageHero eyebrow="Schedule & Activities" title="Events">Worship, fellowship and festivals.</PageHero>
      <section>
        <div className="wrap">
          <img className="rounded cal" src="/img/events/calendar.jpg" alt="October 2026 calendar" />
          <div className="grid cols3">
            {events.map((e) => (
              <Link key={e.slug} className="card" to={`/event/${e.slug}`}>
                <span className="date">{e.short}</span>
                <h3>{e.title}</h3>
                <p>{e.date}<br />{e.time}<br />{e.place}</p>
                <span className="tag">{e.status} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export function EventDetail() {
  const { slug } = useParams();
  const e = events.find((x) => x.slug === slug);
  if (!e) return <NotFound />;
  return (
    <>
      <PageHero eyebrow={e.status} title={e.title} />
      <section>
        <div className="wrap split">
          <div className="prose">
            <p>{e.body}</p>
            <h3>When</h3><p>{e.date}<br />{e.time}</p>
            <h3>Where</h3><p>{e.place}</p>
            {e.link && <p><a className="btn" href={e.link[1]}>{e.link[0]}</a></p>}
            <p><Link to="/events">← All events</Link></p>
          </div>
          <img className="rounded" src={e.image} alt={e.title} />
        </div>
      </section>
    </>
  );
}

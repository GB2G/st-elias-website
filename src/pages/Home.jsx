import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { events } from "../data/events.js";

// Mirrored from antiochian.org by scripts/fetch-thought.mjs
function useDaily() {
  const [daily, setDaily] = useState({ thought: { quote: "", author: "" } });
  useEffect(() => {
    fetch("/daily.json").then((r) => r.json()).then(setDaily).catch(() => {});
  }, []);
  return daily;
}

export default function Home() {
  const daily = useDaily();
  const { thought } = daily;
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <p className="eyebrow">Antiochian Orthodox · Ottawa since 1930</p>
          <h1>Welcome to St. Elias Cathedral</h1>
          <p>A living parish rooted in the ancient Orthodox Christian faith. Whoever you are, you are welcome here.</p>
          <div className="actions">
            <Link className="btn" to="/contact">Plan a visit</Link>
            <Link className="btn ghost" to="/the-orthodox-faith">The Orthodox Faith</Link>
          </div>
        </div>
      </section>

      <div className="strip">
        <div className="wrap">
          <div><h3>Visit us</h3><p>700 Ridgewood Ave<br />Ottawa, ON K1V 6N1</p></div>
          <div><h3>Dean &amp; Pastor</h3><p>The Very Rev. Fr. Nektarios Najjar</p></div>
          <div><h3>Call or write</h3><p>613 738 2222<br />info@steliascathedral.com</p></div>
        </div>
      </div>

      <section className="thought">
        <div className="wrap">
          <p className="eyebrow">Thought of the Day</p>
          <blockquote>“{thought.quote}”</blockquote>
          <cite>{thought.author}</cite>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">Schedule &amp; Activities</p>
          <h2>Upcoming events</h2>
          <p className="lead">Join us for worship, fellowship and festivals through the season.</p>
          <div className="grid cols3">
            {events.map((e) => (
              <Link key={e.slug} className="card" to={`/event/${e.slug}`}>
                <span className="date">{e.short}</span>
                <h3>{e.title}</h3>
                <p>{e.time}</p>
                <span className="tag">{e.status} →</span>
              </Link>
            ))}
          </div>
          <p className="more"><Link to="/events">See the full events calendar →</Link></p>
        </div>
      </section>

      <section className="tight">
        <div className="wrap">
          <div className="grid cols4">
            <Link className="card" to="/subscribe"><h3>Subscribe</h3><p>The weekly St. Elias Raven newsletter.</p><span className="tag">Sign up →</span></Link>
            <Link className="card" to="/contributions-donations"><h3>Support</h3><p>Give online to the life of the parish.</p><span className="tag">Donate →</span></Link>
            <a className="card" href="https://www.youtube.com/channel/UCuVO8RACZpgsdMdzm8XKNZA"><h3>Watch</h3><p>Sermons and services on YouTube.</p><span className="tag">Watch →</span></a>
            <Link className="card" to="/who-we-are"><h3>Visit</h3><p>New here? Learn what to expect.</p><span className="tag">Who we are →</span></Link>
          </div>
        </div>
      </section>

      <section className="reading">
        <div className="wrap split">
          <img src="/img/icon-peter-paul.jpg" alt="Icon of Saints Peter and Paul holding the Church of Antioch" width="500" height="367" />
          <div>
            <p className="eyebrow">Daily Reading</p>
            {daily.feast && (
              <>
                <h2>{daily.feast}</h2>
                <p className="lead flush">{daily.date}<br />{daily.epistle}<br />{daily.gospel}</p>
                {daily.fast && <span className="pill">Fast: {daily.fast}</span>}
              </>
            )}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <p className="eyebrow">The Wire</p>
          <h2>Read &amp; reflect</h2>
          <p className="lead">Teaching and news from the Antiochian Archdiocese.</p>
          <div className="grid cols2">
            <a className="row-card" href="https://www.antiochian.org">
              <img src="/img/met-saba.webp" alt="Metropolitan Saba" loading="lazy" />
              <div><h3>Metropolitan Saba</h3><p>Weekly teaching articles from our Archbishop.</p></div>
            </a>
            <a className="row-card" href="https://www.antiochian.org">
              <img src="/img/the-word.webp" alt="The Word magazine cover" loading="lazy" />
              <div><h3>The Word (Al Kalimat)</h3><p>The Archdiocese's bi-monthly magazine.</p></div>
            </a>
          </div>
        </div>
      </section>

      <section className="beehive-cta">
        <div className="wrap">
          <p className="eyebrow">Beehive</p>
          <h2>Support parishioner businesses</h2>
          <p className="lead">A directory of businesses run by members of our parish.</p>
          <Link className="btn" to="/beehive">Browse the directory</Link>
        </div>
      </section>
    </>
  );
}

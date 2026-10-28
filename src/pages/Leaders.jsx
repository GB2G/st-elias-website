import PageHero from "../components/PageHero.jsx";
import { hierarchs, clergy } from "../data/leaders.js";

function People({ list }) {
  return (
    <div className="grid cols3 people">
      {list.map((p) => (
        <article key={p.name} className="person">
          <img src={p.img} alt={p.name} loading="lazy" />
          <h3>{p.name}</h3>
          <span className="role">{p.role}</span>
          {p.bio && <p>{p.bio}</p>}
        </article>
      ))}
    </div>
  );
}

export default function Leaders() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Our Leaders">Shepherds of the Church and the cathedral parish.</PageHero>
      <section>
        <div className="wrap">
          <h2>Hierarchs</h2>
          <People list={hierarchs} />
        </div>
      </section>
      <section className="alt">
        <div className="wrap">
          <h2>Cathedral clergy</h2>
          <People list={clergy} />
        </div>
      </section>
    </>
  );
}

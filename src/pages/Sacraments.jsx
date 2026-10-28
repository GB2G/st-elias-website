import PageHero from "../components/PageHero.jsx";

const forms = [
  ["Church School Registration", "Register each student with a separate form.", "https://docs.google.com/forms/d/e/1FAIpQLSdGkBcH8AY7rpBiisGrOdQG-3ZOYGPShXeXwTHDsMNn-NzxPA/viewform"],
  ["Census Form", "Complete this form to register as a parishioner.", "https://forms.gle/gLvD5pmGEZpVcSsV8"],
];

export default function Sacraments() {
  return (
    <>
      <PageHero eyebrow="Parish Life" title="Sacraments & Forms">
        Registration forms and how to reach us about weddings, baptisms and more.
      </PageHero>
      <section>
        <div className="wrap">
          <div className="grid cols2">
            {forms.map(([title, text, href]) => (
              <a key={title} className="card" href={href}>
                <h3>{title}</h3><p>{text}</p><span className="tag">Open form →</span>
              </a>
            ))}
          </div>
          <div className="prose" style={{ marginTop: 40 }}>
            <h2>Weddings, baptisms and other matters</h2>
            <p>
              Please contact the parish office by phone at 613-738-2222 or by email at{" "}
              <a href="mailto:info@steliascathedral.com">info@steliascathedral.com</a>. Church School questions go to
              Kelly Hamwi at <a href="mailto:steliaschurchschool@gmail.com">steliaschurchschool@gmail.com</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

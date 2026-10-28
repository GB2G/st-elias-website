import PageHero from "../components/PageHero.jsx";

export default function Subscribe() {
  // TODO: point this at the real mailing-list provider; for now it emails the office
  const submit = (e) => {
    e.preventDefault();
    const email = new FormData(e.target).get("email");
    window.location.href = `mailto:info@steliascathedral.com?subject=Subscribe&body=Please add ${encodeURIComponent(email)} to the St. Elias Raven.`;
  };

  return (
    <>
      <PageHero eyebrow="Newsletter" title="Subscribe to our E-mailing List">
        Get the weekly St. Elias Raven in your inbox.
      </PageHero>
      <section>
        <div className="wrap split">
          <img className="raven" src="/img/pages/raven.webp" alt="The St. Elias Raven" />
          <form className="form" onSubmit={submit}>
            <label htmlFor="email">Email Address *</label>
            <input id="email" name="email" type="email" required placeholder="you@example.com" />
            <button className="btn" type="submit">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}

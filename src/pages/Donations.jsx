import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function Donations() {
  return (
    <>
      <PageHero eyebrow="Support the Cathedral" title="Contributions & Donations">
        Annual contributions and special donations can now be made online.
      </PageHero>
      <section>
        <div className="wrap prose">
          <p>
            You can set up automatic weekly or monthly credit card payments, so there is no need to bring envelopes on
            Sundays or make a catch-up payment at year end. If you have not been a regular contributor, please consider a
            recurring donation. Your gifts support the ministry and property of the Cathedral and help the parish thrive
            for years to come.
          </p>
          <p className="actions-left">
            <Link className="btn" to="/contribution">Set up recurring giving</Link>
            <Link className="btn outline" to="/donation">Make a one-time donation</Link>
          </p>
          <p>
            To cancel a recurring donation, email <a href="mailto:info@steliascathedral.com">info@steliascathedral.com</a>.
          </p>
        </div>
      </section>
    </>
  );
}

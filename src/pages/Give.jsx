import { Link, useSearchParams } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";
import DonateForm from "../components/DonateForm.jsx";

const copy = {
  contribution: ["Recurring Contribution", "Set up automatic weekly, monthly or annual giving to the Cathedral."],
  donation: ["Make a Donation", "A one-time gift toward the fund of your choice."],
};

export default function Give({ kind }) {
  const [params] = useSearchParams();
  const [title, blurb] = copy[kind];
  const thanks = params.get("thanks");

  return (
    <>
      <PageHero eyebrow="Support the Cathedral" title={thanks ? "Thank you!" : title}>
        {thanks ? "Your gift has been received. A receipt is on its way to your email." : blurb}
      </PageHero>
      <section>
        <div className="wrap prose">
          {thanks ? (
            <p>May God bless you for your generosity. <Link to="/">Return home</Link>.</p>
          ) : (
            <DonateForm kind={kind} />
          )}
        </div>
      </section>
    </>
  );
}

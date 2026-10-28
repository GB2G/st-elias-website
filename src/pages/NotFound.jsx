import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export default function NotFound() {
  return (
    <>
      <PageHero title="Page not found">That page doesn't exist.</PageHero>
      <section><div className="wrap"><Link className="btn" to="/">Back to home</Link></div></section>
    </>
  );
}

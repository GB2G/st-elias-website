import PageHero from "../components/PageHero.jsx";

const REGISTER =
  "https://docs.google.com/forms/d/e/1FAIpQLSdGkBcH8AY7rpBiisGrOdQG-3ZOYGPShXeXwTHDsMNn-NzxPA/viewform";

export default function ChurchSchool() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Church School">
        St. Elias Antiochian Orthodox Church School, K4 through Grade 12.
      </PageHero>
      <section>
        <div className="wrap split">
          <div className="prose">
            <p>
              Church School builds on the spiritual foundation laid at home, helping students live out their Orthodox
              faith. Our teachers draw on the saints, Scripture and the liturgy.
            </p>
            <h2>What we do</h2>
            <p>
              Orthodox teaching, humanitarian service, Bible Bowl competitions, Creative Arts and Oratorical Festivals
              through Antiochian Youth and Young Adult Ministries, and Christmas concerts.
            </p>
            <h2>Schedule</h2>
            <p>
              Students arrive at 10 am when the Divine Liturgy begins. After communion they go to their classes, which end
              at 12:15 pm. Instruction is mostly in English, with some instructors offering Arabic and French. The first
              class of 2026/2027 was on September 20, 2026.
            </p>
            <h2>Cost</h2>
            <p>There are no fees. Donations toward learning materials and supplies are appreciated.</p>
            <p><a className="btn" href={REGISTER}>Register a student</a></p>
            <p>
              Questions? Contact Church School Director Kelly Hamwi at{" "}
              <a href="mailto:steliaschurchschool@gmail.com">steliaschurchschool@gmail.com</a> or the church office at
              613-738-2222. More resources: <a href="https://www.antiochian.org">Antiochian Christian Education</a>.
            </p>
          </div>
          <img className="rounded" src="/img/pages/church-school.jpg" alt="Church School students" />
        </div>
      </section>
    </>
  );
}

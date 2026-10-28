import PageHero from "../components/PageHero.jsx";

export default function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in touch with us">We would love to hear from you.</PageHero>
      <section>
        <div className="wrap grid cols3">
          <div className="card">
            <h3>Cathedral address</h3>
            <p>700 Ridgewood Ave<br />Ottawa, ON K1V 6N1</p>
            <h3>Church location</h3>
            <p>2975 Riverside Drive<br />Ottawa, ON K1V 6N1</p>
          </div>
          <div className="card">
            <h3>Phone</h3>
            <p>(613) 738-2222<br />(613) 737-4392</p>
            <h3>Email</h3>
            <p><a href="mailto:info@steliascathedral.com">info@steliascathedral.com</a></p>
            <h3>Office hours</h3>
            <p>Monday to Friday, 8:30 am to 4:00 pm</p>
          </div>
          <div className="card">
            <h3>Dean &amp; Pastor</h3>
            <p>The Very Rev. Fr. Nektarios Najjar</p>
            <h3>Follow us</h3>
            <p>
              <a href="https://www.youtube.com/channel/UCuVO8RACZpgsdMdzm8XKNZA">YouTube</a><br />
              <a href="https://www.facebook.com/SEAOCO">Facebook</a><br />
              <a href="https://instagram.com/st.elias.cathedral">Instagram</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

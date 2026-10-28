import { Link } from "react-router-dom";
import PageHero from "../components/PageHero.jsx";

export function WhoWeAre() {
  return (
    <>
      <PageHero eyebrow="About Us" title="Who We Are">
        Orthodox Christians and first-time visitors alike are welcome at St. Elias.
      </PageHero>
      <section>
        <div className="wrap prose">
          <h2>A parish with deep roots</h2>
          <p>
            St. Elias is a parish of the Antiochian Orthodox Christian Archdiocese of North America. It began with a
            few Middle Eastern immigrant families from Lebanon in the early 1900s and today numbers about 1,000 member
            families. Most are second- to fourth-generation Canadians of Middle Eastern descent, joined by converts and
            Orthodox Christians from other traditions, such as Greek and Slavic.
          </p>
          <h2>Worship</h2>
          <p>
            Services are sung in English and Arabic by our choirs, with the congregation taking part. Preaching is in
            English. Service books are available, and children are always welcome. Coffee and fellowship follow the
            Divine Liturgy.
          </p>
          <h2>Children and youth</h2>
          <p>
            Our <Link to="/church-school">Church School</Link>, rooted in Scripture and Tradition, serves children from
            kindergarten through high school while adults gather for fellowship. Youth and young adult programs support
            Orthodox formation for the next generation.
          </p>
          <h2>Our faith</h2>
          <p>
            We believe the Orthodox Church is the Church founded by Christ and His Apostles, and we strive for unity of
            faith and life through worship, prayer, fasting, almsgiving and daily living. Orthodoxy is the second-largest
            Christian body in the world, with roughly 200 million members. The various Eastern Orthodox archdioceses
            share the same faith and are in communion with one another.
          </p>
          <h2>Curious?</h2>
          <p>
            The best way to learn about Orthodoxy is to join us for a service. The clergy also hold inquirer classes.{" "}
            <Link to="/contact">Get in touch</Link> and we will gladly talk with you.
          </p>
        </div>
      </section>
    </>
  );
}

export function Faith() {
  return (
    <>
      <PageHero eyebrow="About Us" title="The Orthodox Faith">
        A short introduction, adapted from a text by Fr. Jason Kouri.
      </PageHero>
      <section>
        <div className="wrap prose">
          <img className="banner" src="/img/pages/platitera.png" alt="Icons of the Platytera above the altar" />
          <h2>One God in Three Persons</h2>
          <p>
            The Orthodox Church understands itself to be the Church of Jesus Christ, confessing one God in three
            Persons: Father, Son and Holy Spirit. God created all things and made humanity, male and female, in His
            image, yet humans turned away from God toward self-centred sin.
          </p>
          <h2>The Incarnation</h2>
          <p>
            God came to humanity through the Virgin Mary, honoured as the Mother of God but never worshipped as God.
            Jesus, whose name means “the Lord saves,” took on human flesh to rescue us from sin and death. He died on the
            cross, rose on the third day, and descended to Hades to free humanity, inviting all to share in God's
            eternal life.
          </p>
          <div className="float-right">
            <img src="/img/pages/resurrection.png" alt="Icon of the Resurrection and the Harrowing of Hades" />
          </div>
          <h2>The Church</h2>
          <p>
            After His Ascension, Christ sent the Holy Spirit. The bishops, as successors of the apostles, and the local
            clergy lead the Church, proclaim the Gospel and celebrate the sacraments, including Baptism, Chrismation and
            the Eucharist.
          </p>
          <h2>Icons and worship</h2>
          <p>
            Orthodox churches are filled with icons of Christ, the Virgin Mary, the Resurrection, the apostles, bishops,
            Church Fathers and saints. Our prayer grew from the way Jesus, the apostles and the first Christians, who
            were Jewish, prayed in the Temple and synagogues, with many additions over the centuries.
          </p>
          <h2>Next steps</h2>
          <p>
            Our clergy welcome your questions. <Link to="/contact">Contact the cathedral</Link> to request a callback,
            or simply come and see.
          </p>
        </div>
      </section>
    </>
  );
}

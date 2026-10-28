import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import { WhoWeAre, Faith } from "./pages/About.jsx";
import Leaders from "./pages/Leaders.jsx";
import ChurchSchool from "./pages/ChurchSchool.jsx";
import Sacraments from "./pages/Sacraments.jsx";
import Donations from "./pages/Donations.jsx";
import Contact from "./pages/Contact.jsx";
import Subscribe from "./pages/Subscribe.jsx";
import { Events, EventDetail } from "./pages/Events.jsx";
import Beehive from "./pages/Beehive.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="who-we-are" element={<WhoWeAre />} />
        <Route path="our-leaders" element={<Leaders />} />
        <Route path="the-orthodox-faith" element={<Faith />} />
        <Route path="church-school" element={<ChurchSchool />} />
        <Route path="sacraments-forms" element={<Sacraments />} />
        <Route path="contributions-donations" element={<Donations />} />
        <Route path="contact" element={<Contact />} />
        <Route path="subscribe" element={<Subscribe />} />
        <Route path="events" element={<Events />} />
        <Route path="event/:slug" element={<EventDetail />} />
        <Route path="beehive" element={<Beehive />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

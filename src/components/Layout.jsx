import { useEffect, useState } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";

const about = [
  ["/who-we-are", "Who We Are"],
  ["/our-leaders", "Our Leaders"],
  ["/the-orthodox-faith", "The Orthodox Faith"],
  ["/church-school", "Church School"],
];
const main = [
  ["/events", "Events"],
  ["/sacraments-forms", "Sacraments & Forms"],
  ["/beehive", "Beehive"],
  ["/contact", "Contact"],
  ["/subscribe", "Subscribe"],
];

export default function Layout() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <header>
        <div className="wrap">
          <Link className="brand" to="/">
            <img src="/img/Header_Logo.webp" alt="Saint Elias Antiochian Orthodox Cathedral, Ottawa" />
          </Link>
          <button className="menu-btn" aria-expanded={open} onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
          <nav className={open ? "open" : ""}>
            <div className="dropdown">
              <span>About Us ▾</span>
              <div className="dropdown-menu">
                {about.map(([to, label]) => (
                  <NavLink key={to} to={to}>{label}</NavLink>
                ))}
              </div>
            </div>
            {main.map(([to, label]) => (
              <NavLink key={to} to={to}>{label}</NavLink>
            ))}
            <Link className="btn" to="/contributions-donations">Give</Link>
          </nav>
        </div>
      </header>

      <main><Outlet /></main>

      <footer>
        <div className="wrap">
          <span>© 2026 St. Elias Antiochian Orthodox Cathedral · 700 Ridgewood Ave, Ottawa</span>
          <span>
            <a href="https://www.antiochian.org">Antiochian Archdiocese</a>
            <a href="https://www.ancientfaith.com">Ancient Faith</a>
            <a href="https://www.facebook.com/SEAOCO">Facebook</a>
            <a href="https://instagram.com/st.elias.cathedral">Instagram</a>
          </span>
        </div>
      </footer>
    </>
  );
}

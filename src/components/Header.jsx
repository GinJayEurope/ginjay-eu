import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "News", href: "#news", id: "news" },
  { label: "Artists", href: "#artists", id: "artists" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Timeline", href: "#timeline", id: "timeline" },
  { label: "Events", href: "#events", id: "events" },
  { label: "Editorial", href: "#editorial", id: "editorial" },
];

export default function Header({ darkMode, setDarkMode }) {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => {
          const element = document.getElementById(item.id);
          if (!element) return null;

          const rect = element.getBoundingClientRect();

          return {
            id: item.id,
            visible: rect.top <= 180 && rect.bottom >= 180,
          };
        })
        .filter(Boolean);

      const visibleSection = sections.find((section) => section.visible);

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    }

    window.addEventListener("scroll", onScroll);
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <header className={scrolled ? "header scrolled" : "header"}>
      <div className="header-inner">
        <a
          className="header-brand"
          href="#home"
          aria-label="GinJay Europe — back to home"
          onClick={() => setMenuOpen(false)}
        >
          <img
            src="/favicon.png"
            alt=""
            className="header-brand-mark"
            aria-hidden="true"
          />

          <span className="header-brand-copy">
            <span className="header-brand-name">GinJay Europe</span>
            <span className="header-brand-tagline">European fanbase</span>
          </span>
        </a>

        <nav id="main-navigation" className={menuOpen ? "open" : ""}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className={activeSection === item.id ? "active" : ""}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          aria-pressed={darkMode}
        >
          <span
            className={`theme-option theme-option--sun${
              !darkMode ? " active" : ""
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" focusable="false">
              <circle cx="12" cy="12" r="3.2" />
              <path d="M12 2.5v2M12 19.5v2M4.6 4.6 6 6M18 18l1.4 1.4M2.5 12h2M19.5 12h2M4.6 19.4 6 18M18 6l1.4-1.4" />
            </svg>
          </span>

          <span
            className={`theme-option theme-option--moon${
              darkMode ? " active" : ""
            }`}
            aria-hidden="true"
          >
            <svg viewBox="0 0 24 24" focusable="false">
              <path d="M20 15.2A8.4 8.4 0 0 1 8.8 4a8.5 8.5 0 1 0 11.2 11.2Z" />
            </svg>
          </span>
        </button>

        <button
          type="button"
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          aria-controls="main-navigation"
        >
          <span></span>
          <span></span>
        </button>
      </div>
      </div>
    </header>
  );
}

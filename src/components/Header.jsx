import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "News", href: "#news", id: "news" },
  { label: "Artists", href: "#artists", id: "artists" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Timeline", href: "#timeline", id: "timeline" },
  { label: "Events", href: "#events", id: "events" },
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
      <div className="logo">GinJay Europe</div>

      <div className="header-actions">
        <button
          className="theme-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label="Toggle dark mode"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          ☰
        </button>
      </div>

      <nav className={menuOpen ? "open" : ""}>
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
    </header>
  );
}
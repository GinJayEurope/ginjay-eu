import animatedLogo from "../assets/brand/ginjay-europe-logo.webp";

export default function Footer() {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/ginjayeurope",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.4" cy="6.7" r="0.8" className="social-dot" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@ginjayeuropeofficial",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M14 4v10.1a4.1 4.1 0 1 1-3.1-4" />
          <path d="M14 4c.8 2.1 2.4 3.4 4.7 3.6" />
        </svg>
      ),
    },
    {
      name: "Discord",
      href: "https://discord.com/invite/Y9H2NX7QGA",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7.2 7.2c3.1-1.5 6.5-1.5 9.6 0 1.4 2 2.2 4.3 2.4 6.7-1.2 1.4-2.7 2.4-4.4 3l-1.1-1.5c.7-.3 1.4-.7 2-1.2-2.4 1.1-5 1.1-7.4 0 .6.5 1.3.9 2 1.2L9.2 17c-1.7-.6-3.2-1.6-4.4-3 .2-2.4 1-4.7 2.4-6.8Z" />
          <circle cx="9.3" cy="12" r="1" className="social-dot" />
          <circle cx="14.7" cy="12" r="1" className="social-dot" />
        </svg>
      ),
    },
    {
      name: "X",
      href: "https://x.com/GinJayEurope",
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M5 4.5 19 19.5" />
          <path d="M18.5 4.5 5.5 19.5" />
        </svg>
      ),
    },
  ];

  const navigation = [
    ["Home", "home"],
    ["About", "about"],
    ["News", "news"],
    ["Artists", "artists"],
    ["Gallery", "gallery"],
    ["Timeline", "timeline"],
    ["Events", "events"],
    ["Editorial", "editorial"],
  ];

  return (
    <footer className="gj-footer-new" id="footer">
      <section className="gj-footer-new__statement">
        <div className="gj-footer-new__statement-inner">
          <h2 className="gj-footer-new__claim">
            <span>Built across borders.</span>
            <span>Connected by moments. United through GinJay.</span>
          </h2>

          <div className="gj-footer-new__lightline" aria-hidden="true">
            <span />
          </div>
        </div>
      </section>

      <section className="gj-footer-new__main">
        <div className="gj-footer-new__content">
          <div className="gj-footer-new__brand">
            <img
              src={animatedLogo}
              alt="GinJay Europe"
              className="gj-footer-new__logo"
              loading="lazy"
              decoding="async"
            />

            <div className="gj-footer-new__brand-copy">
              <h3>GinJay Europe</h3>

              <p>
                A fanmade universe for European Alkeys — created with love,
                friendship and{" "}
                <span>the right kind of crazyness.</span>
              </p>
            </div>
          </div>

          <nav
            className="gj-footer-new__navigation"
            aria-label="Footer navigation"
          >
            {navigation.map(([label, id]) => (
              <a key={id} href={`#${id}`}>
                {label}
              </a>
            ))}
          </nav>

          <div className="gj-footer-new__socials">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="gj-footer-new__copyright">
          © 2026 GinJay Europe. Unofficial fan website.
        </div>
      </section>
    </footer>
  );
}
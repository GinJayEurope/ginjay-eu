import { useEffect, useState } from "react";
import animatedLogo from "../assets/brand/ginjay-europe-logo.gif";

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/ginjayeurope",
    platform: "instagram",
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@ginjayeuropeofficial",
    platform: "tiktok",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/Y9H2NX7QGA",
    platform: "discord",
  },
  {
    name: "X",
    href: "https://x.com/GinJayEurope",
    platform: "x",
  },
];

function SocialIcon({ platform }) {
  if (platform === "instagram") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4.25" />
        <circle className="social-icon-dot" cx="17.5" cy="6.5" r="1" />
      </svg>
    );
  }

  if (platform === "tiktok") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M15.2 3c.35 2.08 1.57 3.31 3.8 3.44v3.02a7.26 7.26 0 0 1-3.76-1.09v6.1a6.02 6.02 0 1 1-5.2-5.96v3.12a2.96 2.96 0 1 0 2.12 2.84V3h3.04Z" />
      </svg>
    );
  }

  if (platform === "discord") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M19.35 5.34A16.3 16.3 0 0 0 15.44 4l-.48.98a14.75 14.75 0 0 0-5.9 0L8.57 4a16.5 16.5 0 0 0-3.92 1.35C2.18 9 1.51 12.56 1.84 16.07a16 16 0 0 0 4.81 2.45l1.16-1.58a10.3 10.3 0 0 1-1.82-.88l.45-.35a11.7 11.7 0 0 0 11.12 0l.45.35c-.58.35-1.2.65-1.83.88l1.16 1.58a16 16 0 0 0 4.82-2.45c.38-4.07-.66-7.6-2.81-10.73ZM8.66 14.07c-.94 0-1.71-.86-1.71-1.92s.75-1.93 1.71-1.93c.97 0 1.73.87 1.71 1.93 0 1.06-.75 1.92-1.71 1.92Zm6.68 0c-.94 0-1.71-.86-1.71-1.92s.75-1.93 1.71-1.93c.97 0 1.73.87 1.71 1.93 0 1.06-.74 1.92-1.71 1.92Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
    </svg>
  );
}

export default function Hero() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setOffset(window.scrollY * 0.08);
    }

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <div className="hero-editorial-kicker">
          <span aria-hidden="true" />
          <span className="subtitle">GINJAY EUROPE</span>
          <span aria-hidden="true" />
        </div>

        <div className="hero-title-stage">
          <span className="hero-title-meta hero-title-meta--left">
            EST. 2026
          </span>

          <h1>
            European Fanbase for <span>GinJay</span>
          </h1>

          <span className="hero-title-meta hero-title-meta--right">
            GINNY × JAYNA
          </span>
        </div>

        <p>
          A fan hub for Ginny & Jayna — sharing news, updates, fanart,
          projects, event memories, and community moments with European Alkeys
          and friends all over the world.
        </p>

        <div className="hero-socials">
          {socialLinks.map((social) => (
            <a
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className={`hero-social-link hero-social-link--${social.platform}`}
              aria-label={`Visit GinJay Europe on ${social.name}`}
              key={social.name}
            >
              <SocialIcon platform={social.platform} />
              <span>{social.name}</span>
            </a>
          ))}
        </div>

        <div className="hero-current-highlight" aria-label="Current highlight">
          <span className="hero-highlight-spark" aria-hidden="true" />
          <span className="hero-highlight-label">Currently celebrating</span>
          <span className="hero-highlight-separator" aria-hidden="true" />
          <span>Lunar Secret Pilot</span>
          <span className="hero-highlight-separator" aria-hidden="true" />
          <strong>1M Views</strong>
        </div>

        <div className="hero-image">
          <div className="artwork-placeholder premium-artwork hero-showcase">
            <div
              className="orb orb-one"
              style={{ transform: `translateY(${offset}px)` }}
            ></div>

            <div
              className="orb orb-two"
              style={{ transform: `translateY(${offset * -0.6}px)` }}
            ></div>

            <div
              className="orb orb-three"
              style={{ transform: `translateY(${offset * 0.4}px)` }}
            ></div>

            <div className="hero-card-content">
              <span className="hero-badge">Europe Alkeys Fanbase</span>

              <h3>Updates, memories, fanart and community</h3>

              <p>
                A digital home for everyone supporting Ginny and Jayna with
                kindness, love and creativity.
              </p>
            </div>

            <img
              src={animatedLogo}
              alt="GinJay Europe logo"
              className="hero-showcase-logo"
              loading="eager"
              decoding="async"
            />
          </div>
        </div>
      </div>

      <div className="hero-scroll-cue" aria-hidden="true">
        <span />
        <span>Scroll to discover</span>
        <span />
      </div>
    </section>
  );
}

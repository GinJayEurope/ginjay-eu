import { useEffect, useState } from "react";

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
        <span className="subtitle">GINJAY EUROPE</span>

        <h1>
          European Fanbase for <span>GinJay</span>
        </h1>

        <p>
          A fan hub for Ginny & Jayna — sharing news, updates, fanart,
          projects, event memories, and community moments with European Alkeys
          and friends all over the world.
        </p>

        <div className="hero-socials">
          <a href="https://x.com/GinJayEurope" target="_blank" rel="noreferrer">
            X
          </a>

          <a
            href="https://www.instagram.com/ginjayeurope"
            target="_blank"
            rel="noreferrer"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@ginjayeuropeofficial"
            target="_blank"
            rel="noreferrer"
          >
            TikTok
          </a>

          <a
            href="https://discord.com/invite/Y9H2NX7QGA"
            target="_blank"
            rel="noreferrer"
          >
            Discord
          </a>
        </div>

        <div className="hero-image">
          <div className="artwork-placeholder premium-artwork">
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
    A digital home for everyone supporting Ginny and Jayna with kindness,
    love and creativity.
  </p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}
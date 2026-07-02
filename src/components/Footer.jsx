import watermark from "../assets/brand/ginjay-europe-watermark.jpg";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-column footer-brand">
          <h2>GinJay Europe</h2>

          <p>
            A fanmade universe for European Alkeys — created with love,
            creativity and respect and the right kind of craziness.
          </p>

          <img
            src={watermark}
            alt="GinJay Europe watermark"
            className="footer-watermark"
          />
        </div>

        <div className="footer-column">
          <h3>Quick Links</h3>

          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#news">News</a>
            <a href="#artists">Artists</a>
            <a href="#gallery">Gallery</a>
            <a href="#timeline">Timeline</a>
            <a href="#events">Events</a>
          </div>
        </div>

        <div className="footer-column">
          <h3>Community</h3>

          <div className="footer-links">
            <a href="https://x.com/GinJayEurope" target="_blank" rel="noreferrer">
              X / Twitter
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
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2026 GinJay Europe. Unofficial fan website.</p>
      </div>
    </footer>
  );
}
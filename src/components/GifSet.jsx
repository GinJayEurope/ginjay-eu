export default function GifSet() {
  const gifs = [
    {
      src: "/gifs/previews/racer3.webp",
      alt: "Ginny and Jayna racing together",
    },
    {
      src: "/gifs/previews/racer4.webp",
      alt: "Ginny racing on the go-kart track",
    },
    {
      src: "/gifs/previews/racer5.webp",
      alt: "Ginny driving past the track barriers",
    },
    {
      src: "/gifs/previews/racer6.webp",
      alt: "Go-kart racing moment",
    },
    {
      src: "/gifs/previews/racer7.webp",
      alt: "Jayna driving a go-kart",
    },
    {
      src: "/gifs/previews/racer8.webp",
      alt: "Jayna smiling while racing",
    },
    {
      src: "/gifs/previews/racer9.webp",
      alt: "Jayna turning on the go-kart track",
    },
    {
      src: "/gifs/previews/racing1.webp",
      alt: "Jayna racing on the track",
    },
    {
      src: "/gifs/previews/racing2.webp",
      alt: "Jayna driving through a turn",
    },
  ];

  return (
    <section className="gifset" aria-labelledby="ginny-racing-title">
      <div className="gifset-heading">
        <p className="gifset-eyebrow">GIF COLLECTION</p>

        <h3 id="ginny-racing-title">Ginny Racing</h3>

        <p>Relive some of our favorite Ginny racing moments.</p>
      </div>

      <div className="gifset-grid">
        {gifs.map((gif) => (
          <div className="gifset-item" key={gif.src}>
            <img
              src={gif.src}
              alt={gif.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>

      <a
  className="gj-gifset__tumblr-button"
  href="https://ginjayeu.tumblr.com"
  target="_blank"
  rel="noreferrer"
>
  <span className="gj-gifset__tumblr-icon" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="M14.22 19.5c-3.15 0-4.76-1.58-4.76-4.69v-4.9H7.15v-2.1c1.27-.47 2.18-1.18 2.77-2.15.49-.8.82-1.78.95-2.91h2.08v4.28h3.72v2.88h-3.72v4.6c0 1.1.58 1.64 1.74 1.64.64 0 1.31-.14 2-.43v2.83c-.84.36-1.66.55-2.47.55Z" />
    </svg>
  </span>

  <span className="gj-gifset__tumblr-copy">
    <strong>Explore our Tumblr GIF Archive</strong>
    <small>Discover even more GinJay moments on Tumblr</small>
  </span>

  <span className="gj-gifset__tumblr-arrow" aria-hidden="true">
    <svg viewBox="0 0 24 24">
      <path d="M5 12h13" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  </span>
</a>
    </section>
  );
}

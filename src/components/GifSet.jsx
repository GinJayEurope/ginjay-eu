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
        href="https://ginjayeu.tumblr.com/tagged/ginjaygokart"
        target="_blank"
        rel="noopener noreferrer"
        className="gifset-more-btn"
      >
        View and download more GIFs on Tumblr →
      </a>
    </section>
  );
}

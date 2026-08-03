export default function GifSet() {
  const gifs = [
    {
      src: "/gifs/racer3.gif",
      alt: "Ginny and Jayna racing together",
    },
    {
      src: "/gifs/racer4.gif",
      alt: "Ginny racing on the go-kart track",
    },
    {
      src: "/gifs/racer5.gif",
      alt: "Ginny driving past the track barriers",
    },
    {
      src: "/gifs/racer6.gif",
      alt: "Go-kart racing moment",
    },
    {
      src: "/gifs/racer7.gif",
      alt: "Jayna driving a go-kart",
    },
    {
      src: "/gifs/racer8.gif",
      alt: "Jayna smiling while racing",
    },
    {
      src: "/gifs/racer9.gif",
      alt: "Jayna turning on the go-kart track",
    },
    {
      src: "/gifs/racing1.gif",
      alt: "Jayna racing on the track",
    },
    {
      src: "/gifs/racing2.gif",
      alt: "Jayna driving through a turn",
    },
  ];

  return (
    <section className="gifset" aria-labelledby="ginjay-racing-title">
      <div className="gifset-heading">
        <p className="gifset-eyebrow">GIF COLLECTION</p>

        <h3 id="ginjay-racing-title">GinJay Racing</h3>

        <p>
          Relive some of our favorite GinJay racing moments.
        </p>
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

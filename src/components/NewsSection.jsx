import { useEffect, useState } from "react";
import { news } from "../data/news";

export default function NewsSection() {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const scheduleItem = news.find((item) => item.type === "Schedule");
  const otherNews = news.filter((item) => item.type !== "Schedule");

  useEffect(() => {
    if (!selectedSchedule) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") setSelectedSchedule(null);
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedSchedule]);

  return (
    <>
      <section className="section" id="news">
        <div className="section-heading">
          <span className="subtitle">LATEST</span>

          <h2>News & Highlights</h2>

          <p>
            For the latest news, updates, and GinJay moments, our social media
            channels remain the main place to stay up to date. This website is
            still growing and will be expanded step by step with more content,
            projects, and community highlights.
          </p>
        </div>

        <div className="news-showcase">
          {scheduleItem && (
            <article className="schedule-feature-card">
              <div className="schedule-feature-image-wrap">
                <img
                  src={scheduleItem.image}
                  alt={scheduleItem.title}
                  className="schedule-feature-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="schedule-feature-content">
                <span className="news-badge">{scheduleItem.type}</span>

                <h3>{scheduleItem.title}</h3>

                <p>{scheduleItem.text}</p>

                <button
                  type="button"
                  className="news-premium-button"
                  onClick={() => setSelectedSchedule(scheduleItem)}
                >
                  {scheduleItem.button} <span>→</span>
                </button>
              </div>
            </article>
          )}

          <div className="news-side-cards">
            {otherNews.map((item) => {
              const hasArtwork = Boolean(item.image);
              const hasVideo = Boolean(item.video);

              return (
                <article
                  className={`news-premium-card${
                    hasArtwork ? " news-premium-card--artwork" : ""
                  }${hasVideo ? " news-premium-card--video" : ""}`}
                  key={item.id}
                >
                  {hasVideo && (
                    <div className="news-premium-card-video-wrap">
                      <video
                        className="news-premium-card-video"
                        controls
                        muted
                        playsInline
                        preload="metadata"
                        poster={item.poster}
                        aria-label={`${item.title} — GinJay Europe celebration edit`}
                      >
                        <source src={item.video} type="video/mp4" />
                        Your browser does not support embedded videos.
                      </video>
                    </div>
                  )}
                  {hasArtwork && (
                    <img
                      src={item.image}
                      alt=""
                      className="news-premium-card-image"
                      loading="lazy"
                      decoding="async"
                      aria-hidden="true"
                    />
                  )}

                  <div className="news-premium-card-content">
                    <span className="news-badge">{item.type}</span>

                    <h3>{item.title}</h3>

                    <p>{item.text}</p>

                    {hasVideo && (
                      <p className="news-video-sound-hint">
                        Sound is off by default — use the video controls to turn
                        it on.
                      </p>
                    )}

                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="news-premium-button"
                      >
                        {item.button} <span>→</span>
                      </a>
                    ) : item.button ? (
                      <button
                        type="button"
                        className="news-premium-button"
                        disabled
                      >
                        {item.button}
                      </button>
                    ) : null}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {selectedSchedule && (
        <div
          className="schedule-lightbox"
          role="dialog"
          aria-modal="true"
          aria-labelledby="schedule-lightbox-title"
          onClick={() => setSelectedSchedule(null)}
        >
          <div
            className="schedule-lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="schedule-lightbox-close"
              aria-label="Close schedule"
              onClick={() => setSelectedSchedule(null)}
            >
              ×
            </button>

            <img
              src={selectedSchedule.image}
              alt={selectedSchedule.title}
              className="schedule-lightbox-image"
            />

            <div className="schedule-lightbox-info">
              <span className="news-badge">{selectedSchedule.type}</span>

              <h3 id="schedule-lightbox-title">{selectedSchedule.title}</h3>

              <p>{selectedSchedule.text}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useEffect, useState } from "react";
import { news } from "../data/news";

function NewsEditorialMeta({ item }) {
  return (
    <div className="news-editorial-meta">
      <span>{item.issue}</span>
    </div>
  );
}

function NewsCategory({ item }) {
  const showNew =
    Boolean(item.newUntil) && Date.now() <= Date.parse(item.newUntil);

  return (
    <div className="news-editorial-category-row">
      <span className="news-editorial-category">{item.type}</span>

      {showNew && (
        <span className="news-new-indicator">
          <span aria-hidden="true" /> NEW
        </span>
      )}
    </div>
  );
}

function ButtonIcon({ icon }) {
  if (icon === "calendar") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3.5" y="5" width="17" height="15.5" rx="3" />
        <path d="M7.5 3v4M16.5 3v4M3.5 9.5h17" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M21.4 7.2a3 3 0 0 0-2.1-2.1C17.45 4.6 12 4.6 12 4.6s-5.45 0-7.3.5a3 3 0 0 0-2.1 2.1A31 31 0 0 0 2.1 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.85.5 7.3.5 7.3.5s5.45 0 7.3-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8Z" />
        <path className="news-button-play" d="m10 9 5 3-5 3V9Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.75c.45 5.2 3.05 7.8 8.25 8.25-5.2.45-7.8 3.05-8.25 8.25-.45-5.2-3.05-7.8-8.25-8.25 5.2-.45 7.8-3.05 8.25-8.25Z" />
    </svg>
  );
}

function EditorialButton({ item, onClick }) {
  const content = (
    <>
      <span className="news-premium-button-icon">
        <ButtonIcon icon={item.buttonIcon} />
      </span>
      <span>{item.button}</span>
      {item.link || onClick ? (
        <span className="news-premium-button-arrow" aria-hidden="true">
          →
        </span>
      ) : null}
    </>
  );

  if (item.link) {
    return (
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="news-premium-button"
        aria-label={`${item.button}: ${item.title} (opens YouTube in a new tab)`}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      className="news-premium-button"
      onClick={onClick}
      disabled={!onClick}
    >
      {content}
    </button>
  );
}

function NewsCard({ item, layoutClass }) {
  const hasArtwork = Boolean(item.image);
  const hasVideo = Boolean(item.video);
  const typeClass = item.type.toLowerCase();

  return (
    <article
      className={`news-premium-card news-editorial-card news-premium-card--${typeClass} ${layoutClass}${
        hasArtwork ? " news-premium-card--artwork" : ""
      }${hasVideo ? " news-premium-card--video" : ""}`}
    >
      <NewsEditorialMeta item={item} />

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
        <NewsCategory item={item} />

        <h3>{item.title}</h3>

        <p>{item.text}</p>

        {item.button ? <EditorialButton item={item} /> : null}
      </div>
    </article>
  );
}

export default function NewsSection() {
  const [selectedSchedule, setSelectedSchedule] = useState(null);

  const scheduleItem = news.find((item) => item.type === "Schedule");
  const communityItem = news.find((item) => item.type === "Community");
  const milestoneItem = news.find((item) => item.type === "Milestone");
  const spotlightItem = news.find((item) => item.type === "Spotlight");

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
            <article className="schedule-feature-card news-editorial-card news-layout-schedule">
              <NewsEditorialMeta item={scheduleItem} />

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
                <NewsCategory item={scheduleItem} />

                <h3>{scheduleItem.title}</h3>

                <p>{scheduleItem.text}</p>

                <EditorialButton
                  item={scheduleItem}
                  onClick={() => setSelectedSchedule(scheduleItem)}
                />
              </div>
            </article>
          )}

          {milestoneItem && (
            <NewsCard item={milestoneItem} layoutClass="news-layout-milestone" />
          )}

          {communityItem && (
            <NewsCard item={communityItem} layoutClass="news-layout-community" />
          )}

          {spotlightItem && (
            <NewsCard item={spotlightItem} layoutClass="news-layout-spotlight" />
          )}
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

import { useEffect, useState } from "react";
import { currentSchedule } from "../data/schedule";
import eventsCardArtwork from "../assets/events/jump.png";

const EVENT_ARCHIVE_INVITE = "https://discord.gg/ZcddvCNctn";

export default function Events() {
  const [selectedPoster, setSelectedPoster] = useState(null);

  useEffect(() => {
    if (!selectedPoster) return;

    const previousOverflow = document.body.style.overflow;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setSelectedPoster(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [selectedPoster]);

  return (
    <>
      <section className="section events-section" id="events">
        <div className="section-heading">
          <span className="subtitle">EVENTS</span>

          <h2>Events & Activities</h2>

          <p>
            Monthly GinJay events, public appearances, livestreams and
            community activities will be listed here once confirmed.
          </p>
        </div>

        <div
          className="events-month-card events-month-card--artwork"
          style={{
            "--events-card-artwork": `url("${eventsCardArtwork}")`,
          }}
        >
          <div className="events-month-card-header">
            <div>
              <span className="event-status upcoming">
                {currentSchedule.month}
              </span>

              <h3>Monthly Schedule</h3>

              <p>
                All confirmed GinJay activities for this month in one place.
              </p>
            </div>

            <button
              type="button"
              className="button primary"
              onClick={() => setSelectedPoster(currentSchedule.poster)}
            >
              View full schedule
            </button>
          </div>

          <div className="events-month-list">
            {currentSchedule.events.map((event) => (
              <article className="events-month-item" key={event.id}>
                <div className="events-month-date">{event.date}</div>

                <div className="events-month-content">
                  <div className="events-month-topline">
                    <span className="event-status">{event.type}</span>
                    <span className="events-month-time">{event.time}</span>
                  </div>

                  <h4>{event.title}</h4>

                  <p className="events-month-artist">{event.artist}</p>

                  {event.location && (
                    <p className="events-month-location">{event.location}</p>
                  )}

                  {event.details?.length > 0 && (
                    <ul className="events-month-details">
                      {event.details.map((detail) => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="monthly-events-note">{currentSchedule.note}</p>
        </div>

        <div className="events-archive">
          <div className="section-heading archive-heading">
            <span className="subtitle">ARCHIVE</span>

            <h2>Past Events</h2>

            <p>
              Relive GinJay events through our growing community collection.
            </p>
          </div>

          <div className="discord-archive-card">
            <div
              className="discord-archive-glow discord-archive-glow-one"
              aria-hidden="true"
            ></div>

            <div
              className="discord-archive-glow discord-archive-glow-two"
              aria-hidden="true"
            ></div>

            <div className="discord-archive-content">
              <span className="discord-archive-label">
                COMMUNITY EVENT ARCHIVE
              </span>

              <h3>Every GinJay memory in one place</h3>

              <p className="discord-archive-description">
                Join our Discord event archive and explore a large, growing
                collection of GinJay event photos and clips shared by our
                community. New memories are usually added as early as the day
                after each event.
              </p>

              <div className="discord-channel-preview">
                <span className="discord-channel-symbol" aria-hidden="true">
                  #
                </span>

                <div>
                  <span>Our dedicated Discord channel</span>
                  <strong>ginjay-events📸</strong>
                </div>
              </div>

              <div className="discord-archive-features">
                <span>Event photos</span>
                <span>Video clips</span>
                <span>Regular updates</span>
              </div>

              <a
                href={EVENT_ARCHIVE_INVITE}
                target="_blank"
                rel="noreferrer"
                className="button primary discord-archive-button"
              >
                Explore our Event Archive
                <span aria-hidden="true">→</span>
              </a>

              <p className="discord-archive-note">
                The invitation opens our GinJay Europe community on Discord.
              </p>
            </div>
          </div>
        </div>
      </section>

      {selectedPoster && (
        <div
          className="schedule-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Monthly schedule"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="schedule-lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="schedule-lightbox-close"
              aria-label="Close schedule"
              onClick={() => setSelectedPoster(null)}
            >
              ×
            </button>

            <img
              src={selectedPoster}
              alt="Full monthly schedule"
              className="schedule-lightbox-image"
            />
          </div>
        </div>
      )}
    </>
  );
}
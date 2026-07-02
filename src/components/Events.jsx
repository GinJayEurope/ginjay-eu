import { useState } from "react";
import { monthlyEvents, pastEvents } from "../data/events";

export default function Events() {
  const [selectedPoster, setSelectedPoster] = useState(null);
  const [selectedArchive, setSelectedArchive] = useState(null);

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

        <div className="events-month-card">
          <div className="events-month-card-header">
            <div>
              <span className="event-status upcoming">{monthlyEvents.month}</span>
              <h3>Monthly Schedule</h3>
              <p>
                All confirmed GinJay activities for this month in one place.
              </p>
            </div>

            <button
              type="button"
              className="button primary"
              onClick={() => setSelectedPoster(monthlyEvents.poster)}
            >
              View full schedule
            </button>
          </div>

          <div className="events-month-list">
            {monthlyEvents.events.map((event) => (
              <article className="events-month-item" key={event.id}>
                <div className="events-month-date">{event.date}</div>

                <div className="events-month-content">
                  <div className="events-month-topline">
                    <span className="event-status">{event.type}</span>
                    <span className="events-month-time">{event.time}</span>
                  </div>

                  <h4>{event.title}</h4>

                  <p className="events-month-artist">{event.artist}</p>
                  <p className="events-month-location">{event.location}</p>

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

          <p className="monthly-events-note">{monthlyEvents.note}</p>
        </div>

        <div className="events-archive">
          <div className="section-heading archive-heading">
            <span className="subtitle">ARCHIVE</span>
            <h2>Past Events</h2>
            <p>
              Photos and memories from past GinJay events will be
              collected here step by step.
            </p>
          </div>

          {pastEvents.length > 0 ? (
            <div className="archive-grid">
              {pastEvents.map((event) => (
                <article className="archive-card" key={event.id}>
                  <div className="archive-image-wrap">
                    <img
                      src={event.cover}
                      alt={event.title}
                      className="archive-image"
                    />

                    <div className="archive-overlay">
                      <span>{event.type}</span>
                    </div>
                  </div>

                  <div className="archive-content">
                    <span className="archive-date">{event.date}</span>
                    <h3>{event.title}</h3>
                    <p>{event.location}</p>
                    <p>{event.text}</p>

                    <button
                      type="button"
                      className="button primary"
                      onClick={() => setSelectedArchive(event)}
                    >
                      View memories
                    </button>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="archive-coming-soon">
              <span>Archive</span>
              <h3>Event memories coming soon.</h3>
              <p>
                Once past event photos and highlights are collected,
                they will appear here as a memory gallery.
              </p>
            </div>
          )}
        </div>
      </section>

      {selectedPoster && (
        <div
          className="schedule-lightbox"
          onClick={() => setSelectedPoster(null)}
        >
          <div
            className="schedule-lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="schedule-lightbox-close"
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

      {selectedArchive && (
        <div
          className="schedule-lightbox"
          onClick={() => setSelectedArchive(null)}
        >
          <div
            className="archive-lightbox-card"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              className="schedule-lightbox-close"
              onClick={() => setSelectedArchive(null)}
            >
              ×
            </button>

            <div className="archive-lightbox-heading">
              <span>{selectedArchive.date}</span>
              <h3>{selectedArchive.title}</h3>
              <p>{selectedArchive.location}</p>
            </div>

            <div className="archive-lightbox-grid">
              {selectedArchive.images.map((image) => (
                <img
                  key={image}
                  src={image}
                  alt={selectedArchive.title}
                  className="archive-lightbox-image"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
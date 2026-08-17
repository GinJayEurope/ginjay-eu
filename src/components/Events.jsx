import memoryPink from "../assets/events/past-event-01.jpg";
import memoryBlackWhite from "../assets/events/past-event-02.jpg";
import memoryPolka from "../assets/events/past-event-03.jpg";
import memoryBlackGown from "../assets/events/past-event-04.jpg";
import memoryGoldGown from "../assets/events/past-event-05.jpg";

function CameraIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.1 7.8h2.1l1-1.8h3.6l1 1.8h2.1a2.7 2.7 0 0 1 2.7 2.7v5.7a2.7 2.7 0 0 1-2.7 2.7H7.1a2.7 2.7 0 0 1-2.7-2.7v-5.7a2.7 2.7 0 0 1 2.7-2.7Z" />
      <circle cx="12" cy="13.3" r="3.1" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4.5" y="5.5" width="15" height="13" rx="2.4" />
      <path d="m10 9 5 3-5 3Z" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 3.7 13.5 8l4.3 1.5-4.3 1.5-1.5 4.3-1.5-4.3-4.3-1.5L10.5 8 12 3.7Z" />
      <path d="M18.3 14.2 19 16l1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7.7-1.8Z" />
    </svg>
  );
}

function DiscordIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M7.35 7.2c3.15-1.48 6.15-1.48 9.3 0 1.42 2 2.22 4.24 2.4 6.72-1.18 1.36-2.62 2.34-4.35 2.97l-1.02-1.42c.68-.28 1.34-.66 1.92-1.12-2.3 1.02-4.88 1.02-7.2 0 .58.46 1.24.84 1.92 1.12l-1.02 1.42c-1.73-.63-3.17-1.61-4.35-2.97.18-2.48.98-4.72 2.4-6.72Z" />
      <circle cx="9.45" cy="12.1" r="1.02" />
      <circle cx="14.55" cy="12.1" r="1.02" />
    </svg>
  );
}

export default function Events() {
  const memories = [
    {
      id: "left-far",
      image: memoryBlackGown,
      alt: "GinJay event archive memory",
      variant: "left-far",
    },
    {
      id: "left-mid",
      image: memoryPink,
      alt: "GinJay event archive memory",
      variant: "left-mid",
    },
    {
      id: "center",
      image: memoryBlackWhite,
      alt: "GinJay event archive memory",
      variant: "center",
    },
    {
      id: "right-mid",
      image: memoryPolka,
      alt: "GinJay event archive memory",
      variant: "right-mid",
    },
    {
      id: "right-far",
      image: memoryGoldGown,
      alt: "GinJay event archive memory",
      variant: "right-far",
    },
  ];

  const features = [
    {
      title: "Event photos",
      text: "Curated moments from unforgettable events.",
      icon: <CameraIcon />,
    },
    {
      title: "Video clips",
      text: "Short & full clips capturing the magic.",
      icon: <VideoIcon />,
    },
    {
      title: "Regular updates",
      text: "Fresh memories added after each event.",
      icon: <SparkleIcon />,
    },
  ];

  return (
    <section className="section gj-events-premium" id="events">
      <div className="gj-events-premium__header">
        <span className="gj-events-premium__eyebrow">ARCHIVE</span>

        <h2>Past Events</h2>

        <p>
          Relive GinJay events through our growing community collection.
        </p>
      </div>

      <div className="gj-events-premium__panel">
        <div
          className="gj-events-premium__aurora gj-events-premium__aurora--left"
          aria-hidden="true"
        />

        <div
          className="gj-events-premium__aurora gj-events-premium__aurora--right"
          aria-hidden="true"
        />

        <div className="gj-events-premium__panel-inner">
          <div className="gj-events-premium__badge">
            COMMUNITY EVENT ARCHIVE
          </div>

          <h3 className="gj-events-premium__title">
            Every GinJay memory
            <br />
            <span>in one place</span>
          </h3>

          <p className="gj-events-premium__lead">
            Explore thousands of photos and clips from GinJay events shared by
            fans around the world. New memories are usually added as early as
            the day after each event.
          </p>

          <div className="gj-events-premium__memory-stage">
            <div
              className="gj-events-premium__memory-line"
              aria-hidden="true"
            />

            {memories.map((memory) => (
              <article
                key={memory.id}
                className={`gj-events-premium__memory gj-events-premium__memory--${memory.variant}`}
              >
                {memory.variant === "center" && (
                  <span
                    className="gj-events-premium__memory-pin"
                    aria-hidden="true"
                  />
                )}

                <div className="gj-events-premium__memory-image-wrap">
                  <img
                    src={memory.image}
                    alt={memory.alt}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </article>
            ))}
          </div>

          <div className="gj-events-premium__feature-grid">
            {features.map((feature) => (
              <div key={feature.title} className="gj-events-premium__feature">
                <div className="gj-events-premium__feature-icon">
                  {feature.icon}
                </div>

                <div className="gj-events-premium__feature-copy">
                  <h4>{feature.title}</h4>
                  <p>{feature.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="gj-events-premium__discord">
            <div className="gj-events-premium__discord-icon">
              <DiscordIcon />
            </div>

            <div className="gj-events-premium__discord-copy">
              <span>Our dedicated Discord channel</span>
              <strong>ginjay-events 🗂️</strong>
            </div>
          </div>

          <a
            className="gj-events-premium__cta"
            href="https://discord.com/invite/Y9H2NX7QGA"
            target="_blank"
            rel="noreferrer"
          >
            <span>Explore the Event Archive</span>

            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M5 12h13" />
              <path d="m13 6 6 6-6 6" />
            </svg>
          </a>

          <p className="gj-events-premium__footnote">
            The invitation opens our GinJay Europe community on Discord.
          </p>
        </div>
      </div>
    </section>
  );
}
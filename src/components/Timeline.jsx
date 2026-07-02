import { useState } from "react";
import { timeline } from "../data/timeline";

export default function Timeline() {
  const [openId, setOpenId] = useState(null);

  return (
    <section className="section" id="timeline">
      <div className="section-heading">
        <span className="subtitle">TIMELINE</span>

        <h2>GinJay Journey</h2>

        <p>
          From their early beginnings to today — follow the key milestones,
          events, awards and unforgettable moments that shaped the GinJay
          journey.
        </p>
      </div>

      <div className="timeline-list">
        {timeline.map((item) => {
          const isOpen = openId === item.id;

          return (
            <article className="timeline-card" key={item.id}>
              <div className="timeline-marker-wrap">
                <div className="timeline-dot"></div>
              </div>

              <div className="timeline-year">{item.year}</div>

              <div className="timeline-content">
                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {isOpen && (
                  <div className="timeline-expanded">
                    {item.details && (
                      <p className="timeline-details">{item.details}</p>
                    )}

                    {item.events?.length > 0 && (
                      <div className="timeline-block">
                        <h4>Key Events</h4>

                        <ul>
                          {item.events.map((event) => (
                            <li key={event}>{event}</li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.awards?.length > 0 && (
                      <div className="timeline-block">
                        <h4>Awards & Recognition</h4>

                        <ul>
                          {item.awards.map((award) => (
                            <li key={award}>{award}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  className="timeline-toggle"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  {isOpen ? "Show less" : "Read more"}
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
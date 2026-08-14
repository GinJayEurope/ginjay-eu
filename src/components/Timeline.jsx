import { useEffect, useRef, useState } from "react";
import { timeline } from "../data/timeline";

const ROUTE_POINTS = [132, 160, 128];

function getRoutePath(index) {
  const startX = ROUTE_POINTS[index];
  const endX = ROUTE_POINTS[index + 1] ?? startX;
  const direction = endX >= startX ? 1 : -1;

  return `M ${startX} 0 C ${startX} 28 ${
    startX + direction * 40
  } 58 ${endX} 100`;
}

export default function Timeline() {
  const [openId, setOpenId] = useState(null);
  const [activeId, setActiveId] = useState(timeline[0]?.id ?? null);
  const [reachedIds, setReachedIds] = useState(
    () => new Set(timeline[0] ? [timeline[0].id] : [])
  );
  const timelineRef = useRef(null);

  useEffect(() => {
    const timelineElement = timelineRef.current;
    if (!timelineElement) return undefined;

    const cards = Array.from(
      timelineElement.querySelectorAll("[data-timeline-id]")
    );
    let animationFrame = null;

    function updateTimelineFocus() {
      animationFrame = null;
      const focusLine = window.innerHeight * 0.43;
      let closestCard = null;
      let closestDistance = Number.POSITIVE_INFINITY;
      const newlyReached = [];

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const nodePosition = rect.top + Math.min(rect.height * 0.16, 70);
        const distance = Math.abs(nodePosition - focusLine);

        if (distance < closestDistance) {
          closestCard = card;
          closestDistance = distance;
        }

        if (nodePosition < window.innerHeight * 0.72) {
          newlyReached.push(Number(card.dataset.timelineId));
        }
      });

      if (closestCard) {
        setActiveId(Number(closestCard.dataset.timelineId));
      }

      if (newlyReached.length > 0) {
        setReachedIds((previousIds) => {
          const nextIds = new Set(previousIds);
          let hasChanged = false;

          newlyReached.forEach((id) => {
            if (!nextIds.has(id)) {
              nextIds.add(id);
              hasChanged = true;
            }
          });

          return hasChanged ? nextIds : previousIds;
        });
      }
    }

    function requestTimelineUpdate() {
      if (animationFrame !== null) return;
      animationFrame = window.requestAnimationFrame(updateTimelineFocus);
    }

    updateTimelineFocus();
    window.addEventListener("scroll", requestTimelineUpdate, { passive: true });
    window.addEventListener("resize", requestTimelineUpdate);

    return () => {
      window.removeEventListener("scroll", requestTimelineUpdate);
      window.removeEventListener("resize", requestTimelineUpdate);

      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [openId]);

  return (
    <section className="section timeline-section" id="timeline">
      <div className="section-heading">
        <span className="subtitle">TIMELINE</span>

        <h2>GinJay Journey</h2>

        <p>
          From their early beginnings to today — follow the key milestones,
          events, awards and unforgettable moments that shaped the GinJay
          journey.
        </p>
      </div>

      <div className="timeline-list timeline-constellation" ref={timelineRef}>
        {timeline.map((item, index) => {
          const isOpen = openId === item.id;
          const isCurrent = activeId === item.id;
          const isReached = reachedIds.has(item.id);
          const nextItem = timeline[index + 1];
          const isSegmentLit = nextItem ? reachedIds.has(nextItem.id) : false;
          const routeX = `${(ROUTE_POINTS[index] / 220) * 100}%`;
          const expandedId = `timeline-expanded-${item.id}`;

          return (
            <article
              className={`timeline-card${isOpen ? " is-open" : ""}${
                isCurrent ? " is-current" : ""
              }${isReached ? " is-reached" : ""}`}
              key={item.id}
              data-timeline-id={item.id}
              style={{ "--timeline-route-x": routeX }}
            >
              <div className="timeline-route-lane">
                {nextItem && (
                  <svg
                    className={`timeline-route-segment${
                      isSegmentLit ? " is-lit" : ""
                    }`}
                    viewBox="0 0 220 100"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      className="timeline-route-path timeline-route-path--base"
                      d={getRoutePath(index)}
                      pathLength="1"
                    />
                    <path
                      className="timeline-route-path timeline-route-path--progress"
                      d={getRoutePath(index)}
                      pathLength="1"
                    />
                    <path
                      className="timeline-route-path timeline-route-path--shimmer"
                      d={getRoutePath(index)}
                      pathLength="1"
                    />
                  </svg>
                )}

                <span className="timeline-year">{item.year}</span>

                <span className="timeline-node" aria-hidden="true">
                  <span />
                </span>

                <span className="timeline-node-connector" aria-hidden="true" />
                <span
                  className="timeline-route-ornament timeline-route-ornament--one"
                  aria-hidden="true"
                />
                <span
                  className="timeline-route-ornament timeline-route-ornament--two"
                  aria-hidden="true"
                />
              </div>

              <div className="timeline-content">
                <div className="timeline-memory-stars" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                  <span />
                </div>

                <h3>{item.title}</h3>

                <p className="timeline-summary">{item.text}</p>

                {isOpen && (
                  <div className="timeline-expanded" id={expandedId}>
                    {item.details && (
                      <p className="timeline-details">{item.details}</p>
                    )}

                    {item.events?.length > 0 && (
                      <div className="timeline-block timeline-block--events">
                        <h4>
                          <span className="timeline-block-star" aria-hidden="true">
                            ✦
                          </span>
                          Key Events
                        </h4>

                        <ul>
                          {item.events.map((event) => (
                            <li key={event}>
                              <span>{event}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.awards?.length > 0 && (
                      <div className="timeline-block timeline-block--awards">
                        <h4>
                          <span className="timeline-block-star" aria-hidden="true">
                            ✦
                          </span>
                          Awards &amp; Recognition
                        </h4>

                        <ul>
                          {item.awards.map((award) => (
                            <li key={award}>
                              <span>{award}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                )}

                <button
                  type="button"
                  className="timeline-toggle"
                  aria-expanded={isOpen}
                  aria-controls={expandedId}
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                >
                  <span>{isOpen ? "Show less" : "Read more"}</span>
                  <span className="timeline-toggle-arrow" aria-hidden="true">
                    {isOpen ? "↑" : "→"}
                  </span>
                </button>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

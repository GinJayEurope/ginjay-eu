import React from "react";
import Reveal from "./Reveal";
import { currentSchedule } from "../data/schedule";

import loveOnHireTeaser from "../assets/news/love-on-hire-teaser.png";
import loveOnHireSchedule from "../assets/news/love-on-hire-schedule.png";
import newSeriesTrailerBg from "../assets/news/new-series-trailer.PNG";

const LOVE_ON_HIRE_TEASER_URL =
  "https://www.youtube.com/watch?v=F1l1mAvSmZo";

const LUNAR_SECRET_TRAILER_URL =
  "https://www.youtube.com/watch?v=TDY-ZwAtCPI";


/* =========================================================
   ICONS
========================================================= */

function CalendarIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="3.5"
        y="5.5"
        width="17"
        height="15"
        rx="3"
      />

      <path d="M7.5 3.5v4" />
      <path d="M16.5 3.5v4" />
      <path d="M3.5 9.5h17" />
    </svg>
  );
}


function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}


function PlayIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M9 7.5 16 12l-7 4.5v-9Z"
        fill="currentColor"
        stroke="none"
      />
    </svg>
  );
}


/* =========================================================
   NEWS SECTION
========================================================= */

export default function NewsSection() {
  return (
    <section
      id="news"
      className="gj-news-section"
    >
      <Reveal>
        <div className="gj-news-shell">

          {/* =====================================================
              SECTION HEADER
          ====================================================== */}

          <div className="gj-news-header">
            <span className="gj-news-kicker">
              LATEST
            </span>

            <h2>
              News &amp; Highlights
            </h2>

            <p>
              For the latest news, updates, and GinJay moments, our social media
              channels remain the main place to stay up to date. This website is
              still growing and will be expanded step by step with more content,
              projects, and community highlights.
            </p>
          </div>


          {/* =====================================================
              TWO INDEPENDENT NEWS COLUMNS
          ====================================================== */}

          <div className="gj-news-grid">

            {/* ===================================================
                LEFT COLUMN
            ==================================================== */}

            <div className="gj-news-column">

              {/* ===============================================
                  HIGHLIGHT 01 — MONTHLY SCHEDULE
              ================================================ */}

              <Reveal>
                <article className="gj-news-card gj-news-card--poster gj-news-card--schedule-main">

                  <div className="gj-news-card-top">
                    <span>
                      HIGHLIGHT N° 01
                    </span>
                  </div>


                  <div className="gj-news-poster-frame">
                    <img
                      src={currentSchedule.poster}
                      alt={`${currentSchedule.month} schedule poster`}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>


                  <div className="gj-news-card-content gj-news-card-content--center">

                    <span className="gj-news-card-kicker">
                      SCHEDULE
                    </span>

                    <h3>
                      Monthly Schedule
                    </h3>

                    <p>
                      Find the latest GinJay schedule poster created by our
                      fanbase.
                    </p>


                    {/* SCHEDULE BUTTON */}

                    <a
                      className="gj-news-button gj-news-button--schedule"
                      href={currentSchedule.poster}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className="gj-news-button__icon gj-news-button__icon--calendar"
                        aria-hidden="true"
                      >
                        <CalendarIcon />
                      </span>

                      <span>
                        View full schedule
                      </span>

                      <span
                        className="gj-news-button__arrow"
                        aria-hidden="true"
                      >
                        <ArrowIcon />
                      </span>
                    </a>

                  </div>
                </article>
              </Reveal>


              {/* ===============================================
                  HIGHLIGHT 03 — LUNAR SECRET TRAILER
              ================================================ */}

              <Reveal>
                <article
                  className="gj-news-card gj-news-card--feature gj-news-card--existing-trailer"
                  style={{
                    backgroundImage: `url(${newSeriesTrailerBg})`,
                  }}
                >

                  <div className="gj-news-card-top">
                    <span>
                      HIGHLIGHT N° 03
                    </span>
                  </div>


                  <div
                    className="gj-news-feature-overlay"
                    aria-hidden="true"
                  />


                  <div className="gj-news-feature-content">

                    <span className="gj-news-card-kicker">
                      SPOTLIGHT
                    </span>

                    <h3>
                      New Series Trailer
                    </h3>

                    <p>
                      Watch the trailer for the upcoming series starring Ginny
                      &amp; Jayna and show your support by streaming and sharing
                      it with fellow fans.
                    </p>


                    <a
                      className="gj-news-button"
                      href={LUNAR_SECRET_TRAILER_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className="gj-news-button__icon"
                        aria-hidden="true"
                      >
                        <PlayIcon />
                      </span>

                      <span>
                        Watch on YouTube
                      </span>

                      <span
                        className="gj-news-button__arrow"
                        aria-hidden="true"
                      >
                        <ArrowIcon />
                      </span>
                    </a>

                  </div>
                </article>
              </Reveal>

            </div>


            {/* ===================================================
                RIGHT COLUMN
            ==================================================== */}

            <div className="gj-news-column">

              {/* ===============================================
                  HIGHLIGHT 02 — LOVE ON HIRE TEASER
              ================================================ */}

              <Reveal>
                <article
                  className="gj-news-card gj-news-card--feature gj-news-card--teaser"
                  style={{
                    backgroundImage: `url(${loveOnHireTeaser})`,
                  }}
                >

                  <div className="gj-news-card-top">
                    <span>
                      HIGHLIGHT N° 02
                    </span>
                  </div>


                  <div
                    className="gj-news-feature-overlay"
                    aria-hidden="true"
                  />


                  <div className="gj-news-feature-content">

                    <span className="gj-news-card-kicker">
                      NEW SERIES
                    </span>

                    <h3>
                      Love on Hire Teaser
                    </h3>

                    <p>
                      Watch the official teaser for{" "}
                      <strong>Love on Hire</strong>{" "}
                      and support the new series directly on YouTube.
                    </p>


                    <a
                      className="gj-news-button"
                      href={LOVE_ON_HIRE_TEASER_URL}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span
                        className="gj-news-button__icon"
                        aria-hidden="true"
                      >
                        <PlayIcon />
                      </span>

                      <span>
                        Watch on YouTube
                      </span>

                      <span
                        className="gj-news-button__arrow"
                        aria-hidden="true"
                      >
                        <ArrowIcon />
                      </span>
                    </a>

                  </div>
                </article>
              </Reveal>


              {/* ===============================================
                  HIGHLIGHT 04 — LOVE ON HIRE SCHEDULE
              ================================================ */}

              <Reveal>
                <article className="gj-news-card gj-news-card--series-schedule">

                  <div className="gj-news-card-top">
                    <span>
                      HIGHLIGHT N° 04
                    </span>
                  </div>


                  <div className="gj-news-series-schedule-layout">

                    <div className="gj-news-series-schedule-poster">
                      <img
                        src={loveOnHireSchedule}
                        alt="Love on Hire on-air schedule"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>


                    <div className="gj-news-series-schedule-content">

                      <span className="gj-news-card-kicker">
                        ON-AIR
                      </span>

                      <h3>
                        Love on Hire Schedule
                      </h3>

                      <p>
                        See the current release dates for the series, including
                        the airing plan, uncut VIP schedule, and official
                        hashtags.
                      </p>


                      {/* LOVE ON HIRE SCHEDULE BUTTON */}

                      <a
                        className="gj-news-button gj-news-button--schedule"
                        href={loveOnHireSchedule}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <span
                          className="gj-news-button__icon gj-news-button__icon--calendar"
                          aria-hidden="true"
                        >
                          <CalendarIcon />
                        </span>

                        <span>
                          Open full schedule
                        </span>

                        <span
                          className="gj-news-button__arrow"
                          aria-hidden="true"
                        >
                          <ArrowIcon />
                        </span>
                      </a>

                    </div>
                  </div>
                </article>
              </Reveal>

            </div>

          </div>
        </div>
      </Reveal>
    </section>
  );
}
import React from "react";
import Reveal from "./Reveal";
import { currentSchedule } from "../data/schedule";

import loveOnHireTeaser from "../assets/news/love-on-hire-teaser.png";
import loveOnHireSchedule from "../assets/news/love-on-hire-schedule.png";

export default function NewsSection() {
  return (
    <section id="news" className="gj-news-section">
      <Reveal>
        <div className="gj-news-shell">
          <div className="gj-news-header">
            <span className="gj-news-kicker">LATEST</span>
            <h2>News & Highlights</h2>
            <p>
              For the latest news, updates, and GinJay moments, our social media
              channels remain the main place to stay up to date. This website is
              still growing and will be expanded step by step with more content,
              projects, and community highlights.
            </p>
          </div>

          <div className="gj-news-grid">
            {/* Highlight 01 */}
            <Reveal>
              <article className="gj-news-card gj-news-card--poster">
                <div className="gj-news-card-top">
                  <span>HIGHLIGHT N° 01</span>
                </div>

                <div className="gj-news-poster-frame">
                  <img
                    src={currentSchedule.poster}
                    alt={`${currentSchedule.month} schedule poster`}
                  />
                </div>

                <div className="gj-news-card-content gj-news-card-content--center">
                  <span className="gj-news-card-kicker">SCHEDULE</span>
                  <h3>Monthly Schedule</h3>
                  <p>
                    Find the latest GinJay schedule poster created by our
                    fanbase.
                  </p>

                  <a
                    className="gj-news-button"
                    href={currentSchedule.poster}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="gj-news-button__icon">◌</span>
                    <span>View full schedule</span>
                    <span className="gj-news-button__arrow">→</span>
                  </a>
                </div>
              </article>
            </Reveal>

            {/* Highlight 02 */}
            <Reveal>
              <article
                className="gj-news-card gj-news-card--feature"
                style={{ backgroundImage: `url(${loveOnHireTeaser})` }}
              >
                <div className="gj-news-card-top">
                  <span>HIGHLIGHT N° 02</span>
                </div>

                <div className="gj-news-feature-overlay" />

                <div className="gj-news-feature-content">
                  <span className="gj-news-card-kicker">NEW SERIES</span>
                  <h3>Love on Hire Teaser</h3>
                  <p>
                    Watch the official teaser for <strong>Love on Hire</strong>{" "}
                    and support the new series directly on YouTube.
                  </p>

                  <a
                    className="gj-news-button"
                    href="https://www.youtube.com/watch?v=F1l1mAvSmZo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="gj-news-button__icon">▶</span>
                    <span>Watch on YouTube</span>
                    <span className="gj-news-button__arrow">→</span>
                  </a>
                </div>
              </article>
            </Reveal>

            {/* Highlight 03 */}
            <Reveal>
              <article className="gj-news-card gj-news-card--text">
                <div className="gj-news-card-top">
                  <span>HIGHLIGHT N° 03</span>
                </div>

                <div className="gj-news-card-content gj-news-card-content--center gj-news-card-content--airy">
                  <span className="gj-news-card-kicker">COMMUNITY</span>
                  <h3>Fan Projects</h3>
                  <p>
                    Stay tuned — our very first fan project is getting ready to
                    launch soon. We’re excited to share more with you very soon,
                    so keep an eye on our channels for updates.
                  </p>

                  <span className="gj-news-button gj-news-button--static">
                    <span className="gj-news-button__icon">✦</span>
                    <span>Coming soon</span>
                  </span>
                </div>
              </article>
            </Reveal>

            {/* Highlight 04 */}
            <Reveal>
              <article
                className="gj-news-card gj-news-card--feature"
                style={{ backgroundImage: `url(${loveOnHireSchedule})` }}
              >
                <div className="gj-news-card-top">
                  <span>HIGHLIGHT N° 04</span>
                </div>

                <div className="gj-news-feature-overlay" />

                <div className="gj-news-feature-content">
                  <span className="gj-news-card-kicker">ON-AIR</span>
                  <h3>Love on Hire Schedule</h3>
                  <p>
                    See the current release dates for the series, including the
                    airing plan and uncut VIP schedule.
                  </p>

                  <a
                    className="gj-news-button"
                    href={loveOnHireSchedule}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span className="gj-news-button__icon">◌</span>
                    <span>Open full schedule</span>
                    <span className="gj-news-button__arrow">→</span>
                  </a>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
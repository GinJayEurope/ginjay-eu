import { useState } from "react";
import storyCover from "../assets/editorial/from-an-idea-to-a-home-cover.webp";
import EditorialArticle from "./EditorialArticle";

const categories = ["All", "Translations", "Blog", "Analysis"];

const editorialItems = [
  {
    id: 1,
    category: "Translations",
    title: "Translations coming soon",
    text: "Translated interviews, clips and important GinJay moments will be collected here step by step.",
    date: "Coming soon",
    status: "In preparation",
  },
  {
    id: 2,
    category: "Blog",
    title: "From an Idea to a Home",
    text: "How four Alkeys found one another, became friends, and began building a European community for Ginny and Jayna.",
    date: "13 August 2026",
    status: "Published",
    author: "GinJay Europe",
    image: storyCover,
    article: true,
  },
  {
    id: 3,
    category: "Analysis",
    title: "Analysis & Breakdowns",
    text: "Character analysis, scene breakdowns and deeper thoughts about GinJay projects will appear here.",
    date: "Coming soon",
    status: "In preparation",
  },
];

export default function Editorial() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? editorialItems
      : editorialItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="section editorial-section" id="editorial">
        <div className="section-heading">
          <span className="subtitle">EDITORIAL</span>

          <h2>Translations, Blog & Analysis</h2>

          <p>
            A space for translated interviews, clips, written blog posts and
            thoughtful analysis created by GinJay Europe.
          </p>
        </div>

        <div className="filter-buttons editorial-filters">
          {categories.map((category) => (
            <button
              type="button"
              key={category}
              className={activeCategory === category ? "filter active" : "filter"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div
          className={`editorial-grid${
            filteredItems.length === 1 ? " editorial-grid--single" : ""
          }`}
        >
          {filteredItems.map((item) => (
            <article
              className={`editorial-card${
                item.article ? " editorial-card--published" : ""
              }`}
              key={item.id}
            >
              {item.image && (
                <div className="editorial-card-cover">
                  <img
                    src={item.image}
                    alt="Illustrated cover of From an Idea to a Home"
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="editorial-card-cover-label">Our Story</span>
                </div>
              )}

              <div className="editorial-card-content">
                <span className="news-badge">{item.category}</span>

                <h3>{item.title}</h3>

                <p>{item.text}</p>

                {item.article && (
                  <p className="editorial-byline">By {item.author}</p>
                )}

                <div className="editorial-meta">
                  <span>{item.date}</span>
                  <span className={item.article ? "is-published" : ""}>
                    {item.status}
                  </span>
                </div>

                {item.article && (
                  <button
                    type="button"
                    className="news-premium-button editorial-read-button"
                    onClick={() => setSelectedArticle(item)}
                  >
                    Read our story <span aria-hidden="true">→</span>
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      {selectedArticle && (
        <EditorialArticle
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />
      )}
    </>
  );
}

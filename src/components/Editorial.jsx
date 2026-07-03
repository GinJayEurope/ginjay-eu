import { useState } from "react";

export default function Editorial() {
  const [activeCategory, setActiveCategory] = useState("All");

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
      title: "GinJay Europe Blog",
      text: "Behind-the-scenes thoughts, community updates and written fanbase posts will be published here.",
      date: "Coming soon",
      status: "In preparation",
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

  const filteredItems =
    activeCategory === "All"
      ? editorialItems
      : editorialItems.filter((item) => item.category === activeCategory);

  return (
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

      <div className="editorial-grid">
        {filteredItems.map((item) => (
          <article className="editorial-card" key={item.id}>
            <span className="news-badge">{item.category}</span>

            <h3>{item.title}</h3>

            <p>{item.text}</p>

            <div className="editorial-meta">
              <span>{item.date}</span>
              <span>{item.status}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
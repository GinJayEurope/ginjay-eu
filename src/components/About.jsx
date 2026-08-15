function AboutIcon({ type }) {
  const common = {
    className: "gj-about-premium__icon-svg",
    viewBox: "0 0 24 24",
    "aria-hidden": true,
  };

  if (type === "mission") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M12 20.2s-6.8-4.36-6.8-9.05A4.05 4.05 0 0 1 9.25 7a4.2 4.2 0 0 1 2.75 1.37A4.2 4.2 0 0 1 14.75 7a4.05 4.05 0 0 1 4.05 4.15c0 4.69-6.8 9.05-6.8 9.05Z" />
      </svg>
    );
  }

  if (type === "community") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="M8.25 11.2a2.85 2.85 0 1 0 0-5.7 2.85 2.85 0 0 0 0 5.7Z" />
        <path d="M15.8 11.2a2.85 2.85 0 1 0 0-5.7 2.85 2.85 0 0 0 0 5.7Z" />
        <path d="M3.9 18.1c.45-2.2 2.3-3.65 4.65-3.65 2.36 0 4.18 1.45 4.62 3.65" />
        <path d="M10.85 18.1c.35-1.94 2.03-3.2 4.1-3.2 2.07 0 3.68 1.26 4.03 3.2" />
      </svg>
    );
  }

  if (type === "creativity") {
    return (
      <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
        <path d="m12 3.9 1.95 4.45 4.8.42-3.63 3.11 1.1 4.68L12 14.9l-4.22 2.66 1.1-4.68-3.63-3.11 4.8-.42L12 3.9Z" />
      </svg>
    );
  }

  return (
    <svg {...common} fill="none" stroke="currentColor" strokeWidth="1.7">
      <path d="M6.6 18.35h10.8" />
      <path d="M7.7 18.35 8.85 8.4h6.3l1.15 9.95" />
      <path d="m8.85 8.4 3.15-3 3.15 3" />
      <circle cx="8.85" cy="8.1" r="1" fill="currentColor" stroke="none" />
      <circle cx="12" cy="5.2" r="1" fill="currentColor" stroke="none" />
      <circle cx="15.15" cy="8.1" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function About() {
  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      text: "Bringing European fans together and connecting them to the Alkey universe.",
    },
    {
      id: "community",
      title: "Our Community",
      text: "A welcoming space where everyone can feel at home, connect with others, and grow together as one community.",
    },
    {
      id: "creativity",
      title: "Creativity",
      text: "A place to awaken hidden talents through fanart, edits, and creative projects — let’s grow, create, and shine together.",
    },
    {
      id: "team",
      title: "GinJay Europe Team",
      members: ["BreE", "DaniCor", "Juste", "Klaudia"],
    },
  ];

  return (
    <section className="section gj-about-premium" id="about">
      <div className="gj-about-premium__inner">
        <div className="gj-about-premium__heading">
          <span className="gj-about-premium__eyebrow">ABOUT</span>

          <h2>Who We Are</h2>

          <div className="gj-about-premium__heading-divider" aria-hidden="true">
            <span />
          </div>

          <p>
            GinJay Europe is a welcoming fan community for everyone who shares
            the same goal: supporting Ginny &amp; Jayna with love, respect, and
            positivity. We want to create a safe space for like-minded fans to
            connect, celebrate, exchange ideas, and support each other through
            every moment.
          </p>
        </div>

        <div className="gj-about-premium__grid">
          {cards.map((card) => (
            <article
              key={card.id}
              className={`gj-about-premium__card gj-about-premium__card--${card.id}`}
            >
              <div className="gj-about-premium__card-icon">
                <AboutIcon type={card.id} />
              </div>

              <div className="gj-about-premium__card-content">
                <h3>{card.title}</h3>

                <div
                  className="gj-about-premium__mini-divider"
                  aria-hidden="true"
                >
                  <span />
                </div>

                {card.members ? (
                  <ul className="gj-about-premium__team-list">
                    {card.members.map((member) => (
                      <li key={member}>{member}</li>
                    ))}
                  </ul>
                ) : (
                  <p>{card.text}</p>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="gj-about-premium__bottom-divider" aria-hidden="true">
          <span />
        </div>
      </div>
    </section>
  );
}
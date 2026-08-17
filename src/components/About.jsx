import missionIcon from "../assets/about/mission.webp";
import communityIcon from "../assets/about/community.webp";
import creativityIcon from "../assets/about/creativity.webp";
import teamIcon from "../assets/about/team.webp";

export default function About() {
  const cards = [
    {
      id: "mission",
      title: "Our Mission",
      text: "Bringing European fans together and connecting them to the Alkey universe.",
      icon: missionIcon,
      iconAlt: "Mission emblem",
    },
    {
      id: "community",
      title: "Our Community",
      text: "A welcoming space where everyone can feel at home, connect with others, and grow together as one community.",
      icon: communityIcon,
      iconAlt: "Community emblem",
    },
    {
      id: "creativity",
      title: "Creativity",
      text: "A place to awaken hidden talents through fanart, edits, and creative projects — let’s grow, create, and shine together.",
      icon: creativityIcon,
      iconAlt: "Creativity emblem",
    },
    {
      id: "team",
      title: "GinJay Europe Team",
      members: ["BreE", "DaniCor", "Juste", "Klaudia"],
      icon: teamIcon,
      iconAlt: "Team emblem",
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
                <img
                  src={card.icon}
                  alt={card.iconAlt}
                  className="gj-about-premium__icon-image"
                  loading="lazy"
                  decoding="async"
                />
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
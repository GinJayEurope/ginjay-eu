import { useState } from "react";
import ginnyImage from "../assets/artists/Ginny.jpg";
import jaynaImage from "../assets/artists/Jayna.jpg";

function SocialIcon({ network }) {
  const commonProps = {
    "aria-hidden": true,
    className: "artist-button-icon",
    viewBox: "0 0 24 24",
  };

  if (network === "instagram") {
    return (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3.25" y="3.25" width="17.5" height="17.5" rx="5" />
        <circle cx="12" cy="12" r="4.1" />
        <circle cx="17.75" cy="6.35" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }

  if (network === "tiktok") {
    return (
      <svg {...commonProps} fill="currentColor">
        <path d="M14.2 3.2c.45 2.5 1.85 4 4.35 4.16v3.08a8.1 8.1 0 0 1-4.3-1.3v6.05a5.55 5.55 0 1 1-4.8-5.5v3.16a2.5 2.5 0 1 0 1.72 2.37V3.2h3.03Z" />
      </svg>
    );
  }

  if (network === "weibo") {
    return (
      <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="1.65">
        <path d="M5.1 14.4c1.05-3.23 5.4-6.15 9.1-4.9 3.12 1.05 3.48 4.7.82 6.8-2.93 2.32-8.52 2.18-10.12-.16-.38-.55-.28-1.18.2-1.74Z" />
        <path d="M8.35 14.8c.35-1.42 2.16-2.4 3.72-1.83 1.33.49 1.42 1.98.3 2.8-1.28.95-3.38.72-4.02-.33-.12-.2-.12-.41 0-.64Z" />
        <path d="M15.05 7.4c2.5-.62 4.75 1.15 4.48 3.61M15.7 4.65c4.2-.8 7.38 2.08 6.68 6.05" />
      </svg>
    );
  }

  return (
    <svg {...commonProps} fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M5 4.5 19 19.5M19 4.5 5 19.5" />
    </svg>
  );
}

export default function Artists() {
  const [openArtistIds, setOpenArtistIds] = useState([]);

  const northStarYoutube = "https://www.youtube.com/@northstar_ent";

  function toggleArtist(artistId) {
    setOpenArtistIds((currentOpenIds) =>
      currentOpenIds.includes(artistId)
        ? currentOpenIds.filter((id) => id !== artistId)
        : [...currentOpenIds, artistId]
    );
  }

  const artists = [
    {
      id: 1,
      stageName: "Ginny",
      fullName: '"Ginny" Natnicha Pratipnatsiri',
      nativeName: "จินนี่ ณัฐณิชา ประทีปนาฏศิริ",
      nationality: "Thai",
      born: "December 17, 2000",
      age: "25",
      height: "1.63 m",
      agency: "North Star Entertainment",
      knownFor: "Poisonous Love",
      character: "Prem",
      image: ginnyImage,
      bio: "Known for her role as Prem in Poisonous Love, Ginny is one half of the GinJay pairing and is signed under North Star Entertainment.",
      extraInfo: [
        ["Favorite Color", "Pastel purple"],
        ["Favorite Item Colors", "White, black, beige, earth tones"],
        ["Favorite Food", "Egg dishes"],
        ["Favorite Animal", "Alpaca"],
        ["Favorite Pets", "Dogs, cats"],
        ["Favorite Flower", "White rose"],
        ["Favorite Fruit", "Strawberry"],
        ["Allergic To", "Shrimp"],
        ["Freetime", "Gym, reading, boxing"],
      ],
      socials: {
        x: "https://x.com/ginnynatnicha",
        instagram: "https://www.instagram.com/ginnynatnicha/",
        tiktok: "https://www.tiktok.com/@ginnynatnicha?lang=de-DE",
        weibo: "https://weibo.com/u/8384062699",
      },
    },
    {
      id: 2,
      stageName: "Jayna",
      fullName: '"Jayna" Angelina Stevens',
      nativeName: "เจน่า แองเจลิน่า สตีเวนส์",
      nationality: "Thai",
      born: "February 17, 2006",
      age: "20",
      height: "1.70 m",
      agency: "North Star Entertainment",
      knownFor: "Poisonous Love",
      character: "Pat",
      image: jaynaImage,
      bio: "Known for her role as Pat in Poisonous Love, Jayna is one half of the GinJay pairing and is signed under North Star Entertainment.",
      extraInfo: [
        ["Favorite Color", "Yellow"],
        ["Favorite Item Colors", "White, black, grey"],
        ["Favorite Food", "Somtam"],
        ["Favorite Animal", "Monkey"],
        ["Favorite Pet", "Dog"],
        ["Favorite Flower", "Pastel colored flowers"],
        ["Favorite Fruit", "Pear, mango, cantaloupe, rose apple"],
        ["Allergic To", "breakup rumors"],
        ["Freetime", "Sleeping"],
      ],
      socials: {
        x: "https://x.com/j_jayyna",
        instagram: "https://www.instagram.com/aangelinaa.ss/",
        tiktok: "https://www.tiktok.com/@aangelinaa.ss?lang=de-DE",
        weibo: "https://weibo.com/u/8228051635",
      },
    },
  ];

  return (
    <section className="section artists-section" id="artists">
      <div className="section-heading">
        <span className="subtitle">ARTISTS</span>

        <h2>Ginny & Jayna</h2>

        <p>
          Get to know the artists we support — with profile details, official
          social media links and their work with North Star Entertainment.
        </p>
      </div>

      <div className="artists-stage">
        <svg
          className="artist-connection"
          viewBox="0 0 240 560"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            className="artist-connection-glow"
            d="M0 138 84 190 120 160 156 190 240 138"
          />
          <path
            className="artist-connection-line"
            d="M0 138 84 190 120 160 156 190 240 138"
          />
          <path
            className="artist-connection-line artist-connection-stem"
            d="M120 160V540"
          />
          <circle className="artist-connection-orbit" cx="84" cy="190" r="3" />
          <circle className="artist-connection-orbit" cx="156" cy="190" r="3" />
          <path
            className="artist-connection-star"
            d="m120 143 4.5 12.5L137 160l-12.5 4.5L120 177l-4.5-12.5L103 160l12.5-4.5Z"
          />
        </svg>

        <div className="artists-grid">
          {artists.map((artist) => {
            const isOpen = openArtistIds.includes(artist.id);
            const artistSlug = artist.stageName.toLowerCase();

            return (
              <article
                className={`artist-card artist-card--${artistSlug}`}
                key={artist.id}
              >
              <div className="artist-portrait-frame">
                <img
                  src={artist.image}
                  alt={artist.stageName}
                  className="artist-image"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="artist-content">
                <span className="artist-role">Actress</span>

                <h3>{artist.stageName}</h3>
                <p className="artist-fullname">{artist.fullName}</p>

                <p className="artist-bio">{artist.bio}</p>

                <div className="artist-info-grid">
                  <div>
                    <strong>Native Name</strong>
                    <span>{artist.nativeName}</span>
                  </div>

                  <div>
                    <strong>Nationality</strong>
                    <span>{artist.nationality}</span>
                  </div>

                  <div>
                    <strong>Born</strong>
                    <span>{artist.born}</span>
                  </div>

                  <div>
                    <strong>Age</strong>
                    <span>{artist.age}</span>
                  </div>

                  <div>
                    <strong>Height</strong>
                    <span>{artist.height}</span>
                  </div>

                  <div>
                    <strong>Agency</strong>
                    <span>{artist.agency}</span>
                  </div>

                  <div>
                    <strong>Known For</strong>
                    <span>{artist.knownFor}</span>
                  </div>

                  <div>
                    <strong>Character</strong>
                    <span>{artist.character}</span>
                  </div>

                  {isOpen &&
                    artist.extraInfo.map(([label, value]) => (
                      <div key={label}>
                        <strong>{label}</strong>
                        <span>{value}</span>
                      </div>
                    ))}
                </div>

                <button
                  type="button"
                  className="artist-read-more-button"
                  onClick={() => toggleArtist(artist.id)}
                  aria-expanded={isOpen}
                >
                  <span className="artist-button-shine" aria-hidden="true">
                    ✦
                  </span>
                  <span>{isOpen ? "Show less" : "Read more"}</span>
                  <span className="artist-button-arrow" aria-hidden="true">
                    {isOpen ? "↑" : "↓"}
                  </span>
                </button>

                <div className="artist-socials">
                  {Object.entries(artist.socials).map(([network, link]) => (
                    <a
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="artist-social-link"
                      key={network}
                    >
                      <SocialIcon network={network} />
                      <span>
                        {network === "x"
                          ? "X"
                          : network[0].toUpperCase() + network.slice(1)}
                      </span>
                    </a>
                  ))}
                </div>

                <a
                  href={northStarYoutube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="artist-watch-button"
                >
                  <span className="artist-watch-icon" aria-hidden="true">
                    ▶
                  </span>
                  <span>Watch Poisonous Love on North Star</span>
                  <span className="artist-button-arrow" aria-hidden="true">→</span>
                </a>
              </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

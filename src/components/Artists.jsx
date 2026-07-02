import ginnyImage from "../assets/artists/ginny.jpg";
import jaynaImage from "../assets/artists/jayna.jpg";

export default function Artists() {
  const northStarYoutube = "https://www.youtube.com/@northstar_ent";

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

      <div className="artists-grid">
        {artists.map((artist) => (
          <article className="artist-card" key={artist.id}>
            <img
              src={artist.image}
              alt={artist.stageName}
              className="artist-image"
            />

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

                {artist.alsoKnownAs && (
                  <div>
                    <strong>Also Known As</strong>
                    <span>{artist.alsoKnownAs}</span>
                  </div>
                )}
              </div>

              <div className="artist-socials">
                <a href={artist.socials.x} target="_blank" rel="noreferrer">
                  X
                </a>

                <a
                  href={artist.socials.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                </a>

                <a
                  href={artist.socials.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  TikTok
                </a>

                <a href={artist.socials.weibo} target="_blank" rel="noreferrer">
                  Weibo
                </a>
              </div>

              <a
                href={northStarYoutube}
                target="_blank"
                rel="noreferrer"
                className="artist-watch-button"
              >
                Watch Poisonous Love on North Star →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
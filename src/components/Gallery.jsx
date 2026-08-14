import { useCallback, useEffect, useMemo, useState } from "react";
import { gallery } from "../data/gallery";

const CATEGORIES = ["All", "Poster", "Artworks", "Fanedits", "Gifs"];
const FEATURED_ARTWORK_ID = 95;

const galleryFullImages = import.meta.glob(
  "../assets/gallery/optimized/**/*.webp",
  { eager: true, import: "default" },
);
const galleryPreviews = import.meta.glob(
  "../assets/gallery/previews/**/*.webp",
  { eager: true, import: "default" },
);

const previewByOriginalUrl = new Map();

Object.entries(galleryFullImages).forEach(
  ([path, originalUrl]) => {
    const relativePath = path
      .replace("../assets/gallery/", "")
      .replace("optimized/", "")
      .replace(/\.(?:jpg|jpeg|png|gif)$/i, ".webp");
    const previewPath = `../assets/gallery/previews/${relativePath}`;
    const previewUrl = galleryPreviews[previewPath];

    if (previewUrl) previewByOriginalUrl.set(originalUrl, previewUrl);
  },
);

function getGalleryPreview(item) {
  return previewByOriginalUrl.get(item.image) || item.image;
}

function getGalleryCardClassName(item, index) {
  const classes = ["card", "gallery-card"];

  if (item.category === "Poster") classes.push("gallery-card--poster");
  if (item.mediaType === "video") classes.push("gallery-card--fanedit");
  if (item.mediaType === "gif") classes.push("gif-card", "gallery-card--memory");

  if (item.category !== "Poster" && item.mediaType === "image") {
    const exhibitionSizes = ["tall", "wide", "standard", "standard", "wide", "tall"];
    classes.push(`gallery-card--${exhibitionSizes[index % exhibitionSizes.length]}`);
  }

  return classes.join(" ");
}

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="m9.2 7.1 7.2 4.9-7.2 4.9V7.1Z" fill="currentColor" />
    </svg>
  );
}

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [visibleCount, setVisibleCount] = useState(6);

  const featuredArtwork =
    gallery.find((item) => Number(item.id) === FEATURED_ARTWORK_ID) || gallery[0];

  const filteredGallery = useMemo(() => {
    const search = searchTerm.trim().toLowerCase();

    return gallery.filter((item) => {
      const matchesCategory =
        activeCategory === "All" || item.category === activeCategory;

      const matchesSearch =
        item.title?.toLowerCase().includes(search) ||
        item.text?.toLowerCase().includes(search) ||
        item.category?.toLowerCase().includes(search) ||
        item.artist?.toLowerCase().includes(search) ||
        item.date?.toLowerCase().includes(search) ||
        item.tags?.some((tag) => tag.toLowerCase().includes(search));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchTerm]);

  const visibleGallery = filteredGallery.slice(0, visibleCount);

  const selectedIndex = selectedImage
    ? filteredGallery.findIndex((item) => item.id === selectedImage.id)
    : -1;

  function openArtwork(item) {
    setSelectedImage(item);
  }

  const closeArtwork = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const showPrevious = useCallback(() => {
    if (!filteredGallery.length || selectedIndex === -1) return;
    const previousIndex =
      selectedIndex === 0 ? filteredGallery.length - 1 : selectedIndex - 1;
    setSelectedImage(filteredGallery[previousIndex]);
  }, [filteredGallery, selectedIndex]);

  const showNext = useCallback(() => {
    if (!filteredGallery.length || selectedIndex === -1) return;
    const nextIndex =
      selectedIndex === filteredGallery.length - 1 ? 0 : selectedIndex + 1;
    setSelectedImage(filteredGallery[nextIndex]);
  }, [filteredGallery, selectedIndex]);

  function handleArtworkKeyDown(event, item) {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    openArtwork(item);
  }

  function getViewLabel(item) {
    if (item.mediaType === "video") return "View fanedit";
    if (item.mediaType === "gif") return "View gif";
    return "View artwork";
  }

  useEffect(() => {
    if (!selectedImage) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") closeArtwork();
      if (event.key === "ArrowLeft") showPrevious();
      if (event.key === "ArrowRight") showNext();
    }

    const previousOverflow = document.body.style.overflow;

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [closeArtwork, selectedImage, showNext, showPrevious]);

  return (
    <>
      <section className="section" id="gallery">
        <div className="section-heading">
          <span className="subtitle">GALLERY</span>

          <h2>Featured Artwork</h2>

          <p>
            A collection of illustrations, fanart, posters, edits and gifs
            created by the GinJay Europe community.
          </p>

        </div>

        {featuredArtwork && (
          <div
            className="gallery-feature"
            role="button"
            tabIndex={0}
            aria-label={`View featured artwork: ${featuredArtwork.title}`}
            onClick={() => openArtwork(featuredArtwork)}
            onKeyDown={(event) =>
              handleArtworkKeyDown(event, featuredArtwork)
            }
          >
            <div className="gallery-feature-image-wrap">
              <img
                src={getGalleryPreview(featuredArtwork)}
                alt={featuredArtwork.title}
                className="gallery-feature-image"
                loading="lazy"
                decoding="async"
              />
            </div>

            <div className="gallery-feature-content">
              <span className="gallery-feature-badge">
                Featured • {featuredArtwork.category}
              </span>

              <h3>{featuredArtwork.title}</h3>

              <p>{featuredArtwork.text}</p>

              <div className="gallery-feature-meta">
                <span>{featuredArtwork.artist}</span>
                <span>{featuredArtwork.date}</span>
              </div>

              <div className="gallery-tags">
                {featuredArtwork.tags.map((tag) => (
                  <span key={tag} className="gallery-tag">
                    {tag}
                  </span>
                ))}
              </div>

              <span className="gallery-feature-button" aria-hidden="true">
                <span>View artwork</span>
                <span>→</span>
              </span>
            </div>
          </div>
        )}

        <div className="gallery-tools">
          <label className="gallery-search-wrap">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <circle cx="10.75" cy="10.75" r="6.25" />
              <path d="m15.5 15.5 4 4" />
            </svg>

            <span className="sr-only">Search gallery</span>

            <input
              type="text"
              className="gallery-search"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(event) => {
                setSearchTerm(event.target.value);
                setVisibleCount(6);
              }}
            />
          </label>

          <p className="gif-collection-notice">
            You can find and download our complete GIF collection{" "}
            <a
              href="https://ginjayeu.tumblr.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            .
          </p>

          <div className="filter-buttons">
            {CATEGORIES.map((category) => (
              <button
                type="button"
                key={category}
                className={activeCategory === category ? "filter active" : "filter"}
                aria-pressed={activeCategory === category}
                onClick={() => {
                  setActiveCategory(category);
                  setVisibleCount(6);
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {visibleGallery.length > 0 ? (
          <div className="cards gallery-exhibition-grid">
            {visibleGallery.map((item, index) => (
              <article
                className={getGalleryCardClassName(item, index)}
                key={item.id}
                role="button"
                tabIndex={0}
                aria-label={`${getViewLabel(item)}: ${item.title}`}
                onClick={() => openArtwork(item)}
                onKeyDown={(event) => handleArtworkKeyDown(event, item)}
              >
                <div className="gallery-image-wrap">
                  <img
                    src={getGalleryPreview(item)}
                    alt={item.title}
                    className="gallery-image"
                    loading="lazy"
                    decoding="async"
                  />

                  {item.mediaType === "gif" && (
                    <span className="gif-badge gallery-memory-badge">
                      <span aria-hidden="true" />
                      GIF
                    </span>
                  )}

                  {item.mediaType === "video" && (
                    <span className="gallery-play-badge">
                      <PlayIcon />
                      <span className="sr-only">Play fanedit</span>
                    </span>
                  )}

                  <div className="gallery-overlay">
                    <div className="gallery-overlay-text">
                      <span className="gallery-overlay-category">
                        {item.category}
                      </span>

                      <h4>{item.title}</h4>

                      <div className="gallery-overlay-meta">
                        <span>{item.artist}</span>
                        <span aria-hidden="true">•</span>
                        <span>{item.date}</span>
                      </div>
                    </div>

                    <span className="gallery-overlay-button" aria-hidden="true">
                      →
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <h3>No entries found yet.</h3>
            <p>This category will be filled step by step with community creations.</p>
          </div>
        )}

        {visibleCount < filteredGallery.length && (
          <div className="load-more-wrap">
            <button
              type="button"
              className="button secondary"
              onClick={() => setVisibleCount((prev) => prev + 6)}
            >
              Load More
            </button>
          </div>
        )}
      </section>

      {selectedImage && (
        <div
          className="lightbox lightbox--gallery-exhibition"
          role="dialog"
          aria-modal="true"
          aria-labelledby="gallery-lightbox-title"
          onClick={closeArtwork}
        >
          <div
            className="gallery-lightbox-backdrop"
            style={{ backgroundImage: `url("${selectedImage.image}")` }}
            aria-hidden="true"
          />

          <button
            type="button"
            className="lightbox-close"
            aria-label="Close artwork"
            onClick={closeArtwork}
          >
            ×
          </button>

          <div className="lightbox-counter">
            <strong>{String(selectedIndex + 1).padStart(2, "0")}</strong>
            <span>/ {String(filteredGallery.length).padStart(2, "0")}</span>
          </div>

          {filteredGallery.length > 1 && (
            <>
              <button
                type="button"
                className="lightbox-nav lightbox-prev"
                aria-label="Previous artwork"
                onClick={(event) => {
                  event.stopPropagation();
                  showPrevious();
                }}
              >
                ‹
              </button>

              <button
                type="button"
                className="lightbox-nav lightbox-next"
                aria-label="Next artwork"
                onClick={(event) => {
                  event.stopPropagation();
                  showNext();
                }}
              >
                ›
              </button>
            </>
          )}

          <div
            className="lightbox-card gallery-exhibition-lightbox"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="gallery-lightbox-media-stage">
              {selectedImage.mediaType === "video" ? (
                <video
                  key={selectedImage.id}
                  src={selectedImage.video}
                  poster={selectedImage.image}
                  className="lightbox-image gallery-lightbox-artwork"
                  controls
                  autoPlay
                  muted
                  playsInline
                />
              ) : (
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="lightbox-image gallery-lightbox-artwork"
                />
              )}
            </div>

            <div className="lightbox-info">
              <span className="gallery-lightbox-category">
                {selectedImage.category}
              </span>

              <h3 id="gallery-lightbox-title">{selectedImage.title}</h3>

              <p>{selectedImage.text}</p>

              {selectedImage.mediaType === "gif" && (
                <a
                  href={selectedImage.download || selectedImage.image}
                  download
                  className="gif-download-button lightbox-download"
                >
                  Download Gif
                </a>
              )}

              <div className="gallery-meta">
                <div className="gallery-meta-card">
                  <strong>Artist</strong>
                  <span>{selectedImage.artist}</span>
                </div>

                <div className="gallery-meta-card">
                  <strong>Date</strong>
                  <span>{selectedImage.date}</span>
                </div>
              </div>

              <div className="gallery-tags">
                {selectedImage.tags.map((tag) => (
                  <span key={tag} className="gallery-tag">
                    {tag}
                  </span>
                ))}
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

import { useState } from "react";
import "./ProjectCarousel.css";

export default function ProjectCarousel({ images, projectName }) {
  const [start, setStart] = useState(0);
  const [openImg, setOpenImg] = useState(null);
  const visibleCount = 3;
  const canGoLeft = start > 0;
  const canGoRight = start + visibleCount < images.length;

  const goLeft = () => canGoLeft && setStart((s) => s - 1);
  const goRight = () => canGoRight && setStart((s) => s + 1);

  const visible = images.slice(start, start + visibleCount);

  return (
    <>
      <div className="carousel-wrapper">
        <button
          className="carousel-arrow"
          onClick={goLeft}
          disabled={!canGoLeft}
          aria-label="Previous screenshots"
        >
          ←
        </button>

        <div className="carousel-track">
          {visible.map((img, i) => (
            <button
              className="carousel-card"
              key={start + i}
              onClick={() => setOpenImg(img)}
              aria-label={`Open ${projectName} screenshot ${start + i + 1}`}
            >
              <img
                src={img}
                alt={`${projectName} screenshot ${start + i + 1}`}
                className="carousel-img"
              />
            </button>
          ))}
        </div>

        <button
          className="carousel-arrow"
          onClick={goRight}
          disabled={!canGoRight}
          aria-label="Next screenshots"
        >
          →
        </button>
      </div>

      {openImg && (
        <div className="lightbox-overlay" onClick={() => setOpenImg(null)}>
          <button
            className="lightbox-close"
            onClick={() => setOpenImg(null)}
            aria-label="Close"
          >
            ✕
          </button>
          <img
            src={openImg}
            alt={`${projectName} screenshot full size`}
            className="lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
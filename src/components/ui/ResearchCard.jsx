import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { DocumentIcon, ExternalIcon, DownloadIcon, CloseIcon } from "../icons/Icons";

/**
 * ResearchCard — visual card for a research publication.
 * Same grid-card pattern as ProjectCard, per design spec.
 */

function Lightbox({ src, alt, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  // Prevent body scroll while open
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  return createPortal(
    <div
      className="thumb-lightbox is-open"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
    >
      <button
        className="thumb-lightbox-close"
        onClick={onClose}
        aria-label="Close preview"
      >
        <CloseIcon />
      </button>
      <img
        className="thumb-lightbox-img"
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
      />
    </div>,
    document.body
  );
}

export function ResearchCard({ paper }) {
  const {
    title, subtitle, description, tags, venue,
    date, pagecount, color, link, thumbnail, downloadUrl,
  } = paper;

  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <article className="research-card">
        <div
          className={`card-visual ${thumbnail ? "card-visual--has-thumb" : ""}`}
          onClick={() => thumbnail && setLightboxOpen(true)}
        >
          {thumbnail ? (
            <img
              className="card-visual-thumb"
              src={thumbnail}
              alt={`First page of "${title}"`}
              loading="lazy"
            />
          ) : (
            <>
              <div
                className="card-visual-bg"
                style={{
                  background: `radial-gradient(circle at 50% 50%, ${color}, transparent 70%)`,
                }}
              />
              <div
                className="card-visual-icon"
                style={{ borderColor: color, color: color }}
                aria-hidden="true"
              >
                {title[0]}
              </div>
            </>
          )}
        </div>

        <div className="card-body">
          <span className="card-link card-link--venue">
              <DocumentIcon /> {venue}
            </span>
          <div className="card-meta">
            <span>{date}</span>
            <span aria-hidden="true">·</span>
            <span>{pagecount}</span>
          </div>
          <h3 className="card-title">{title}</h3>
          <div className="card-subtitle">{subtitle}</div>
          <p className="card-description">{description}</p>
          <div className="card-tags">
            {tags.map((t) => (
              <span key={t} className="pill">{t}</span>
            ))}
          </div>
          <div className="card-links">
            <a href={link} className="card-link" target="_blank" rel="noopener noreferrer">
              Read Paper <ExternalIcon />
            </a>
            {downloadUrl && (
              <a href={downloadUrl} className="card-link card-link--download" download aria-label={`Download ${title} PDF`}>
                <DownloadIcon /> Download
              </a>
            )}
          </div>
        </div>
      </article>

      {thumbnail && lightboxOpen && (
        <Lightbox
          src={thumbnail}
          alt={`Full view — ${title}`}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </>
  );
}
import { profile } from "../../data/profile";

/**
 * Footer — bottom panel spanning full width.
 *
 * @prop {Function} onScrollTop — scrolls main area back to top
 */
export function Footer({ onScrollTop }) {
  const year = new Date().getFullYear();

  return (
    <footer className="footer panel" role="contentinfo">
      <span>&copy; {year} {profile.name}</span>
      <span className="footer-sep">·</span>
      <span>Crafted with care</span>
      <span className="footer-sep">·</span>
      <a
        href="#top"
        onClick={(e) => {
          e.preventDefault();
          onScrollTop?.();
        }}
      >
        Back to top ↑
      </a>
    </footer>
  );
}

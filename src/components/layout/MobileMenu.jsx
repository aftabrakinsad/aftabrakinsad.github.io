import { navigation } from "../../data/navigation";
import { SunIcon, MoonIcon, CloseIcon } from "../icons/Icons";

/**
 * MobileMenu — fullscreen overlay navigation for small viewports.
 */
export function MobileMenu({ isOpen, activeId, onNavigate, onClose, theme, onToggleTheme }) {
  const handleNav = (id) => {
    onNavigate(id);
    onClose();
  };

  const handleThemeToggle = () => {
    onToggleTheme();
  };

  return (
    <div
      className={`mobile-menu ${isOpen ? "is-open" : ""}`}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile menu"
      aria-hidden={!isOpen}
    >
      <button
        className="mobile-close"
        onClick={onClose}
        aria-label="Close menu"
      >
        <CloseIcon />
      </button>

      {navigation.map((item) => (
        <button
          key={item.id}
          className={`nav-btn ${activeId === item.id ? "is-active" : ""}`}
          onClick={() => handleNav(item.id)}
        >
          {item.label}
        </button>
      ))}

      <button
        className="theme-btn"
        style={{ marginTop: 16 }}
        onClick={handleThemeToggle}
        aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>
    </div>
  );
}

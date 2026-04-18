import { profile } from "../../data/profile";
import { navigation } from "../../data/navigation";
import { SunIcon, MoonIcon, MenuIcon } from "../icons/Icons";

/**
 * Header — top panel with logo, main nav, and theme toggle.
 * Clicking nav items scrolls the main area to that section.
 */
export function Header({ activeId, onNavigate, theme, onToggleTheme, onOpenMobileMenu }) {
  return (
    <header className="header panel" role="banner">
      <div className="header-logo">
        <span className="accent">{profile.logo[0]}.</span>
        {profile.logo[1] || ""}
        <span className="accent">.{profile.logo[2]}</span>
      </div>

      <nav className="header-nav" role="navigation" aria-label="Main navigation">
        {navigation.map((item) => (
          <button
            key={item.id}
            className={`nav-btn ${activeId === item.id ? "is-active" : ""}`}
            onClick={() => onNavigate(item.id)}
            aria-current={activeId === item.id ? "page" : undefined}
          >
            {item.label}
          </button>
        ))}
        <button
          className="theme-btn"
          onClick={onToggleTheme}
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </button>
      </nav>

      <button
        className="mobile-toggle"
        onClick={onOpenMobileMenu}
        aria-label="Open menu"
      >
        <MenuIcon />
      </button>
    </header>
  );
}

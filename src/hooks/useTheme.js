import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";
const DEFAULT_THEME = "dark";

/**
 * useTheme — manages light/dark theme with localStorage persistence.
 * Applies `data-theme` on <html> for global CSS variable switching.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return DEFAULT_THEME;
    try {
      return window.localStorage.getItem(STORAGE_KEY) || DEFAULT_THEME;
    } catch {
      return DEFAULT_THEME;
    }
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try {
      window.localStorage.setItem(STORAGE_KEY, theme);
    } catch {
      /* ignore storage failures */
    }
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((t) => (t === "dark" ? "light" : "dark"));
  }, []);

  return { theme, toggleTheme };
}

import { useEffect, useState } from "react";

const INTERACTIVE_SELECTOR =
  "a, button, .project-card, .research-card, .stat-card, .social-btn, .nav-btn, .theme-btn, .submit-btn, .skill-chip";

/**
 * useCursorHover — tracks whether the cursor is over an interactive element
 * globally, so the custom cursor can expand/morph.
 */
export function useCursorHover() {
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const onOver = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) setIsHovering(true);
    };
    const onOut = (e) => {
      if (e.target.closest?.(INTERACTIVE_SELECTOR)) setIsHovering(false);
    };

    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    return () => {
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
    };
  }, []);

  return isHovering;
}

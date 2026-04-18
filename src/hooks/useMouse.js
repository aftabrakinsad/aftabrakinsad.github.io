import { useEffect, useState } from "react";

/**
 * useMouse — tracks the cursor position globally.
 * Used by the custom cursor + ambient glow.
 */
export function useMouse() {
  const [position, setPosition] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const handler = (e) => setPosition({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return position;
}

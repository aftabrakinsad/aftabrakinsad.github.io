import { useEffect, useState } from "react";

/**
 * useActiveSection — tracks which section is currently in view within
 * a scrollable container. Used to highlight the active nav button.
 *
 * @param {React.RefObject<HTMLElement>} containerRef — the scroll container
 * @param {Array<{id: string}>} items — ordered list of sections
 * @param {number} offset — px offset from top considered "active"
 */
export function useActiveSection(containerRef, items, offset = 120) {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handler = () => {
      const containerTop = container.getBoundingClientRect().top;
      let current = items[0]?.id;

      for (const item of items) {
        const el = document.getElementById(item.id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top - containerTop <= offset) {
          current = item.id;
        }
      }

      setActiveId(current);
    };

    handler(); // Initial call
    container.addEventListener("scroll", handler, { passive: true });
    return () => container.removeEventListener("scroll", handler);
  }, [containerRef, items, offset]);

  return activeId;
}

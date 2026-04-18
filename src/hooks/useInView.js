import { useEffect, useRef, useState } from "react";

/**
 * useInView — returns a ref + visibility flag.
 * Disconnects once the element has been seen, for performance.
 *
 * @param {number} threshold — 0..1 intersection ratio required
 * @param {Element} [root]   — optional custom scroll root (the main area)
 */
export function useInView(threshold = 0.15, root = null) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, root }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, root]);

  return [ref, isVisible];
}

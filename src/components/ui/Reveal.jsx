import { useInView } from "../../hooks/useInView";

/**
 * Reveal — wraps children with a scroll-triggered fade+slide reveal.
 *
 * @prop {string} delay — one of "reveal-d1" ... "reveal-d6"
 * @prop {string} className — extra classes
 * @prop {Element} containerRoot — optional scroll root (defaults to viewport)
 */
export function Reveal({ children, delay = "", className = "", containerRoot = null }) {
  const [ref, isVisible] = useInView(0.1, containerRoot);
  return (
    <div
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${delay} ${className}`.trim()}
    >
      {children}
    </div>
  );
}

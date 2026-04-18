import { useMouse } from "../../hooks/useMouse";
import { useCursorHover } from "../../hooks/useCursorHover";

/**
 * CustomCursor — renders an ambient glow and a morphing dot
 * that follows the cursor. Disabled automatically on touch devices via CSS.
 */
export function CustomCursor() {
  const mouse = useMouse();
  const isHovering = useCursorHover();

  return (
    <>
      <div
        className="cursor-glow"
        style={{ left: mouse.x, top: mouse.y }}
        aria-hidden="true"
      />
      <div
        className={`cursor-dot ${isHovering ? "is-hovering" : ""}`}
        style={{ left: mouse.x, top: mouse.y }}
        aria-hidden="true"
      />
    </>
  );
}

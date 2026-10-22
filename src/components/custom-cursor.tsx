import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import "./custom-cursor.css";

export function CustomCursor() {
  const reduced = useReducedMotion();
  const [hovering, setHovering] = useState(false);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);
  const ringX = useSpring(-100, { stiffness: 450, damping: 32, mass: 0.2 });
  const ringY = useSpring(-100, { stiffness: 450, damping: 32, mass: 0.2 });
  const raf = useRef<number | null>(null);
  const target = useRef({ x: -100, y: -100 });

  useEffect(() => {
    if (reduced || !window.matchMedia("(pointer: fine)").matches) return;
    const move = (event: PointerEvent) => {
      const targetElement = event.target as HTMLElement | null;
      setHovering(Boolean(targetElement?.closest("a, button, [role='button']")));
      target.current = { x: event.clientX, y: event.clientY };
      if (raf.current === null) {
        raf.current = requestAnimationFrame(() => {
          dotX.set(target.current.x); dotY.set(target.current.y);
          ringX.set(target.current.x); ringY.set(target.current.y);
          raf.current = null;
        });
      }
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => { window.removeEventListener("pointermove", move); if (raf.current !== null) cancelAnimationFrame(raf.current); };
  }, [dotX, dotY, ringX, ringY, reduced]);

  if (reduced) return null;
  return <div className="custom-cursor" aria-hidden="true">
    <motion.span className="custom-cursor__dot" style={{ x: dotX, y: dotY }} />
    <motion.span className="custom-cursor__ring" style={{ x: ringX, y: ringY, scale: hovering ? 1.45 : 1, opacity: hovering ? 0.85 : 0.55 }} />
  </div>;
}

export default CustomCursor;

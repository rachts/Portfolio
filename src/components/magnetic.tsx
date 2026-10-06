import { motion, useMotionValue } from "framer-motion";
import type { PointerEvent, ReactNode } from "react";
import { MOTION_EASE, MOTION_DURATION } from "../lib/motion";

type MagneticProps = { children: ReactNode; className?: string };

export function Magnetic({ children, className }: MagneticProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reset = () => {
    x.set(0); y.set(0);
    void x.stop(); void y.stop();
  };
  const move = (event: PointerEvent<HTMLDivElement>) => {
    if (typeof window === "undefined" || !window.matchMedia("(pointer: fine)").matches) return;
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - (rect.left + rect.width / 2);
    const dy = event.clientY - (rect.top + rect.height / 2);
    if (Math.hypot(dx, dy) > 120) return reset();
    x.set(Math.max(-8, Math.min(8, dx * 0.16)));
    y.set(Math.max(-8, Math.min(8, dy * 0.16)));
  };
  return <motion.div className={className} style={{ x, y }} onPointerMove={move} onPointerLeave={reset} transition={{ duration: MOTION_DURATION.fast, ease: MOTION_EASE }}>{children}</motion.div>;
}

export default Magnetic;

import React, { type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { borderVariants, MOTION_DURATION, MOTION_EASE, MOTION_STAGGER, REVEAL_VIEWPORT, revealVariants, staggerVariants } from "../lib/motion";

export function Reveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={reduced ? undefined : revealVariants} initial={reduced ? false : "hidden"} whileInView={reduced ? undefined : "visible"} viewport={REVEAL_VIEWPORT}>{children}</motion.div>;
}

export function RevealGroup({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} variants={reduced ? undefined : staggerVariants} initial={reduced ? false : "hidden"} whileInView={reduced ? undefined : "visible"} viewport={REVEAL_VIEWPORT}>{children}</motion.div>;
}

export function PanelReveal({ children, className = "" }: { children: ReactNode; className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div className={`relative overflow-hidden ${className}`} initial={reduced ? false : "hidden"} whileInView={reduced ? undefined : "visible"} viewport={REVEAL_VIEWPORT}>
    <motion.span aria-hidden className="absolute inset-x-0 top-0 h-px origin-left bg-black z-10" variants={reduced ? undefined : borderVariants} />
    <motion.div variants={reduced ? undefined : revealVariants} transition={reduced ? undefined : { delay: MOTION_DURATION.fast, duration: MOTION_DURATION.normal, ease: MOTION_EASE }}>{children}</motion.div>
  </motion.div>;
}

export function BarcodeDivider({ className = "" }: { className?: string }) {
  const reduced = useReducedMotion();
  return <motion.div aria-hidden className={`flex h-3 items-end gap-1 overflow-hidden ${className}`} initial={reduced ? false : "hidden"} whileInView={reduced ? undefined : "visible"} viewport={REVEAL_VIEWPORT}>
    {Array.from({ length: 18 }, (_, index) => <motion.i key={index} className="block w-px bg-black" style={{ height: `${6 + (index % 4) * 2}px` }} variants={reduced ? undefined : { hidden: { opacity: 0, scaleY: 0 }, visible: { opacity: 1, scaleY: 1, transition: { delay: index * MOTION_STAGGER / 2, duration: MOTION_DURATION.fast, ease: MOTION_EASE } } }} />)}
  </motion.div>;
}

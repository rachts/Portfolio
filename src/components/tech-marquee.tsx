import React, { useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { MOTION_EASE } from "../lib/motion";

const STACK = ["React", "TypeScript", "Python", "FastAPI", "PostgreSQL", "Redis", "Docker", "OpenCV", "Next.js"];
export function TechMarquee() {
  const ref = useRef<HTMLDivElement>(null);
  const active = useInView(ref, { once: false, margin: "-10% 0px -10% 0px" });
  const reduced = useReducedMotion();
  const [paused, setPaused] = useState(false);
  const copy = [...STACK, ...STACK];
  const row = (direction: "forward" | "reverse") => <motion.div
    onHoverStart={() => setPaused(true)} onHoverEnd={() => setPaused(false)}
    className="flex w-max whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-[#737373]"
    style={{ willChange: active && !reduced && !paused ? "transform" : undefined }}
    animate={active && !reduced && !paused ? { x: direction === "forward" ? ["0%", "-50%"] : ["-50%", "0%"] } : { x: direction === "forward" ? 0 : "-50%" }}
    transition={active && !reduced && !paused ? { duration: direction === "forward" ? 28 : 34, ease: MOTION_EASE, repeat: Infinity } : { duration: 0 }}
  >{copy.map((name, index) => <React.Fragment key={`${direction}-${name}-${index}`}><span aria-hidden={index >= STACK.length} className="px-4">{name}</span><span aria-hidden>/</span></React.Fragment>)}</motion.div>;
  return <div ref={ref} className="overflow-hidden border-y border-[#E5E5E5] py-3 space-y-2" aria-label="Technology stack">
    {row("forward")}
    {row("reverse")}
  </div>;
}

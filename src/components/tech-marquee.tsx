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
  return <div ref={ref} className="overflow-hidden border-y border-[#E5E5E5] py-3" aria-label="Technology stack">
    <motion.div onHoverStart={() => setPaused(true)} onHoverEnd={() => setPaused(false)} className="flex w-max whitespace-nowrap font-mono text-[11px] uppercase tracking-[0.18em] text-[#737373]" style={{ willChange: active && !reduced && !paused ? "transform" : undefined }} animate={active && !reduced && !paused ? { x: ["0%", "-50%"] } : { x: 0 }} transition={active && !reduced && !paused ? { duration: 28, ease: MOTION_EASE, repeat: Infinity } : { duration: 0 }}>
      {copy.map((name, index) => <React.Fragment key={`${name}-${index}`}><span aria-hidden={index >= STACK.length} className="px-4">{name}</span><span aria-hidden>/</span></React.Fragment>)}
    </motion.div>
    <style>{`@media (prefers-reduced-motion: reduce){.tech-marquee-track{animation:none!important}}`}</style>
  </div>;
}

import React, { Suspense } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Magnetic } from "./magnetic";
import { projects } from "../data/projects";

const HeroScene = React.lazy(() => import("./hero-scene").then((module) => ({ default: module.HeroScene })));

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [sceneActive, setSceneActive] = useState(true);
  const [desktopScene, setDesktopScene] = useState(false);
  const reducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -52]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const sceneOpacity = useTransform(scrollYProgress, [0, 0.85, 1], [0.48, 0.2, 0]);
  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;
    const observer = new IntersectionObserver(([entry]) => setSceneActive(entry.isIntersecting), { rootMargin: "120px" });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    const query = window.matchMedia("(min-width: 768px) and (prefers-reduced-motion: no-preference)");
    const update = () => setDesktopScene(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 64,
        behavior: "smooth",
      });
    }
  };

  return (
    <section ref={sectionRef} className="relative min-h-[85vh] overflow-hidden pt-32 pb-16 flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
       <motion.div className="pointer-events-none absolute inset-y-12 right-0 hidden min-h-[26rem] w-[48%] md:block" style={{ opacity: sceneOpacity }} aria-hidden="true">
         {desktopScene && !reducedMotion && sceneActive && (
           <Suspense fallback={<div className="h-full w-full bg-[radial-gradient(circle_at_center,#262626_0%,transparent_62%)]" />}>
             <HeroScene progress={scrollYProgress} active />
           </Suspense>
         )}
       </motion.div>
      <motion.div className="relative z-10 my-auto space-y-8" style={{ y: headlineY, opacity: headlineOpacity }}>
        <div className="space-y-3">
          <span className="text-xs font-medium uppercase tracking-[0.08em] text-[#737373] block">
            Software Engineer & Systems Architect
          </span>
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-medium tracking-tight text-black leading-[1.02]">
            Rachit Kumar Tiwari
          </h1>
         </div>
         <div className="mt-8 flex flex-wrap items-end gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-[#666]" aria-label="Portfolio telemetry">
           <span><strong className="font-normal text-[#ff5a1f]">{projects.length}</strong> projects</span>
           <span><strong className="font-normal text-[#ff5a1f]">31+</strong> public repos</span>
           <span><strong className="font-normal text-[#ff5a1f]">3,300+</strong> contributions</span>
         </div>
         <svg className="mt-8 h-16 w-56 text-[#ff5a1f]" viewBox="0 0 224 64" fill="none" aria-hidden="true">
           <path d="M4 52H220M16 52A100 100 0 0 1 208 52" stroke="currentColor" strokeWidth="1" strokeDasharray="3 5" pathLength="1" className="hero-gauge-path" />
           <path d="M112 52V44" stroke="currentColor" strokeWidth="1" />
           <circle cx="112" cy="52" r="3" fill="currentColor" />
         </svg>

        <p className="text-xl text-[#525252] max-w-[560px] leading-relaxed">
          I build high-performance web systems, deterministic platforms, and scalable products with modern architectures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Magnetic>
            <button onClick={() => scrollToSection("work")} className="motion-button bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#1a1a1a] transition-colors cursor-pointer">View Projects</button>
          </Magnetic>

          <button
            onClick={() => scrollToSection("contact")}
            className="motion-button bg-white text-black border border-[#D4D4D4] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#F5F5F5] transition-colors cursor-pointer"
          >
            Contact
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button bg-white text-black border border-[#D4D4D4] px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#F5F5F5] transition-colors"
          >
            Resume (PDF)
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button bg-white text-black border border-[#D4D4D4] px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#F5F5F5] transition-colors"
          >
            CV (PDF)
          </a>
        </div>
      </motion.div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-8 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#737373]">
        <span>Kolkata, IN • Available for High-Impact Roles</span>
        <button
          onClick={() => scrollToSection("work")}
          className="flex items-center gap-2 text-black font-medium hover:opacity-70 transition-opacity cursor-pointer"
        >
          <span>Scroll</span>
          <motion.div initial={{ y: 0 }} whileHover={{ y: 3 }} transition={{ duration: 0.5 }}>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </motion.div>
        </button>
      </div>
    </section>
  );
}

export default HeroSection;

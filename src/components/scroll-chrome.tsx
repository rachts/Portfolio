import { useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll } from "framer-motion";

const SECTIONS = [
  { id: "work", label: "Work" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

export function ScrollChrome() {
  const { scrollYProgress } = useScroll();
  const reduced = useReducedMotion();
  const [active, setActive] = useState("work");

  useEffect(() => {
    const update = () => {
      const current = SECTIONS.reduce((best, section) => {
        const element = document.getElementById(section.id);
        if (!element) return best;
        return element.getBoundingClientRect().top <= 180 ? section.id : best;
      }, "work");
      setActive(current);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <>
      <motion.div className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left bg-[#ff5a1f]" style={{ scaleX: reduced ? 1 : scrollYProgress }} aria-hidden="true" />
      <nav className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-3 lg:flex" aria-label="Section progress">
        {SECTIONS.map((section, index) => (
          <a key={section.id} href={`#${section.id}`} className="group flex items-center gap-2" aria-label={`Go to ${section.label}`}>
            <span className={`h-1.5 w-1.5 rounded-full border transition-all ${active === section.id ? "scale-150 border-[#ff5a1f] bg-[#ff5a1f]" : "border-[#A3A3A3] bg-transparent"}`} />
            <span className="pointer-events-none translate-x-1 text-[9px] uppercase tracking-[0.16em] text-[#737373] opacity-0 transition-opacity group-hover:opacity-100">0{index + 1} {section.label}</span>
          </a>
        ))}
      </nav>
    </>
  );
}

export default ScrollChrome;

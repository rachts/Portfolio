import React from "react";
import { motion } from "framer-motion";

export function HeroSection() {
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
    <section className="min-h-[85vh] pt-32 pb-16 flex flex-col justify-between max-w-7xl mx-auto px-6 md:px-12 lg:px-20">
      <div className="my-auto space-y-8">
        <div className="space-y-3">
          <span className="text-xs font-semibold uppercase tracking-[0.08em] text-[#737373] block">
            Software Engineer & Systems Architect
          </span>
          <h1 className="text-[clamp(3rem,8vw,6.5rem)] font-bold tracking-tight text-black leading-[1.02]">
            Rachit Kumar Tiwari
          </h1>
        </div>

        <p className="text-xl text-[#525252] max-w-[560px] leading-relaxed">
          I build high-performance web systems, deterministic platforms, and scalable products with modern architectures.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <button
            onClick={() => scrollToSection("work")}
            className="bg-black text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#1a1a1a] transition-colors cursor-pointer"
          >
            View Projects
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="bg-white text-black border border-[#D4D4D4] px-6 py-3 rounded-xl text-sm font-medium hover:bg-[#F5F5F5] transition-colors cursor-pointer"
          >
            Contact
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border border-[#D4D4D4] px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#F5F5F5] transition-colors"
          >
            Resume (PDF)
          </a>

          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black border border-[#D4D4D4] px-5 py-3 rounded-xl text-sm font-medium hover:bg-[#F5F5F5] transition-colors"
          >
            CV (PDF)
          </a>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="pt-8 border-t border-[#E5E5E5] flex items-center justify-between text-xs text-[#737373]">
        <span>Kolkata, IN • Available for High-Impact Roles</span>
        <button
          onClick={() => scrollToSection("work")}
          className="flex items-center gap-2 text-black font-medium hover:opacity-70 transition-opacity cursor-pointer"
        >
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
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

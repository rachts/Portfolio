import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function VisualScreen() {
  const containerRef = useRef<HTMLElement>(null);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#0a0908] text-white/70 overflow-hidden flex flex-col items-center font-body selection:bg-white/20 selection:text-white"
    >
      {/* Subtle Grain Texture */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.04] mix-blend-screen z-0" 
        style={{ 
          backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')" 
        }} 
      />

      {/* Spacing from previous section */}
      <div className="h-[25vh] md:h-[35vh]"></div>

      {/* 1. Introduction & Centered Image */}
      <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col items-center mb-32 md:mb-56 relative z-10">
        <QuietText className="text-center mb-16 md:mb-24">
          Building software teaches me to look for patterns.<br />
          Travelling reminds me that not everything needs one.
        </QuietText>
        
        <QuietImage 
          src="IMG_20260521_162331.jpg" 
          alt="Observation"
          className="w-full max-w-[700px] aspect-[4/3] object-cover opacity-90 grayscale-[20%]"
        />
      </div>

      {/* 2. Left Aligned Small Portrait */}
      <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col items-start mb-32 md:mb-56 relative z-10">
        <QuietText className="mb-12 md:mb-16 md:ml-[10%]">
          Most of these were taken while walking<br />
          with nowhere particular to be.
        </QuietText>
        
        <div className="w-full md:w-[45%]">
          <QuietImage 
            src="IMG_20260519_101256.jpg" 
            alt="Quiet walk"
            className="w-full aspect-[3/4] object-cover opacity-85 grayscale-[10%]"
            yOffset={15}
          />
        </div>
      </div>

      {/* 3. Wide Landscape (The Pause) */}
      <div className="w-full mb-32 md:mb-56 relative z-10">
        <QuietImage 
          src="IMG_20260524_101641.jpg" 
          alt="Landscape"
          className="w-full h-[45vh] md:h-[65vh] object-cover opacity-90 grayscale-[15%]"
          yOffset={10}
        />
      </div>

      {/* 4. Right Aligned Portrait & Conclusion */}
      <div className="w-full max-w-[1200px] px-6 mx-auto flex flex-col items-end mb-40 md:mb-64 relative z-10">
        <QuietText className="text-right mb-12 md:mb-16 md:mr-[5%]">
          I don't photograph everything.<br />
          Only the moments I know I'll forget.
        </QuietText>
        
        <div className="w-[85%] md:w-[50%]">
          <QuietImage 
            src="IMG_20260521_103517.jpg" 
            alt="Memory"
            className="w-full aspect-square object-cover opacity-90 grayscale-[10%]"
            yOffset={-10}
          />
        </div>
      </div>

      {/* Natural fade out spacing */}
      <div className="h-[20vh] md:h-[30vh]"></div>

    </section>
  );
}

// ----------------------------------------------------------------------
// Restrained Helpers
// ----------------------------------------------------------------------

function QuietText({ children, className = "" }: { children: React.ReactNode, className?: string }) {
  return (
    <motion.p
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className={`text-[13px] md:text-[15px] font-light leading-[1.8] tracking-[0.03em] text-white/50 ${className}`}
    >
      {children}
    </motion.p>
  );
}

function QuietImage({ src, alt, className, yOffset = 0 }: { src: string, alt: string, className?: string, yOffset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Parallax is almost invisible (e.g., +/- 10px total)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [yOffset, -yOffset]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="relative overflow-hidden w-full h-full group"
    >
      <motion.img 
        style={{ y }}
        src={`/visuals/${src}`} 
        alt={alt}
        loading="lazy"
        className={`scale-[1.01] origin-center transition-transform duration-[3s] ease-out group-hover:scale-[1.02] ${className}`}
      />
    </motion.div>
  );
}

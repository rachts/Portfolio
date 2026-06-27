import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface PhotoPauseProps {
  src: string;
  alt: string;
  containerClass?: string;
  imageClass?: string;
}

export function PhotoPause({ 
  src, 
  alt, 
  containerClass = "w-full aspect-[21/9]", 
  imageClass = "object-cover object-center" 
}: PhotoPauseProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Extremely subtle parallax, scaled up slightly to avoid clipping edges
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [30, -30]);

  return (
    <div className={`overflow-hidden my-32 md:my-48 relative ${containerClass}`}>
      <motion.div 
        ref={ref}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="w-full h-full relative"
      >
        <motion.img 
          style={{ y }}
          src={`/visuals/${src}`} 
          alt={alt}
          loading="lazy"
          className={`w-full h-full scale-[1.05] grayscale-[20%] opacity-80 ${imageClass}`}
        />
        {/* Subtle vignette/overlay to blend into the background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background opacity-80 pointer-events-none"></div>
      </motion.div>
    </div>
  );
}

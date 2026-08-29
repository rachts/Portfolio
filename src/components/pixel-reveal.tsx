import React, { useState, useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";

interface PixelRevealProps {
  children: React.ReactNode;
  rows?: number;
  cols?: number;
  image?: string;
  category?: string;
  className?: string;
}

export function PixelReveal({
  children,
  rows = 10,
  cols = 14,
  image,
  category,
  className = "",
}: PixelRevealProps) {
  const [isHovered, setIsHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  // Generate pixel grid data once
  const pixels = useMemo(() => {
    return Array.from({ length: rows * cols }, (_, i) => ({
      id: i,
      row: Math.floor(i / cols),
      col: i % cols,
      delay: Math.random() * 0.4,
    }));
  }, [rows, cols]);

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Revealed Content (Sits underneath in dark #0A0A0A panel) */}
      <div className="absolute inset-0 z-0 bg-[#0A0A0A] text-white p-5 flex flex-col justify-between overflow-hidden">
        {children}
      </div>

      {/* Fallback Watermark Text for placeholder cards when not hovered */}
      {!image && category && (
        <div
          className={`absolute inset-0 z-[5] flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
            isHovered ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-2xl font-bold text-[#A3A3A3] tracking-widest uppercase">
            {category}
          </span>
        </div>
      )}

      {/* Pixel Grid Overlay */}
      <div
        className="absolute inset-0 z-10 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
          gap: 0,
        }}
      >
        {pixels.map((pixel) => {
          const isImagePixel = Boolean(image);

          return (
            <motion.div
              key={pixel.id}
              className="w-full h-full"
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity: isHovered ? 0 : 1,
                scale: isHovered ? 0 : 1,
              }}
              transition={{
                duration: prefersReducedMotion ? 0.15 : 0.3,
                delay: prefersReducedMotion
                  ? 0
                  : isHovered
                  ? pixel.delay
                  : pixel.delay * 0.3,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{
                willChange: "transform, opacity",
                ...(isImagePixel
                  ? {
                      backgroundImage: `url(${image})`,
                      backgroundSize: `${cols * 100}% ${rows * 100}%`,
                      backgroundPosition: `${(pixel.col / (cols - 1)) * 100}% ${
                        (pixel.row / (rows - 1)) * 100
                      }%`,
                      backgroundRepeat: "no-repeat",
                    }
                  : {
                      backgroundColor:
                        pixel.id % 3 === 0
                          ? "#E5E5E5"
                          : pixel.id % 5 === 0
                          ? "#EBEBEB"
                          : "#E8E8E8",
                    }),
              }}
            />
          );
        })}
      </div>
    </div>
  );
}

export default PixelReveal;

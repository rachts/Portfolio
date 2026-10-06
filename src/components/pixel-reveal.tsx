import React, { useRef, useState, useMemo } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE, MOTION_STAGGER } from "../lib/motion";

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
  const [isFocused, setIsFocused] = useState(false);
  const isRevealed = isHovered || isFocused;
  const prefersReducedMotion = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: frameRef,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const gridRows = Math.max(1, Math.min(rows, 6));
  const gridCols = Math.max(1, Math.min(cols, 8));

  // Generate pixel grid data once
  const pixels = useMemo(() => {
    // Keep the reveal legible without starting hundreds of simultaneous animations.
    const pixelCount = gridRows * gridCols;
    return Array.from({ length: pixelCount }, (_, i) => ({
      id: i,
      row: Math.floor(i / gridCols),
      col: i % gridCols,
      delay: ((i * 37) % 5) * MOTION_STAGGER,
    }));
  }, [gridRows, gridCols]);

  const setReveal = (visible: boolean) => setIsHovered(visible);

  return (
    <div
      ref={frameRef}
      className={`relative overflow-hidden select-none ${className}`}
      tabIndex={0}
      aria-label={category ? `${category} project preview` : "Project preview"}
      onMouseEnter={() => setReveal(true)}
      onMouseLeave={() => setReveal(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setIsFocused(false);
      }}
    >
      {image && (
        <motion.div
          aria-hidden="true"
          className="absolute inset-[-8%] z-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})`, y: prefersReducedMotion ? 0 : imageY }}
        />
      )}
      {/* Revealed Content (Sits underneath in dark #0A0A0A panel) */}
      <motion.div
        className="absolute inset-0 z-[1] bg-[#0A0A0A] text-white p-5 flex flex-col justify-between overflow-hidden"
        initial={false}
        animate={{ opacity: isRevealed ? 1 : 0 }}
        transition={{ duration: prefersReducedMotion ? 0 : MOTION_DURATION.fast, ease: MOTION_EASE }}
      >
        {children}
      </motion.div>

      {/* Fallback Watermark Text for placeholder cards when not hovered */}
      {!image && category && (
        <div
          className={`absolute inset-0 z-[5] flex items-center justify-center pointer-events-none transition-opacity duration-300 ${
             isRevealed ? "opacity-0" : "opacity-100"
          }`}
        >
          <span className="text-2xl font-medium text-[#A3A3A3] tracking-widest uppercase">
            {category}
          </span>
        </div>
      )}

      {/* Pixel Grid Overlay */}
      <div
        className="absolute inset-0 z-10 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${gridCols}, 1fr)`,
          gridTemplateRows: `repeat(${gridRows}, 1fr)`,
          gap: 0,
        }}
      >
        {pixels.map((pixel) => {
          const isImagePixel = Boolean(image);

          return (
            <motion.div
              key={pixel.id}
              className="relative w-full h-full overflow-hidden"
              initial={false}
              animate={{ opacity: isRevealed ? 0 : 1 }}
              transition={{
                duration: prefersReducedMotion ? 0 : MOTION_DURATION.fast,
                delay: prefersReducedMotion
                  ? 0
                  : isRevealed
                  ? pixel.delay
                  : pixel.delay * 0.3,
                ease: MOTION_EASE,
              }}
              style={{
                ...(isImagePixel
                  ? {}
                  : {
                      backgroundColor:
                        pixel.id % 3 === 0
                          ? "#E5E5E5"
                          : pixel.id % 5 === 0
                          ? "#EBEBEB"
                          : "#E8E8E8",
                    }),
              }}
            >
            </motion.div>
          );
        })}
      </div>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 z-20 w-1/4 bg-[#F97316]/20"
        initial={{ x: "-120%", opacity: 0 }}
        animate={isRevealed && !prefersReducedMotion ? { x: "520%", opacity: [0, 1, 0] } : { x: "-120%", opacity: 0 }}
        transition={{ duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
      />
    </div>
  );
}

export default PixelReveal;

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export function LoadingScreen({ onComplete }: { onComplete: () => void }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Artificial delay to let the animation play out
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1500); // 1.5 seconds focus effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {!isReady && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[9999] bg-[#030303] flex items-center justify-center overflow-hidden"
        >
          {/* Faint CSS grain overlay */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03] mix-blend-screen z-20" 
            style={{ 
              backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22 opacity=%221%22/%3E%3C/svg%3E')" 
            }} 
          />

          <motion.div
            initial={{ filter: "blur(20px)", scale: 1.1, opacity: 0 }}
            animate={{ filter: "blur(0px)", scale: 1, opacity: 0.4 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-10"
          >
            <img 
              src="/visuals/IMG_20260521_162331.jpg" 
              alt="Loading..." 
              className="w-full h-full object-cover grayscale-[30%]"
            />
          </motion.div>
          
          <div className="absolute inset-0 bg-black/60 z-10"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { AnimatePresence, motion, useMotionValue, useMotionValueEvent, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MOTION_EASE, MOTION_DURATION } from "../lib/motion";

const STORAGE_KEY = "portfolio-boot-intro-seen";

function prefersReducedMotion() {
  return typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function BootIntro() {
  const reduced = prefersReducedMotion();
  const [visible, setVisible] = useState(() => {
    if (reduced || typeof window === "undefined") return false;
    try {
      return sessionStorage.getItem(STORAGE_KEY) !== "1";
    } catch {
      return true;
    }
  });
  const counterRef = useRef<HTMLSpanElement>(null);
  const progress = useMotionValue(0);

  useMotionValueEvent(progress, "change", (value) => {
    if (counterRef.current) counterRef.current.textContent = String(Math.round(value)).padStart(3, "0");
  });

  useEffect(() => {
    if (!visible) return;
    try { sessionStorage.setItem(STORAGE_KEY, "1"); } catch { /* private browsing can deny storage */ }
    const controls = animate(progress, 100, { duration: 1.05, ease: MOTION_EASE });
    const finish = window.setTimeout(() => setVisible(false), 1580);
    return () => { controls.stop(); window.clearTimeout(finish); };
  }, [progress, visible]);

  if (reduced) return null;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[100] overflow-hidden bg-black text-[#ff5a1f]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: MOTION_DURATION.fast, ease: MOTION_EASE } }}
          aria-label="Loading portfolio"
          role="status"
        >
          <div className="relative z-10 flex h-full items-center justify-center">
            <div className="w-[min(72vw,28rem)] font-mono">
              <div className="mb-5 flex items-baseline justify-between text-xs tracking-[0.22em]">
                <span>INITIALISING…</span>
                <span ref={counterRef}>000</span>
              </div>
              <div className="mb-5 space-y-1 text-[10px] tracking-[0.18em] opacity-70">
                <div>LOADING MODULES</div>
                <div>LINKING SIGNAL</div>
              </div>
              <div className="h-8 overflow-hidden border border-[#ff5a1f]/60 p-1">
                <motion.div
                  className="h-full origin-left bg-[#ff5a1f]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.05, ease: MOTION_EASE }}
                />
              </div>
              <div className="mt-3 h-4 overflow-hidden opacity-80" aria-hidden="true">
                <motion.div
                  className="h-full w-full origin-left"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.05, ease: MOTION_EASE }}
                  style={{ backgroundImage: "repeating-linear-gradient(90deg, #ff5a1f 0 2px, transparent 2px 7px)" }}
                />
              </div>
            </div>
          </div>
          <motion.div className="absolute inset-x-0 top-0 z-0 h-1/2 bg-black" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "-100%", transition: { delay: 1.08, duration: MOTION_DURATION.normal, ease: MOTION_EASE } }} />
          <motion.div className="absolute inset-x-0 bottom-0 z-0 h-1/2 bg-black" initial={{ y: 0 }} animate={{ y: 0 }} exit={{ y: "100%", transition: { delay: 1.08, duration: MOTION_DURATION.normal, ease: MOTION_EASE } }} />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default BootIntro;

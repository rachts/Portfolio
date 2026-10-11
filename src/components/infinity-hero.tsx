import { motion, useReducedMotion } from "framer-motion";
import { MOTION_DURATION, MOTION_EASE } from "../lib/motion";

const QUOTE = [
  "What if the loop was never the problem?",
  "What if there’s a reason we keep coming back to the same place?",
  "What if the loop isn’t meant to be escaped, but understood?",
];

export function InfinityHero() {
  const reducedMotion = useReducedMotion();

  return (
    <div className="infinity-hero relative flex min-h-[26rem] w-full flex-col items-center justify-center overflow-visible px-4 py-8 text-[#0A0A0A]">
      <svg className="infinity-mark relative z-10 h-auto w-[min(94%,30rem)] overflow-visible" viewBox="0 0 480 240" fill="none" role="img" aria-labelledby="infinity-title infinity-desc">
        <title id="infinity-title">Infinity symbol</title>
        <desc id="infinity-desc">A dimensional orange infinity symbol representing cycles, return, and understanding.</desc>
        <path
          d="M240 120C210 54 176 28 128 28C73 28 36 70 36 120C36 170 73 212 128 212C176 212 210 186 240 120C270 54 304 28 352 28C407 28 444 70 444 120C444 170 407 212 352 212C304 212 270 186 240 120Z"
          stroke="#8E2D13"
          strokeWidth="15"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.28"
          transform="translate(0 9)"
        />
        <path
          d="M240 120C210 54 176 28 128 28C73 28 36 70 36 120C36 170 73 212 128 212C176 212 210 186 240 120C270 54 304 28 352 28C407 28 444 70 444 120C444 170 407 212 352 212C304 212 270 186 240 120Z"
          stroke="url(#infinity-gradient)"
          strokeWidth="11"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <motion.path
          d="M240 120C210 54 176 28 128 28C73 28 36 70 36 120C36 170 73 212 128 212C176 212 210 186 240 120C270 54 304 28 352 28C407 28 444 70 444 120C444 170 407 212 352 212C304 212 270 186 240 120Z"
          stroke="#FFD0BD"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reducedMotion ? false : { pathLength: 0, opacity: 0.4 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={reducedMotion ? { duration: 0 } : { duration: MOTION_DURATION.slow, ease: MOTION_EASE }}
        />
        <defs>
          <linearGradient id="infinity-gradient" x1="44" y1="36" x2="440" y2="204" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FFB08E" />
            <stop offset="0.48" stopColor="#FF5A1F" />
            <stop offset="1" stopColor="#B93816" />
          </linearGradient>
        </defs>
      </svg>

      <motion.blockquote
        className="relative z-10 mt-7 max-w-[30rem] text-center font-mono text-[11px] uppercase leading-[1.8] tracking-[0.16em] text-[#666]"
        initial={reducedMotion ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reducedMotion ? { duration: 0 } : { delay: MOTION_DURATION.fast, duration: MOTION_DURATION.normal, ease: MOTION_EASE }}
      >
        {QUOTE.map((line) => <span key={line} className="block">{line}</span>)}
      </motion.blockquote>
    </div>
  );
}

export default InfinityHero;

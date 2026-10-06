import type { Transition, Variants } from "framer-motion";

export const MOTION_EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const MOTION_EASE_CSS = "cubic-bezier(0.22, 1, 0.36, 1)";
export const MOTION_DURATION = { fast: 0.5, normal: 0.7, slow: 0.9 } as const;
export const MOTION_STAGGER = 0.08;
export const REVEAL_VIEWPORT = { once: true, amount: 0.2 } as const;
export const motionTransition = (duration: number = MOTION_DURATION.normal): Transition => ({
  duration, ease: MOTION_EASE,
});
export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: motionTransition() },
};
export const staggerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: MOTION_STAGGER } },
};
export const borderVariants: Variants = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: motionTransition(MOTION_DURATION.fast) },
};
export const panelVariants: Variants = {
  hidden: {},
  visible: { transition: { delayChildren: MOTION_DURATION.fast, staggerChildren: MOTION_STAGGER } },
};

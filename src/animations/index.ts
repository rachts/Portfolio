import { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export const glowHover = {
  rest: { 
    boxShadow: "0px 0px 0px rgba(102, 252, 241, 0)" 
  },
  hover: { 
    boxShadow: "0px 0px 15px rgba(102, 252, 241, 0.4)",
    scale: 1.02,
    transition: { duration: 0.3 }
  }
};

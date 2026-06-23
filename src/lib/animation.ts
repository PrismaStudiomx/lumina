export const EASE_CINEMATIC: [number, number, number, number] = [
  0.22, 1, 0.36, 1,
];

export const revealContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

export const revealLine = {
  hidden: {
    y: "110%",
  },
  visible: {
    y: "0%",
    transition: {
      duration: 1.15,
      ease: EASE_CINEMATIC,
    },
  },
};

export const fadeUp = {
  hidden: {
    opacity: 0,
    y: 24,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: EASE_CINEMATIC,
    },
  },
};

export const imageMask = {
  hidden: {
    clipPath: "inset(100% 0% 0% 0%)",
    scale: 1.08,
  },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    scale: 1,
    transition: {
      duration: 1.4,
      ease: EASE_CINEMATIC,
    },
  },
};
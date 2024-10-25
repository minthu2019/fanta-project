import { easeInOut } from "framer-motion";

export const SlideUp = (delay) => {
  return {
    initial: {
      y: 100,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        delay: delay,
        ease: easeInOut,
      },
    },
  };
};

export const SlideLeft = (delay) => {
  return {
    initial: {
      x: 100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exit: {
      x: -100,
      opacity: 0,
      duration: 0.5,
      delay: delay,
      ease: easeInOut,
    },
  };
};

export const SlideRight = (delay) => {
  return {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: delay,
        ease: easeInOut,
      },
    },
    exist: {
      x: 100,
      opacity: 0,
      duration: 0.2,
      delay: delay,
      ease: easeInOut,
    },
  };
};

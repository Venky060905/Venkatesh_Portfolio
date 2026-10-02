"use client";

import { motion, useReducedMotion } from "motion/react";

type RevealProps = {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  /** Animate on mount (hero) instead of on scroll. */
  immediate?: boolean;
};

/** Subtle fade-up. Renders static content when the user prefers reduced motion. */
export function Reveal({
  children,
  delay = 0,
  className,
  immediate = false,
}: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;

  const transition = { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const };
  const initial = { opacity: 0, y: 16 };
  const shown = { opacity: 1, y: 0 };

  return immediate ? (
    <motion.div
      className={className}
      initial={initial}
      animate={shown}
      transition={transition}
    >
      {children}
    </motion.div>
  ) : (
    <motion.div
      className={className}
      initial={initial}
      whileInView={shown}
      viewport={{ once: true, margin: "-80px" }}
      transition={transition}
    >
      {children}
    </motion.div>
  );
}

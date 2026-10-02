"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";

/** Vertical timeline rail whose gradient fill draws as you scroll. */
export function Timeline({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 75%", "end 60%"],
  });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <div ref={ref} className="relative">
      <div aria-hidden="true" className="absolute left-0 top-0 h-full w-px bg-border" />
      <motion.div
        aria-hidden="true"
        style={{ scaleY }}
        className="absolute left-0 top-0 h-full w-px origin-top bg-gradient-to-b from-accent-from to-accent-to"
      />
      {children}
    </div>
  );
}

"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import { useEffect } from "react";

/** Soft glow that trails the mouse. Only shown for fine pointers (desktop). */
export function CursorGlow() {
  const mx = useMotionValue(-400);
  const my = useMotionValue(-400);
  const x = useSpring(mx, { stiffness: 120, damping: 24 });
  const y = useSpring(my, { stiffness: 120, damping: 24 });

  useEffect(() => {
    const move = (e: PointerEvent) => {
      mx.set(e.clientX - 250);
      my.set(e.clientY - 250);
    };
    window.addEventListener("pointermove", move, { passive: true });
    return () => window.removeEventListener("pointermove", move);
  }, [mx, my]);

  return (
    <motion.div
      aria-hidden="true"
      style={{ x, y, background: "radial-gradient(circle, var(--glow-strong), transparent 65%)" }}
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[500px] rounded-full will-change-transform [@media(pointer:fine)]:block"
    />
  );
}

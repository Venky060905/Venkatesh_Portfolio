"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function RotatingText({ words }: { words: string[] }) {
  const reduce = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), 2400);
    return () => clearInterval(t);
  }, [reduce, words.length]);

  return (
    <>
      <span className="sr-only">{words.join(", ")}</span>
      <span aria-hidden="true" className="inline-flex items-center">
        <span className="relative inline-flex h-[1.4em] min-w-[11ch] items-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={words[i]}
              initial={reduce ? false : { y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-gradient font-medium"
            >
              {words[i]}
            </motion.span>
          </AnimatePresence>
        </span>
        <span className="animate-caret ml-0.5 inline-block h-[1.1em] w-px bg-fg" />
      </span>
    </>
  );
}

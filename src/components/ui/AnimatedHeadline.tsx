"use client";

import { motion, useReducedMotion } from "motion/react";
import { Fragment } from "react";
import { cn } from "@/lib/utils";

type Segment = { text: string; gradient?: boolean };

/** Reveals the headline word by word, sliding up from a mask. */
export function AnimatedHeadline({
  id,
  segments,
  className,
}: {
  id?: string;
  segments: Segment[];
  className?: string;
}) {
  const reduce = useReducedMotion();
  let n = 0;

  return (
    <h1 id={id} className={className}>
      {segments.map((seg, s) =>
        seg.text
          .split(" ")
          .filter(Boolean)
          .map((word, w) => {
            const i = n++;
            return (
              <Fragment key={`${s}-${w}`}>
                <span className="inline-block overflow-hidden pb-[0.12em] align-bottom">
                  <motion.span
                    className={cn(
                      "inline-block",
                      seg.gradient && "text-gradient animate-shimmer",
                    )}
                    initial={reduce ? false : { y: "115%" }}
                    animate={{ y: 0 }}
                    transition={{
                      duration: 0.75,
                      delay: 0.2 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {word}
                  </motion.span>
                </span>{" "}
              </Fragment>
            );
          }),
      )}
    </h1>
  );
}

"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import Image from "next/image";
import { MacWindow } from "@/components/ui/MacWindow";
import { profile } from "@/data/profile";

const chips = [
  { label: "Next.js", className: "-left-4 top-8", delay: "0s" },
  { label: "TypeScript", className: "-right-3 top-20", delay: "1.2s" },
  { label: "FastAPI", className: "-left-8 top-[55%]", delay: "2.1s" },
  { label: "PostgreSQL", className: "-right-6 top-[68%]", delay: "0.6s" },
  { label: "Docker", className: "right-10 -top-3", delay: "1.8s" },
];

/** Portrait with pointer-driven 3D tilt and floating tech chips. */
export function HeroPhoto() {
  const reduce = useReducedMotion();
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-9, 9]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [9, -9]), {
    stiffness: 150,
    damping: 18,
  });

  return (
    <div
      className="relative mx-auto w-full max-w-xs lg:max-w-none"
      style={{ perspective: 1000 }}
      onPointerMove={(e) => {
        if (reduce) return;
        const r = e.currentTarget.getBoundingClientRect();
        px.set((e.clientX - r.left) / r.width - 0.5);
        py.set((e.clientY - r.top) / r.height - 0.5);
      }}
      onPointerLeave={() => {
        px.set(0);
        py.set(0);
      }}
    >
      <motion.div
        style={reduce ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative"
      >
        <div
          aria-hidden="true"
          className="bg-gradient-accent absolute -inset-3 rounded-[2rem] opacity-30 blur-2xl"
        />
        <MacWindow title="venkatesh.jpg — Preview" bodyClassName="p-0">
          <Image
            src={profile.photoPath}
            alt={`Portrait of ${profile.name}`}
            width={960}
            height={1280}
            priority
            sizes="(min-width: 1024px) 24rem, 20rem"
            className="aspect-[4/5] w-full object-cover object-top"
          />
        </MacWindow>

        {chips.map((c) => (
          <span
            key={c.label}
            aria-hidden="true"
            style={{ animationDelay: c.delay, transform: "translateZ(40px)" }}
            className={`panel bg-surface-solid animate-float-y absolute hidden rounded-full px-3 py-1.5 font-mono text-xs text-fg shadow-lg sm:block ${c.className}`}
          >
            {c.label}
          </span>
        ))}

        <div className="panel bg-surface-solid absolute -bottom-4 left-4 rounded-xl px-4 py-2.5 shadow-lg">
          <p className="font-mono text-[11px] uppercase tracking-wider text-subtle">
            Currently
          </p>
          <p className="text-sm font-medium text-fg">
            {profile.currentRole.role} · {profile.currentRole.company}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

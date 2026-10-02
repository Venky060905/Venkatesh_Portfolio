"use client";

import { animate, useInView, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";

/** Facts taken from the resume / project list. */
const stats = [
  { value: 2, label: "Internships", sub: "Remote, 2025 – present" },
  { value: 47, label: "Global regulations", sub: "in Complyra compliance workflows" },
  { value: 2, label: "Projects featured", sub: "Complyra and TaskFlow" },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = ref.current;
    if (!inView || reduce || !el) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduce, to]);

  return <span ref={ref}>{to}</span>;
}

export function Highlights() {
  return (
    <section aria-label="Highlights" className="py-16">
      <Container>
        <dl className="grid gap-4 sm:grid-cols-3">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="panel rounded-2xl p-6 text-center">
                <dd className="text-gradient animate-shimmer text-5xl font-semibold tracking-tight">
                  <CountUp to={s.value} />
                </dd>
                <dt className="mt-2 font-medium text-fg">{s.label}</dt>
                <p className="mt-1 text-xs text-subtle">{s.sub}</p>
              </div>
            </Reveal>
          ))}
        </dl>
      </Container>
    </section>
  );
}

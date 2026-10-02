"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & { as?: "div" | "article" };

/** Glass card whose highlight follows the pointer (set via CSS vars, no re-renders). */
export function SpotlightCard({
  as: Tag = "div",
  className,
  children,
  ...props
}: Props) {
  const frame = useRef(0);

  // Coalesce to one update per animation frame
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const el = e.currentTarget;
    const { clientX, clientY } = e;
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${clientX - r.left}px`);
      el.style.setProperty("--my", `${clientY - r.top}px`);
    });
  }

  return (
    <Tag
      onMouseMove={onMove}
      className={cn(
        "panel group relative isolate overflow-hidden transition-[transform,border-color,box-shadow] duration-300 ease-out hover:-translate-y-1 hover:border-accent-from/50 hover:shadow-[0_12px_40px_-12px_var(--glow-strong)]",
        className,
      )}
      {...props}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(360px circle at var(--mx, 50%) var(--my, 50%), var(--glow-strong), transparent 45%)",
        }}
      />
      {children}
    </Tag>
  );
}

"use client";

import { cn } from "@/lib/utils";

type Props = React.ComponentProps<"div"> & { as?: "div" | "article" };

/** Glass card whose highlight follows the pointer (set via CSS vars, no re-renders). */
export function SpotlightCard({
  as: Tag = "div",
  className,
  children,
  ...props
}: Props) {
  function onMove(e: React.MouseEvent<HTMLElement>) {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
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

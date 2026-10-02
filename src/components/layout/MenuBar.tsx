"use client";

import { useSyncExternalStore } from "react";
import { navLinks, profile } from "@/data/profile";
import { cn } from "@/lib/utils";
import { useActiveSection } from "@/lib/hooks";
import { ThemeToggle } from "./ThemeToggle";

const ids = ["about", "skills", "experience", "featured", "projects", "contact"];

const subscribeMinute = (cb: () => void) => {
  const t = setInterval(cb, 15_000);
  return () => clearInterval(t);
};
// Minute-resolution string: stable between ticks, "" on the server (no hydration mismatch)
const nowMinute = () => new Date().toISOString().slice(0, 16);

/** macOS-style menu bar: name, section menus, clock. */
export function MenuBar() {
  const active = useActiveSection(ids);
  const minute = useSyncExternalStore(subscribeMinute, nowMinute, () => "");

  // `minute` is a UTC ISO string; format it in the visitor's local time
  const d = minute ? new Date(`${minute}:00Z`) : null;
  const time = d?.toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit" }) ?? "";
  const date =
    d?.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" }).replace(",", "") ?? "";

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-8 border-b border-border bg-surface-solid/90">
      <div className="mx-auto flex h-full w-full max-w-[1600px] items-center justify-between px-3 text-[13px] sm:px-4">
        <div className="flex items-center gap-1">
          <a
            href="#top"
            aria-label={`${profile.name} — back to top`}
            className="rounded px-2 py-0.5 font-semibold text-fg hover:bg-fg/10"
          >
            {profile.firstName}
          </a>
          <nav aria-label="Primary" className="hidden items-center md:flex">
            {navLinks.map((l) => {
              const isActive = active === l.href.slice(1) || (l.href === "#featured" && active === "projects");
              return (
                <a
                  key={l.href}
                  href={l.href}
                  aria-current={isActive ? "location" : undefined}
                  className={cn(
                    "rounded px-2.5 py-0.5 transition-colors hover:bg-fg/10",
                    isActive ? "bg-fg/10 text-fg" : "text-muted",
                  )}
                >
                  {l.label}
                </a>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-1 text-muted sm:gap-2">
          <a
            href={profile.resumePath}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded px-2 py-0.5 hover:bg-fg/10 hover:text-fg sm:block"
          >
            Resume
          </a>
          <ThemeToggle compact />
          <span className="rounded px-2 py-0.5 tabular-nums text-fg" suppressHydrationWarning>
            <span className="hidden sm:inline">{date} </span>
            {time}
          </span>
        </div>
      </div>
    </header>
  );
}

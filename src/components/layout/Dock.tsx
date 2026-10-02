"use client";

import {
  Briefcase,
  FileText,
  Folder,
  House,
  Layers,
  Mail,
  User,
  type LucideIcon,
} from "lucide-react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";
import { useActiveSection } from "@/lib/hooks";
import { cn } from "@/lib/utils";

type Item = {
  id: string;
  label: string;
  href: string;
  icon: LucideIcon | typeof GithubIcon;
  color: string;
  external?: boolean;
  /** hide on narrow screens so the dock never overflows */
  desktopOnly?: boolean;
};

const items: Item[] = [
  { id: "top", label: "Home", href: "#top", icon: House, color: "from-sky-400 to-blue-600" },
  { id: "about", label: "About", href: "#about", icon: User, color: "from-violet-400 to-purple-600" },
  { id: "skills", label: "Skills", href: "#skills", icon: Layers, color: "from-amber-400 to-orange-600" },
  { id: "experience", label: "Experience", href: "#experience", icon: Briefcase, color: "from-emerald-400 to-green-600" },
  { id: "featured", label: "Projects", href: "#featured", icon: Folder, color: "from-cyan-400 to-sky-600" },
  { id: "resume", label: "Resume", href: "#resume", icon: FileText, color: "from-rose-400 to-red-600" },
  { id: "contact", label: "Contact", href: "#contact", icon: Mail, color: "from-blue-400 to-indigo-600" },
  { id: "github", label: "GitHub", href: profile.github, icon: GithubIcon, color: "from-zinc-600 to-zinc-900", external: true, desktopOnly: true },
  { id: "linkedin", label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, color: "from-sky-500 to-blue-700", external: true, desktopOnly: true },
];

const ids = items.filter((i) => !i.external).map((i) => i.id).concat("projects");
const BASE = 42;
const PEAK = 68;

function DockIcon({
  item,
  active,
  mouseX,
  reduce,
}: {
  item: Item;
  active: boolean;
  mouseX: MotionValue<number>;
  reduce: boolean;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const distance = useTransform(mouseX, (x) => {
    const b = ref.current?.getBoundingClientRect();
    return b ? x - b.x - b.width / 2 : Infinity;
  });
  const size = useSpring(
    useTransform(distance, [-140, 0, 140], [BASE, reduce ? BASE : PEAK, BASE]),
    { mass: 0.1, stiffness: 170, damping: 14 },
  );
  const Icon = item.icon;

  return (
    <li className={cn("flex flex-col items-center", item.desktopOnly && "hidden sm:flex")}>
      <motion.a
        ref={ref}
        href={item.href}
        style={{ width: size, height: size }}
        aria-label={item.label}
        aria-current={active ? "location" : undefined}
        {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
        className={cn(
          "group relative flex aspect-square items-center justify-center rounded-[22%] bg-gradient-to-b text-white shadow-lg ring-1 ring-black/10 transition-shadow hover:shadow-xl",
          item.color,
        )}
      >
        <Icon className="size-1/2" aria-hidden="true" />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -top-9 whitespace-nowrap rounded-md border border-border bg-surface-solid/90 px-2.5 py-1 text-xs font-medium text-fg opacity-0 shadow-md backdrop-blur-xl transition-opacity group-hover:opacity-100"
        >
          {item.label}
        </span>
      </motion.a>
      <span
        aria-hidden="true"
        className={cn(
          "mt-1 size-1 rounded-full transition-opacity",
          active ? "bg-fg opacity-70" : "opacity-0",
        )}
      />
    </li>
  );
}

/** macOS-style Dock: magnifies on hover, highlights the section you're in. */
export function Dock() {
  const reduce = !!useReducedMotion();
  const mouseX = useMotionValue(Infinity);
  const active = useActiveSection(ids);
  const current = active === "projects" ? "featured" : active;

  return (
    <nav
      aria-label="Dock"
      className="pointer-events-none fixed inset-x-0 bottom-2 z-50 flex justify-center px-2"
    >
      <motion.ul
        onMouseMove={(e) => mouseX.set(e.clientX)}
        onMouseLeave={() => mouseX.set(Infinity)}
        initial={reduce ? false : { y: 90, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", stiffness: 180, damping: 20, delay: 0.6 }}
        className="pointer-events-auto flex items-end gap-1.5 rounded-[1.4rem] border border-border bg-surface px-2.5 pb-1.5 pt-2 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      >
        {items.map((it) => (
          <DockIcon key={it.id} item={it} active={current === it.id} mouseX={mouseX} reduce={reduce} />
        ))}
      </motion.ul>
    </nav>
  );
}

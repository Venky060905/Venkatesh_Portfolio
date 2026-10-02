const items = [
  "Python",
  "FastAPI",
  "Django",
  "TypeScript",
  "Next.js",
  "React",
  "PostgreSQL",
  "Redis",
  "Docker",
  "LangChain",
  "Tailwind CSS",
  "AWS EC2",
  "REST APIs",
  "JWT",
];

/** Decorative infinite ticker; the real skill list lives in the Skills section. */
export function TechMarquee() {
  const row = (
    <ul className="flex shrink-0 items-center gap-3 pr-3">
      {items.map((t) => (
        <li
          key={t}
          className="panel rounded-full px-4 py-1.5 font-mono text-xs text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );

  return (
    <div
      aria-hidden="true"
      className="group relative overflow-hidden border-y border-border py-4 [mask-image:linear-gradient(to_right,transparent,#000_12%,#000_88%,transparent)]"
    >
      <div className="animate-marquee flex w-max will-change-transform group-hover:[animation-play-state:paused]">
        {row}
        {row}
      </div>
    </div>
  );
}

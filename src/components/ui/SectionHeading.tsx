import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

type Props = {
  index: string;
  eyebrow: string;
  title: string;
  description?: string;
  className?: string;
};

export function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
}: Props) {
  return (
    <Reveal>
      <header className={cn("mb-12 max-w-2xl", className)}>
        <p className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-subtle">
          <span className="text-gradient">{index}</span>
          <span aria-hidden="true" className="bg-gradient-accent h-px w-10" />
          {eyebrow}
        </p>
        <h2
          id={`${eyebrow}-heading`}
          className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-5xl"
        >
          {title}
        </h2>
        {description && (
          <p className="mt-4 text-base leading-relaxed text-muted">
            {description}
          </p>
        )}
      </header>
    </Reveal>
  );
}

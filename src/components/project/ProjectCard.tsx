import { Check } from "lucide-react";
import type { Project } from "@/data/projects";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/utils";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectCard({
  project,
  wide = false,
}: {
  project: Project;
  wide?: boolean;
}) {
  return (
    <SpotlightCard
      as="article"
      className={cn("flex h-full flex-col rounded-2xl p-6", wide && "md:col-span-2")}
    >
      <h3 className="text-xl font-semibold tracking-tight text-fg">
        {project.name}
      </h3>
      <p className="mt-1 text-sm text-muted">{project.tagline}</p>

      <div className={cn("mt-5 grid gap-5 text-sm", wide && "md:grid-cols-2")}>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Problem
          </h4>
          <p className="mt-1.5 leading-relaxed text-muted">{project.problem}</p>
        </div>
        <div>
          <h4 className="font-mono text-xs uppercase tracking-widest text-subtle">
            Solution
          </h4>
          <p className="mt-1.5 leading-relaxed text-muted">{project.solution}</p>
        </div>
      </div>

      <h4 className="mt-5 font-mono text-xs uppercase tracking-widest text-subtle">
        Key features
      </h4>
      <ul className="mt-2 space-y-1.5 text-sm text-muted">
        {project.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <Check
              className="mt-0.5 size-4 shrink-0 text-accent-from"
              aria-hidden="true"
            />
            {f}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <li
            key={t}
            className="rounded-lg border border-border bg-surface-solid px-2.5 py-1 font-mono text-xs text-muted"
          >
            {t}
          </li>
        ))}
      </ul>

      <ProjectLinks
        className="mt-auto pt-6"
        name={project.name}
        github={project.github}
        demo={project.demo}
      />
    </SpotlightCard>
  );
}

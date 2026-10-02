import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/Icons";
import { cn } from "@/lib/utils";

type Props = {
  name: string;
  github: string | null;
  demo: string | null;
  className?: string;
};

const live =
  "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-fg transition-all hover:-translate-y-0.5 hover:border-accent-from/60";
const pending =
  "inline-flex items-center gap-2 rounded-full border border-dashed border-border px-4 py-2 text-sm text-subtle";

/** Renders real links, or a clearly marked placeholder when a URL is not set yet. */
export function ProjectLinks({ name, github, demo, className }: Props) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className={live}
          aria-label={`${name} on GitHub (opens in new tab)`}
        >
          <GithubIcon className="size-4" /> GitHub
        </a>
      ) : (
        <span className={pending} title="GitHub link not added yet">
          <GithubIcon className="size-4" /> GitHub link coming soon
        </span>
      )}
      {demo ? (
        <a
          href={demo}
          target="_blank"
          rel="noopener noreferrer"
          className={live}
          aria-label={`${name} live demo (opens in new tab)`}
        >
          <ExternalLink className="size-4" /> Live Demo
        </a>
      ) : (
        <span className={pending} title="Live demo link not added yet">
          <ExternalLink className="size-4" /> Live demo coming soon
        </span>
      )}
    </div>
  );
}

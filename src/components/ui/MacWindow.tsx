import { Lock } from "lucide-react";
import { cn } from "@/lib/utils";

type Props = {
  /** Window title shown centred in the title bar. */
  title: string;
  /** If set, renders a Safari-style address pill instead of the title. */
  url?: string;
  children: React.ReactNode;
  className?: string;
  bodyClassName?: string;
};

/** macOS-style window: traffic lights, translucent title bar, rounded frame. */
export function MacWindow({ title, url, children, className, bodyClassName }: Props) {
  return (
    <div
      role="group"
      aria-label={title}
      className={cn(
        "relative overflow-hidden rounded-xl border border-border bg-surface shadow-[0_24px_70px_-24px_rgba(0,0,0,0.35)] backdrop-blur-lg",
        className,
      )}
    >
      <div className="relative flex h-11 items-center border-b border-border bg-surface-solid/60 px-4">
        <div aria-hidden="true" className="group/lights z-10 flex gap-2">
          <span className="size-3 rounded-full bg-[#ff5f57] ring-1 ring-black/10" />
          <span className="size-3 rounded-full bg-[#febc2e] ring-1 ring-black/10" />
          <span className="size-3 rounded-full bg-[#28c840] ring-1 ring-black/10" />
        </div>
        <div className="pointer-events-none absolute inset-x-0 flex justify-center px-20">
          {url ? (
            <span className="flex max-w-full items-center gap-1.5 truncate rounded-md border border-border bg-bg/60 px-3 py-1 font-mono text-[11px] text-muted">
              <Lock className="size-3 shrink-0" aria-hidden="true" />
              <span className="truncate">{url}</span>
            </span>
          ) : (
            <span className="truncate text-xs font-medium text-muted">{title}</span>
          )}
        </div>
      </div>
      <div className={bodyClassName ?? "p-5 sm:p-8"}>{children}</div>
    </div>
  );
}

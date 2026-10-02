import { ImageIcon } from "lucide-react";
import Image from "next/image";
import { MacWindow } from "@/components/ui/MacWindow";

export type Screenshot = {
  label: string;
  /** Path under /public, e.g. "/screenshots/complyra-search.jpg". Leave unset for a placeholder. */
  src?: string;
  width?: number;
  height?: number;
};

function Shot({ s, single }: { s: Screenshot; single: boolean }) {
  if (s.src) {
    return (
      <Image
        src={s.src}
        alt={s.label}
        width={s.width ?? 1280}
        height={s.height ?? 800}
        sizes={single ? "(min-width: 896px) 820px, 92vw" : "(min-width: 768px) 33vw, 100vw"}
        className="aspect-[16/10] w-full object-cover object-top"
      />
    );
  }
  return (
    <div className="flex aspect-[16/10] flex-col items-center justify-center gap-2 bg-zinc-950 text-zinc-500">
      <ImageIcon className="size-6" aria-hidden="true" />
      <span className="px-4 text-center font-mono text-xs">Screenshot placeholder</span>
    </div>
  );
}

export function ScreenshotGallery({ shots }: { shots: Screenshot[] }) {
  // One hero screenshot is shown inside a MacBook; several become a grid.
  if (shots.length === 1) {
    const s = shots[0];
    return (
      <figure>
        <MacWindow
          title="Complyra — Procurement Search"
          url="getcomplyra.com/app"
          bodyClassName="p-0"
          className="mx-auto max-w-4xl"
        >
          <Shot s={s} single />
        </MacWindow>
        <figcaption className="mt-4 text-center text-sm text-muted">
          {s.label}
        </figcaption>
      </figure>
    );
  }

  return (
    <ul className="grid gap-4 md:grid-cols-3">
      {shots.map((s) => (
        <li key={s.label}>
          <figure>
            <div className="overflow-hidden rounded-xl border border-border">
              <Shot s={s} single={false} />
            </div>
            <figcaption className="mt-2 text-sm text-muted">{s.label}</figcaption>
          </figure>
        </li>
      ))}
    </ul>
  );
}

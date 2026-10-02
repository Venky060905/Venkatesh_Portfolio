import { existsSync } from "node:fs";
import path from "node:path";
import { Check } from "lucide-react";
import { ArchitectureDiagram } from "@/components/project/ArchitectureDiagram";
import { ProjectLinks } from "@/components/project/ProjectLinks";
import { ScreenshotGallery } from "@/components/project/ScreenshotGallery";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { complyra } from "@/data/projects";

const SEARCH_SHOT = "screenshots/complyra-search.jpg";

function Label({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-mono text-xs uppercase tracking-widest text-subtle">
      {children}
    </h3>
  );
}

export function FeaturedProject() {
  return (
    <section
      id="featured"
      aria-labelledby="featured-heading"
      className="relative py-24 sm:py-28"
    >
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 h-full bg-gradient-to-b from-transparent via-[var(--glow)] to-transparent opacity-60"
      />
      <Container>
        <SectionHeading
          index="04"
          eyebrow="featured"
          title={`${complyra.name}: ${complyra.title}`}
          className="max-w-3xl"
        />

        <Reveal>
          <MacWindow
            title="Complyra"
            url="getcomplyra.com"
            className="animated-border"
            bodyClassName="p-6 sm:p-10"
          >
            <Badge className="mb-5">Featured project · Internship</Badge>
            <p className="max-w-3xl text-lg leading-relaxed text-fg">
              {complyra.role}
            </p>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <Label>The problem</Label>
                <p className="mt-3 leading-relaxed text-muted">{complyra.problem}</p>
              </div>
              <div>
                <Label>The solution</Label>
                <p className="mt-3 leading-relaxed text-muted">{complyra.solution}</p>
              </div>
            </div>

            <div className="mt-10 grid gap-10 lg:grid-cols-2">
              <div>
                <Label>My contributions</Label>
                <ul className="mt-4 space-y-2.5 text-sm text-muted">
                  {complyra.contributions.map((c) => (
                    <li key={c} className="flex gap-3">
                      <Check
                        className="mt-0.5 size-4 shrink-0 text-accent-from"
                        aria-hidden="true"
                      />
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Label>Platform capabilities</Label>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {complyra.capabilities.map((c) => (
                    <li
                      key={c}
                      className="rounded-lg border border-border bg-surface-solid px-2.5 py-1 text-xs text-muted"
                    >
                      {c}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-12">
              <Label>Architecture</Label>
              <div className="mt-4">
                <ArchitectureDiagram />
              </div>
            </div>

            <div className="mt-12">
              <Label>Screenshots</Label>
              <div className="mt-4">
                <ScreenshotGallery
                  shots={[
                    {
                      label: "AI procurement search",
                      // Shows the real screenshot once the file exists in /public
                      src: existsSync(
                        path.join(process.cwd(), "public", SEARCH_SHOT),
                      )
                        ? `/${SEARCH_SHOT}`
                        : undefined,
                      width: 1200,
                      height: 753,
                    },
                  ]}
                />
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
              <ul className="flex flex-wrap gap-2">
                {complyra.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-lg border border-border bg-surface-solid px-2.5 py-1 font-mono text-xs text-muted"
                  >
                    {t}
                  </li>
                ))}
              </ul>
              <ProjectLinks
                name={complyra.name}
                github={complyra.github}
                demo={complyra.demo}
              />
            </div>
          </MacWindow>
        </Reveal>
      </Container>
    </section>
  );
}

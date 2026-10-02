import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { Timeline } from "@/components/ui/Timeline";
import { experience } from "@/data/experience";

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="03"
          eyebrow="experience"
          title="Where I've worked"
          description="Two remote internships building and shipping backend and full stack features."
        />
        <MacWindow title="Experience — Terminal" bodyClassName="p-4 sm:p-8">
        <Timeline>
          <ol className="space-y-8 pl-6 sm:pl-8">
            {experience.map((e) => (
              <li key={e.company} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute -left-[1.85rem] top-2 size-3 sm:-left-[2.35rem]"
                >
                  {e.current && (
                    <span className="bg-gradient-accent absolute inset-0 animate-ping rounded-full opacity-60" />
                  )}
                  <span className="bg-gradient-accent absolute inset-0 rounded-full border-2 border-bg" />
                </span>
                <Reveal>
                  <SpotlightCard
                    as="article"
                    className="rounded-2xl p-6 sm:p-8"
                  >
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-fg">
                          {e.role}{" "}
                          <span className="text-muted">· {e.company}</span>
                        </h3>
                        <p className="mt-1 text-sm text-muted">{e.context}</p>
                      </div>
                      <p className="font-mono text-xs text-subtle">
                        {e.period} · {e.location}
                        {e.current && (
                          <span className="ml-2 rounded-full bg-emerald-500/15 px-2 py-0.5 text-emerald-600 dark:text-emerald-400">
                            current
                          </span>
                        )}
                      </p>
                    </div>
                    <ul className="mt-5 space-y-2.5 text-sm leading-relaxed text-muted">
                      {e.points.map((p) => (
                        <li key={p} className="flex gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2 size-1 shrink-0 rounded-full bg-accent-from"
                          />
                          {p}
                        </li>
                      ))}
                    </ul>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {e.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-lg border border-border bg-surface-solid px-2.5 py-1 font-mono text-xs text-muted transition-all hover:-translate-y-0.5 hover:border-accent-from/60 hover:text-fg"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ol>
        </Timeline>
        </MacWindow>
      </Container>
    </section>
  );
}

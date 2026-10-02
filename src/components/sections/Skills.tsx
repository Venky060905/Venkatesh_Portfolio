import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { skillGroups } from "@/data/skills";

export function Skills() {
  return (
    <section id="skills" aria-labelledby="skills-heading" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="skills"
          title="Tools I build with"
          description="Grouped by what I use them for. Everything here comes from projects and internships."
        />
        <MacWindow title="Skills" bodyClassName="p-4 sm:p-6">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g, i) => (
            <li key={g.title}>
              <Reveal delay={(i % 3) * 0.08} className="h-full">
                <SpotlightCard className="h-full rounded-2xl p-6">
                  <div className="flex items-center gap-3">
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-solid text-accent-from transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                      <g.icon className="size-4" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-medium text-fg">{g.title}</h3>
                      <p className="text-xs text-subtle">{g.description}</p>
                    </div>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li key={item}>
                        <span className="inline-block cursor-default rounded-lg border border-border bg-surface-solid px-2.5 py-1 font-mono text-xs text-muted transition-[transform,border-color,color] duration-200 hover:-translate-y-0.5 hover:scale-105 hover:border-accent-from/60 hover:text-fg">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </SpotlightCard>
              </Reveal>
            </li>
          ))}
        </ul>
        </MacWindow>
      </Container>
    </section>
  );
}

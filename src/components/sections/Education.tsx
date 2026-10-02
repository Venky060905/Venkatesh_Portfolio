import { Award, GraduationCap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { certifications, education } from "@/data/education";

export function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="06"
          eyebrow="education"
          title="Education & certifications"
        />
        <MacWindow title="Education & Certifications" bodyClassName="p-4 sm:p-6">
        <div className="grid gap-4 md:grid-cols-2">
          <Reveal className="h-full">
            <SpotlightCard className="h-full rounded-2xl p-6">
              <GraduationCap
                className="size-5 text-accent-from transition-transform duration-300 group-hover:scale-125 group-hover:-rotate-6"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-medium text-fg">{education.degree}</h3>
              <p className="mt-1 text-sm text-muted">{education.school}</p>
              <p className="mt-3 font-mono text-xs text-subtle">
                {education.period} · {education.location}
              </p>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={0.07} className="h-full">
            <SpotlightCard className="h-full rounded-2xl p-6">
              <Award
                className="size-5 text-accent-from transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                aria-hidden="true"
              />
              <h3 className="mt-4 font-medium text-fg">Certifications</h3>
              <ul className="mt-3 space-y-2 text-sm">
                {certifications.map((c) => (
                  <li key={c.name} className="flex justify-between gap-4">
                    <span className="text-fg">{c.name}</span>
                    <span className="font-mono text-xs text-subtle">{c.issuer}</span>
                  </li>
                ))}
              </ul>
            </SpotlightCard>
          </Reveal>
        </div>
        </MacWindow>
      </Container>
    </section>
  );
}

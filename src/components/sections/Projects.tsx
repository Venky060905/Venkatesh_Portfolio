import { ProjectCard } from "@/components/project/ProjectCard";
import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { projects } from "@/data/projects";

export function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 sm:py-28"
    >
      <Container>
        <SectionHeading
          index="05"
          eyebrow="projects"
          title="More projects"
          description="Beyond Complyra: a full stack application built end to end."
        />
        <MacWindow title="Projects — Finder" bodyClassName="p-4 sm:p-6">
        <ul className="grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <li key={p.slug} className={i === 0 ? "md:col-span-2" : undefined}>
              <Reveal className="h-full">
                <ProjectCard project={p} wide={i === 0} />
              </Reveal>
            </li>
          ))}
        </ul>
        </MacWindow>
      </Container>
    </section>
  );
}

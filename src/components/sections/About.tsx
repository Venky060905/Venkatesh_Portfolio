import { Bot, Cable, Server, Wrench } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { education } from "@/data/education";
import { profile } from "@/data/profile";

const focus = [
  {
    icon: Server,
    title: "Backend & APIs",
    text: "FastAPI and Django services with authentication, validation and PostgreSQL.",
  },
  {
    icon: Cable,
    title: "Full stack integration",
    text: "Connecting React and Next.js frontends to real APIs, end to end.",
  },
  {
    icon: Bot,
    title: "AI-powered features",
    text: "LLM APIs, semantic matching and vector search inside real products.",
  },
  {
    icon: Wrench,
    title: "Debugging & delivery",
    text: "Docker-based setups, API testing and fixing integration issues.",
  },
];

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="about"
          title="Building software that solves real problems"
        />
        <MacWindow title="About — Venkatesh Kothamasu">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal>
            <div className="space-y-4 text-base leading-relaxed text-muted">
              <p>
                I&apos;m a Python full stack developer who has worked on
                production-style applications across two internships, from an
                e-commerce dashboard to an AI-powered procurement and
                compliance platform.
              </p>
              <p>
                I like the whole path from database model to API to interface,
                and I care about code that is easy to test and debug.
              </p>
            </div>
            <dl className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">
                  Education
                </dt>
                <dd className="mt-1 text-fg">
                  B.Tech, Data Science &amp; AI · {education.school}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-xs uppercase tracking-wider text-subtle">
                  Based in
                </dt>
                <dd className="mt-1 text-fg">{profile.location}</dd>
              </div>
            </dl>
          </Reveal>

          <ul className="grid gap-4 sm:grid-cols-2">
            {focus.map((f, i) => (
              <li key={f.title}>
                <Reveal delay={i * 0.07} className="h-full">
                  <SpotlightCard className="h-full rounded-2xl p-5">
                    <f.icon
                      className="size-5 text-accent-from transition-transform duration-300 group-hover:scale-125 group-hover:rotate-6"
                      aria-hidden="true"
                    />
                    <h3 className="mt-4 font-medium text-fg">{f.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-muted">
                      {f.text}
                    </p>
                  </SpotlightCard>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
        </MacWindow>
      </Container>
    </section>
  );
}

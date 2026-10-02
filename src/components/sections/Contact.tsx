import { Mail } from "lucide-react";
import { ContactForm } from "@/components/sections/ContactForm";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

const channels = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "venkatesh-kothamasu", href: profile.linkedin, icon: LinkedinIcon },
  { label: "GitHub", value: "Venky060905", href: profile.github, icon: GithubIcon },
];

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="py-24 sm:py-28">
      <Container>
        <SectionHeading
          index="08"
          eyebrow="contact"
          title="Let's talk"
          description="I'm looking for Software Engineer and Full Stack Developer roles. The fastest way to reach me is email."
        />
        <MacWindow title={`New Message — To: ${profile.email}`}>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <ul className="space-y-3">
              {channels.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    {...(c.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="glass group flex items-center gap-4 rounded-2xl p-4 transition-all hover:-translate-y-0.5 hover:border-accent-from/50"
                  >
                    <span className="inline-flex size-10 items-center justify-center rounded-xl border border-border bg-surface-solid text-accent-from">
                      <c.icon className="size-4" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-xs uppercase tracking-wider text-subtle">
                        {c.label}
                      </span>
                      <span className="block truncate text-sm text-fg">{c.value}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08}>
            <ContactForm />
          </Reveal>
        </div>
        </MacWindow>
      </Container>
    </section>
  );
}

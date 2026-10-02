import { ArrowRight, ChevronDown, Mail } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Aurora } from "@/components/ui/Aurora";
import { AnimatedHeadline } from "@/components/ui/AnimatedHeadline";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Magnetic } from "@/components/ui/Magnetic";
import { Reveal } from "@/components/ui/Reveal";
import { RotatingText } from "@/components/ui/RotatingText";
import { profile } from "@/data/profile";
import { HeroPhoto } from "./HeroPhoto";

const roles = [
  "Full Stack Developer",
  "Backend Developer",
  "Python Developer",
  "Software Engineer",
];

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden pt-24 pb-24 sm:pt-32 sm:pb-32"
    >
      <Aurora />

      <Container className="relative grid items-center gap-14 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16">
        <div>
          <Reveal immediate>
            <Badge>
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-60 motion-reduce:animate-none" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              Open to Software Engineer &amp; Full Stack roles
            </Badge>
          </Reveal>

          <Reveal immediate delay={0.1}>
            <p className="mt-8 flex flex-wrap items-center gap-x-2 font-mono text-sm text-subtle">
              <span>
                Hi, I&apos;m {profile.firstName}{" "}
                <span aria-hidden="true" className="inline-block origin-[70%_70%] animate-[wave_2.4s_ease-in-out_infinite]">
                  👋
                </span>
              </span>
              <span aria-hidden="true">·</span>
              <RotatingText words={roles} />
            </p>
          </Reveal>

          <AnimatedHeadline
            id="hero-heading"
            className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl lg:text-6xl"
            segments={[
              { text: `${profile.title} ${profile.headline} with` },
              { text: profile.headlineStack + ".", gradient: true },
            ]}
          />

          <Reveal immediate delay={0.9}>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              {profile.description}
            </p>
          </Reveal>

          <Reveal immediate delay={1.05}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Magnetic>
                <Button href="#projects">
                  View Projects <ArrowRight className="size-4" />
                </Button>
              </Magnetic>
              <Magnetic>
                <Button href="#contact" variant="secondary">
                  <Mail className="size-4" /> Contact Me
                </Button>
              </Magnetic>
            </div>

            <div className="mt-6 flex items-center gap-4 text-muted">
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile (opens in new tab)"
                className="transition-all hover:-translate-y-0.5 hover:text-fg"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile (opens in new tab)"
                className="transition-all hover:-translate-y-0.5 hover:text-fg"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <span className="font-mono text-xs text-subtle">
                {profile.location}
              </span>
            </div>
          </Reveal>
        </div>

        <Reveal immediate delay={0.35}>
          <HeroPhoto />
        </Reveal>
      </Container>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-subtle transition-colors hover:text-fg sm:block"
      >
        <ChevronDown className="size-5 animate-bounce motion-reduce:animate-none" />
      </a>
    </section>
  );
}

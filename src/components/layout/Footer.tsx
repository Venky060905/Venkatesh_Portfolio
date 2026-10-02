import { Mail } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github, icon: GithubIcon, external: true },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinIcon, external: true },
  { label: "Email", href: `mailto:${profile.email}`, icon: Mail, external: false },
];

export function Footer() {
  return (
    <footer className="border-t border-border pb-32 pt-10">
      <Container className="flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-muted">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <ul className="flex items-center gap-5">
          {links.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                aria-label={l.label}
                {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="text-muted transition-colors hover:text-fg"
              >
                <l.icon className="size-5" />
              </a>
            </li>
          ))}
        </ul>
      </Container>
    </footer>
  );
}

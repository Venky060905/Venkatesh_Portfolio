import { Download, Eye, FileText } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { MacWindow } from "@/components/ui/MacWindow";
import { Reveal } from "@/components/ui/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { profile } from "@/data/profile";

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="py-24 sm:py-28">
      <Container>
        <SectionHeading index="07" eyebrow="resume" title="Resume" />
        <Reveal>
          <MacWindow title="resume.pdf — Preview">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-4">
                <span className="inline-flex size-14 items-center justify-center rounded-2xl bg-gradient-to-b from-rose-400 to-red-600 text-white shadow-lg">
                  <FileText className="size-6" aria-hidden="true" />
                </span>
                <div>
                  <p className="font-medium text-fg">{profile.name}</p>
                  <p className="text-sm text-muted">
                    resume.pdf · Python Full Stack Developer · 1 page
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button
                  href={profile.resumePath}
                  download="Venkatesh-Kothamasu-Resume.pdf"
                >
                  <Download className="size-4" /> Download Resume
                </Button>
                <Button
                  href={profile.resumePath}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="secondary"
                >
                  <Eye className="size-4" /> View Resume
                </Button>
              </div>
            </div>
          </MacWindow>
        </Reveal>
      </Container>
    </section>
  );
}

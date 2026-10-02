/**
 * Single source of truth for personal details and links.
 * Anything marked TODO is not yet provided and must be filled in by the owner.
 */
export const profile = {
  name: "Venkatesh Kothamasu",
  firstName: "Venkatesh",
  title: "Full Stack Developer",
  headline: "building AI-powered web applications",
  headlineStack: "Next.js and FastAPI",
  description:
    "Python full stack developer with internship experience shipping REST APIs, authentication, search and compliance workflows. I enjoy turning messy business processes into reliable software.",
  location: "Hyderabad, India",
  email: "kothamasuvenkatesh79@gmail.com",
  github: "https://github.com/Venky060905",
  linkedin: "https://www.linkedin.com/in/venkatesh-kothamasu-73542a272/",
  resumePath: "/resume.pdf",
  photoPath: "/profile.jpg",
  currentRole: {
    role: "Software Developer Intern",
    company: "Complyra",
  },
} as const;

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
  "http://localhost:3000";

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#featured" },
  { label: "Contact", href: "#contact" },
] as const;

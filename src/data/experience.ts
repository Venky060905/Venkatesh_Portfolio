export type ExperienceItem = {
  role: string;
  company: string;
  context: string;
  period: string;
  location: string;
  current?: boolean;
  points: string[];
  tech: string[];
};

/** Source: resume (venkatesh_resume_python_full_stack.pdf). */
export const experience: ExperienceItem[] = [
  {
    role: "Software Developer Intern",
    company: "Complyra",
    context: "AI-powered procurement & regulatory compliance platform",
    period: "Jan 2026 – Present",
    location: "Remote",
    current: true,
    points: [
      "Developed Python and FastAPI services for authentication, user management, AI-powered procurement search, product discovery, supplier workflows and compliance functionality.",
      "Designed and integrated REST APIs with React.js, Next.js and TypeScript for end-to-end workflows and protected application features.",
      "Implemented PostgreSQL-backed business logic: database models, CRUD operations, validation and supplier data.",
      "Contributed to compliance workflows covering 47 global regulations, and to AI search using LLM APIs, LangChain, semantic matching and vector search.",
      "Worked on supplier discovery, supplier identity matching, RFQ workflows and external platform integrations.",
      "Implemented and debugged JWT authentication, Redis-backed features and Docker-based development; tested APIs with Swagger.",
    ],
    tech: [
      "FastAPI",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "LangChain",
      "Docker",
    ],
  },
  {
    role: "Full Stack Developer Intern",
    company: "UVXYZ",
    context: "E-commerce application for Eruvaka Foods",
    period: "Jul 2025 – Dec 2025",
    location: "Remote",
    points: [
      "Developed a Django-based product management dashboard covering products, categories, inventory, cart and order workflows.",
      "Implemented CRUD operations, model relationships, server-side validation and business logic.",
      "Built dynamic cart functionality: add, update and remove products with quantity management and validation.",
      "Designed MySQL-backed data models; debugged and validated frontend–backend integration.",
    ],
    tech: ["Django", "MySQL", "Python", "JavaScript"],
  },
];

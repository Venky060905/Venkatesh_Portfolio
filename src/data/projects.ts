/**
 * Project content.
 *
 * `github` / `demo` are `null` where no URL has been provided yet. The UI renders
 * a clearly marked placeholder for those. Replace `null` with the real URL.
 *
 * Complyra, TaskFlow: details come from the resume.
 */
export type Project = {
  slug: string;
  name: string;
  tagline: string;
  problem: string;
  solution: string;
  features: string[];
  tech: string[];
  github: string | null;
  demo: string | null;
};

export const complyra = {
  name: "Complyra",
  title: "AI Procurement Search with Instant Compliance Checking",
  role: "Contributed to Complyra, an AI-powered procurement and compliance platform, as a Software Developer Intern.",
  problem:
    "Procurement teams search many suppliers and catalogs, then separately verify whether a product meets regulations. The two steps are slow, manual and easy to get wrong.",
  solution:
    "Complyra combines AI-powered product search with compliance checking, so buyers see regulatory fit while they search, then move straight to RFQs and supplier workflows.",
  contributions: [
    "FastAPI services and backend/API development",
    "Authentication and user management (JWT)",
    "AI search: LLM APIs, LangChain, semantic matching, vector search",
    "Compliance workflows covering 47 global regulations",
    "RFQ workflows and generation",
    "Supplier discovery and supplier identity matching",
  ],
  capabilities: [
    "AI-powered procurement search",
    "Compliance checking",
    "Regulatory verification",
    "Autonomous RFQ generation",
    "ERP export",
    "Demand forecasting",
    "Fast search experience",
    "Modern dashboard UI",
  ],
  tech: [
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "FastAPI",
    "SQLAlchemy",
    "PostgreSQL",
    "Redis",
    "LangChain",
    "pgvector",
    "Docker",
  ],
  github: null as string | null,
  demo: "https://getcomplyra.com" as string | null,
};

export const projects: Project[] = [
  {
    slug: "taskflow",
    name: "TaskFlow",
    tagline: "Full stack task management application",
    problem:
      "Teams and individuals need one place to track tasks with priorities and deadlines, with each user seeing only what they should.",
    solution:
      "A full-stack platform with a Django REST Framework API secured by JWT and role-based authorization, a React + Redux frontend, PostgreSQL storage, and a Docker deployment on AWS EC2.",
    features: [
      "Create, update and delete tasks with priorities and deadlines",
      "JWT authentication and protected endpoints",
      "Role-based authorization and request validation",
      "Responsive React UI with Redux state management",
      "Containerized with Docker, deployed on AWS EC2",
    ],
    tech: [
      "Django",
      "Django REST Framework",
      "React.js",
      "Redux",
      "PostgreSQL",
      "JWT",
      "Docker",
      "AWS EC2",
    ],
    github: null,
    demo: null,
  },
];

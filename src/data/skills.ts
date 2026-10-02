import {
  Brain,
  Code2,
  Database,
  Layout,
  Server,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type SkillGroup = {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Languages",
    description: "Core languages I write daily",
    icon: Code2,
    items: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    description: "APIs, auth and background work",
    icon: Server,
    items: [
      "FastAPI",
      "Django",
      "Django REST Framework",
      "REST APIs",
      "SQLAlchemy",
      "Alembic",
      "Celery",
    ],
  },
  {
    title: "Frontend",
    description: "Responsive, typed interfaces",
    icon: Layout,
    items: [
      "React.js",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
      "Tailwind CSS",
    ],
  },
  {
    title: "Databases",
    description: "Relational data and caching",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "SQLite", "Redis", "pgvector"],
  },
  {
    title: "AI & Automation",
    description: "LLM-powered product features",
    icon: Brain,
    items: [
      "LLM API integration",
      "LangChain",
      "Vector Search",
      "AI-powered Search",
      "Automation",
    ],
  },
  {
    title: "DevOps & Tools",
    description: "Shipping and debugging",
    icon: Wrench,
    items: [
      "Docker",
      "Docker Compose",
      "Git",
      "GitHub",
      "AWS EC2",
      "Linux",
      "JWT",
      "pytest",
      "Swagger",
      "VS Code",
    ],
  },
];

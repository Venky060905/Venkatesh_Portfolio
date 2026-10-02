import { SpotlightCard } from "@/components/ui/SpotlightCard";

type Node = { title: string; note: string; items: string[] };

/** Everything below comes from the technologies and duties listed on the resume. */
const flow: Node[] = [
  {
    title: "Client",
    note: "Next.js · React · TypeScript",
    items: ["Dashboard UI", "Protected app features", "Search, compliance & RFQ screens"],
  },
  {
    title: "API layer",
    note: "FastAPI · REST · Swagger",
    items: [
      "JWT authentication",
      "User management",
      "Product discovery",
      "Supplier workflows",
      "RFQ & compliance endpoints",
    ],
  },
  {
    title: "Data layer",
    note: "PostgreSQL · SQLAlchemy",
    items: ["Models, CRUD & validation", "Supplier & product data", "Redis-backed features"],
  },
];

const support: Node[] = [
  {
    title: "AI & search",
    note: "LLM APIs · LangChain",
    items: ["Semantic matching", "Vector search (pgvector)", "AI-powered procurement search"],
  },
  {
    title: "Compliance & integrations",
    note: "47 global regulations",
    items: [
      "Regulatory verification",
      "Supplier identity matching",
      "External platform integrations",
      "ERP export",
    ],
  },
  {
    title: "Infrastructure & quality",
    note: "Docker · Git · pytest",
    items: ["Docker / Docker Compose dev setup", "Git & GitHub workflow", "API testing with Swagger"],
  },
];

/** Animated connector: a dot travels from one layer to the next. */
function Connector() {
  return (
    <>
      <div
        aria-hidden="true"
        className="relative hidden h-px w-12 shrink-0 bg-border md:block"
      >
        <span className="bg-gradient-accent animate-flow-x absolute top-1/2 size-1.5 -translate-y-1/2 rounded-full shadow-[0_0_8px_var(--accent-to)]" />
      </div>
      <div
        aria-hidden="true"
        className="relative h-8 w-px shrink-0 bg-border md:hidden"
      >
        <span className="bg-gradient-accent animate-flow-y absolute left-1/2 size-1.5 -translate-x-1/2 rounded-full shadow-[0_0_8px_var(--accent-to)]" />
      </div>
    </>
  );
}

function Card({ node }: { node: Node }) {
  return (
    <SpotlightCard className="h-full w-full rounded-2xl p-5">
      <p className="font-mono text-xs uppercase tracking-wider text-accent-from">
        {node.title}
      </p>
      <p className="mt-1 text-sm font-medium text-fg">{node.note}</p>
      <ul className="mt-3 space-y-1.5 text-sm text-muted">
        {node.items.map((it) => (
          <li key={it} className="flex gap-2">
            <span
              aria-hidden="true"
              className="mt-2 size-1 shrink-0 rounded-full bg-accent-from"
            />
            {it}
          </li>
        ))}
      </ul>
    </SpotlightCard>
  );
}

export function ArchitectureDiagram() {
  return (
    <figure>
      {/* request flow */}
      <div className="flex flex-col items-center md:flex-row md:items-stretch">
        {flow.map((n, i) => (
          <div key={n.title} className="flex w-full flex-1 flex-col items-center md:flex-row">
            <Card node={n} />
            {i < flow.length - 1 && (
              <div className="flex items-center self-center">
                <Connector />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* supporting services */}
      <p className="my-5 flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-subtle">
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
        Powered by
        <span aria-hidden="true" className="h-px flex-1 bg-border" />
      </p>
      <div className="grid gap-4 md:grid-cols-3">
        {support.map((n) => (
          <Card key={n.title} node={n} />
        ))}
      </div>

      <figcaption className="mt-4 text-center font-mono text-xs text-subtle">
        Simplified overview of the stack I worked with
      </figcaption>
    </figure>
  );
}

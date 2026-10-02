import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200 focus-visible:outline-offset-2 active:scale-[0.98]";

const variants: Record<Variant, string> = {
  primary:
    "bg-fg text-bg hover:opacity-90 hover:-translate-y-0.5 shadow-sm",
  secondary:
    "glass text-fg hover:-translate-y-0.5 hover:border-accent-from/60",
  ghost: "text-muted hover:text-fg",
};

type ButtonProps = React.ComponentProps<"a"> & { variant?: Variant };

/** Anchor-based button: every CTA on this site navigates somewhere. */
export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}

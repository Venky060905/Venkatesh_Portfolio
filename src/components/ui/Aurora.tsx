/**
 * Static gradient glow + faded grid behind the hero. Decorative only.
 * Deliberately NOT animated: continuously moving layers force everything above
 * them (including blurred bars) to repaint on every frame.
 */
export function Aurora() {
  const blob = "pointer-events-none absolute rounded-full";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        className={`${blob} -left-40 -top-40 size-[44rem]`}
        style={{ background: "radial-gradient(closest-side, var(--accent-from), transparent)", opacity: 0.25 }}
      />
      <div
        className={`${blob} -right-32 top-0 size-[40rem]`}
        style={{ background: "radial-gradient(closest-side, var(--accent-to), transparent)", opacity: 0.2 }}
      />
    </div>
  );
}

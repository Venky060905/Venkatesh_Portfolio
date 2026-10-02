/**
 * Slowly drifting gradient blobs + faded grid. Decorative only.
 * Blobs are radial-gradients (no `filter: blur`), animated with transform only,
 * so they stay on the GPU compositor.
 */
export function Aurora() {
  const blob = "pointer-events-none absolute rounded-full will-change-transform";
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="bg-grid absolute inset-0 opacity-40" />
      <div
        className={`${blob} animate-aurora-a -left-40 -top-40 size-[44rem]`}
        style={{ background: "radial-gradient(closest-side, var(--accent-from), transparent)", opacity: 0.28 }}
      />
      <div
        className={`${blob} animate-aurora-b -right-32 top-0 size-[40rem]`}
        style={{ background: "radial-gradient(closest-side, var(--accent-to), transparent)", opacity: 0.22 }}
      />
      <div
        className={`${blob} animate-aurora-c bottom-[-10rem] left-1/3 size-[36rem]`}
        style={{ background: "radial-gradient(closest-side, #d946ef, transparent)", opacity: 0.12 }}
      />
    </div>
  );
}

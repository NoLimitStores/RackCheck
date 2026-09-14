/** Consistente sectie-wrapper met maximale breedte en verticale ruimte. */
export function Section({
  children,
  className = "",
  tone = "white",
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "muted" | "navy";
}) {
  const bg =
    tone === "muted" ? "bg-navy-50" : tone === "navy" ? "bg-navy-950 text-white" : "bg-white";
  return (
    <section className={`${bg} ${className}`}>
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-16">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = false,
  dark = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  dark?: boolean;
}) {
  return (
    <div className={`${center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-wide text-brand-600">{eyebrow}</p>
      )}
      <h2 className={`display mt-1 text-3xl sm:text-4xl ${dark ? "text-white" : "text-navy-950"}`}>
        {title}
      </h2>
      {intro && (
        <p className={`mt-3 text-lg ${dark ? "text-navy-200" : "text-navy-600"}`}>{intro}</p>
      )}
    </div>
  );
}

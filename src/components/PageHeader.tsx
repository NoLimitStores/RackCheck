import Breadcrumbs, { type Crumb } from "@/components/Breadcrumbs";

/** Donkere paginakop met kruimelpad, titel en optionele introtekst. */
export default function PageHeader({
  title,
  intro,
  crumbs,
  eyebrow,
  children,
  home,
}: {
  title: string;
  intro?: string;
  crumbs: Crumb[];
  eyebrow?: string;
  children?: React.ReactNode;
  home?: Crumb;
}) {
  return (
    <section className="bg-navy-950 text-white">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
        <Breadcrumbs items={crumbs} dark home={home} />
        {eyebrow && (
          <p className="mt-6 text-sm font-bold uppercase tracking-wide text-brand-400">
            {eyebrow}
          </p>
        )}
        <h1 className={`display text-3xl leading-tight sm:text-4xl lg:text-5xl ${eyebrow ? "mt-2" : "mt-6"}`}>
          {title}
        </h1>
        {intro && <p className="mt-4 max-w-2xl text-lg text-navy-200">{intro}</p>}
        {children && <div className="mt-6">{children}</div>}
      </div>
    </section>
  );
}

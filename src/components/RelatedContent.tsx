import Link from "next/link";
import { ArrowRightIcon } from "@/components/Icons";

export type RelatedItem = { title: string; href: string; desc?: string };

export default function RelatedContent({
  items,
  title = "Lees ook",
}: {
  items: RelatedItem[];
  title?: string;
}) {
  if (items.length === 0) return null;
  return (
    <section aria-labelledby="related-heading">
      <h2 id="related-heading" className="display text-2xl text-navy-950">
        {title}
      </h2>
      <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group flex flex-col rounded-lg border border-navy-200 bg-white p-4 transition-colors hover:border-brand-400"
          >
            <span className="font-bold text-navy-950 group-hover:text-brand-700">
              {item.title}
            </span>
            {item.desc && <span className="mt-1 text-sm text-navy-600">{item.desc}</span>}
            <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
              Bekijk
              <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}

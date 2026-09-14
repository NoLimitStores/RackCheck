import Link from "next/link";
import { site } from "@/lib/site";
import JsonLd from "@/components/JsonLd";

export type Crumb = { name: string; href: string };

/**
 * Breadcrumb-navigatie met BreadcrumbList-schema (rich snippets).
 * Volgt de URL-hiërarchie: Home > [Pillar] > [Huidige pagina].
 */
export default function Breadcrumbs({
  items,
  dark = false,
}: {
  items: Crumb[];
  dark?: boolean;
}) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...items];

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: `${site.url}${crumb.href}`,
    })),
  };

  return (
    <nav aria-label="Kruimelpad">
      <JsonLd data={schema} />
      <ol
        className={`flex flex-wrap items-center gap-1.5 text-xs font-medium ${
          dark ? "text-navy-300" : "text-navy-500"
        }`}
      >
        {all.map((crumb, i) => {
          const last = i === all.length - 1;
          return (
            <li key={crumb.href} className="flex items-center gap-1.5">
              {i > 0 && <span aria-hidden>/</span>}
              {last ? (
                <span
                  aria-current="page"
                  className={dark ? "text-brand-300" : "text-navy-900"}
                >
                  {crumb.name}
                </span>
              ) : (
                <Link href={crumb.href} className="hover:underline">
                  {crumb.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

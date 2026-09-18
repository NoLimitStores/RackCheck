import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { site } from "@/lib/site";
import {
  locales,
  defaultLocale,
  type Locale,
  pages,
  pageByLocalePath,
  alternatesFor,
} from "@/i18n/routes";
import { getDictionary } from "@/i18n/dictionaries";
import LocalizedPage from "@/components/LocalizedPage";

// Alleen vooraf gegenereerde taalpagina's worden geserveerd; overige paden 404.
export const dynamicParams = false;

const nonDefaultLocales = locales.filter((l) => l !== defaultLocale) as Locale[];

/** Segmenten van een pad, zonder taalprefix en trailing slash. */
function segmentsOf(path: string, locale: Locale): string[] {
  const trimmed = path.replace(new RegExp(`^/${locale}/?`), "").replace(/\/+$/, "");
  return trimmed === "" ? [] : trimmed.split("/");
}

export function generateStaticParams() {
  const params: { locale: string; slug: string[] }[] = [];
  for (const locale of nonDefaultLocales) {
    for (const page of pages) {
      if (page.available.includes(locale)) {
        params.push({ locale, slug: segmentsOf(page.paths[locale], locale) });
      }
    }
  }
  return params;
}

const ogLocaleFor: Record<Locale, string> = {
  nl: "nl_NL",
  en: "en_GB",
  de: "de_DE",
  fr: "fr_FR",
};

function resolve(localeParam: string, slug: string[] | undefined) {
  const locale = nonDefaultLocales.includes(localeParam as Locale)
    ? (localeParam as Locale)
    : undefined;
  if (!locale) return undefined;
  const page = pageByLocalePath(locale, slug ?? []);
  if (!page) return undefined;
  return { locale, page };
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}): Promise<Metadata> {
  const { locale: localeParam, slug } = await params;
  const found = resolve(localeParam, slug);
  if (!found) return {};
  const { locale, page } = found;
  const content = getDictionary(locale).pages[page.id];
  const { canonicalPath, languages } = alternatesFor(page.id, site.url);
  const ogImage = content.hero?.image ?? content.image?.src ?? "/images/magazijn-hero-inrijstelling.jpg";

  return {
    title: { absolute: content.metaTitle },
    description: content.metaDescription,
    alternates: { canonical: canonicalPath(locale), languages },
    openGraph: {
      type: "website",
      locale: ogLocaleFor[locale],
      siteName: site.name,
      title: content.metaTitle,
      description: content.metaDescription,
      url: canonicalPath(locale),
      images: [{ url: ogImage }],
    },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string; slug?: string[] }>;
}) {
  const { locale: localeParam, slug } = await params;
  const found = resolve(localeParam, slug);
  if (!found) notFound();
  return <LocalizedPage locale={found.locale} pageId={found.page.id} />;
}

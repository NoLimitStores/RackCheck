import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { artikelen } from "@/lib/kennisbank";
import { stellingtypen } from "@/lib/stellingtypen";
import { regios } from "@/lib/regios";
import { pages as i18nPages, defaultLocale, alternatesFor, type Locale } from "@/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.url.replace(/\/$/, "");
  const now = new Date();

  const staticPaths = [
    "/",
    "/stellinginspectie/",
    "/werkwijze/",
    "/prijzen/",
    "/over-rackcheck/",
    "/contact/",
    "/inspectie-aanvragen/",
    "/kennisbank/",
    "/oplossingen/",
    "/regio/",
    "/tweedehands-hovuma-stellingen/",
    "/privacy/",
    "/stelling-aangereden/",
    "/jaarlijkse-stellinginspectie/",
    "/duidelijk-inspectierapport/",
    "/onafhankelijke-stellinginspectie/",
    "/terugkerende-stellingschade/",
  ];

  const priorityFor = (path: string) =>
    path === "/" ? 1 : path.includes("/kennisbank/") ? 0.6 : path.includes("/regio/") ? 0.5 : 0.8;

  const entries: MetadataRoute.Sitemap = staticPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: priorityFor(path),
  }));

  stellingtypen.forEach((t) =>
    entries.push({ url: `${base}/inspecties/${t.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.8 })
  );

  regios.forEach((r) =>
    entries.push({ url: `${base}/regio/${r.slug}/`, lastModified: now, changeFrequency: "monthly", priority: 0.5 })
  );

  artikelen.forEach((a) =>
    entries.push({
      url: `${base}/kennisbank/${a.slug}/`,
      lastModified: new Date(a.updated),
      changeFrequency: "yearly",
      priority: 0.6,
    })
  );

  // Vertaalde pagina's (en/de/fr) met wederzijdse hreflang-verwijzingen.
  i18nPages.forEach((page) => {
    const { languages } = alternatesFor(page.id, site.url);
    page.available
      .filter((l): l is Locale => l !== defaultLocale)
      .forEach((locale) => {
        entries.push({
          url: `${base}${page.paths[locale]}`,
          lastModified: now,
          changeFrequency: "monthly",
          priority: page.id === "home" ? 0.9 : 0.7,
          alternates: { languages },
        });
      });
  });

  return entries;
}

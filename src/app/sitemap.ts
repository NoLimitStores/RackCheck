import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { artikelen } from "@/lib/kennisbank";
import { stellingtypen } from "@/lib/stellingtypen";
import { regios } from "@/lib/regios";

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

  return entries;
}

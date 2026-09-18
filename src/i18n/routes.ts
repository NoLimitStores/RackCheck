/**
 * Centrale meertalige routeconfiguratie voor RackCheck.
 *
 * - Nederlands (`nl`) is de primaire taal en staat op de root (geen prefix).
 * - Engels, Duits en Frans staan onder `/en/`, `/de/` en `/fr/` met vertaalde
 *   slugs. Iedere pagina heeft één stabiele `id` die alle taalvarianten koppelt.
 * - `available` bepaalt welke talen daadwerkelijk gepubliceerd zijn. hreflang en
 *   de taalwissel verwijzen uitsluitend naar bestaande taalversies.
 *
 * Een nieuwe vertaling toevoegen = de betreffende taal aan `available` toevoegen
 * en de content in de dictionaries aanvullen. Geen losse gekopieerde site.
 */
import { site } from "@/lib/site";

export const locales = ["nl", "en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "nl";

/** hreflang-code per taal (x-default verwijst naar Nederlands). */
export const hreflangFor: Record<Locale, string> = {
  nl: "nl-NL",
  en: "en",
  de: "de-DE",
  fr: "fr-FR",
};

/** Zichtbaar label in de taalkiezer. */
export const localeLabel: Record<Locale, string> = {
  nl: "NL",
  en: "EN",
  de: "DE",
  fr: "FR",
};

/** Volledige taalnaam (voor aria-labels / screenreaders). */
export const localeName: Record<Locale, string> = {
  nl: "Nederlands",
  en: "English",
  de: "Deutsch",
  fr: "Français",
};

export type PageId =
  | "home"
  | "inspection"
  | "about"
  | "contact"
  | "request"
  | "pricing"
  | "how-we-work";

export type PageDef = {
  id: PageId;
  /** Pad per taal, inclusief trailing slash. */
  paths: Record<Locale, string>;
  /** Talen waarin de pagina daadwerkelijk gepubliceerd is. */
  available: Locale[];
};

/**
 * Alle vertaalde commerciële pagina's uit fase 1. De Nederlandse paden komen
 * exact overeen met de bestaande (ongewijzigde) NL-URL's.
 */
export const pages: PageDef[] = [
  {
    id: "home",
    paths: { nl: "/", en: "/en/", de: "/de/", fr: "/fr/" },
    available: ["nl", "en", "de", "fr"],
  },
  {
    id: "inspection",
    paths: {
      nl: "/stellinginspectie/",
      en: "/en/racking-inspection/",
      de: "/de/regalpruefung/",
      fr: "/fr/inspection-rayonnages/",
    },
    available: ["nl", "en", "de", "fr"],
  },
  {
    id: "how-we-work",
    paths: {
      nl: "/werkwijze/",
      en: "/en/how-we-work/",
      de: "/de/arbeitsweise/",
      fr: "/fr/methode-de-travail/",
    },
    available: ["nl", "en", "de", "fr"],
  },
  {
    id: "pricing",
    paths: {
      nl: "/prijzen/",
      en: "/en/pricing/",
      de: "/de/preise/",
      fr: "/fr/tarifs/",
    },
    available: ["nl", "en", "de", "fr"],
  },
  {
    id: "about",
    paths: {
      nl: "/over-rackcheck/",
      en: "/en/about/",
      de: "/de/ueber-uns/",
      fr: "/fr/a-propos/",
    },
    available: ["nl", "en", "de", "fr"],
  },
  {
    id: "contact",
    paths: {
      nl: "/contact/",
      en: "/en/contact/",
      de: "/de/kontakt/",
      fr: "/fr/contact/",
    },
    available: ["nl", "en", "de", "fr"],
  },
  {
    id: "request",
    paths: {
      nl: "/inspectie-aanvragen/",
      en: "/en/request-inspection/",
      de: "/de/inspektion-anfragen/",
      fr: "/fr/demande-inspection/",
    },
    available: ["nl", "en", "de", "fr"],
  },
];

/** Leid de taal af uit een pad. Alles zonder taalprefix is Nederlands. */
export function localeFromPath(pathname: string): Locale {
  const seg = pathname.split("/").filter(Boolean)[0];
  return (locales as readonly string[]).includes(seg) && seg !== defaultLocale
    ? (seg as Locale)
    : defaultLocale;
}

const byId = new Map<PageId, PageDef>(pages.map((p) => [p.id, p]));

/** Zoek een paginadefinitie op id. */
export function getPage(id: PageId): PageDef {
  const p = byId.get(id);
  if (!p) throw new Error(`Onbekende pagina-id: ${id}`);
  return p;
}

/** Pad van een pagina in een specifieke taal (met fallback naar Nederlands). */
export function pathFor(id: PageId, locale: Locale): string {
  const p = getPage(id);
  return p.paths[locale] ?? p.paths.nl;
}

/** Is deze pagina in deze taal gepubliceerd? */
export function isAvailable(id: PageId, locale: Locale): boolean {
  return getPage(id).available.includes(locale);
}

/**
 * Zoek een pagina op basis van een niet-Nederlands pad onder /[locale]/.
 * `slugSegments` is bijv. ["pricing"] voor /en/pricing/ of [] voor /en/.
 */
export function pageByLocalePath(locale: Locale, slugSegments: string[]): PageDef | undefined {
  const target = `/${locale}/${slugSegments.join("/")}`.replace(/\/+$/, "/");
  const normalized = target.endsWith("/") ? target : `${target}/`;
  return pages.find((p) => p.available.includes(locale) && p.paths[locale] === normalized);
}

/** Zoek een pagina op basis van een willekeurig (NL of vertaald) pad. */
export function pageByAnyPath(pathname: string): { page: PageDef; locale: Locale } | undefined {
  const norm = pathname.endsWith("/") ? pathname : `${pathname}/`;
  for (const p of pages) {
    for (const l of locales) {
      if (p.available.includes(l) && p.paths[l] === norm) return { page: p, locale: l };
    }
  }
  return undefined;
}

/**
 * Doel-URL bij een taalwissel: dezelfde pagina in de gekozen taal wanneer die
 * bestaat, anders de homepage van die taal. Forceert nooit een taal.
 */
export function switchLocaleHref(pathname: string, target: Locale): string {
  const match = pageByAnyPath(pathname);
  if (match && isAvailable(match.page.id, target)) return match.page.paths[target];
  return pathFor("home", target);
}

/**
 * hreflang-alternates voor een pagina: alle gepubliceerde talen + x-default.
 * Paden zijn absoluut zodat ze direct in metadata gebruikt kunnen worden.
 */
export function alternatesFor(id: PageId, siteUrl: string): {
  canonicalPath: (locale: Locale) => string;
  languages: Record<string, string>;
} {
  const p = getPage(id);
  const base = siteUrl.replace(/\/$/, "");
  const languages: Record<string, string> = {};
  for (const l of p.available) {
    languages[hreflangFor[l]] = `${base}${p.paths[l]}`;
  }
  languages["x-default"] = `${base}${p.paths.nl}`;
  return {
    canonicalPath: (locale) => p.paths[locale] ?? p.paths.nl,
    languages,
  };
}

/**
 * Kant-en-klare `alternates` voor Next-metadata: canonical van de taal plus
 * wederzijdse hreflang-verwijzingen. Standaard voor de Nederlandse variant.
 */
export function pageAlternates(id: PageId, locale: Locale = "nl") {
  const { canonicalPath, languages } = alternatesFor(id, site.url);
  return { canonical: canonicalPath(locale), languages };
}

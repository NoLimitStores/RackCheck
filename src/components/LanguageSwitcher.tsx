"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  locales,
  localeLabel,
  localeName,
  localeFromPath,
  switchLocaleHref,
} from "@/i18n/routes";

const STORAGE_KEY = "rc_locale";

/**
 * Compacte, toegankelijke taalkiezer (NL / EN / DE / FR).
 * - De actieve taal is duidelijk gemarkeerd (aria-current).
 * - Bij een wissel gaan we naar dezelfde pagina in de gekozen taal, of anders
 *   naar de homepage van die taal (nooit geforceerd op basis van IP).
 * - De keuze wordt lokaal onthouden.
 */
export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname() || "/";
  const current = localeFromPath(pathname);

  const activeClass = dark ? "bg-white/15 text-white" : "bg-navy-100 text-navy-950";
  const idleClass = dark
    ? "text-white/70 hover:text-white hover:bg-white/10"
    : "text-navy-600 hover:text-brand-700 hover:bg-navy-50";

  return (
    <nav aria-label="Taalkeuze" className={`flex items-center rounded-full p-0.5 ${dark ? "bg-white/5" : "bg-navy-50/60"}`}>
      {locales.map((locale) => {
        const isActive = locale === current;
        return (
          <Link
            key={locale}
            href={switchLocaleHref(pathname, locale)}
            hrefLang={locale}
            aria-current={isActive ? "true" : undefined}
            aria-label={`${localeName[locale]}${isActive ? "" : ""}`}
            title={localeName[locale]}
            onClick={() => {
              try {
                localStorage.setItem(STORAGE_KEY, locale);
              } catch {
                // localStorage kan geblokkeerd zijn; voorkeur wordt dan niet bewaard.
              }
            }}
            className={`rounded-full px-2.5 py-1 text-xs font-bold uppercase tracking-wide transition-colors ${
              isActive ? activeClass : idleClass
            }`}
          >
            {localeLabel[locale]}
          </Link>
        );
      })}
    </nav>
  );
}

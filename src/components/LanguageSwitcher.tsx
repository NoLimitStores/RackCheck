"use client";

import { useEffect, useId, useRef, useState } from "react";
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
 * Compacte taalkiezer als dropdown (NL / EN / DE / FR).
 * - De knop toont de actieve taal; het menu toont de volledige taalnamen.
 * - Bij een wissel gaan we naar dezelfde pagina in de gekozen taal, of anders
 *   naar de homepage van die taal (bestaande fallback). Nooit geforceerd op IP.
 * - Volledig met toetsenbord te bedienen; sluit bij Escape en klik buiten.
 */
export default function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const pathname = usePathname() || "/";
  const current = localeFromPath(pathname);
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const btnColor = dark
    ? "text-white/90 hover:text-white border-white/20 hover:bg-white/10"
    : "text-navy-800 hover:text-brand-700 border-navy-200 hover:bg-navy-50";

  return (
    <div ref={containerRef} className="relative">
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        aria-label={`${localeName[current]}. ${dark ? "" : ""}`}
        className={`inline-flex items-center gap-1 rounded border px-2.5 py-1.5 text-sm font-bold transition-colors ${btnColor}`}
      >
        {localeLabel[current]}
        <svg viewBox="0 0 20 20" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} fill="currentColor" aria-hidden>
          <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label="Taalkeuze"
          className="absolute right-0 z-50 mt-2 min-w-[10rem] overflow-hidden rounded-lg border border-navy-200 bg-white py-1 shadow-lg"
        >
          {locales.map((locale) => {
            const isActive = locale === current;
            return (
              <li key={locale} role="none">
                <Link
                  role="menuitem"
                  href={switchLocaleHref(pathname, locale)}
                  hrefLang={locale}
                  aria-current={isActive ? "true" : undefined}
                  onClick={() => {
                    try {
                      localStorage.setItem(STORAGE_KEY, locale);
                    } catch {
                      // localStorage kan geblokkeerd zijn; voorkeur wordt dan niet bewaard.
                    }
                    setOpen(false);
                  }}
                  className={`flex items-center justify-between gap-4 px-3.5 py-2.5 text-sm ${
                    isActive
                      ? "font-bold text-brand-700"
                      : "font-medium text-navy-800 hover:bg-navy-50 hover:text-brand-700"
                  }`}
                >
                  <span>{localeName[locale]}</span>
                  <span className="text-xs font-bold uppercase tracking-wide text-navy-400">
                    {localeLabel[locale]}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}

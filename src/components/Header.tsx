"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, mainNav } from "@/lib/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localeFromPath, pathFor, locales, type PageId } from "@/i18n/routes";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";

/**
 * Eén consistente header voor de hele site, meertalig.
 * - De Nederlandse navigatie blijft ongewijzigd (mainNav).
 * - In andere talen wordt de navigatie opgebouwd uit de vertaalde pagina's.
 * - Op de homepagina's (NL/EN/DE/FR) ligt de header transparant over de hero.
 */
const logos = {
  color: { src: "/images/rackcheck-lockup.png", w: 1052, h: 678 },
  white: { src: "/images/rackcheck-lockup-white.png", w: 1679, h: 1080 },
};

const localizedNavOrder: PageId[] = ["inspection", "how-we-work", "pricing", "about", "contact"];

const homePaths = new Set(locales.map((l) => pathFor("home", l)));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathnameRaw = usePathname() || "/";
  const pathname =
    pathnameRaw === "/" ? "/" : pathnameRaw.endsWith("/") ? pathnameRaw : `${pathnameRaw}/`;
  const locale = localeFromPath(pathname);
  const dict = getDictionary(locale);
  const overHero = homePaths.has(pathname);

  useEffect(() => {
    // Zet de documenttaal client-side, zodat de site statisch kan blijven.
    try {
      document.documentElement.lang = locale;
    } catch {
      // no-op
    }
  }, [locale]);

  useEffect(() => {
    if (!overHero) return;
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [overHero]);

  const dark = overHero;
  const transparent = overHero && !open && !scrolled;
  const logo = dark ? logos.white : logos.color;

  const navItems =
    locale === "nl"
      ? mainNav.map((i) => ({ label: i.label, href: i.href }))
      : localizedNavOrder.map((id) => ({
          label:
            id === "inspection"
              ? dict.nav.inspection
              : id === "how-we-work"
                ? dict.nav.howWeWork
                : id === "pricing"
                  ? dict.nav.pricing
                  : id === "about"
                    ? dict.nav.about
                    : dict.nav.contact,
          href: pathFor(id, locale),
        }));

  const homeHref = pathFor("home", locale);
  const requestHref = pathFor("request", locale);
  const requestLabel = dict.nav.request;

  const shell = overHero ? "fixed inset-x-0 top-0" : "sticky top-0";
  const bg = transparent
    ? "border-b border-transparent bg-transparent"
    : dark
      ? "border-b border-white/10 bg-navy-950/92 backdrop-blur-xl"
      : "border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80";

  const navLink = dark ? "text-white/70 hover:text-white" : "text-navy-700 hover:text-brand-600";
  const navActive = dark ? "text-white" : "text-brand-600";
  const phoneLink = dark ? "text-white/90 hover:text-white" : "text-navy-800 hover:text-brand-600";
  const iconBtn = dark ? "text-white" : "text-navy-900";
  const menuPanel = dark
    ? "border-t border-white/10 bg-navy-950/95"
    : "border-t border-navy-100 bg-white";
  const menuLink = dark ? "text-white/80 hover:bg-white/5" : "text-navy-800 hover:bg-navy-50";

  return (
    <header className={`z-50 transition-colors duration-300 ${shell} ${bg}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href={homeHref} className="shrink-0" aria-label="RackCheck">
          <Image
            src={logo.src}
            alt="RackCheck magazijninspecties"
            width={logo.w}
            height={logo.h}
            priority
            className="h-11 w-auto sm:h-12"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded px-3 py-2 text-sm font-semibold transition-colors ${
                      active ? navActive : navLink
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher dark={dark} />
          <a href={site.phoneHref} className={`inline-flex items-center gap-2 text-sm font-semibold ${phoneLink}`}>
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
          <Link
            href={requestHref}
            className="inline-flex items-center gap-2 rounded bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
          >
            {requestLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher dark={dark} />
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`inline-flex h-11 w-11 items-center justify-center rounded ${iconBtn}`}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Menu sluiten" : "Menu openen"}
          >
            <span className="relative block h-4 w-6">
              <span className={`absolute left-0 top-0 h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-[7px] rotate-45" : ""}`} />
              <span className={`absolute left-0 top-[7px] h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
              <span className={`absolute left-0 top-[14px] h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-menu" className={`lg:hidden ${menuPanel}`}>
          <nav aria-label="Mobiel menu" className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            <ul className="flex flex-col">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`block rounded px-2 py-3 text-base font-semibold ${menuLink}`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={`mt-3 flex flex-col gap-2 border-t pt-3 ${dark ? "border-white/10" : "border-navy-100"}`}>
              <Link
                href={requestHref}
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 rounded bg-brand-600 px-4 py-3 text-sm font-bold text-white"
              >
                {requestLabel}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className={`inline-flex items-center justify-center gap-2 rounded border px-4 py-3 text-sm font-bold ${
                  dark ? "border-white/20 text-white" : "border-navy-200 text-navy-900"
                }`}
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

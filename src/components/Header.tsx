"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site, navDropdowns, mobileExtraNav } from "@/lib/site";
import { getDictionary } from "@/i18n/dictionaries";
import {
  localeFromPath,
  pathFor,
  locales,
  localeName,
  switchLocaleHref,
} from "@/i18n/routes";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import NavDropdown, { type NavItem } from "@/components/NavDropdown";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";

/**
 * Eén rustige, compacte header voor de hele site (meertalig).
 * - Desktop: Logo | Inspecties v | Oplossingen v | Prijzen | Contact | NL v | CTA
 * - In vertaalde talen tonen we alleen de vertaalde pagina's (geen dropdowns
 *   naar onvertaalde subpagina's).
 * - Mobiel: één hamburgermenu met uitklapbare groepen.
 */
const logos = {
  color: { src: "/images/rackcheck-lockup.png", w: 1052, h: 678 },
  white: { src: "/images/rackcheck-lockup-white.png", w: 1679, h: 1080 },
};

const homePaths = new Set(locales.map((l) => pathFor("home", l)));

export default function Header() {
  const [open, setOpen] = useState(false);
  const [group, setGroup] = useState<"inspecties" | "oplossingen" | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  const pathnameRaw = usePathname() || "/";
  const pathname =
    pathnameRaw === "/" ? "/" : pathnameRaw.endsWith("/") ? pathnameRaw : `${pathnameRaw}/`;
  const locale = localeFromPath(pathname);
  const dict = getDictionary(locale);
  const isNl = locale === "nl";
  const overHero = homePaths.has(pathname);

  useEffect(() => {
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

  // Body-scroll vergrendelen + Escape sluit het mobiele menu.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        hamburgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const dark = overHero;
  const transparent = overHero && !open && !scrolled;
  const logo = dark ? logos.white : logos.color;

  const homeHref = pathFor("home", locale);
  const requestHref = pathFor("request", locale);
  const requestLabel = dict.nav.request;

  const shell = overHero ? "fixed inset-x-0 top-0" : "sticky top-0";
  const bg = transparent
    ? "border-b border-transparent bg-transparent"
    : dark
      ? "border-b border-white/10 bg-navy-950/92 backdrop-blur-xl"
      : "border-b border-navy-100 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80";

  const navIdle = dark ? "text-white/70 hover:text-white" : "text-navy-700 hover:text-brand-600";
  const navActive = dark ? "text-white" : "text-brand-600";
  const iconBtn = dark ? "text-white" : "text-navy-900";

  // Losse hoofditems per taal (na de dropdowns).
  const flatItems: NavItem[] = isNl
    ? [
        { label: "Prijzen", href: "/prijzen/" },
        { label: "Contact", href: "/contact/" },
      ]
    : [
        { label: dict.nav.inspection, href: pathFor("inspection", locale) },
        { label: dict.nav.pricing, href: pathFor("pricing", locale) },
        { label: dict.nav.contact, href: pathFor("contact", locale) },
      ];

  const linkClass = (href: string) =>
    `rounded px-3 py-2 text-sm font-semibold transition-colors ${
      pathname === href ? navActive : navIdle
    }`;

  return (
    <header className={`z-50 transition-colors duration-300 ${shell} ${bg}`}>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded focus:bg-brand-600 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        {dict.nav.skipToContent}
      </a>

      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-3 px-4 sm:px-6">
        <Link href={homeHref} className="shrink-0" aria-label="RackCheck">
          <Image
            src={logo.src}
            alt="RackCheck magazijninspecties"
            width={logo.w}
            height={logo.h}
            priority
            className="h-10 w-auto sm:h-11"
          />
        </Link>

        <nav aria-label="Hoofdmenu" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {isNl && (
              <>
                <NavDropdown
                  label={navDropdowns.inspecties.label}
                  items={navDropdowns.inspecties.items}
                  pathname={pathname}
                  triggerIdle={navIdle}
                  triggerActive={navActive}
                />
                <NavDropdown
                  label={navDropdowns.oplossingen.label}
                  items={navDropdowns.oplossingen.items}
                  pathname={pathname}
                  triggerIdle={navIdle}
                  triggerActive={navActive}
                />
              </>
            )}
            {flatItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={pathname === item.href ? "page" : undefined}
                  className={linkClass(item.href)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher dark={dark} />
          <Link
            href={requestHref}
            className="inline-flex items-center gap-2 whitespace-nowrap rounded bg-brand-600 px-4 py-2.5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
          >
            {requestLabel}
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher dark={dark} />
          <button
            ref={hamburgerRef}
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
        <div
          id="mobile-menu"
          className="max-h-[calc(100svh-4rem)] overflow-y-auto border-t border-navy-100 bg-white lg:hidden"
        >
          <nav aria-label="Mobiel menu" className="mx-auto max-w-6xl px-4 py-4 sm:px-6">
            {/* 1. Hoofd-CTA */}
            <Link
              href={requestHref}
              onClick={() => setOpen(false)}
              className="flex min-h-11 items-center justify-center gap-2 rounded bg-brand-600 px-4 text-sm font-bold text-white"
            >
              {requestLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>

            <ul className="mt-3 flex flex-col divide-y divide-navy-100">
              {isNl ? (
                <>
                  <MobileGroup
                    label={navDropdowns.inspecties.label}
                    items={navDropdowns.inspecties.items}
                    pathname={pathname}
                    open={group === "inspecties"}
                    onToggle={() => setGroup((g) => (g === "inspecties" ? null : "inspecties"))}
                    onNavigate={() => setOpen(false)}
                  />
                  <MobileGroup
                    label={navDropdowns.oplossingen.label}
                    items={navDropdowns.oplossingen.items}
                    pathname={pathname}
                    open={group === "oplossingen"}
                    onToggle={() => setGroup((g) => (g === "oplossingen" ? null : "oplossingen"))}
                    onNavigate={() => setOpen(false)}
                  />
                  <MobileLink href="/prijzen/" label="Prijzen" pathname={pathname} onClick={() => setOpen(false)} />
                  <MobileLink href="/contact/" label="Contact" pathname={pathname} onClick={() => setOpen(false)} />
                  {mobileExtraNav.map((item) => (
                    <MobileLink key={item.href} href={item.href} label={item.label} pathname={pathname} onClick={() => setOpen(false)} />
                  ))}
                </>
              ) : (
                <>
                  <MobileLink href={pathFor("inspection", locale)} label={dict.nav.inspection} pathname={pathname} onClick={() => setOpen(false)} />
                  <MobileLink href={pathFor("pricing", locale)} label={dict.nav.pricing} pathname={pathname} onClick={() => setOpen(false)} />
                  <MobileLink href={pathFor("contact", locale)} label={dict.nav.contact} pathname={pathname} onClick={() => setOpen(false)} />
                  <MobileLink href={pathFor("about", locale)} label={dict.nav.about} pathname={pathname} onClick={() => setOpen(false)} />
                  <MobileLink href={pathFor("how-we-work", locale)} label={dict.nav.howWeWork} pathname={pathname} onClick={() => setOpen(false)} />
                </>
              )}
            </ul>

            {/* Taalkeuze */}
            <div className="mt-4 border-t border-navy-100 pt-4">
              <p className="px-1 text-xs font-bold uppercase tracking-wide text-navy-500">{dict.nav.langMenu}</p>
              <ul className="mt-2 grid grid-cols-2 gap-2">
                {locales.map((l) => {
                  const isActive = l === locale;
                  return (
                    <li key={l}>
                      <Link
                        href={switchLocaleHref(pathname, l)}
                        hrefLang={l}
                        aria-current={isActive ? "true" : undefined}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-11 items-center rounded border px-3 text-sm font-semibold ${
                          isActive ? "border-brand-400 bg-brand-50 text-brand-700" : "border-navy-200 text-navy-800"
                        }`}
                      >
                        {localeName[l]}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Telefoonnummer */}
            <a
              href={site.phoneHref}
              className="mt-4 flex min-h-11 items-center justify-center gap-2 rounded border border-navy-200 px-4 text-sm font-bold text-navy-900"
            >
              <PhoneIcon className="h-4 w-4 text-brand-600" />
              {site.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}

function MobileLink({
  href,
  label,
  pathname,
  onClick,
}: {
  href: string;
  label: string;
  pathname: string;
  onClick: () => void;
}) {
  const active = pathname === href;
  return (
    <li>
      <Link
        href={href}
        onClick={onClick}
        aria-current={active ? "page" : undefined}
        className={`flex min-h-11 items-center px-1 text-base font-semibold ${
          active ? "text-brand-700" : "text-navy-800"
        }`}
      >
        {label}
      </Link>
    </li>
  );
}

function MobileGroup({
  label,
  items,
  pathname,
  open,
  onToggle,
  onNavigate,
}: {
  label: string;
  items: readonly NavItem[];
  pathname: string;
  open: boolean;
  onToggle: () => void;
  onNavigate: () => void;
}) {
  const active = items.some((i) => i.href === pathname);
  const panelId = `mgroup-${label.toLowerCase().replace(/[^a-z]/g, "")}`;
  return (
    <li>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex min-h-11 w-full items-center justify-between px-1 text-base font-semibold ${
          active ? "text-brand-700" : "text-navy-800"
        }`}
      >
        {label}
        <svg viewBox="0 0 20 20" className={`h-4 w-4 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      {open && (
        <ul id={panelId} className="pb-2">
          {items.map((item) => {
            const isCurrent = item.href === pathname;
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={onNavigate}
                  aria-current={isCurrent ? "page" : undefined}
                  className={`flex min-h-11 items-center rounded pl-4 pr-1 text-[15px] ${
                    isCurrent ? "font-bold text-brand-700" : "font-medium text-navy-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
}

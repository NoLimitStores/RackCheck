"use client";

import { useEffect, useId, useRef, useState } from "react";
import Link from "next/link";

export type NavItem = { label: string; href: string };

/**
 * Toegankelijke desktop-dropdown voor de hoofdnavigatie. Opent op hover en op
 * klik/toetsenbord, sluit bij Escape en klik buiten. De links blijven gewone
 * Next.js-Links (crawlbaar). De trigger toont een actieve status wanneer de
 * huidige pagina binnen de dropdown valt.
 */
export default function NavDropdown({
  label,
  items,
  pathname,
  triggerIdle,
  triggerActive,
}: {
  label: string;
  items: readonly NavItem[];
  pathname: string;
  triggerIdle: string;
  triggerActive: string;
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLLIElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const menuId = useId();
  const active = items.some((i) => i.href === pathname);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) setOpen(false);
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

  return (
    <li
      ref={containerRef}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        ref={buttonRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={menuId}
        className={`inline-flex items-center gap-1 rounded px-3 py-2 text-sm font-semibold transition-colors ${
          active ? triggerActive : triggerIdle
        }`}
      >
        {label}
        <svg viewBox="0 0 20 20" className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} aria-hidden>
          <path d="M5.5 7.5 10 12l4.5-4.5" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {open && (
        <ul
          id={menuId}
          role="menu"
          aria-label={label}
          className="absolute left-0 z-50 mt-1 min-w-[16rem] overflow-hidden rounded-lg border border-navy-200 bg-white py-1 shadow-lg"
        >
          {items.map((item) => {
            const isCurrent = item.href === pathname;
            return (
              <li key={item.href} role="none">
                <Link
                  role="menuitem"
                  href={item.href}
                  aria-current={isCurrent ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block px-4 py-2.5 text-sm ${
                    isCurrent
                      ? "font-bold text-brand-700"
                      : "font-medium text-navy-800 hover:bg-navy-50 hover:text-brand-700"
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

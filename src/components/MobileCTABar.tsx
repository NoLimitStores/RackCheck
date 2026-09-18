"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import { getDictionary } from "@/i18n/dictionaries";
import { localeFromPath, pathFor } from "@/i18n/routes";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

/** Vaste actiebalk onderaan op mobiel. Meertalig via het huidige pad. */
export default function MobileCTABar() {
  const pathname = usePathname() || "/";
  const locale = localeFromPath(pathname);
  const dict = getDictionary(locale);

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-stretch gap-2 px-3 py-2">
        <a
          href={site.phoneHref}
          aria-label={`${dict.cta.phone} ${site.phoneDisplay}`}
          className="flex flex-1 items-center justify-center gap-2 rounded border border-navy-700 py-2.5 text-sm font-bold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          {dict.cta.phone}
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="flex flex-1 items-center justify-center gap-2 rounded border border-navy-700 py-2.5 text-sm font-bold text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          href={pathFor("request", locale)}
          className="flex flex-[1.4] items-center justify-center rounded bg-brand-500 py-2.5 text-sm font-bold text-white"
        >
          {dict.nav.request}
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon } from "@/components/Icons";

/** Vaste actiebalk onderaan op mobiel. Niet hinderlijk, wel altijd bereikbaar. */
export default function MobileCTABar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-navy-800 bg-navy-950/95 pb-[env(safe-area-inset-bottom)] backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-6xl items-stretch gap-2 px-3 py-2">
        <a
          href={site.phoneHref}
          aria-label={`Bel RackCheck op ${site.phoneDisplay}`}
          className="flex flex-1 items-center justify-center gap-2 rounded border border-navy-700 py-2.5 text-sm font-bold text-white"
        >
          <PhoneIcon className="h-4 w-4" />
          Bellen
        </a>
        <a
          href={site.whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Stuur RackCheck een WhatsApp-bericht"
          className="flex flex-1 items-center justify-center gap-2 rounded border border-navy-700 py-2.5 text-sm font-bold text-white"
        >
          <WhatsAppIcon className="h-4 w-4" />
          WhatsApp
        </a>
        <Link
          href="/inspectie-aanvragen/"
          className="flex flex-[1.4] items-center justify-center rounded bg-brand-500 py-2.5 text-sm font-bold text-white"
        >
          Inspectie aanvragen
        </Link>
      </div>
    </div>
  );
}

import Link from "next/link";
import Image from "next/image";
import { site, footerNav } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, MailIcon } from "@/components/Icons";

export default function Footer() {
  const year = new Date().getFullYear();
  const columns = Object.values(footerNav);

  return (
    <footer className="bg-navy-950 text-navy-200">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_repeat(4,1fr)]">
          <div>
            <Image
              src="/images/rackcheck-logo-white.png"
              alt="RackCheck logo"
              width={180}
              height={180}
              className="h-28 w-auto"
            />
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-navy-300">
              Onafhankelijke inspecties van magazijnstellingen. Een helder rapport,
              duidelijke prioriteiten en concreet vervolgadvies.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 hover:text-white">
                <PhoneIcon className="h-4 w-4 text-brand-400" />
                {site.phoneDisplay}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-white">
                <WhatsAppIcon className="h-4 w-4 text-brand-400" />
                WhatsApp
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 hover:text-white">
                <MailIcon className="h-4 w-4 text-brand-400" />
                {site.email}
              </a>
            </div>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <h2 className="text-sm font-bold uppercase tracking-wide text-white">
                {col.title}
              </h2>
              <ul className="mt-4 space-y-2 text-sm">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-navy-300 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-navy-800 pt-6 text-xs text-navy-400">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p>
              {site.name} verzorgt onafhankelijke stellinginspecties in {site.workingArea}.
              {site.kvk ? ` KvK: ${site.kvk}.` : ""}
            </p>
            <p>
              © {year} {site.legalName}. Alle rechten voorbehouden.{" "}
              <Link href="/privacy/" className="underline hover:text-white">
                Privacyverklaring
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

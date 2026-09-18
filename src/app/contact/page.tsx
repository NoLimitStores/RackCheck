import type { Metadata } from "next";
import { pageAlternates } from "@/i18n/routes";
import Image from "next/image";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import Inspecteurs from "@/components/Inspecteurs";
import { PhoneIcon, WhatsAppIcon, MailIcon, ClockIcon, ShieldIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact: neem contact op met RackCheck",
  description:
    "Neem contact op met RackCheck voor een onafhankelijke stellinginspectie. Bel, WhatsApp of mail ons, of vraag direct een inspectie aan.",
  alternates: pageAlternates("contact"),
};

export default function Page() {
  const heeftAdres = Boolean(site.address.street && site.address.city);

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Neem contact op"
        intro="Bel, WhatsApp of mail ons, of laat uw gegevens achter. Bij urgente schade helpen we u met voorrang."
        crumbs={[{ name: "Contact", href: "/contact/" }]}
      />

      <Section>
        <figure className="mb-10 overflow-hidden rounded-xl border border-navy-200">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/legbordstelling.jpg"
              alt="Legbordstelling met legborden en blauwe staanders in een magazijn"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-center"
            />
          </div>
        </figure>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="display text-2xl text-navy-950">Direct contact</h2>
            <div className="mt-6 space-y-3">
              <a href={site.phoneHref} className="flex items-center gap-3 rounded-lg border border-navy-200 bg-white p-4 hover:border-brand-400">
                <span className="grid h-10 w-10 place-items-center rounded bg-brand-50 text-brand-600"><PhoneIcon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">Telefoon</span>
                  <span className="font-bold text-navy-950">{site.phoneDisplay}</span>
                </span>
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 rounded-lg border border-navy-200 bg-white p-4 hover:border-brand-400">
                <span className="grid h-10 w-10 place-items-center rounded bg-brand-50 text-brand-600"><WhatsAppIcon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">WhatsApp</span>
                  <span className="font-bold text-navy-950">Stuur een bericht of foto&apos;s</span>
                </span>
              </a>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 rounded-lg border border-navy-200 bg-white p-4 hover:border-brand-400">
                <span className="grid h-10 w-10 place-items-center rounded bg-brand-50 text-brand-600"><MailIcon className="h-5 w-5" /></span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wide text-navy-500">E-mail</span>
                  <span className="font-bold text-navy-950">{site.email}</span>
                </span>
              </a>
            </div>

            <dl className="mt-8 space-y-4 rounded-lg border border-navy-200 bg-navy-50 p-6 text-sm">
              <div className="flex gap-3">
                <ShieldIcon className="h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="font-bold text-navy-950">Werkgebied</dt>
                  <dd className="text-navy-700">{site.workingArea}. Meerdere vestigingen kunnen gecombineerd worden ingepland.</dd>
                </div>
              </div>
              <div className="flex gap-3">
                <ClockIcon className="h-5 w-5 shrink-0 text-brand-600" />
                <div>
                  <dt className="font-bold text-navy-950">Bereikbaarheid</dt>
                  <dd className="text-navy-700">{site.openingHours}</dd>
                </div>
              </div>
            </dl>

            <div className="mt-6 rounded-lg border border-navy-200 p-6 text-sm text-navy-700">
              <p className="font-bold text-navy-950">Bedrijfsgegevens</p>
              {heeftAdres ? (
                <address className="mt-2 not-italic">
                  {site.legalName}<br />
                  {site.address.street}<br />
                  {[site.address.postalCode, site.address.city].filter(Boolean).join(" ")}<br />
                  {site.address.country}
                </address>
              ) : (
                <p className="mt-2 text-navy-500">
                  Adresgegevens worden binnenkort toegevoegd. Neem in de tussentijd
                  gerust telefonisch of per e-mail contact op.
                </p>
              )}
              <dl className="mt-3 space-y-0.5 text-navy-500">
                {site.kvk && <div><dt className="inline font-semibold">KvK:</dt> <dd className="inline">{site.kvk}</dd></div>}
                {site.btw && <div><dt className="inline font-semibold">Btw:</dt> <dd className="inline">{site.btw}</dd></div>}
                {site.iban && <div><dt className="inline font-semibold">IBAN:</dt> <dd className="inline">{site.iban}</dd></div>}
              </dl>
            </div>
          </div>

          <div className="rounded-lg border border-navy-200 bg-white p-6">
            <h2 className="display text-2xl text-navy-950">Stuur een bericht</h2>
            <p className="mt-1.5 text-sm text-navy-600">
              We reageren binnen één werkdag. Voor spoed belt u ons rechtstreeks.
            </p>
            <div className="mt-5">
              <LeadForm
                variant="compact"
                subject="Nieuwe contactaanvraag via RackCheck"
                formName="Contactaanvraag"
              />
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <Inspecteurs />
      </Section>
    </>
  );
}

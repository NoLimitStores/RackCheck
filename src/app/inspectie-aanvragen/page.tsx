import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import { PhoneIcon, WhatsAppIcon, CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Inspectie aanvragen: onafhankelijke stellinginspectie",
  description:
    "Vraag een onafhankelijke stellinginspectie aan bij RackCheck. Vul het formulier in, dan nemen we binnen één werkdag contact op. Bij spoed belt u ons direct.",
  alternates: { canonical: "/inspectie-aanvragen/" },
  robots: { index: true, follow: true },
};

const punten = [
  "Onafhankelijke beoordeling zonder verkoopbelang",
  "Rapport in principe binnen 24 uur",
  "Directe melding bij acuut gevaar",
  "Inspectie vanaf €395 per jaar",
  "Aanvragen is volledig vrijblijvend",
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Inspectie aanvragen"
        title="Vraag uw stellinginspectie aan"
        intro="Vul het formulier in met de gegevens van uw magazijn. We nemen binnen één werkdag contact met u op om de inspectie in te plannen en de prijs te bevestigen."
        crumbs={[{ name: "Inspectie aanvragen", href: "/inspectie-aanvragen/" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.6fr_1fr] lg:items-start">
          <div className="rounded-lg border border-navy-200 bg-white p-6 sm:p-8">
            <LeadForm variant="full" />
          </div>

          <aside className="space-y-6 lg:sticky lg:top-24">
            <figure className="overflow-hidden rounded-lg border border-navy-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/verankering-voetplaat-detail.jpg"
                  alt="Detail van de verankering en boutverbindingen van een stellingconstructie"
                  fill
                  sizes="(max-width: 1024px) 100vw, 400px"
                  className="object-cover"
                />
              </div>
            </figure>

            <div className="rounded-lg border border-navy-200 bg-navy-50 p-6">
              <h2 className="text-lg font-bold text-navy-950">Waarom RackCheck</h2>
              <ul className="mt-4 space-y-2.5 text-sm text-navy-800">
                {punten.map((p) => (
                  <li key={p} className="flex gap-2">
                    <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-amber-400/50 bg-amber-50 p-6">
              <h2 className="text-lg font-bold text-navy-950">Spoed na een aanrijding?</h2>
              <p className="mt-1.5 text-sm text-navy-700">
                Wacht bij acute schade niet op het formulier. Bel of WhatsApp ons direct,
                dan plannen we een spoedinspectie in.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded bg-navy-950 px-5 py-3 text-sm font-bold text-white hover:bg-navy-900">
                  <PhoneIcon className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
                <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded border border-navy-300 px-5 py-3 text-sm font-bold text-navy-900 hover:bg-white">
                  <WhatsAppIcon className="h-4 w-4" />
                  WhatsApp met foto&apos;s
                </a>
              </div>
            </div>
          </aside>
        </div>
      </Section>
    </>
  );
}

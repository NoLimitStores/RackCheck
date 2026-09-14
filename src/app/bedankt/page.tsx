import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { Section } from "@/components/Section";
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Bedankt voor uw aanvraag",
  description: "Uw inspectieaanvraag is ontvangen. RackCheck neemt binnen één werkdag contact met u op.",
  robots: { index: false, follow: true },
  alternates: { canonical: "/bedankt/" },
};

const stappen = [
  "We bekijken uw aanvraag en de gegevens van uw magazijn.",
  "We nemen binnen één werkdag telefonisch of per e-mail contact met u op.",
  "We plannen de inspectie in en bevestigen vooraf de prijs.",
];

export default function Page() {
  return (
    <>
      <section className="bg-navy-950 text-white">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <span aria-hidden className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-signal-groen">
            <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 13l4 4L19 7" />
            </svg>
          </span>
          <h1 className="display mt-6 text-3xl sm:text-4xl">Bedankt voor uw aanvraag</h1>
          <p className="mx-auto mt-4 max-w-xl text-navy-200">
            We hebben uw aanvraag ontvangen. Een van onze inspecteurs neemt binnen één
            werkdag contact met u op om de inspectie in te plannen.
          </p>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-2xl">
          <h2 className="display text-2xl text-navy-950">Wat gebeurt er nu?</h2>
          <ol className="mt-6 space-y-4">
            {stappen.map((s, i) => (
              <li key={s} className="flex gap-4">
                <span aria-hidden className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-brand-600 text-sm font-bold text-white">
                  {i + 1}
                </span>
                <p className="pt-1.5 text-navy-700">{s}</p>
              </li>
            ))}
          </ol>

          <div className="mt-10 rounded-lg border border-amber-400/50 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-navy-950">Gaat het om urgente schade?</h2>
            <p className="mt-1.5 text-sm text-navy-700">
              Wacht bij een acuut onveilige situatie niet op ons telefoontje. Bel of
              WhatsApp ons direct, dan handelen we met voorrang.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded bg-navy-950 px-5 py-3 text-sm font-bold text-white hover:bg-navy-900">
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <a href={site.whatsappHref} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 rounded border border-navy-300 px-5 py-3 text-sm font-bold text-navy-900 hover:bg-white">
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/kennisbank/" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800">
              Lees intussen de kennisbank
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <Link href="/" className="inline-flex items-center gap-1.5 text-sm font-bold text-navy-700 hover:text-navy-900">
              Terug naar de homepage
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}

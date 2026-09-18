import type { Metadata } from "next";
import { pageAlternates } from "@/i18n/routes";
import Link from "next/link";
import Image from "next/image";
import { priceIncludes, priceFactors, startingPrice } from "@/lib/pricing";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import FAQ from "@/components/FAQ";
import RelatedContent from "@/components/RelatedContent";
import CTASection from "@/components/CTASection";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Prijzen stellinginspectie: inspectie vanaf €395 per jaar",
  description:
    "Een stellinginspectie bij RackCheck kost vanaf €395 per jaar excl. btw. De exacte prijs bepalen we op basis van uw situatie en bevestigen we vooraf. Bekijk wat inbegrepen is.",
  alternates: pageAlternates("pricing"),
};

const faq = [
  { q: "Wat kost een stellinginspectie?", a: `Een inspectie start vanaf €${startingPrice} per jaar excl. btw. De uiteindelijke prijs hangt af van de grootte van uw magazijn, het aantal en type stellingen en het aantal locaties. We bepalen die op basis van uw situatie en bevestigen de prijs vooraf.` },
  { q: "Is de prijs inclusief herstel?", a: "Nee. De prijs geldt voor de onafhankelijke inspectie en het rapport. Herstel is een apart traject met een eigen voorstel, zodat de beoordeling onafhankelijk blijft." },
  { q: "Krijg ik korting bij meerdere vestigingen?", a: "Meerdere locaties gecombineerd inplannen scheelt reistijd en levert vaak een gunstiger totaalprijs op. Vraag een prijs aan voor uw situatie." },
  { q: "Zijn de prijzen inclusief btw?", a: "Nee, het vanaf-tarief is exclusief btw." },
  { q: "Hoe krijg ik een exacte prijs?", a: "Vraag vrijblijvend een prijs aan via het formulier of bel ons. Op basis van uw magazijn en stellingen bevestigen we vooraf een vaste prijs." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Prijzen"
        title="Inspectie vanaf €395 per jaar"
        intro="De exacte prijs bepalen we op basis van uw situatie en bevestigen we vooraf. Vooraf duidelijk wat u betaalt, zonder verrassingen achteraf."
        crumbs={[{ name: "Prijzen", href: "/prijzen/" }]}
      />

      <Section>
        <AnswerBox question>
          Een stellinginspectie bij RackCheck kost vanaf €{startingPrice} per jaar
          exclusief btw. De exacte prijs hangt af van de grootte van uw magazijn, het
          aantal en type stellingen en het aantal locaties. We bepalen die op basis van
          uw situatie en bevestigen de prijs vooraf, zodat u niet voor verrassingen komt
          te staan.
        </AnswerBox>
        <div className="mt-6">
          <Link
            href="/inspectie-aanvragen/"
            className="inline-flex items-center justify-center gap-2 rounded bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-700"
          >
            Vraag een vaste prijs aan
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>

        <figure className="mt-10 overflow-hidden rounded-xl border border-navy-200">
          <div className="relative aspect-[16/9]">
            <Image
              src="/images/magazijn-palletstellingen-overzicht.jpg"
              alt="Overzicht van volgeladen palletstellingen in een magazijn"
              fill
              sizes="(max-width: 1024px) 100vw, 1024px"
              className="object-cover"
            />
          </div>
          <figcaption className="bg-navy-50 px-4 py-3 text-sm text-navy-600">
            De prijs hangt af van de grootte van uw magazijn en het aantal en type
            stellingen. Op basis daarvan bevestigen we vooraf een vaste prijs.
          </figcaption>
        </figure>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Inbegrepen" title="Wat zit er bij de inspectie in?" />
            <ul className="mt-6 space-y-2.5">
              {priceIncludes.map((item) => (
                <li key={item} className="flex gap-2.5 text-navy-800">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Factoren" title="Wat bepaalt de prijs?" />
            <div className="mt-6 space-y-4">
              {priceFactors.map((f) => (
                <div key={f.title} className="rounded-lg border border-navy-100 bg-white p-5">
                  <h3 className="font-bold text-navy-950">{f.title}</h3>
                  <p className="mt-1.5 text-sm text-navy-600">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <FAQ items={faq} />
        </div>
      </Section>

      <Section tone="muted">
        <RelatedContent
          items={[
            { title: "Wat kost een stellinginspectie?", href: "/kennisbank/kosten-stellinginspectie/", desc: "Uitgebreide uitleg over de kosten." },
            { title: "Stellinginspectie", href: "/stellinginspectie/", desc: "Wat de inspectie inhoudt." },
            { title: "Inspectie aanvragen", href: "/inspectie-aanvragen/", desc: "Vraag een vaste prijs aan." },
          ]}
        />
      </Section>

      <CTASection />
    </>
  );
}

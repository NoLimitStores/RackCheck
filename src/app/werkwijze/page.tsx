import type { Metadata } from "next";
import { pageAlternates } from "@/i18n/routes";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { processSteps } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import RelatedContent from "@/components/RelatedContent";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ClockIcon, DocumentIcon, WrenchIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Werkwijze: van aanvraag tot rapport in zeven stappen",
  description:
    "Zo verloopt een stellinginspectie bij RackCheck: intake, planning, inspectie op locatie, directe melding bij gevaar, rapport binnen 24 uur en eventueel herstelvoorstel.",
  alternates: pageAlternates("how-we-work"),
};

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "Zo verloopt een stellinginspectie bij RackCheck",
  step: processSteps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.title,
    text: s.text,
  })),
};

const beloftes = [
  { icon: WrenchIcon, title: "Directe melding bij gevaar", text: "Acuut onveilige situaties melden we tijdens de inspectie, niet pas in het rapport." },
  { icon: DocumentIcon, title: "Rapport binnen 24 uur", text: "In principe binnen een dag een helder rapport met prioriteiten en vervolgstappen." },
  { icon: ClockIcon, title: "Herstelvoorstel binnen twee weken", text: "Wilt u herstel, dan streven we naar een apart voorstel binnen twee weken." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={howToSchema} />
      <PageHeader
        eyebrow="Werkwijze"
        title="Van aanvraag tot rapport in zeven stappen"
        intro="Een helder proces, van de eerste intake tot een eventuele herbeoordeling na herstel. Inspectie en herstel blijven inhoudelijk gescheiden."
        crumbs={[{ name: "Werkwijze", href: "/werkwijze/" }]}
      />

      <Section>
        <AnswerBox question>
          Het inspectieproces van RackCheck bestaat uit zeven stappen: aanvraag en
          intake, planning, inspectie op locatie, directe terugkoppeling bij urgent
          gevaar, een rapport in principe binnen 24 uur, opvolging met eventueel een
          apart herstelvoorstel en een herbeoordeling na herstel. Zo houdt u de regie
          en blijft de beoordeling onafhankelijk.
        </AnswerBox>

        <figure className="mx-auto mt-8 max-w-3xl overflow-hidden rounded-xl border border-navy-200">
          <div className="relative aspect-[16/10]">
            <Image
              src="/images/verankering-voetplaat-detail.jpg"
              alt="Detail van de verankering en boutverbindingen aan de voet van een stellingconstructie"
              fill
              sizes="(max-width: 768px) 100vw, 768px"
              className="object-cover object-center"
            />
          </div>
          <figcaption className="bg-navy-50 px-4 py-3 text-sm text-navy-600">
            Tijdens de inspectie beoordelen we ook de details: verankering,
            boutverbindingen en de voetplaten waarop de constructie rust.
          </figcaption>
        </figure>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {processSteps.map((step, i) => (
            <div key={step.title} className="flex gap-4">
              <span
                aria-hidden
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-950 text-base font-bold text-white"
              >
                {i + 1}
              </span>
              <div>
                <h2 className="text-lg font-bold text-navy-950">{step.title}</h2>
                <p className="mt-1 text-navy-700">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Onze belofte"
          title="Wat u van de oplevering kunt verwachten"
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {beloftes.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-lg border border-navy-100 bg-white p-6">
              <span aria-hidden className="grid h-11 w-11 place-items-center rounded bg-brand-50 text-brand-600">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-3 font-bold text-navy-950">{title}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Herstel apart geregeld"
              title="Inspectie en herstel blijven gescheiden"
            />
            <div className="content mt-4 max-w-none">
              <p>
                RackCheck beoordeelt uw stellingen onafhankelijk. Eventuele
                herstelwerkzaamheden of onderdelen bieden we pas na de inspectie aan, in
                een apart traject. Zo weet u zeker dat de beoordeling niet wordt gekleurd
                door een verkoopbelang.
              </p>
              <p>
                Afhankelijk van het merk kunnen onderdelen worden verkregen via de
                fabrikant, dealer of een geschikte leverancier. Kan een onbekend of niet
                meer leverbaar merk niet verantwoord worden hersteld, dan geven we dat
                transparant aan en stellen we waar mogelijk een technisch verantwoord
                alternatief voor.
              </p>
            </div>
            <Link
              href="/onafhankelijke-stellinginspectie/"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Meer over onze onafhankelijkheid
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-lg border border-navy-200 bg-navy-50 p-6">
            <h3 className="font-bold text-navy-950">Na de inspectie</h3>
            <ol className="mt-4 space-y-3 text-sm text-navy-700">
              <li><span className="font-bold text-navy-950">1.</span> U ontvangt het rapport met prioriteiten.</li>
              <li><span className="font-bold text-navy-950">2.</span> U kiest zelf of en door wie u laat herstellen.</li>
              <li><span className="font-bold text-navy-950">3.</span> Op verzoek stellen we een apart herstelvoorstel op.</li>
              <li><span className="font-bold text-navy-950">4.</span> Na herstel kunnen we de secties herbeoordelen.</li>
            </ol>
            <p className="mt-4 text-xs text-navy-500">
              U houdt de regie. Bel {site.phoneDisplay} voor vragen over uw situatie.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <RelatedContent
          items={[
            { title: "Stellinginspectie", href: "/stellinginspectie/", desc: "De hoofddienst en controlepunten." },
            { title: "Duidelijk inspectierapport", href: "/duidelijk-inspectierapport/", desc: "Wat er in het rapport staat." },
            { title: "Prijzen", href: "/prijzen/", desc: "Inspectie vanaf €395 per jaar." },
          ]}
        />
      </Section>

      <CTASection />
    </>
  );
}

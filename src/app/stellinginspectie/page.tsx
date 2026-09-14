import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { controlepunten } from "@/lib/content";
import { stellingtypen } from "@/lib/stellingtypen";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import ProcessSteps from "@/components/ProcessSteps";
import PrijsVanaf from "@/components/PrijsVanaf";
import SchadeClassificatie from "@/components/SchadeClassificatie";
import RelatedContent from "@/components/RelatedContent";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Stellinginspectie: onafhankelijke keuring van magazijnstellingen",
  description:
    "RackCheck voert onafhankelijke stellinginspecties uit conform NEN-EN 15635. Wat wordt gecontroleerd, wanneer inspectie nodig is en wat er in het rapport staat.",
  alternates: { canonical: "/stellinginspectie/" },
};

const faq = [
  { q: "Wat is een stellinginspectie?", a: "Een stellinginspectie is een deskundige beoordeling van de veiligheid van uw magazijnstellingen. De inspecteur controleert alle dragende en veiligheidsrelevante onderdelen, classificeert de bevindingen en levert een rapport met prioriteiten en vervolgstappen." },
  { q: "Hoe lang duurt een inspectie?", a: "Van ongeveer twee uur voor een klein magazijn tot een volledige dag voor een zeer groot of complex magazijn. De duur hangt af van de omvang, het aantal stellingen en de bereikbaarheid." },
  { q: "Moet de operatie stilliggen?", a: "In de meeste gevallen niet. De inspecteur stemt de route af op uw magazijn. Alleen bij acuut gevaar vragen we een sectie tijdelijk vrij te maken." },
  { q: "Ontvang ik een certificaat of sticker?", a: "U ontvangt een inspectierapport met de bevindingen en classificaties. Dat rapport onderbouwt uw dossier en uw zorgplicht." },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Stellinginspectie",
  serviceType: "Inspectie van magazijnstellingen",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: { "@type": "Country", name: "Nederland" },
  description:
    "Onafhankelijke inspectie van magazijnstellingen conform NEN-EN 15635, met een helder rapport en concrete vervolgstappen.",
};

export default function Page() {
  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHeader
        eyebrow="Hoofddienst"
        title="Stellinginspectie"
        intro="Onafhankelijke inspectie van uw magazijnstellingen, met een helder rapport, duidelijke prioriteiten en concreet vervolgadvies."
        crumbs={[{ name: "Stellinginspectie", href: "/stellinginspectie/" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-start">
          <div className="content max-w-none">
            <AnswerBox question>
              Een stellinginspectie is een deskundige beoordeling van de veiligheid van
              uw magazijnstellingen conform NEN-EN 15635. RackCheck controleert alle
              bereikbare onderdelen, classificeert elke bevinding als groen, oranje of
              rood en levert in principe binnen 24 uur een rapport met concrete
              prioriteiten en vervolgstappen.
            </AnswerBox>
            <h2>Waarom een onafhankelijke inspectie?</h2>
            <p>
              Magazijnstellingen dragen dag in dag uit zware lasten en krijgen te maken
              met heftruckverkeer. Schade ontstaat vaak geleidelijk of onopgemerkt. Een
              periodieke inspectie brengt die schade in beeld voordat ze gevaarlijk
              wordt. Omdat onze beoordeling losstaat van herstelverkoop, keuren we niet
              onnodig af: u krijgt duidelijkheid over wat veilig is, wat hersteld moet
              worden en wat kan wachten.
            </p>
            <h2>Wanneer is een inspectie nodig?</h2>
            <ul>
              <li>Als de jaarlijkse inspectie is verlopen of niet is ingepland.</li>
              <li>Na een heftruckaanrijding of ander incident.</li>
              <li>Na installatie, verplaatsing of wijziging van een stelling.</li>
              <li>Bij twijfel over een eerder rapport of een second opinion.</li>
              <li>Als dezelfde schade steeds terugkomt.</li>
            </ul>
          </div>
          <aside className="rounded-lg border border-navy-200 bg-navy-50 p-6">
            <h2 className="text-lg font-bold text-navy-950">In het kort</h2>
            <ul className="mt-4 space-y-2.5 text-sm text-navy-800">
              {[
                "Onafhankelijke beoordeling zonder verkoopbelang",
                "Rapport in principe binnen 24 uur",
                "Classificatie groen, oranje en rood",
                "Directe melding bij acuut gevaar",
                "Voor verschillende merken en typen",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {t}
                </li>
              ))}
            </ul>
            <Link
              href="/inspectie-aanvragen/"
              className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded bg-brand-600 px-5 py-3 text-sm font-bold text-white hover:bg-brand-700"
            >
              Inspectie aanvragen
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,420px)_1fr] lg:gap-12">
          <div className="relative mx-auto aspect-square w-full max-w-[420px] overflow-hidden rounded-xl border border-navy-200 lg:mx-0 lg:max-w-none">
            <Image
              src="/images/magazijn-palletstellingen-overzicht.jpg"
              alt="Magazijn met hoge, volledig gevulde palletstellingen"
              fill
              sizes="420px"
              className="object-cover"
            />
          </div>
          <div>
            <SectionHeading
              eyebrow="In de praktijk"
              title="Van enkele stellingen tot een volledig distributiecentrum"
            />
            <p className="mt-4 text-navy-700">
              Of u nu een handvol palletstellingen heeft of duizenden strekkende meters:
              RackCheck beoordeelt alle bereikbare stellingen en stemt de inspectie af op
              de omvang en indeling van uw magazijn. In de meeste gevallen kan het werk
              gewoon doorgaan tijdens de inspectie.
            </p>
            <Link
              href="/inspectie-aanvragen/"
              className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Inspectie aanvragen
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Wat wordt gecontroleerd?" title="De controlepunten" />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {controlepunten.map((c) => (
            <li key={c.title} className="rounded-lg border border-navy-100 bg-white p-4">
              <div className="flex items-center gap-2">
                <CheckIcon className="h-4 w-4 text-brand-600" />
                <span className="font-bold text-navy-950">{c.title}</span>
              </div>
              <p className="mt-1 text-sm text-navy-600">{c.text}</p>
            </li>
          ))}
        </ul>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Welke typen stellingen"
          title="Inspectie per stellingtype"
          intro="Elk stellingtype heeft eigen controlepunten. Bekijk de aanpak per type."
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {stellingtypen.map((t) => (
            <Link
              key={t.slug}
              href={`/inspecties/${t.slug}/`}
              className="group rounded-lg border border-navy-200 bg-white p-5 transition-colors hover:border-brand-400"
            >
              <h3 className="font-bold text-navy-950 group-hover:text-brand-700">{t.naam}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{t.korteNaam} en varianten.</p>
              <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                Bekijk
                <ArrowRightIcon className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
        <p className="mt-5 text-sm text-navy-600">
          Ook entresolvloeren, bordessen, doorrol- en shuttlesystemen kunnen worden
          beoordeeld. Neem hiervoor contact op, dan bespreken we de mogelijkheden.
        </p>

        <figure className="mt-8 overflow-hidden rounded-xl border border-navy-200">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/bordes-entresolvloer.jpg"
              alt="Bordes met legbordstellingen en een toegangstrap in een magazijn"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
          <figcaption className="bg-navy-50 px-4 py-3 text-sm text-navy-600">
            Naast palletstellingen beoordelen we ook bordessen en entresolvloeren, met
            aandacht voor leuningen, trappen en de draagconstructie.
          </figcaption>
        </figure>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading eyebrow="Het rapport" title="Wat staat er in het rapport?" />
            <div className="content mt-4 max-w-none">
              <p>
                U ontvangt een overzichtelijk rapport dat leest als werkdocument. Per
                bevinding ziet u de omschrijving, de exacte locatie, een foto, de
                classificatie, de oorzaak, de benodigde actie en een termijn. Bovenaan
                staat een samenvatting met de urgente punten.
              </p>
              <p>
                Zo weet uw team direct waar het aan de slag moet en met welke
                prioriteit, en kunt u de opvolging aantonen.
              </p>
            </div>
            <Link
              href="/duidelijk-inspectierapport/"
              className="mt-2 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Bekijk een voorbeeldrapport
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <SchadeClassificatie />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr]">
          <SectionHeading
            eyebrow="Hoe verloopt de inspectie?"
            title="Zeven duidelijke stappen"
            intro="Van intake tot een eventuele herbeoordeling na herstel."
          />
          <ProcessSteps />
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Normen en verantwoordelijkheden"
          title="Waar de inspectie op gebaseerd is"
        />
        <div className="content mt-4 max-w-3xl">
          <p>
            De inspectie sluit aan op NEN-EN 15635, de Europese norm voor het veilig
            gebruiken en inspecteren van magazijnstellingen. Die norm geeft invulling
            aan de wettelijke zorgplicht uit de Arbowet en het Arbobesluit. De norm
            zelf is geen wet, maar wie de norm volgt, maakt aantoonbaar dat de
            stellingen veilig worden gebruikt en gecontroleerd.
          </p>
          <p>
            Binnen uw organisatie is het verstandig een verantwoordelijke aan te wijzen
            (de PRSES) die schade laat melden, interne controles organiseert en de
            deskundige inspectie op tijd inplant. Onze inspectie en het rapport
            ondersteunen die rol.
          </p>
          <p>
            Meer achtergrond leest u in de kennisbank:{" "}
            <Link href="/kennisbank/nen-en-15635/">Wat is NEN-EN 15635?</Link>,{" "}
            <Link href="/kennisbank/wat-is-een-prses/">Wat is een PRSES?</Link> en{" "}
            <Link href="/kennisbank/is-stellingkeuring-verplicht/">Is een stellingkeuring verplicht?</Link>
          </p>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Prijzen"
          title="Wat kost een inspectie?"
          intro="De exacte prijs bepalen we op basis van uw situatie en bevestigen we vooraf. Op de prijzenpagina leest u wat er inbegrepen is."
        />
        <div className="mt-8">
          <PrijsVanaf />
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <FAQ items={faq} />
        </div>
      </Section>

      <Section>
        <RelatedContent
          items={[
            { title: "Onafhankelijke stellinginspectie", href: "/onafhankelijke-stellinginspectie/", desc: "Beoordeling zonder verkoopbelang." },
            { title: "Jaarlijkse stellinginspectie", href: "/jaarlijkse-stellinginspectie/", desc: "Status bepalen en ritme opzetten." },
            { title: "Werkwijze", href: "/werkwijze/", desc: "Het inspectieproces stap voor stap." },
          ]}
        />
      </Section>

      <CTASection />
    </>
  );
}

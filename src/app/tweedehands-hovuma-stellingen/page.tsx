import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import RelatedContent from "@/components/RelatedContent";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Tweedehands Hovuma-stelling laten inspecteren",
  description:
    "Gebruikte Hovuma-stellingen gekocht of herplaatst? Laat de staat, montage en aanwezige schade professioneel beoordelen door RackCheck.",
  alternates: { canonical: "/tweedehands-hovuma-stellingen/" },
  openGraph: {
    title: "Tweedehands Hovuma-stelling laten inspecteren | RackCheck",
    description:
      "Laat gebruikte Hovuma-stellingen onafhankelijk beoordelen op staat, montage, verankering en aanwezige schade voordat u ze weer in gebruik neemt.",
    url: "/tweedehands-hovuma-stellingen/",
    images: [{ url: "/images/hovuma-palletstelling-magazijn.jpg" }],
  },
};

const wanneer = [
  {
    title: "Vóór ingebruikname",
    text: "U heeft gebruikte stellingen gekocht en wilt vóór het vullen zeker weten dat ze veilig belast kunnen worden.",
  },
  {
    title: "Na demontage en herplaatsing",
    text: "De stellingen zijn gedemonteerd en elders opnieuw opgebouwd. Montage, verankering en borging worden opnieuw beoordeeld.",
  },
  {
    title: "Na uitbreiding of wijziging",
    text: "U heeft een bestaande opstelling uitgebreid of aangepast en wilt de nieuwe situatie laten controleren.",
  },
];

const aandachtspunten = [
  "Zichtbare schade, deuken en vervorming aan staanders, liggers en schoren",
  "Ontbrekende of vervangen onderdelen, zoals borgpennen en liggers",
  "Montage, waterpasstelling en de aansluiting van de onderdelen op elkaar",
  "Verankering in de vloer en de staat van de voetplaten",
  "Borging van liggers en de volledigheid van stabiliteitsverbanden",
  "Herkenbaarheid van het systeem en de onderdelen",
  "Aanwezigheid en leesbaarheid van belastinggegevens",
];

const faq = [
  {
    q: "Verkoopt RackCheck ook tweedehands Hovuma-stellingen?",
    a: "Deze pagina gaat over inspectie en beoordeling. Onze dienst is het onafhankelijk keuren van de staat en het veilige gebruik. Levering of herstel is een apart traject en staat los van de inspectie.",
  },
  {
    q: "Kunt u onderdelen van verschillende stellingen combineren?",
    a: "Het combineren van onderdelen uit verschillende systemen of generaties is niet zomaar veilig. Wij beoordelen de staat en benoemen het als onderdelen niet bij elkaar lijken te horen of niet herkenbaar zijn. Voor de vraag of een combinatie constructief is toegestaan, is fabrikantdocumentatie of een constructieve onderbouwing nodig.",
  },
  {
    q: "Wat als het merk of type niet meer te herkennen is?",
    a: "Dan benoemen we dat transparant in het rapport. We beoordelen de constructie en de staat, en geven aan wanneer aanvullende informatie of een constructieve beoordeling nodig is.",
  },
  {
    q: "Is een inspectie van gebruikte stellingen hetzelfde als een nieuwe berekening?",
    a: "Nee. Een inspectie is een visuele, deskundige beoordeling van de staat en het veilige gebruik. Een constructieve berekening of herberekening is een aparte stap die door een constructeur wordt gedaan; wij geven aan wanneer dat verstandig is.",
  },
];

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Inspectie van tweedehands Hovuma-stellingen",
    serviceType: "Inspectie van gebruikte magazijnstellingen",
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "Nederland" },
    description:
      "Onafhankelijke inspectie van gebruikte Hovuma-stellingen, gericht op staat, montage, verankering en aanwezige schade voor of na herplaatsing.",
  };

  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHeader
        eyebrow="Specialistische inspectie"
        title="Inspectie van tweedehands Hovuma-stellingen"
        intro="Gebruikte Hovuma-stellingen gekocht, herplaatst of uitgebreid? RackCheck beoordeelt onafhankelijk de staat, de montage en de aanwezige schade, zodat u ze met een gerust hart in gebruik neemt."
        crumbs={[
          { name: "Stellinginspectie", href: "/stellinginspectie/" },
          { name: "Tweedehands Hovuma-stellingen", href: "/tweedehands-hovuma-stellingen/" },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg border border-navy-200">
            <Image
              src="/images/hovuma-palletstelling-magazijn.jpg"
              alt="Hal met rijen gebruikte Hovuma-palletstellingen voordat ze in gebruik worden genomen"
              width={1280}
              height={960}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <AnswerBox question>
              Bij gebruikte stellingen kent u de geschiedenis niet: eerdere belasting,
              aanrijdingen, reparaties of ontbrekende onderdelen zijn niet altijd
              zichtbaar. Een onafhankelijke inspectie brengt de staat, de montage en de
              veilige toepassing in beeld voordat u de stellingen weer belast. RackCheck
              beoordeelt de situatie objectief en legt de aandachtspunten vast in een
              helder rapport.
            </AnswerBox>
            <h2 className="mt-6 text-xl font-bold text-navy-950">
              Waarom gebruikte stellingen extra aandacht vragen
            </h2>
            <p className="mt-2 text-navy-700">
              Nieuwe stellingen worden gemonteerd volgens een bekend plan en met
              bijbehorende belastinggegevens. Bij tweedehands stellingen ontbreekt die
              zekerheid vaak. Onderdelen kunnen tijdens eerder gebruik zijn beschadigd,
              vervangen of aangepast, en bij demontage en transport kan schade
              ontstaan. Daarom is een beoordeling vóór ingebruikname verstandig.
            </p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Wanneer inspecteren"
          title="Wanneer laat u gebruikte Hovuma-stellingen keuren?"
        />
        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          {wanneer.map((w) => (
            <div key={w.title} className="rounded-lg border border-navy-100 bg-white p-6">
              <h3 className="font-bold text-navy-950">{w.title}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{w.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Waar we op letten"
              title="Staat, montage en onderdelen"
            />
            <ul className="mt-6 space-y-2.5">
              {aandachtspunten.map((p) => (
                <li key={p} className="flex gap-2.5 text-navy-800">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <p className="mt-6 text-navy-700">
              We herkennen waar mogelijk het systeem en de onderdelen. Lijken onderdelen
              niet bij elkaar te horen, of zijn ze niet te herkennen, dan benoemen we dat.
              Of onderdelen uit verschillende systemen of generaties veilig gecombineerd
              mogen worden, kunnen we niet vaststellen zonder fabrikantdocumentatie of een
              constructieve onderbouwing.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2">
            <figure className="overflow-hidden rounded-xl border border-navy-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hovuma-stelling-verankering.jpg"
                  alt="Detail van de voet en verankering van een stellingstaander op een betonvloer"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-navy-600">
                De voet en de verankering vertellen veel over de montage en de stabiliteit.
              </figcaption>
            </figure>
            <figure className="overflow-hidden rounded-xl border border-navy-200">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/images/hovuma-aanrijdbeveiliging.jpg"
                  alt="Aanrijdbeveiliging aan de voet van een gebruikte palletstelling"
                  fill
                  sizes="(max-width: 640px) 100vw, 300px"
                  className="object-cover"
                />
              </div>
              <figcaption className="px-4 py-3 text-sm text-navy-600">
                Aanwezige aanrijdbeveiliging en de staat daarvan nemen we mee in de beoordeling.
              </figcaption>
            </figure>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Wat is wat"
              title="Inspectie, berekening en herstel"
            />
            <div className="mt-4 space-y-3 text-navy-700">
              <p>
                Een <strong className="text-navy-900">inspectie</strong> is een visuele,
                deskundige beoordeling van de staat en het veilige gebruik. Een{" "}
                <strong className="text-navy-900">constructieve berekening</strong> bepaalt
                de toegestane belasting en is het werk van een constructeur; die voeren wij
                niet uit, maar we geven aan wanneer dat verstandig is.{" "}
                <strong className="text-navy-900">Herstel</strong> ten slotte is een apart
                traject dat pas na de inspectie volgt, zodat de beoordeling onafhankelijk
                blijft.
              </p>
              <p>
                Zo weet u precies wat u van de inspectie mag verwachten en welke
                vervolgstappen bij uw situatie horen.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-navy-200 bg-white p-6">
            <h3 className="font-bold text-navy-950">Wat u vooraf aanlevert</h3>
            <p className="mt-1.5 text-sm text-navy-600">
              Hoe meer we vooraf weten, hoe gerichter de inspectie. Handig om bij de hand
              te hebben:
            </p>
            <ul className="mt-4 space-y-2 text-sm text-navy-800">
              {[
                "Wat u weet over herkomst en eerder gebruik",
                "Eventuele merk-, type- of belastinggegevens",
                "Foto's van de opstelling of van bekende schade",
                "Of de stellingen al zijn opgebouwd of nog los liggen",
              ].map((x) => (
                <li key={x} className="flex gap-2">
                  <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  {x}
                </li>
              ))}
            </ul>
            <h3 className="mt-6 font-bold text-navy-950">Wat u na de inspectie ontvangt</h3>
            <p className="mt-1.5 text-sm text-navy-700">
              Een helder rapport met per bevinding de locatie, een foto, de classificatie
              en een concrete vervolgstap, zodat u weet wat veilig is, wat aandacht vraagt
              en wat eventueel hersteld of nagerekend moet worden.
            </p>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-8 lg:grid-cols-[1.4fr_1fr] lg:items-center">
          <div>
            <SectionHeading
              eyebrow="Nulinspectie"
              title="Begin met een duidelijk startpunt"
            />
            <p className="mt-4 text-navy-700">
              Bij gebruikte stellingen is een nulinspectie verstandig: een beoordeling van
              de staat op het moment dat u ze in gebruik neemt. Zo legt u een duidelijk
              startpunt vast, kunt u latere schade beter herkennen en bouwt u vanaf het
              begin aan een compleet dossier. Vanuit die nulmeting spreken we een passend
              inspectieritme met u af.
            </p>
            <Link
              href="/jaarlijkse-stellinginspectie/"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Meer over een vast inspectieritme
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
          <div className="rounded-lg border border-navy-200 bg-navy-50 p-6">
            <h3 className="font-bold text-navy-950">Onafhankelijk beoordeeld</h3>
            <p className="mt-2 text-sm text-navy-700">
              Onze inspectie staat los van verkoop en herstel. U krijgt een eerlijk oordeel
              over de staat van uw gebruikte stellingen, zonder verkoopbelang.
            </p>
            <Link
              href="/onafhankelijke-stellinginspectie/"
              className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Zo werkt onze onafhankelijkheid
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <FAQ items={faq} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Inspectie aanvragen"
              title="Laat uw gebruikte Hovuma-stellingen beoordelen"
              intro="Laat uw gegevens achter, dan nemen we binnen één werkdag contact met u op."
            />
            <RelatedContent
              title="Ook interessant"
              items={[
                { title: "Palletstelling inspecteren", href: "/inspecties/palletstelling/", desc: "De hoofdvorm van opslag en de controlepunten." },
                { title: "Onafhankelijke inspectie", href: "/onafhankelijke-stellinginspectie/", desc: "Beoordeling zonder verkoopbelang." },
                { title: "Prijzen", href: "/prijzen/", desc: "Wat een inspectie kost." },
              ]}
            />
          </div>
          <div className="rounded-lg border border-navy-200 bg-white p-6">
            <LeadForm variant="compact" defaultReden="Nieuwe of verplaatste stellingen" />
          </div>
        </div>
      </Section>

      <CTASection title="Zekerheid over uw gebruikte stellingen?" />
    </>
  );
}

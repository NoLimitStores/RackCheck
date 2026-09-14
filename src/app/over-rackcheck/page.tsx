import type { Metadata } from "next";
import Image from "next/image";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import RelatedContent from "@/components/RelatedContent";
import CTASection from "@/components/CTASection";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Over RackCheck: onafhankelijke stellinginspecties",
  description:
    "RackCheck staat voor onafhankelijke stellinginspecties zonder verkoopgedreven afkeur. Lees onze visie, werkwijze en kwaliteitsprincipes.",
  alternates: { canonical: "/over-rackcheck/" },
};

const principes = [
  { title: "Onafhankelijk", text: "De inspectiebeoordeling staat los van herstelverkoop. We keuren niet af om onderdelen te slijten." },
  { title: "Praktijkgericht", text: "We denken vanuit uw magazijn en operatie, met een rapport dat leest als werkdocument." },
  { title: "Transparant", text: "Heldere criteria, vaste prijzen en een navolgbaar oordeel dat u kunt uitleggen aan uw team." },
  { title: "Zorgvuldig", text: "Ernstige schade bagatelliseren we nooit, en gebruikssporen keuren we niet onnodig af." },
];

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Over RackCheck"
        title="Onafhankelijke inspecties, zonder verkoopbelang"
        intro="RackCheck helpt magazijnen aantoonbaar veilig te blijven. Met een heldere beoordeling, concrete prioriteiten en praktisch vervolgadvies."
        crumbs={[{ name: "Over RackCheck", href: "/over-rackcheck/" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div>
            <AnswerBox question>
              RackCheck voert onafhankelijke inspecties uit van magazijnstellingen in
              Nederland. Onze positionering is eenvoudig: geen verkoopgedreven afkeur,
              wel duidelijkheid over wat veilig is, wat hersteld moet worden en wat kan
              wachten. Herstel bieden we pas na de inspectie aan, in een apart traject.
            </AnswerBox>
            <h2 className="mt-8 text-xl font-bold text-navy-950">Onze visie</h2>
            <p className="mt-2 text-navy-700">
              Magazijnveiligheid mag niet afhangen van wie het meeste wil verkopen. Een
              inspectie hoort duidelijkheid te geven: waar staat u, wat is urgent en wat
              kan wachten. Wij geloven dat een inspecteur waarde toevoegt met een helder
              oordeel en praktisch advies, niet met een lange lijst afgekeurde
              onderdelen.
            </p>
            <h2 className="mt-6 text-xl font-bold text-navy-950">Waarom RackCheck</h2>
            <p className="mt-2 text-navy-700">
              We combineren vakkennis van stellingconstructies met oog voor uw operatie.
              Het resultaat is een rapport dat uw team direct kan gebruiken en dat uw
              zorgplicht onderbouwt. Zo wordt veiligheid een werkbaar onderdeel van uw
              bedrijfsvoering.
            </p>
          </div>
          <div className="overflow-hidden rounded-lg border border-navy-200">
            <Image
              src="/images/draagarmstelling.jpg"
              alt="Draagarmstelling met zwarte draagarmen voor langgoed in een magazijn"
              width={700}
              height={800}
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          eyebrow="Kwaliteitsprincipes"
          title="Waar wij voor staan"
          intro="Vier principes die bepalen hoe wij werken."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2">
          {principes.map((p) => (
            <div key={p.title} className="flex gap-4 rounded-lg border border-navy-100 bg-white p-5">
              <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded bg-brand-50 text-brand-600">
                <CheckIcon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="font-bold text-navy-950">{p.title}</h3>
                <p className="mt-1 text-sm text-navy-600">{p.text}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="mx-auto max-w-3xl rounded-lg border border-navy-200 bg-navy-50 p-6 text-center">
          <p className="text-navy-700">
            {site.author.review}
          </p>
          <p className="mt-3 text-sm font-semibold text-navy-950">
            {site.author.name}, {site.author.role}
          </p>
        </div>
      </Section>

      <Section tone="muted">
        <RelatedContent
          items={[
            { title: "Onafhankelijke stellinginspectie", href: "/onafhankelijke-stellinginspectie/", desc: "Beoordeling zonder verkoopbelang." },
            { title: "Werkwijze", href: "/werkwijze/", desc: "Ons inspectieproces stap voor stap." },
            { title: "Contact", href: "/contact/", desc: "Neem contact met ons op." },
          ]}
        />
      </Section>

      <CTASection />
    </>
  );
}

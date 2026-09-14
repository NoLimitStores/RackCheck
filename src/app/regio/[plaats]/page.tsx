import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { regios, getRegio } from "@/lib/regios";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import LeadForm from "@/components/LeadForm";
import { stellingtypen } from "@/lib/stellingtypen";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return regios.map((r) => ({ plaats: r.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ plaats: string }>;
}): Promise<Metadata> {
  const { plaats } = await params;
  const regio = getRegio(plaats);
  if (!regio) return {};
  return {
    title: `Stellinginspectie ${regio.stad} | Onafhankelijke keuring`,
    description: `Onafhankelijke stellinginspectie in ${regio.stad} en omgeving (${regio.provincie}). RackCheck keurt uw magazijnstellingen met een helder rapport binnen 24 uur.`,
    alternates: { canonical: `/regio/${regio.slug}/` },
  };
}

export default async function Page({ params }: { params: Promise<{ plaats: string }> }) {
  const { plaats } = await params;
  const regio = getRegio(plaats);
  if (!regio) notFound();

  const regioImages = [
    { src: "/images/magazijn-palletstellingen-overzicht.jpg", alt: "Overzicht van volgeladen palletstellingen in een magazijn" },
    { src: "/images/inrijstelling-magazijn.jpg", alt: "Hoge inrijstelling volledig gevuld met pallets in een magazijn" },
    { src: "/images/legbordstelling.jpg", alt: "Legbordstelling met legborden en blauwe staanders in een magazijn" },
  ];
  const regioImg = regioImages[regio.slug.length % regioImages.length];

  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Stellinginspectie ${regio.stad}`,
    serviceType: "Inspectie van magazijnstellingen",
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: { "@type": "City", name: regio.stad },
    description: `Onafhankelijke inspectie van magazijnstellingen in ${regio.stad} en omgeving.`,
  };

  return (
    <>
      <JsonLd data={schema} />
      <PageHeader
        eyebrow={`Werkgebied ${regio.provincie}`}
        title={`Stellinginspectie in ${regio.stad}`}
        intro={`Onafhankelijke inspectie van uw magazijnstellingen in ${regio.stad} en omgeving, met een helder rapport en duidelijke prioriteiten.`}
        crumbs={[
          { name: "Werkgebied", href: "/regio/" },
          { name: regio.stad, href: `/regio/${regio.slug}/` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <AnswerBox question>
              RackCheck voert onafhankelijke stellinginspecties uit in {regio.stad} en
              omliggende plaatsen zoals {regio.omgeving.slice(0, 3).join(", ")}. U krijgt
              een helder rapport met prioriteiten, in principe binnen 24 uur, en bij
              acuut gevaar een directe melding op locatie.
            </AnswerBox>

            <figure className="mt-8 overflow-hidden rounded-xl border border-navy-200">
              <div className="relative aspect-[16/9]">
                <Image
                  src={regioImg.src}
                  alt={regioImg.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 700px"
                  className="object-cover object-top"
                />
              </div>
            </figure>

            <h2 className="mt-8 text-xl font-bold text-navy-950">Logistiek in de regio {regio.stad}</h2>
            <p className="mt-2 text-navy-700">{regio.context}</p>
            <p className="mt-3 text-navy-700">{regio.relevantie}</p>

            <h2 className="mt-8 text-xl font-bold text-navy-950">Bereikbaarheid en planning</h2>
            <p className="mt-2 text-navy-700">
              We plannen de inspectie op een moment dat past bij uw operatie. Heeft u
              meerdere vestigingen in of rond {regio.stad}? Dan combineren we die in één
              planning, wat reistijd en kosten scheelt. In de meeste gevallen kan het
              magazijn tijdens de inspectie gewoon blijven draaien.
            </p>

            <h2 className="mt-8 text-xl font-bold text-navy-950">Relevante stellingtypen</h2>
            <ul className="mt-3 space-y-2">
              {stellingtypen.map((t) => (
                <li key={t.slug}>
                  <Link href={`/inspecties/${t.slug}/`} className="inline-flex items-center gap-2 text-navy-800 hover:text-brand-700">
                    <CheckIcon className="h-4 w-4 text-brand-600" />
                    <span className="font-semibold">{t.naam}</span> inspecteren
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-lg border border-navy-200 bg-navy-50 p-5">
              <p className="text-sm font-bold text-navy-950">Ook actief in de omgeving</p>
              <p className="mt-1.5 text-sm text-navy-600">
                {regio.omgeving.join(", ")} en de rest van {regio.provincie}.
              </p>
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-lg border border-navy-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy-950">
                Inspectie in {regio.stad} aanvragen
              </h2>
              <p className="mt-1.5 text-sm text-navy-600">
                Laat uw gegevens achter, dan nemen we binnen één werkdag contact op.
              </p>
              <div className="mt-5">
                <LeadForm variant="compact" defaultReden="Jaarlijkse inspectie" />
              </div>
            </div>
            <Link
              href="/regio/"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Alle regio&apos;s bekijken
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </aside>
        </div>
      </Section>

      <CTASection title={`Stellinginspectie nodig in ${regio.stad}?`} />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { stellingtypen, getStellingType } from "@/lib/stellingtypen";
import PageHeader from "@/components/PageHeader";
import { Section, SectionHeading } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import RelatedContent from "@/components/RelatedContent";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { CheckIcon, ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return stellingtypen.map((t) => ({ type: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ type: string }>;
}): Promise<Metadata> {
  const { type } = await params;
  const t = getStellingType(type);
  if (!t) return {};
  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: { canonical: `/inspecties/${t.slug}/` },
    openGraph: { title: t.metaTitle, description: t.metaDescription, url: `/inspecties/${t.slug}/`, images: [{ url: t.image }] },
  };
}

export default async function Page({ params }: { params: Promise<{ type: string }> }) {
  const { type } = await params;
  const t = getStellingType(type);
  if (!t) notFound();

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `${t.naam} inspecteren`,
    serviceType: `Inspectie van ${t.naam.toLowerCase()}`,
    provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
    areaServed: { "@type": "Country", name: "Nederland" },
    description: t.metaDescription,
  };

  const anderen = stellingtypen.filter((x) => x.slug !== t.slug);

  return (
    <>
      <JsonLd data={serviceSchema} />
      <PageHeader
        eyebrow="Stellingtype"
        title={t.h1}
        intro={t.intro}
        crumbs={[
          { name: "Stellinginspectie", href: "/stellinginspectie/" },
          { name: t.naam, href: `/inspecties/${t.slug}/` },
        ]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div className="overflow-hidden rounded-lg border border-navy-200">
            <Image
              src={t.image}
              alt={t.imageAlt}
              width={900}
              height={600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <AnswerBox question>{t.intro}</AnswerBox>
            <h2 className="mt-6 text-xl font-bold text-navy-950">Gebruikssituatie</h2>
            <p className="mt-2 text-navy-700">{t.gebruik}</p>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading eyebrow="Typische schade" title={`Wat gaat er mis bij ${t.korteNaam.toLowerCase()}?`} />
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.schade.map((s) => (
            <div key={s.title} className="rounded-lg border border-navy-100 bg-white p-5">
              <h3 className="font-bold text-navy-950">{s.title}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{s.text}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Specifieke inspectiepunten" title="Waar we op letten" />
            <ul className="mt-6 space-y-2.5">
              {t.inspectiepunten.map((p) => (
                <li key={p} className="flex gap-2.5 text-navy-800">
                  <CheckIcon className="mt-1 h-4 w-4 shrink-0 text-brand-600" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <SectionHeading eyebrow="Risico's" title="Waarom dit belangrijk is" />
            <p className="mt-6 text-navy-700">{t.risicos}</p>
            <h3 className="mt-8 text-lg font-bold text-navy-950">Rapportage</h3>
            <p className="mt-2 text-navy-700">{t.rapportage}</p>
            <Link
              href="/duidelijk-inspectierapport/"
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800"
            >
              Zo ziet het rapport eruit
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <div className="mx-auto max-w-3xl">
          <FAQ items={t.faq} />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Inspectie aanvragen"
              title={`Plan een inspectie van uw ${t.naam.toLowerCase()}`}
              intro="Laat uw gegevens achter, dan nemen we binnen één werkdag contact met u op."
            />
            <RelatedContent
              title="Andere stellingtypen"
              items={anderen.map((a) => ({
                title: `${a.naam} inspecteren`,
                href: `/inspecties/${a.slug}/`,
              }))}
            />
          </div>
          <div className="rounded-lg border border-navy-200 bg-white p-6">
            <LeadForm variant="compact" defaultReden="Jaarlijkse inspectie" />
          </div>
        </div>
      </Section>

      <CTASection />
    </>
  );
}

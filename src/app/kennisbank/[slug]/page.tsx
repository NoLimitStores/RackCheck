import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { artikelen, getArtikel } from "@/lib/kennisbank";
import { resolveLinks } from "@/lib/links";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnswerBox from "@/components/AnswerBox";
import Blocks from "@/components/Blocks";
import FAQ from "@/components/FAQ";
import { AuthorBlock, SourceRef } from "@/components/ArticleMeta";
import RelatedContent from "@/components/RelatedContent";
import { Section } from "@/components/Section";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/JsonLd";
import { ArrowRightIcon } from "@/components/Icons";

export function generateStaticParams() {
  return artikelen.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const artikel = getArtikel(slug);
  if (!artikel) return {};
  return {
    title: artikel.metaTitle,
    description: artikel.metaDescription,
    alternates: { canonical: `/kennisbank/${artikel.slug}/` },
    openGraph: {
      type: "article",
      title: artikel.metaTitle,
      description: artikel.metaDescription,
      url: `/kennisbank/${artikel.slug}/`,
      ...(artikel.image ? { images: [{ url: artikel.image.src }] } : {}),
    },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artikel = getArtikel(slug);
  if (!artikel) notFound();

  const related = resolveLinks(artikel.related);

  const kbImages = [
    { src: "/images/verankering-voetplaat-detail.jpg", alt: "Detail van de verankering en boutverbindingen van een stellingconstructie" },
    { src: "/images/magazijn-palletstellingen-overzicht.jpg", alt: "Overzicht van volgeladen palletstellingen in een magazijn" },
    { src: "/images/stellingschade-vervormde-perforatie.jpg", alt: "Detail van een vervormde perforatie in een stellingstaander" },
    { src: "/images/legbordstelling.jpg", alt: "Legbordstelling met legborden en blauwe staanders in een magazijn" },
  ];
  const kbImg = artikel.image ?? kbImages[artikel.slug.length % kbImages.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: artikel.title,
    description: artikel.metaDescription,
    datePublished: artikel.updated,
    dateModified: artikel.updated,
    inLanguage: "nl-NL",
    image: `${site.url}${kbImg.src}`,
    author: { "@type": "Organization", name: site.name },
    publisher: { "@type": "Organization", name: site.name, url: site.url },
    mainEntityOfPage: `${site.url}/kennisbank/${artikel.slug}/`,
  };

  return (
    <>
      <JsonLd data={articleSchema} />

      <section className="border-b border-navy-100 bg-navy-50">
        <div className="mx-auto max-w-3xl px-4 py-8 sm:px-6">
          <Breadcrumbs
            items={[
              { name: "Kennisbank", href: "/kennisbank/" },
              { name: artikel.title, href: `/kennisbank/${artikel.slug}/` },
            ]}
          />
          <p className="mt-5 text-sm font-bold uppercase tracking-wide text-brand-600">
            {artikel.category}
          </p>
          <h1 className="display mt-1 text-3xl leading-tight text-navy-950 sm:text-4xl">
            {artikel.h1}
          </h1>
        </div>
      </section>

      <Section>
        <div className="mx-auto max-w-3xl">
          <AnswerBox question>{artikel.answer}</AnswerBox>

          <figure className="mt-8 overflow-hidden rounded-xl border border-navy-200">
            <div className="relative aspect-[16/9]">
              <Image
                src={kbImg.src}
                alt={kbImg.alt}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
              />
            </div>
            {artikel.image?.caption && (
              <figcaption className="bg-navy-50 px-4 py-2 text-xs text-navy-600">
                {artikel.image.caption}
              </figcaption>
            )}
          </figure>

          <div className="content mt-8">
            <Blocks blocks={artikel.blocks} />
          </div>

          <div className="mt-10">
            <FAQ items={artikel.faq} title="Veelgestelde vragen" />
          </div>

          <AuthorBlock updated={artikel.updated} />
          <SourceRef />

          <div className="mt-8 rounded-lg border border-navy-200 bg-navy-950 p-6 text-white">
            <h2 className="display text-xl">Een inspectie aanvragen of overleggen?</h2>
            <p className="mt-2 text-sm text-navy-200">
              RackCheck beoordeelt uw stellingen onafhankelijk en denkt met u mee.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:flex-row">
              <Link href="/inspectie-aanvragen/" className="inline-flex items-center justify-center gap-2 rounded bg-brand-500 px-5 py-3 text-sm font-bold text-white hover:bg-brand-600">
                Inspectie aanvragen
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a href={site.phoneHref} className="inline-flex items-center justify-center gap-2 rounded border border-navy-700 px-5 py-3 text-sm font-bold text-white hover:bg-navy-900">
                Bel {site.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="muted">
          <div className="mx-auto max-w-5xl">
            <RelatedContent items={related} />
          </div>
        </Section>
      )}

      <CTASection />
    </>
  );
}

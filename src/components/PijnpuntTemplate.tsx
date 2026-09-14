import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import type { Pijnpunt } from "@/lib/pijnpunten";
import { resolveLinks } from "@/lib/links";
import Breadcrumbs from "@/components/Breadcrumbs";
import AnswerBox from "@/components/AnswerBox";
import Blocks from "@/components/Blocks";
import FAQ from "@/components/FAQ";
import LeadForm from "@/components/LeadForm";
import RelatedContent from "@/components/RelatedContent";
import { Section } from "@/components/Section";
import CTASection from "@/components/CTASection";
import { PhoneIcon, WhatsAppIcon, CheckIcon, ArrowRightIcon } from "@/components/Icons";

export default function PijnpuntTemplate({
  data,
  extra,
}: {
  data: Pijnpunt;
  extra?: React.ReactNode;
}) {
  const related = resolveLinks(data.related);

  return (
    <>
      {/* Hero */}
      <section className={data.spoed ? "bg-navy-950 text-white" : "bg-navy-950 text-white"}>
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <Breadcrumbs
            items={[
              { name: "Oplossingen", href: "/oplossingen/" },
              { name: data.eyebrow, href: `/${data.slug}/` },
            ]}
            dark
          />
          <div className="mt-6 max-w-3xl">
            <p
              className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${
                data.spoed ? "bg-amber-400 text-navy-950" : "bg-navy-900 text-brand-300"
              }`}
            >
              {data.spoed && (
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                  <path d="M12 9v4M12 17h.01" />
                </svg>
              )}
              {data.eyebrow}
            </p>
            <h1 className="display mt-4 text-3xl leading-tight sm:text-4xl lg:text-5xl">
              {data.h1}
            </h1>
            <p className="mt-4 text-lg text-navy-200">{data.sub}</p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/inspectie-aanvragen/"
                className={`inline-flex items-center justify-center gap-2 rounded px-6 py-3.5 text-sm font-bold text-white transition-colors ${
                  data.spoed ? "bg-amber-500 text-navy-950 hover:bg-amber-400" : "bg-brand-500 hover:bg-brand-600"
                }`}
              >
                {data.spoed ? "Spoedinspectie aanvragen" : "Inspectie aanvragen"}
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
              <a
                href={site.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded border border-navy-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-900"
              >
                <PhoneIcon className="h-4 w-4" />
                {site.phoneDisplay}
              </a>
              <a
                href={site.whatsappHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded border border-navy-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-900"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Stuur foto&apos;s
              </a>
            </div>
          </div>
        </div>
      </section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr] lg:items-start">
          <div>
            <AnswerBox question>{data.answer}</AnswerBox>

            {data.image && (
              <figure className="mt-8 flex flex-col gap-4 rounded-xl border border-navy-200 bg-navy-50 p-4 sm:flex-row sm:items-center sm:gap-6 sm:p-5">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-lg sm:w-48 sm:shrink-0">
                  <Image
                    src={data.image.src}
                    alt={data.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 192px"
                    className="object-cover"
                  />
                </div>
                {data.image.caption && (
                  <figcaption className="text-sm leading-relaxed text-navy-700">
                    {data.image.caption}
                  </figcaption>
                )}
              </figure>
            )}

            <div className="content mt-8">
              <Blocks blocks={data.blocks} />
            </div>

            {extra && <div className="mt-8">{extra}</div>}

            {data.checklist && (
              <div className="mt-8 rounded-lg border border-navy-200 bg-navy-50 p-6">
                <h2 className="text-lg font-bold text-navy-950">{data.checklist.title}</h2>
                <ul className="mt-4 space-y-2.5">
                  {data.checklist.items.map((item) => (
                    <li key={item} className="flex items-center gap-3 text-navy-800">
                      <span aria-hidden className="grid h-5 w-5 shrink-0 place-items-center rounded border border-navy-300 bg-white">
                        <CheckIcon className="h-3.5 w-3.5 text-brand-600" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="mt-10">
              <FAQ items={data.faq} />
            </div>
          </div>

          <aside className="lg:sticky lg:top-24">
            <div className="rounded-lg border border-navy-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-bold text-navy-950">{data.ctaTitle}</h2>
              <p className="mt-1.5 text-sm text-navy-600">
                Laat uw gegevens achter, dan nemen we snel contact met u op.
              </p>
              <div className="mt-5">
                <LeadForm variant="compact" defaultReden={data.formReden} />
              </div>
            </div>
          </aside>
        </div>
      </Section>

      {related.length > 0 && (
        <Section tone="muted">
          <RelatedContent items={related} />
        </Section>
      )}

      <CTASection title={data.ctaTitle} />
    </>
  );
}

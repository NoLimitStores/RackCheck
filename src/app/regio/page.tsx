import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { regios } from "@/lib/regios";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import CTASection from "@/components/CTASection";
import Inspecteurs from "@/components/Inspecteurs";
import { ArrowRightIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Werkgebied: stellinginspectie in Nederland en België",
  description:
    "RackCheck voert stellinginspecties uit in heel Nederland en België. Bekijk de regio's waar we actief zijn en plan uw inspectie, ook voor meerdere vestigingen tegelijk.",
  alternates: { canonical: "/regio/" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Werkgebied"
        title="Stellinginspectie in Nederland en België"
        intro="RackCheck werkt in heel Nederland en België. We plannen inspecties efficiënt in, ook wanneer u meerdere vestigingen tegelijk wilt laten beoordelen."
        crumbs={[{ name: "Werkgebied", href: "/regio/" }]}
      />
      <Section>
        <AnswerBox question>
          RackCheck voert onafhankelijke stellinginspecties uit in {site.workingArea}.
          We hebben geen vast kantoor per stad, maar plannen inspecties landelijk in.
          Voor bedrijven met meerdere locaties combineren we de vestigingen in één
          planning, wat reistijd en kosten scheelt.
        </AnswerBox>

        <figure className="mt-10 overflow-hidden rounded-xl border border-navy-200">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/draagarmstelling.jpg"
              alt="Draagarmstelling met zwarte draagarmen voor langgoed in een magazijn"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover object-center"
            />
          </div>
        </figure>

        {[
          { land: "Nederland", items: regios.filter((r) => r.land !== "België") },
          { land: "België", items: regios.filter((r) => r.land === "België") },
        ].map((groep) => (
          <div key={groep.land} className="mt-12 first:mt-10">
            <h2 className="display text-2xl text-navy-950">{groep.land}</h2>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {groep.items.map((r) => (
                <Link
                  key={r.slug}
                  href={`/regio/${r.slug}/`}
                  className="group flex flex-col rounded-lg border border-navy-200 bg-white p-5 transition-colors hover:border-brand-400"
                >
                  <h3 className="text-lg font-bold text-navy-950 group-hover:text-brand-700">
                    {r.stad}
                  </h3>
                  <p className="text-xs font-semibold uppercase tracking-wide text-navy-500">
                    {r.provincie}
                  </p>
                  <p className="mt-2 flex-1 text-sm text-navy-600 line-clamp-3">{r.relevantie}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                    Inspectie in {r.stad}
                    <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        ))}

        <p className="mt-8 text-sm text-navy-600">
          Staat uw regio er niet bij? Geen probleem, we werken door heel Nederland en België.
          <Link href="/inspectie-aanvragen/" className="ml-1 font-semibold text-brand-700 underline">
            Vraag een inspectie aan
          </Link>{" "}
          en we plannen het in.
        </p>
      </Section>
      <Section tone="muted">
        <Inspecteurs />
      </Section>
      <CTASection />
    </>
  );
}

import type { Metadata } from "next";
import Image from "next/image";
import { artikelen } from "@/lib/kennisbank";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import KennisbankList from "@/components/KennisbankList";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Kennisbank over stellinginspectie en magazijnveiligheid",
  description:
    "Antwoorden op de meest gestelde vragen over stellinginspectie, NEN-EN 15635, schadeclassificatie, kosten en veilig gebruik van magazijnstellingen.",
  alternates: { canonical: "/kennisbank/" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Kennisbank"
        title="Alles over stellinginspectie en magazijnveiligheid"
        intro="Heldere, praktische antwoorden op de vragen die warehouse- en veiligheidsverantwoordelijken ons stellen. Gebaseerd op de wet, de normen en de praktijk."
        crumbs={[{ name: "Kennisbank", href: "/kennisbank/" }]}
      />
      <Section>
        <figure className="mb-10 overflow-hidden rounded-xl border border-navy-200">
          <div className="relative aspect-[21/9]">
            <Image
              src="/images/inrijstelling-magazijn.jpg"
              alt="Hoge inrijstelling volledig gevuld met pallets in een magazijn"
              fill
              sizes="(max-width: 1024px) 100vw, 1152px"
              className="object-cover"
            />
          </div>
        </figure>
        <KennisbankList artikelen={artikelen} />
      </Section>
      <CTASection
        title="Liever direct antwoord op uw situatie?"
        text="Bel ons of vraag een inspectie aan. We denken graag met u mee over de veiligheid van uw stellingen."
      />
    </>
  );
}

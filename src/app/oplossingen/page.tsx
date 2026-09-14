import type { Metadata } from "next";
import Image from "next/image";
import { situaties } from "@/lib/content";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import { PijnpuntCard } from "@/components/Cards";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "Oplossingen: hulp bij elke stellingsituatie",
  description:
    "Van een aangereden stelling tot een verlopen inspectie of terugkerende schade. Vind de aanpak van RackCheck die past bij uw situatie.",
  alternates: { canonical: "/oplossingen/" },
};

export default function Page() {
  return (
    <>
      <PageHeader
        eyebrow="Oplossingen"
        title="Hulp die past bij uw situatie"
        intro="Elke situatie rond magazijnstellingen vraagt om een eigen aanpak. Kies hieronder wat op u van toepassing is."
        crumbs={[{ name: "Oplossingen", href: "/oplossingen/" }]}
      />
      <Section>
        <figure className="mb-10 overflow-hidden rounded-xl border border-navy-200">
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
            Van palletstellingen en draagarmstellingen tot bordessen: elke situatie
            rond magazijnstellingen vraagt om een eigen aanpak.
          </figcaption>
        </figure>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {situaties.map((s) => (
            <PijnpuntCard key={s.href} {...s} />
          ))}
        </div>
      </Section>
      <CTASection />
    </>
  );
}

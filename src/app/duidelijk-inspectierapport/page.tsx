import type { Metadata } from "next";
import { getPijnpunt } from "@/lib/pijnpunten";
import PijnpuntTemplate from "@/components/PijnpuntTemplate";
import RapportIndeling from "@/components/RapportIndeling";

const data = getPijnpunt("duidelijk-inspectierapport");

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/duidelijk-inspectierapport/" },
};

export default function Page() {
  return (
    <PijnpuntTemplate
      data={data}
      extra={
        <div>
          <h2 className="display text-2xl text-navy-950">De indeling van het rapport</h2>
          <p className="mt-2 text-navy-600">
            Het rapport werkt met drie herkenbare secties, zodat u in één oogopslag
            ziet wat gerepareerd kan worden, wat vervangen moet worden en welke
            algemene veiligheidspunten er zijn.
          </p>
          <div className="mt-5">
            <RapportIndeling />
          </div>
        </div>
      }
    />
  );
}

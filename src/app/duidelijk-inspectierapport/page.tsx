import type { Metadata } from "next";
import { getPijnpunt } from "@/lib/pijnpunten";
import PijnpuntTemplate from "@/components/PijnpuntTemplate";
import RapportVoorbeeld from "@/components/RapportVoorbeeld";

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
          <h2 className="display text-2xl text-navy-950">Voorbeeldweergave van bevindingen</h2>
          <p className="mt-2 text-navy-600">
            Een geanonimiseerde weergave, uitsluitend ter illustratie.
          </p>
          <div className="mt-5">
            <RapportVoorbeeld />
          </div>
        </div>
      }
    />
  );
}

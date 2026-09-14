import type { Metadata } from "next";
import { getPijnpunt } from "@/lib/pijnpunten";
import PijnpuntTemplate from "@/components/PijnpuntTemplate";

const data = getPijnpunt("jaarlijkse-stellinginspectie");

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/jaarlijkse-stellinginspectie/" },
};

export default function Page() {
  return <PijnpuntTemplate data={data} />;
}

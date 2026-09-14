import type { Metadata } from "next";
import { getPijnpunt } from "@/lib/pijnpunten";
import PijnpuntTemplate from "@/components/PijnpuntTemplate";

const data = getPijnpunt("onafhankelijke-stellinginspectie");

export const metadata: Metadata = {
  title: data.metaTitle,
  description: data.metaDescription,
  alternates: { canonical: "/onafhankelijke-stellinginspectie/" },
};

export default function Page() {
  return <PijnpuntTemplate data={data} />;
}

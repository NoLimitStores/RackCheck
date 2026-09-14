import { getArtikel } from "@/lib/kennisbank";
import type { RelatedItem } from "@/components/RelatedContent";

/** Bekende niet-artikel pagina's, zodat interne links ook naar diensten en
 * oplossingen kunnen verwijzen. */
const pages: Record<string, { title: string; href: string; desc?: string }> = {
  "stellinginspectie": { title: "Stellinginspectie", href: "/stellinginspectie/", desc: "De hoofddienst van RackCheck." },
  "werkwijze": { title: "Werkwijze", href: "/werkwijze/", desc: "Het inspectieproces in zeven stappen." },
  "prijzen": { title: "Prijzen", href: "/prijzen/", desc: "Inspectie vanaf €395 per jaar." },
  "stelling-aangereden": { title: "Stelling aangereden", href: "/stelling-aangereden/", desc: "Spoedhulp na een aanrijding." },
  "jaarlijkse-stellinginspectie": { title: "Jaarlijkse stellinginspectie", href: "/jaarlijkse-stellinginspectie/", desc: "Status bepalen en ritme opzetten." },
  "duidelijk-inspectierapport": { title: "Duidelijk inspectierapport", href: "/duidelijk-inspectierapport/", desc: "Een rapport met prioriteiten." },
  "onafhankelijke-stellinginspectie": { title: "Onafhankelijke stellinginspectie", href: "/onafhankelijke-stellinginspectie/", desc: "Beoordeling zonder verkoopbelang." },
  "terugkerende-stellingschade": { title: "Terugkerende stellingschade", href: "/terugkerende-stellingschade/", desc: "Oorzaakanalyse van herhaalde schade." },
  "palletstelling": { title: "Palletstelling inspecteren", href: "/inspecties/palletstelling/" },
  "legbordstelling": { title: "Legbordstelling inspecteren", href: "/inspecties/legbordstelling/" },
  "draagarmstelling": { title: "Draagarmstelling inspecteren", href: "/inspecties/draagarmstelling/" },
};

/** Zet een lijst met slugs om naar RelatedItems (artikel of vaste pagina). */
export function resolveLinks(slugs: string[]): RelatedItem[] {
  return slugs
    .map((slug): RelatedItem | null => {
      const artikel = getArtikel(slug);
      if (artikel) {
        return { title: artikel.title, href: `/kennisbank/${artikel.slug}/`, desc: artikel.excerpt };
      }
      const page = pages[slug];
      if (page) return page;
      return null;
    })
    .filter((x): x is RelatedItem => Boolean(x));
}

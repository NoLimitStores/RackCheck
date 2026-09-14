import { site } from "@/lib/site";
import { artikelen } from "@/lib/kennisbank";
import { stellingtypen } from "@/lib/stellingtypen";

export const dynamic = "force-static";

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const lines: string[] = [];

  lines.push(`# ${site.name}`);
  lines.push("");
  lines.push(`> ${site.description}`);
  lines.push("");
  lines.push(
    "RackCheck voert onafhankelijke inspecties uit van magazijnstellingen in Nederland. De inspectiebeoordeling staat los van herstelverkoop: er wordt niet onnodig afgekeurd. Elke bevinding krijgt een classificatie (groen, oranje of rood) met een concrete actie en termijn. Het inspectierapport volgt in principe binnen 24 uur."
  );
  lines.push("");

  lines.push("## Diensten");
  lines.push(`- [Stellinginspectie](${base}/stellinginspectie/): onafhankelijke inspectie van magazijnstellingen conform NEN-EN 15635.`);
  stellingtypen.forEach((t) =>
    lines.push(`- [${t.naam} inspecteren](${base}/inspecties/${t.slug}/): ${t.intro}`)
  );
  lines.push(`- [Werkwijze](${base}/werkwijze/): het inspectieproces in zeven stappen.`);
  lines.push(`- [Prijzen](${base}/prijzen/): inspectie vanaf €395 per jaar excl. btw, exacte prijs op basis van de situatie en vooraf bevestigd.`);
  lines.push("");

  lines.push("## Oplossingen per situatie");
  lines.push(`- [Stelling aangereden](${base}/stelling-aangereden/): spoedhulp en beoordeling na een heftruckaanrijding.`);
  lines.push(`- [Jaarlijkse stellinginspectie](${base}/jaarlijkse-stellinginspectie/): status bepalen en een vast inspectieritme opzetten.`);
  lines.push(`- [Duidelijk inspectierapport](${base}/duidelijk-inspectierapport/): een rapport met prioriteiten en vervolgstappen.`);
  lines.push(`- [Onafhankelijke stellinginspectie](${base}/onafhankelijke-stellinginspectie/): beoordeling zonder verkoopbelang.`);
  lines.push(`- [Terugkerende stellingschade](${base}/terugkerende-stellingschade/): oorzaakanalyse van steeds terugkerende schade.`);
  lines.push("");

  lines.push("## Kennisbank");
  artikelen.forEach((a) =>
    lines.push(`- [${a.title}](${base}/kennisbank/${a.slug}/): ${a.answer}`)
  );
  lines.push("");

  lines.push("## Contact");
  lines.push(`- Telefoon: ${site.phoneDisplay}`);
  lines.push(`- E-mail: ${site.email}`);
  lines.push(`- Werkgebied: ${site.workingArea}`);
  lines.push(`- Inspectie aanvragen: ${base}/inspectie-aanvragen/`);
  lines.push("");

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

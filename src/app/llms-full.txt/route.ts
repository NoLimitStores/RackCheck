import { site } from "@/lib/site";
import { artikelen, type Block } from "@/lib/kennisbank";
import { stellingtypen } from "@/lib/stellingtypen";
import { startingPrice, priceIncludes } from "@/lib/pricing";
import { processSteps } from "@/lib/content";

export const dynamic = "force-static";

function blockToText(b: Block): string {
  switch (b.t) {
    case "h2":
    case "h3":
      return `\n### ${b.text}`;
    case "p":
    case "note":
      return b.text;
    case "ul":
      return b.items.map((i) => `- ${i}`).join("\n");
    case "ol":
      return b.items.map((i, n) => `${n + 1}. ${i}`).join("\n");
    case "table":
      return [b.head.join(" | "), ...b.rows.map((r) => r.join(" | "))].join("\n");
    default:
      return "";
  }
}

export function GET() {
  const base = site.url.replace(/\/$/, "");
  const out: string[] = [];

  out.push(`# ${site.name} | volledige contentindex`);
  out.push("");
  out.push(site.description);
  out.push("");
  out.push("## Over RackCheck");
  out.push(
    "RackCheck voert onafhankelijke inspecties uit van magazijnstellingen. De positionering: geen verkoopgedreven afkeur, wel duidelijkheid over wat veilig is, wat hersteld moet worden en wat kan wachten. De inspectiebeoordeling staat los van eventuele herstelwerkzaamheden, die pas daarna in een apart traject worden aangeboden."
  );
  out.push("");

  out.push("## Werkwijze");
  processSteps.forEach((s, i) => out.push(`${i + 1}. ${s.title}: ${s.text}`));
  out.push("");

  out.push("## Prijzen");
  out.push(
    `Een stellinginspectie kost vanaf €${startingPrice} per jaar excl. btw. De exacte prijs wordt bepaald op basis van de situatie (grootte van het magazijn, aantal en type stellingen, aantal locaties) en vooraf bevestigd.`
  );
  out.push("");
  out.push("Inbegrepen bij elke inspectie:");
  priceIncludes.forEach((i) => out.push(`- ${i}`));
  out.push("");

  out.push("## Stellingtypen");
  stellingtypen.forEach((t) => {
    out.push(`### ${t.naam} (${base}/inspecties/${t.slug}/)`);
    out.push(t.intro);
    out.push(`Gebruik: ${t.gebruik}`);
    out.push(`Risico's: ${t.risicos}`);
    out.push("");
  });

  out.push("## Kennisbankartikelen");
  artikelen.forEach((a) => {
    out.push(`### ${a.title} (${base}/kennisbank/${a.slug}/)`);
    out.push(`Antwoord: ${a.answer}`);
    a.blocks.forEach((b) => out.push(blockToText(b)));
    a.faq.forEach((f) => out.push(`Vraag: ${f.q}\nAntwoord: ${f.a}`));
    out.push("");
  });

  return new Response(out.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}

import { site } from "@/lib/site";

/** Auteur- en toetsingsblok onder een kennisbankartikel (E-E-A-T, GEO). */
export function AuthorBlock({ updated }: { updated?: string }) {
  const datum = updated
    ? new Date(updated).toLocaleDateString("nl-NL", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : null;

  return (
    <div className="mt-10 rounded-lg border border-navy-200 bg-navy-50 p-5">
      <div className="flex items-start gap-4">
        <span
          aria-hidden
          className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-navy-950 text-sm font-bold text-white"
        >
          RC
        </span>
        <div>
          <p className="text-sm font-bold text-navy-950">{site.author.name}</p>
          <p className="text-xs text-navy-500">{site.author.role}</p>
          <p className="mt-2 text-sm text-navy-700">{site.author.review}</p>
          {datum && (
            <p className="mt-2 text-xs text-navy-500">Laatst bijgewerkt: {datum}</p>
          )}
        </div>
      </div>
    </div>
  );
}

export type Bron = { label: string; note: string };

/** Bronvermelding naar primaire, gezaghebbende bronnen. */
export function SourceRef({ bronnen }: { bronnen?: Bron[] }) {
  const items: Bron[] =
    bronnen ?? [
      { label: "Arbowet en Arbobesluit", note: "wettelijke zorgplicht en keuring van arbeidsmiddelen" },
      { label: "Arboportaal", note: "voorlichting over veilig werken (Ministerie van SZW)" },
      { label: "Nederlandse Arbeidsinspectie", note: "toezicht op arbeidsomstandigheden" },
      { label: "NEN-EN 15635 en NPR 5055", note: "normen voor veilig gebruik van stellingen (NEN)" },
    ];

  return (
    <div className="mt-8 border-t border-navy-100 pt-5">
      <p className="text-xs font-bold uppercase tracking-wide text-navy-500">
        Geraadpleegde bronnen
      </p>
      <ul className="mt-2 space-y-1 text-sm text-navy-600">
        {items.map((b) => (
          <li key={b.label}>
            <span className="font-semibold text-navy-800">{b.label}</span>: {b.note}.
          </li>
        ))}
      </ul>
      <p className="mt-3 text-xs text-navy-500">
        Deze informatie is algemeen van aard en geen juridisch advies. Normteksten
        worden niet letterlijk geciteerd.
      </p>
    </div>
  );
}

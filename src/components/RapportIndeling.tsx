import { rapportSecties } from "@/lib/content";

/**
 * De indeling van het RackCheck-inspectierapport in drie herkenbare secties.
 * Bewust geen kleurcodering (groen/oranje/rood); het rapport benoemt per
 * bevinding de concrete vervolgstap.
 */
export default function RapportIndeling() {
  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-3">
        {rapportSecties.map((s, i) => (
          <div key={s.titel} className="rounded-lg border border-navy-200 bg-white p-5">
            <span
              aria-hidden
              className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700"
            >
              {i + 1}
            </span>
            <h3 className="mt-3 font-bold text-navy-950">{s.titel}</h3>
            <p className="mt-1.5 text-sm text-navy-700">{s.text}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-sm text-navy-500">
        Bij afkeur en ernstige bevindingen ondersteunen foto&apos;s het rapport.
      </p>
    </div>
  );
}

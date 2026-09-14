import { rapportVoorbeeld } from "@/lib/content";

const kleur: Record<string, string> = {
  Rood: "bg-signal-rood text-white",
  Oranje: "bg-signal-oranje text-white",
  Groen: "bg-signal-groen text-white",
};

export default function RapportVoorbeeld() {
  return (
    <div className="overflow-hidden rounded-lg border border-navy-200 bg-white shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b border-navy-100 bg-navy-950 px-4 py-3 text-white">
        <div>
          <p className="text-sm font-bold">Inspectierapport (voorbeeld)</p>
          <p className="text-xs text-navy-300">Geanonimiseerde weergave, ter illustratie</p>
        </div>
        <span className="hidden rounded bg-brand-600 px-2 py-1 text-[11px] font-bold uppercase tracking-wide sm:inline">
          RackCheck
        </span>
      </div>

      {/* Tabel op grotere schermen */}
      <div className="hidden overflow-x-auto md:block">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-navy-100 bg-navy-50 text-xs uppercase tracking-wide text-navy-600">
              <th className="px-4 py-2.5 font-semibold">Bevinding</th>
              <th className="px-4 py-2.5 font-semibold">Locatie</th>
              <th className="px-4 py-2.5 font-semibold">Prioriteit</th>
              <th className="px-4 py-2.5 font-semibold">Actie</th>
              <th className="px-4 py-2.5 font-semibold">Termijn</th>
            </tr>
          </thead>
          <tbody>
            {rapportVoorbeeld.map((r) => (
              <tr key={r.bevinding} className="border-b border-navy-100 last:border-0">
                <td className="px-4 py-3 font-medium text-navy-950">{r.bevinding}</td>
                <td className="px-4 py-3 text-navy-600">{r.locatie}</td>
                <td className="px-4 py-3">
                  <span className={`inline-block rounded px-2 py-0.5 text-xs font-bold ${kleur[r.prioriteit]}`}>
                    {r.prioriteit}
                  </span>
                </td>
                <td className="px-4 py-3 text-navy-700">{r.actie}</td>
                <td className="px-4 py-3 text-navy-700">{r.termijn}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Kaarten op mobiel */}
      <div className="divide-y divide-navy-100 md:hidden">
        {rapportVoorbeeld.map((r) => (
          <div key={r.bevinding} className="px-4 py-3">
            <div className="flex items-center justify-between gap-3">
              <p className="font-semibold text-navy-950">{r.bevinding}</p>
              <span className={`rounded px-2 py-0.5 text-xs font-bold ${kleur[r.prioriteit]}`}>
                {r.prioriteit}
              </span>
            </div>
            <dl className="mt-1.5 grid grid-cols-[auto_1fr] gap-x-3 gap-y-0.5 text-xs text-navy-600">
              <dt className="font-semibold">Locatie</dt>
              <dd>{r.locatie}</dd>
              <dt className="font-semibold">Actie</dt>
              <dd>{r.actie}</dd>
              <dt className="font-semibold">Termijn</dt>
              <dd>{r.termijn}</dd>
            </dl>
          </div>
        ))}
      </div>
    </div>
  );
}

import { schadeClassificatie } from "@/lib/content";

const dot: Record<string, string> = {
  Groen: "bg-signal-groen",
  Oranje: "bg-signal-oranje",
  Rood: "bg-signal-rood",
};

export default function SchadeClassificatie() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {schadeClassificatie.map((s) => (
        <div key={s.kleur} className="rounded-lg border border-navy-200 bg-white p-5">
          <div className="flex items-center gap-2.5">
            <span aria-hidden className={`h-4 w-4 rounded-full ${dot[s.kleur]}`} />
            <h3 className="font-bold text-navy-950">
              {s.kleur} <span className="font-medium text-navy-500">| {s.label}</span>
            </h3>
          </div>
          <p className="mt-2 text-sm text-navy-700">{s.text}</p>
        </div>
      ))}
    </div>
  );
}

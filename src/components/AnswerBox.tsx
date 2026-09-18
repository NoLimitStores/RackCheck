/**
 * Direct antwoord bovenaan een pagina of artikel. Zelfstandig leesbaar zodat
 * zoekmachines en AI-systemen de passage goed kunnen citeren (GEO en AEO).
 */
export default function AnswerBox({
  question,
  children,
  label = "Kort antwoord",
}: {
  question?: boolean;
  children: React.ReactNode;
  /** Label boven het antwoord; standaard Nederlands, vertaalbaar per taal. */
  label?: string;
}) {
  return (
    <div className="rounded-lg border-l-4 border-brand-500 bg-navy-50 p-5">
      {question && (
        <p className="text-sm font-bold uppercase tracking-wide text-brand-700">
          {label}
        </p>
      )}
      <p className="mt-1 text-[1.0625rem] leading-relaxed text-navy-900">{children}</p>
    </div>
  );
}

export function Note({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-5 flex gap-3 rounded-lg border border-brand-200 bg-brand-50 p-4">
      <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-brand-600" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4M12 8h.01" />
      </svg>
      <p className="text-sm leading-relaxed text-navy-800">{children}</p>
    </div>
  );
}

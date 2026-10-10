import { inspecteurs } from "@/lib/site";
import { PhoneIcon, MailIcon, ShieldIcon } from "@/components/Icons";

/**
 * "Onze inspecteurs en werkgebieden": maakt visueel duidelijk welke inspecteur
 * welk gebied bedient. De gegevens van de regionale inspecteurs worden alleen
 * hier getoond; algemene CTA's blijven naar het algemene aanspreekpunt gaan.
 */
export default function Inspecteurs({
  heading = true,
  compact = false,
}: {
  heading?: boolean;
  compact?: boolean;
}) {
  return (
    <section aria-labelledby="inspecteurs-heading">
      {heading && (
        <div className="max-w-2xl">
          <p className="text-sm font-bold uppercase tracking-wide text-brand-600">
            Werkgebieden
          </p>
          <h2
            id="inspecteurs-heading"
            className="display mt-1 text-2xl text-navy-950 sm:text-3xl"
          >
            Onze inspecteurs en werkgebieden
          </h2>
          <p className="mt-3 text-navy-600">
            RackCheck werkt met vaste regionale inspecteurs. Zo heeft u een
            aanspreekpunt dat uw regio kent. Voor algemene vragen en aanvragen kunt u
            altijd terecht bij het centrale contactpunt.
          </p>
        </div>
      )}

      <div className={`grid gap-5 sm:grid-cols-2 ${heading ? "mt-8" : ""}`}>
        {inspecteurs.map((ins) => (
          <div
            key={ins.email}
            className="flex flex-col rounded-lg border border-navy-200 bg-white p-6"
          >
            <div className="flex items-center gap-2">
              <ShieldIcon className="h-5 w-5 shrink-0 text-brand-600" />
              <p className="text-sm font-bold uppercase tracking-wide text-navy-600">
                {ins.regio}
              </p>
            </div>
            <h3 className="mt-3 text-lg font-bold text-navy-950">{ins.naam}</h3>
            {!compact && <p className="mt-1 text-sm text-navy-600">{ins.regioDetail}</p>}

            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2.5">
                <dt className="sr-only">Telefoon</dt>
                <PhoneIcon className="h-4 w-4 shrink-0 text-brand-600" />
                <dd>
                  <a
                    href={ins.phoneHref}
                    className="inline-flex min-h-11 items-center font-semibold text-navy-900 hover:text-brand-700"
                    aria-label={`Bel ${ins.naam} op ${ins.phoneDisplay}`}
                  >
                    {ins.phoneDisplay}
                  </a>
                </dd>
              </div>
              <div className="flex items-center gap-2.5">
                <dt className="sr-only">E-mail</dt>
                <MailIcon className="h-4 w-4 shrink-0 text-brand-600" />
                <dd>
                  <a
                    href={`mailto:${ins.email}`}
                    className="inline-flex min-h-11 items-center break-all font-semibold text-navy-900 hover:text-brand-700"
                    aria-label={`Mail ${ins.naam} op ${ins.email}`}
                  >
                    {ins.email}
                  </a>
                </dd>
              </div>
              {ins.linkedin && (
                <div className="flex items-center gap-2.5">
                  <dt className="sr-only">LinkedIn</dt>
                  <svg aria-hidden viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-brand-600" fill="currentColor">
                    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.73C24 .77 23.2 0 22.22 0z" />
                  </svg>
                  <dd>
                    <a
                      href={ins.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex min-h-11 items-center font-medium text-navy-700 underline hover:text-brand-700"
                      aria-label={`LinkedIn-profiel van ${ins.naam} (opent in een nieuw tabblad)`}
                    >
                      LinkedIn-profiel
                    </a>
                  </dd>
                </div>
              )}
            </dl>
            {/* Ruimte voor een actiefoto van de inspecteur zodra die is aangeleverd
                (bewust geen leeg fotovak tonen). */}
          </div>
        ))}
      </div>
    </section>
  );
}

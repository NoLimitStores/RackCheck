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
            </dl>
          </div>
        ))}
      </div>
    </section>
  );
}

import Link from "next/link";
import { startingPrice } from "@/lib/pricing";
import { ArrowRightIcon } from "@/components/Icons";

/**
 * Prijscommunicatie zonder volledige prijslijst: "Inspectie vanaf €395 per jaar".
 * De exacte prijs wordt op basis van de situatie bepaald en vooraf bevestigd.
 */
export default function PrijsVanaf({
  showPriceLink = true,
}: {
  showPriceLink?: boolean;
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-navy-200 bg-navy-950 text-white sm:flex sm:items-center sm:justify-between">
      <div className="p-6 sm:p-8">
        <p className="text-xs font-bold uppercase tracking-wide text-brand-300">
          Onafhankelijke stellinginspectie
        </p>
        <p className="display mt-2 text-4xl leading-none sm:text-5xl">
          vanaf €{startingPrice}
          <span className="ml-2 align-middle text-xl font-semibold text-navy-200">
            per jaar
          </span>
        </p>
        <p className="mt-2 text-sm font-medium text-navy-300">Exclusief btw</p>
        <p className="mt-3 max-w-md text-sm text-navy-200">
          De exacte prijs bepalen we op basis van uw situatie, zoals de grootte van het
          magazijn en het aantal stellingen, en bevestigen we vooraf. Zo weet u waar u
          aan toe bent, zonder verrassingen achteraf.
        </p>
      </div>
      <div className="flex flex-col gap-2 p-6 sm:p-8">
        <Link
          href="/inspectie-aanvragen/"
          className="inline-flex items-center justify-center gap-2 rounded bg-brand-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-600"
        >
          Vraag een prijs aan
          <ArrowRightIcon className="h-4 w-4" />
        </Link>
        {showPriceLink && (
          <Link
            href="/prijzen/"
            className="inline-flex items-center justify-center gap-1.5 rounded border border-navy-700 px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-navy-900"
          >
            Wat is inbegrepen?
          </Link>
        )}
      </div>
    </div>
  );
}

import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";

export const metadata = {
  title: "Pagina niet gevonden",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="bg-navy-950 text-white">
      <div className="mx-auto max-w-2xl px-4 py-24 text-center sm:px-6">
        <p className="display text-6xl text-brand-400">404</p>
        <h1 className="display mt-4 text-3xl sm:text-4xl">Deze pagina bestaat niet</h1>
        <p className="mx-auto mt-4 max-w-md text-navy-200">
          De pagina is verplaatst of bestaat niet meer. Gebruik onderstaande links of
          neem contact met ons op.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded bg-brand-500 px-6 py-3 text-sm font-bold text-white hover:bg-brand-600"
          >
            Naar de homepage
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded border border-navy-700 px-6 py-3 text-sm font-bold text-white hover:bg-navy-900"
          >
            <PhoneIcon className="h-4 w-4" />
            {site.phoneDisplay}
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-navy-300">
          <Link href="/stellinginspectie/" className="hover:text-white">Stellinginspectie</Link>
          <Link href="/prijzen/" className="hover:text-white">Prijzen</Link>
          <Link href="/kennisbank/" className="hover:text-white">Kennisbank</Link>
          <Link href="/inspectie-aanvragen/" className="hover:text-white">Inspectie aanvragen</Link>
        </div>
      </div>
    </section>
  );
}

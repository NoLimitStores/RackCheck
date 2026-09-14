import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, WhatsAppIcon, ArrowRightIcon } from "@/components/Icons";

export default function CTASection({
  title = "Weet u zeker dat uw stellingen veilig zijn?",
  text = "Vraag een onafhankelijke inspectie aan. U krijgt een helder rapport met duidelijke prioriteiten, in principe binnen 24 uur. Bij urgente schade helpen we u direct.",
  primaryLabel = "Inspectie aanvragen",
  primaryHref = "/inspectie-aanvragen/",
}: {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
}) {
  return (
    <section className="bg-navy-950">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="display text-3xl text-white sm:text-4xl">{title}</h2>
          <p className="mx-auto mt-4 max-w-2xl text-navy-200">{text}</p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href={primaryHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded bg-brand-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-600 sm:w-auto"
            >
              {primaryLabel}
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex w-full items-center justify-center gap-2 rounded border border-navy-700 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-900 sm:w-auto"
            >
              <PhoneIcon className="h-4 w-4" />
              {site.phoneDisplay}
            </a>
            <a
              href={site.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded border border-navy-700 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-navy-900 sm:w-auto"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

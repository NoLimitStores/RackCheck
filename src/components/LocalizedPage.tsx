import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { getDictionary } from "@/i18n/dictionaries";
import { type Locale, type PageId, pathFor } from "@/i18n/routes";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";
import AnswerBox from "@/components/AnswerBox";
import Blocks from "@/components/Blocks";
import CTASection from "@/components/CTASection";
import LeadForm, { type FormTexts } from "@/components/LeadForm";
import { PhoneIcon, ArrowRightIcon } from "@/components/Icons";

/**
 * Gedeelde weergave voor alle vertaalde commerciële pagina's. Leest de content
 * uit de dictionary van de taal en stelt die samen met dezelfde componenten als
 * de Nederlandse site. Zo is er één onderhoudbare structuur voor alle talen.
 */
export default function LocalizedPage({ locale, pageId }: { locale: Locale; pageId: PageId }) {
  const dict = getDictionary(locale);
  const page = dict.pages[pageId];
  const homePath = pathFor("home", locale);
  const requestPath = pathFor("request", locale);
  const homeCrumb = { name: dict.pages.home.breadcrumb, href: homePath };

  const formTexts: FormTexts = {
    company: dict.form.company,
    name: dict.form.name,
    email: dict.form.email,
    phone: dict.form.phone,
    reason: dict.form.reason,
    message: dict.form.message,
    messagePlaceholder: dict.form.messagePlaceholder,
    choose: dict.form.choose,
    privacyBefore: dict.form.privacyBefore,
    privacyLink: dict.form.privacyLink,
    privacyAfter: dict.form.privacyAfter,
    submit: dict.form.submit,
    submitting: dict.form.submitting,
    successTitle: dict.form.successTitle,
    successText: dict.form.successText,
    errorText: dict.form.errorText,
    reasonOptions: dict.form.reasonOptions,
  };

  return (
    <>
      {page.hero ? (
        <section className="relative flex min-h-[70svh] items-center overflow-hidden bg-navy-950">
          <Image
            src={page.hero.image}
            alt={page.hero.imageAlt}
            fill
            priority
            sizes="100vw"
            className="object-cover object-center"
          />
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, rgba(4,16,32,0.96) 0%, rgba(4,16,32,0.85) 48%, rgba(4,16,32,0.35) 100%)",
            }}
          />
          <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
            <div className="max-w-2xl">
              <h1 className="display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
                {page.h1}
              </h1>
              <p className="mt-4 max-w-xl text-lg text-navy-200">{page.intro}</p>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={requestPath}
                  className="inline-flex items-center justify-center gap-2 rounded bg-brand-500 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-600"
                >
                  {dict.cta.primary}
                  <ArrowRightIcon className="h-4 w-4" />
                </Link>
                <a
                  href={site.phoneHref}
                  className="inline-flex items-center justify-center gap-2 rounded border border-navy-600 px-6 py-3.5 text-sm font-bold text-white hover:bg-navy-900"
                >
                  <PhoneIcon className="h-4 w-4" />
                  {site.phoneDisplay}
                </a>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <PageHeader
          eyebrow={page.eyebrow}
          title={page.h1}
          intro={page.intro}
          crumbs={[{ name: page.breadcrumb, href: pathFor(pageId, locale) }]}
          home={homeCrumb}
        />
      )}

      <Section>
        <div className={page.image ? "grid gap-10 lg:grid-cols-2 lg:items-center" : "mx-auto max-w-3xl"}>
          {page.image && (
            <div className="order-last overflow-hidden rounded-lg border border-navy-200 lg:order-first">
              <div className="relative aspect-[4/3]">
                <Image
                  src={page.image.src}
                  alt={page.image.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </div>
          )}
          <div>
            {page.answer && (
              <AnswerBox question label={dict.ui.answerLabel}>
                {page.answer}
              </AnswerBox>
            )}
            {page.blocks && (
              <div className="content mt-6 max-w-none">
                <Blocks blocks={page.blocks} />
              </div>
            )}
            {page.form && (
              <div className="mt-8 rounded-lg border border-navy-200 bg-white p-6">
                <LeadForm
                  variant={page.form}
                  t={formTexts}
                  locale={locale}
                  subject={page.form === "compact" ? dict.form.subjectContact : dict.form.subjectRequest}
                  formName={pageId === "contact" ? "Contactaanvraag" : "Inspectieaanvraag"}
                />
              </div>
            )}
          </div>
        </div>
      </Section>

      <CTASection
        title={page.ctaTitle ?? dict.cta.title}
        text={dict.cta.text}
        primaryLabel={dict.cta.primary}
        primaryHref={requestPath}
      />
    </>
  );
}

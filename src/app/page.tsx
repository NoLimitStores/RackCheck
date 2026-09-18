import type { Metadata } from "next";
import { pageAlternates } from "@/i18n/routes";
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";
import { Section, SectionHeading } from "@/components/Section";
import LeadForm from "@/components/LeadForm";
import JsonLd from "@/components/JsonLd";
import {
  CheckIcon,
  ArrowRightIcon,
  PhoneIcon,
  MailIcon,
  ShieldIcon,
  ClockIcon,
  DocumentIcon,
  WrenchIcon,
  ScaleIcon,
  WarningIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: { absolute: "RackCheck | Professionele magazijninspecties in Nederland" },
  description:
    "RackCheck is dé specialist in professionele magazijninspecties in Nederland. Onafhankelijke stellinginspecties conform NEN-EN 15635 en NPR 5055, met een rapport binnen 24 uur.",
  alternates: pageAlternates("home"),
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Inspectie van magazijnstellingen",
  provider: { "@type": "ProfessionalService", name: site.name, url: site.url },
  areaServed: [
    { "@type": "Country", name: "Nederland" },
    { "@type": "Country", name: "België" },
  ],
  description:
    "Onafhankelijke inspectie van magazijnstellingen conform NEN-EN 15635 en NPR 5055, met een helder rapport binnen 24 uur.",
};

const diensten = [
  {
    num: "01",
    icon: CheckIcon,
    title: "Periodieke Inspectie",
    desc: "Verplichte jaarlijkse of halfjaarlijkse inspectie conform NEN-EN 15635 en NPR 5055.",
    href: "/jaarlijkse-stellinginspectie/",
  },
  {
    num: "02",
    icon: WarningIcon,
    title: "Schade & Risico",
    desc: "Directe beoordeling na incident. Advies over gebruik of buitenstelling van beschadigde stellingen.",
    href: "/stelling-aangereden/",
  },
  {
    num: "03",
    icon: DocumentIcon,
    title: "Inspectierapporten",
    desc: "Digitale rapporten binnen 24 uur. Met foto's, locatieaanduidingen en prioriteitsclassificaties.",
    href: "/duidelijk-inspectierapport/",
  },
  {
    num: "04",
    icon: WrenchIcon,
    title: "Reparatie Offerte",
    desc: "Na inspectie een op maat gemaakte offerte voor alle herstelwerkzaamheden, zodat u weer compliant bent.",
    href: "/werkwijze/",
  },
];

const stappen = [
  { num: "01", title: "Aanvraag", desc: "Vul het contactformulier in. Reactie binnen één werkdag met offerte op maat." },
  { num: "02", title: "Planning", desc: "We plannen de inspectie op uw gewenste moment. Bij een periodieke inspectie komen wij jaarlijks op een vast moment terug: geen extra actie vereist." },
  { num: "03", title: "Inspectie", desc: "Gecertificeerde inspecteur voert een grondige keuring uit conform NEN-EN 15635 en NPR 5055." },
  { num: "04", title: "Rapport", desc: "Binnen 24 uur een gedetailleerd digitaal rapport met bevindingen en prioriteiten." },
];

const voordelen = [
  { icon: ShieldIcon, title: "Volledig gecertificeerd", desc: "Al onze inspecteurs zijn gecertificeerd conform Europese normen. Uw inspectie voldoet altijd aan alle wettelijke vereisten." },
  { icon: ClockIcon, title: "Rapport binnen 24 uur", desc: "Na de inspectie ontvangt u altijd binnen 24 uur uw volledige rapport. Duidelijk, overzichtelijk en direct bruikbaar." },
  { icon: ScaleIcon, title: "Onafhankelijk advies", desc: "Wij verkopen zelf geen stellingen. Onze inspectiebeoordeling is volledig onafhankelijk, altijd in uw belang." },
  { icon: PhoneIcon, title: "Persoonlijk & betrokken", desc: "Direct contact met uw vaste inspecteur. Wij kennen uw magazijn en zijn het hele jaar bereikbaar." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={serviceSchema} />

      {/* HERO (behouden van de oude website) */}
      <section id="hero" className="relative flex min-h-[100svh] items-center overflow-hidden bg-navy-950">
        <Image
          src="/images/magazijn-hero-inrijstelling.jpg"
          alt="Magazijn met hoge, volledig gevulde stellingen in een lange gang"
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
        <div
          aria-hidden
          className="pointer-events-none absolute right-[5%] top-1/2 h-[600px] w-[600px] -translate-y-1/2"
          style={{ background: "radial-gradient(circle, rgba(0,98,247,0.14) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 pt-28 pb-20 sm:px-6 sm:pt-32">
          <div className="max-w-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-brand-300">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-400" />
              TÜV SÜD Gecertificeerd
            </span>
            <h1
              className="display mt-7 uppercase leading-[0.95] text-white"
              style={{ fontSize: "clamp(2.9rem, 8vw, 5.5rem)", letterSpacing: "-0.01em" }}
            >
              Veiligheid begint bij een <span className="text-brand-500">keuring</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-navy-200">
              RackCheck is dé specialist in professionele <strong className="font-semibold text-white">magazijninspecties</strong> in
              Nederland. Wij zorgen dat uw stellingen altijd voldoen aan de hoogste veiligheidsnormen.
            </p>
            <div className="mt-9">
              <a
                href="#contact"
                className="inline-flex items-center gap-2.5 rounded-md bg-brand-500 px-8 py-4 text-[15px] font-semibold text-white shadow-lg shadow-brand-500/20 transition-colors hover:bg-brand-600"
              >
                Inspectie aanvragen
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIENSTEN: Alles voor uw magazijnveiligheid */}
      <Section tone="white" className="scroll-mt-16">
        <div id="diensten" className="scroll-mt-20" />
        <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading eyebrow="Onze diensten" title="Alles voor uw magazijnveiligheid" />
          <p className="max-w-md text-navy-600">
            Van periodieke keuringen tot gedetailleerde risicoanalyses: complete oplossingen voor een veilig magazijn.
          </p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {diensten.map((d) => (
            <Link
              key={d.num}
              href={d.href}
              className="group relative flex flex-col rounded-lg border border-navy-200 bg-white p-6 transition-colors hover:border-brand-400"
            >
              <span aria-hidden className="absolute right-5 top-5 text-sm font-bold text-navy-200">{d.num}</span>
              <span aria-hidden className="grid h-11 w-11 place-items-center rounded bg-brand-50 text-brand-600">
                <d.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-950 group-hover:text-brand-700">{d.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-navy-600">{d.desc}</p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-brand-700">
                Meer informatie
                <ArrowRightIcon className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </Section>

      {/* BENT U COMPLIANT? */}
      <section className="bg-navy-950 text-white">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-20">
          <div className="relative order-last h-64 overflow-hidden rounded-lg sm:h-80 lg:order-first lg:h-full lg:min-h-[420px]">
            <Image
              src="/images/inrijstelling-magazijn.jpg"
              alt="Hoge blauwe inrijstelling volledig gevuld met pallets in een magazijn"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-400">Wettelijk verplicht</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Bent u compliant?</h2>
            <p className="mt-3 font-semibold text-navy-100">Europese NEN-EN 15635 en Nederlandse NPR 5055</p>
            <p className="mt-4 leading-relaxed text-navy-200">
              De NEN-EN 15635 norm verplicht periodieke inspectie van uw stellingen. Zonder keuring
              riskeert u boetes van de Arbeidsinspectie. RackCheck zorgt dat u altijd aantoonbaar voldoet.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/kennisbank/nen-en-15635/" className="inline-flex items-center gap-2 rounded border border-navy-700 px-5 py-3 text-sm font-bold text-white hover:bg-navy-900">
                Wat is NEN-EN 15635?
              </Link>
              <Link href="/kennisbank/is-stellingkeuring-verplicht/" className="inline-flex items-center gap-2 rounded border border-navy-700 px-5 py-3 text-sm font-bold text-white hover:bg-navy-900">
                Is een keuring verplicht?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ZO WERKT RACKCHECK */}
      <Section tone="muted">
        <div id="werkwijze" className="scroll-mt-20" />
        <SectionHeading
          eyebrow="Werkwijze"
          title="Zo werkt RackCheck"
          intro="Van aanvraag tot rapport: transparant, snel en professioneel."
          center
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stappen.map((s) => (
            <li key={s.num} className="relative rounded-lg border border-navy-100 bg-white p-6">
              <span aria-hidden className="grid h-11 w-11 place-items-center rounded-full bg-navy-950 text-sm font-bold text-white">
                {s.num}
              </span>
              <h3 className="mt-4 text-lg font-bold text-navy-950">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-600">{s.desc}</p>
            </li>
          ))}
        </ol>
        <div className="mt-8 text-center">
          <Link href="/werkwijze/" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-700 hover:text-brand-800">
            Bekijk de volledige werkwijze
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </Section>

      {/* DE JUISTE KEUZE VOOR UW MAGAZIJN */}
      <Section tone="white">
        <div id="waarom" className="scroll-mt-20" />
        <SectionHeading eyebrow="Waarom RackCheck" title="De juiste keuze voor uw magazijn" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {voordelen.map((v) => (
            <div key={v.title} className="flex gap-4 rounded-lg border border-navy-100 bg-white p-6">
              <span aria-hidden className="grid h-11 w-11 shrink-0 place-items-center rounded bg-brand-50 text-brand-600">
                <v.icon className="h-5 w-5" />
              </span>
              <div>
                <h3 className="text-lg font-bold text-navy-950">{v.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-navy-600">{v.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* VAN INSPECTIE NAAR REPARATIE (Hovuma) */}
      <Section tone="muted">
        <div className="overflow-hidden rounded-2xl border border-navy-200 bg-navy-950 p-8 text-white sm:p-10">
          <div className="grid gap-8 lg:grid-cols-[1.6fr_auto] lg:items-center lg:gap-12">
            <div>
              <h2 className="display text-3xl sm:text-4xl">Van inspectie naar reparatie in één stap</h2>
              <p className="mt-4 max-w-2xl leading-relaxed text-navy-200">
                RackCheck is officieel partner van <strong className="font-semibold text-white">Hovuma</strong>, specialist in
                magazijninrichting en stellingreparatie. Omdat wij uw stellingen al kennen, verloopt herstel efficiënt en
                zonder dubbel werk. Na iedere inspectie ontvangt u niet alleen een gedetailleerd rapport, maar op verzoek
                ook een vrijblijvende offerte voor het herstel van geconstateerde schade.
              </p>
              <a
                href="https://www.hovuma.nl"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-brand-300 hover:text-brand-200"
              >
                Bezoek hovuma.nl
                <ArrowRightIcon className="h-4 w-4" />
              </a>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-3 lg:items-end">
              <span className="text-xs font-bold uppercase tracking-wide text-brand-400">Officieel partner</span>
              <a
                href="https://www.hovuma.nl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Bezoek de website van Hovuma"
              >
                <Image
                  src="/images/hovuma-logo.png"
                  alt="Hovuma, specialist in magazijninrichting en stellingreparatie"
                  width={520}
                  height={133}
                  className="h-auto w-44 sm:w-52"
                />
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* AANVRAAG / CONTACT */}
      <section className="bg-navy-950 text-white">
        <div id="contact" className="scroll-mt-20" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:items-start lg:py-20">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-brand-400">Contact</p>
            <h2 className="display mt-2 text-3xl sm:text-4xl">Vraag een inspectie aan</h2>
            <p className="mt-4 max-w-md text-navy-200">
              Heeft u vragen of wilt u direct een inspectie plannen? Wij reageren binnen één werkdag.
            </p>
            <dl className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded bg-navy-900 text-brand-400"><PhoneIcon className="h-5 w-5" /></span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy-400">Telefoon</dt>
                  <dd><a href={site.phoneHref} className="font-bold text-white hover:text-brand-300">{site.phoneDisplay}</a></dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded bg-navy-900 text-brand-400"><MailIcon className="h-5 w-5" /></span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy-400">E-mail</dt>
                  <dd><a href={`mailto:${site.email}`} className="font-bold text-white hover:text-brand-300">{site.email}</a></dd>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span aria-hidden className="grid h-10 w-10 shrink-0 place-items-center rounded bg-navy-900 text-brand-400"><ShieldIcon className="h-5 w-5" /></span>
                <div>
                  <dt className="text-xs font-semibold uppercase tracking-wide text-navy-400">Regio</dt>
                  <dd className="font-bold text-white">{site.workingArea}</dd>
                </div>
              </div>
            </dl>
            <p className="mt-8 text-sm text-navy-300">
              Liever de volledige contactpagina?{" "}
              <Link href="/contact/" className="font-semibold text-brand-300 underline hover:text-brand-200">Ga naar contact</Link>{" "}
              of vul het{" "}
              <Link href="/inspectie-aanvragen/" className="font-semibold text-brand-300 underline hover:text-brand-200">uitgebreide aanvraagformulier</Link> in.
            </p>
          </div>

          <div className="rounded-lg border border-navy-800 bg-white p-6 sm:p-7">
            <h3 className="text-lg font-bold text-navy-950">Stuur uw aanvraag</h3>
            <p className="mt-1.5 text-sm text-navy-600">We nemen binnen één werkdag contact met u op.</p>
            <div className="mt-5">
              <LeadForm variant="compact" defaultReden="Jaarlijkse inspectie" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

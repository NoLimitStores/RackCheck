"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { site } from "@/lib/site";

const redenen = [
  "Jaarlijkse inspectie",
  "Inspectie verlopen",
  "Heftruckaanrijding",
  "Zichtbare schade",
  "Second opinion",
  "Nieuwe of verplaatste stellingen",
  "Terugkerende schade",
  "Meerdere vestigingen",
  "Anders",
];

const groottes = [
  "Klein (tot circa 500 m2)",
  "Middelgroot (500 tot 2.000 m2)",
  "Groot (2.000 tot 5.000 m2)",
  "Zeer groot (5.000 tot 10.000 m2)",
  "Complex of onbekend",
];

const termijnen = ["Zo snel mogelijk (spoed)", "Binnen 2 weken", "Binnen 1 maand", "Binnen 3 maanden", "Geen voorkeur"];

const stellingtypenOpties = ["Palletstelling", "Legbordstelling", "Draagarmstelling", "Entresol of bordes", "Anders of onbekend"];

const utmKeys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
// Campagne- en klikparameters die we door de sessie heen vasthouden.
const trackingKeys = [...utmKeys, "gclid"];
const TRACKING_STORAGE_KEY = "rc_tracking";

// Web3Forms access key. Deze sleutel is per ontwerp openbaar (client-side gebruik)
// en gekoppeld aan het account dat aanvragen ontvangt op t.krikhaar@rackcheck.nl.
// Web3Forms staat op het gratis plan alleen inzendingen vanuit de browser toe,
// daarom versturen we rechtstreeks naar Web3Forms (niet via een server-route).
const WEB3FORMS_ACCESS_KEY = "73bd0fef-dc68-4b3c-b68e-fdf1bca0b47f";

type Status = "idle" | "submitting" | "error";

/** Vertaalbare teksten voor het (gelokaliseerde) kernformulier. */
export type FormTexts = {
  company: string;
  name: string;
  email: string;
  phone: string;
  reason: string;
  message: string;
  messagePlaceholder: string;
  choose: string;
  privacyBefore: string;
  privacyLink: string;
  privacyAfter: string;
  submit: string;
  submitting: string;
  successTitle: string;
  successText: string;
  errorText: string;
  reasonOptions: string[];
};

export default function LeadForm({
  variant = "full",
  defaultReden,
  subject = "Nieuwe inspectieaanvraag via RackCheck",
  formName = "Inspectieaanvraag",
  t,
  locale = "nl",
  privacyHref = "/privacy/",
}: {
  variant?: "full" | "compact";
  defaultReden?: string;
  subject?: string;
  formName?: string;
  /** Aanwezig = gelokaliseerd kernformulier. Afwezig = Nederlands volledig formulier. */
  t?: FormTexts;
  locale?: string;
  privacyHref?: string;
}) {
  const router = useRouter();
  const [status, setStatus] = useState<Status>("idle");
  const [success, setSuccess] = useState(false);
  const [errorFields, setErrorFields] = useState<string[]>([]);
  const metaRef = useRef<Record<string, string>>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    // Bewaar campagneparameters voor de duur van de sessie, zodat ze niet
    // verdwijnen wanneer iemand eerst een andere pagina bekijkt.
    let stored: Record<string, string> = {};
    try {
      stored = JSON.parse(sessionStorage.getItem(TRACKING_STORAGE_KEY) || "{}");
    } catch {
      stored = {};
    }
    trackingKeys.forEach((k) => {
      const v = params.get(k);
      if (v) stored[k] = v;
    });
    try {
      sessionStorage.setItem(TRACKING_STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // sessionStorage kan geblokkeerd zijn; campagnedata is dan simpelweg leeg.
    }
    metaRef.current = {
      landingspagina: window.location.pathname,
      bronpagina: document.referrer || "direct",
      ...stored,
    };
  }, []);

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setErrorFields([]);

    const formData = new FormData(event.currentTarget);

    const localized = Boolean(t);

    // Honeypot: als het (verborgen) botcheck-veld is ingevuld, is het een bot.
    if (formData.get("botcheck")) {
      if (variant === "full" && !localized) {
        router.push("/bedankt/");
        return;
      }
      setSuccess(true);
      return;
    }

    formData.append("access_key", WEB3FORMS_ACCESS_KEY);
    formData.append("subject", subject);
    formData.append("from_name", "RackCheck website");
    formData.append("aanvraagtype", formName);
    formData.append("taal", locale);
    formData.append("pagina_url", window.location.href);
    formData.append("pagina_titel", document.title);
    formData.append("verzonden_op", new Date().toLocaleString("nl-NL"));
    Object.entries(metaRef.current).forEach(([k, v]) => formData.append(k, v));

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await res.json();
      if (result.success) {
        // Gelokaliseerde formulieren tonen altijd een inline succesmelding
        // (er is nog geen vertaalde bedankpagina).
        if (variant === "full" && !localized) {
          router.push("/bedankt/");
          return;
        }
        setSuccess(true);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (success) {
    return (
      <div className="rounded-lg border border-navy-200 bg-navy-50 p-6 text-center">
        <span aria-hidden className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-signal-groen">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 13l4 4L19 7" />
          </svg>
        </span>
        <h3 className="mt-3 text-lg font-bold text-navy-950">
          {t ? t.successTitle : "Bedankt voor uw aanvraag"}
        </h3>
        <p className="mx-auto mt-2 max-w-md text-sm text-navy-700">
          {t
            ? `${t.successText} ${site.phoneDisplay}`
            : `We hebben uw bericht ontvangen en nemen binnen één werkdag contact met u op. Is er sprake van urgente schade? Bel ons dan direct op ${site.phoneDisplay}.`}
        </p>
      </div>
    );
  }

  // Gelokaliseerd kernformulier (EN/DE/FR): dezelfde verzendlogica en
  // Web3Forms-koppeling, met vertaalde labels en een compacte veldenset.
  if (t) {
    return (
      <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
        <input type="checkbox" name="botcheck" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />
        <Field label={t.company} name="bedrijf" autoComplete="organization" required />
        <Field label={t.name} name="naam" autoComplete="name" required />
        <Field label={t.email} name="email" type="email" autoComplete="email" required />
        <Field label={t.phone} name="telefoon" type="tel" autoComplete="tel" required />

        <div className="sm:col-span-2">
          <Label htmlFor="reden">{t.reason}</Label>
          <select id="reden" name="redenAanvraag" defaultValue={defaultReden ?? ""} className={inputClass} required>
            <option value="" disabled>{t.choose}</option>
            {t.reasonOptions.map((r) => (
              <option key={r} value={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <Label htmlFor="toelichting">{t.message}</Label>
          <textarea id="toelichting" name="toelichting" rows={4} placeholder={t.messagePlaceholder} className={inputClass} />
        </div>

        <div className="sm:col-span-2">
          <label className="flex items-start gap-2.5 text-sm text-navy-700">
            <input type="checkbox" name="privacy" required className="mt-0.5 h-4 w-4 rounded border-navy-300 text-brand-600 focus:ring-brand-500" />
            <span>
              {t.privacyBefore}
              <Link href={privacyHref} className="font-semibold text-brand-700 underline">{t.privacyLink}</Link>
              {t.privacyAfter}
            </span>
          </label>
        </div>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center rounded bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
          >
            {status === "submitting" ? t.submitting : t.submit}
          </button>
          {status === "error" && (
            <p role="alert" className="mt-3 rounded border border-signal-rood/40 bg-signal-rood/10 px-4 py-3 text-sm font-semibold text-navy-900">
              {t.errorText}
            </p>
          )}
        </div>
      </form>
    );
  }

  const compact = variant === "compact";

  return (
    <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
      {/* Honeypot van Web3Forms tegen spam */}
      <input
        type="checkbox"
        name="botcheck"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <Field label="Bedrijfsnaam" name="bedrijf" autoComplete="organization" required invalid={errorFields.includes("bedrijf")} />
      <Field label="Naam contactpersoon" name="naam" autoComplete="name" required invalid={errorFields.includes("naam")} />
      <Field label="Zakelijk e-mailadres" name="email" type="email" autoComplete="email" required invalid={errorFields.includes("email")} />
      <Field label="Telefoonnummer" name="telefoon" type="tel" autoComplete="tel" required invalid={errorFields.includes("telefoon")} />

      {!compact && (
        <>
          <Field label="Postcode" name="postcode" autoComplete="postal-code" />
          <Field label="Plaats" name="plaats" autoComplete="address-level2" />

          <div>
            <Label htmlFor="locaties">Aantal locaties</Label>
            <select id="locaties" name="aantalLocaties" defaultValue="1" className={inputClass}>
              <option value="1">1 locatie</option>
              <option value="2 tot 3">2 tot 3 locaties</option>
              <option value="4 tot 10">4 tot 10 locaties</option>
              <option value="Meer dan 10">Meer dan 10 locaties</option>
            </select>
          </div>

          <div>
            <Label htmlFor="grootte">Geschatte magazijngrootte</Label>
            <select id="grootte" name="magazijngrootte" defaultValue="" className={inputClass}>
              <option value="" disabled>Maak een keuze</option>
              {groottes.map((g) => (
                <option key={g} value={g}>{g}</option>
              ))}
            </select>
          </div>

          <fieldset className="sm:col-span-2">
            <legend className="text-sm font-semibold text-navy-900">Type stellingen</legend>
            <div className="mt-2 flex flex-wrap gap-x-5 gap-y-2">
              {stellingtypenOpties.map((t) => (
                <label key={t} className="flex items-center gap-2 text-sm text-navy-800">
                  <input type="checkbox" name="typeStellingen" value={t} className="h-4 w-4 rounded border-navy-300 text-brand-600 focus:ring-brand-500" />
                  {t}
                </label>
              ))}
            </div>
          </fieldset>
        </>
      )}

      <div className={compact ? "sm:col-span-2" : ""}>
        <Label htmlFor="reden">Reden van aanvraag</Label>
        <select id="reden" name="redenAanvraag" defaultValue={defaultReden ?? ""} className={inputClass} required>
          <option value="" disabled>Maak een keuze</option>
          {redenen.map((r) => (
            <option key={r} value={r}>{r}</option>
          ))}
        </select>
      </div>

      {!compact && (
        <div>
          <Label htmlFor="termijn">Gewenste termijn</Label>
          <select id="termijn" name="gewensteTermijn" defaultValue="Geen voorkeur" className={inputClass}>
            {termijnen.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
      )}

      <div className="sm:col-span-2">
        <Label htmlFor="toelichting">Toelichting</Label>
        <textarea
          id="toelichting"
          name="toelichting"
          rows={compact ? 3 : 4}
          placeholder="Bijv. aantal stellingen, merk, eerdere keuringen of de aard van de schade."
          className={inputClass}
        />
      </div>

      {!compact && (
        <div className="sm:col-span-2">
          <Label htmlFor="fotos">Foto&apos;s van de schade (optioneel)</Label>
          <input
            id="fotos"
            name="fotos"
            type="file"
            accept="image/*"
            multiple
            className="mt-1.5 block w-full text-sm text-navy-700 file:mr-3 file:rounded file:border-0 file:bg-navy-950 file:px-4 file:py-2.5 file:text-sm file:font-semibold file:text-white hover:file:bg-navy-800"
          />
          <p className="mt-1 text-xs text-navy-500">
            Handig bij aanrijdschade. Zo komen we goed voorbereid langs. Meerdere foto&apos;s zijn welkom.
          </p>
        </div>
      )}

      <div className="sm:col-span-2">
        <label className="flex items-start gap-2.5 text-sm text-navy-700">
          <input type="checkbox" name="privacy" required className="mt-0.5 h-4 w-4 rounded border-navy-300 text-brand-600 focus:ring-brand-500" />
          <span>
            Ik ga ermee akkoord dat mijn gegevens worden gebruikt om contact met mij
            op te nemen over deze aanvraag. Zie de{" "}
            <Link href="/privacy/" className="font-semibold text-brand-700 underline">privacyverklaring</Link>.
          </span>
        </label>
      </div>

      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex w-full items-center justify-center rounded bg-brand-600 px-6 py-3.5 text-sm font-bold text-white transition-colors hover:bg-brand-700 disabled:cursor-wait disabled:opacity-70 sm:w-auto"
        >
          {status === "submitting" ? "Versturen..." : "Inspectie aanvragen"}
        </button>
        {status === "error" && (
          <p role="alert" className="mt-3 rounded border border-signal-rood/40 bg-signal-rood/10 px-4 py-3 text-sm font-semibold text-navy-900">
            Het versturen is niet gelukt.{" "}
            {errorFields.length > 0
              ? "Controleer de gemarkeerde velden en probeer het opnieuw."
              : `Probeer het opnieuw of bel ons direct op ${site.phoneDisplay}.`}
          </p>
        )}
        <p className="mt-3 text-xs text-navy-500">
          Aanvragen is vrijblijvend. Uw gegevens gebruiken we uitsluitend om contact
          met u op te nemen.
        </p>
      </div>
    </form>
  );
}

// text-base (16px) voorkomt ongewenst inzoomen bij focus op iOS-browsers.
const inputClass =
  "mt-1.5 min-h-11 w-full rounded border border-navy-200 bg-white px-3.5 py-3 text-base text-navy-950 outline-none transition-colors placeholder:text-navy-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-500/30";

function Label({ htmlFor, children }: { htmlFor: string; children: React.ReactNode }) {
  return (
    <label htmlFor={htmlFor} className="text-sm font-semibold text-navy-900">
      {children}
    </label>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  autoComplete,
  invalid = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  invalid?: boolean;
}) {
  return (
    <div>
      <Label htmlFor={name}>
        {label}
        {required && <span aria-hidden className="text-signal-rood"> *</span>}
      </Label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        aria-invalid={invalid || undefined}
        className={`${inputClass} ${invalid ? "border-signal-rood ring-2 ring-signal-rood/30" : ""}`}
      />
    </div>
  );
}

import type { LocaleDict } from "./_types";

/** Deutsche (de) Dictionary. Professionelle B2B-Texte für den DACH-Markt. */
export const de: LocaleDict = {
  nav: {
    inspection: "Regalprüfung",
    howWeWork: "Arbeitsweise",
    pricing: "Preise",
    about: "Über RackCheck",
    contact: "Kontakt",
    request: "Prüfung anfragen",
    langMenu: "Sprache wählen",
    langCurrent: "Aktuelle Sprache",
    skipToContent: "Zum Hauptinhalt springen",
  },
  ui: {
    answerLabel: "Kurze Antwort",
  },
  footer: {
    tagline:
      "Unabhängige Prüfung von Lagerregalen. Ein klarer Prüfbericht mit priorisierten Befunden, in der Regel innerhalb von 24 Stunden.",
    colServices: "Prüfungen",
    colCompany: "Unternehmen",
    contactTitle: "Kontakt",
    workingArea: "Einsatzgebiet: Niederlande und Belgien",
    rights: "Alle Rechte vorbehalten.",
    kvk: "Handelsregister (KvK)",
    vat: "USt-IdNr.",
  },
  cta: {
    title: "Sind Ihre Regalanlagen noch sicher?",
    text: "Fordern Sie eine unabhängige Prüfung an. Sie erhalten einen klaren Prüfbericht mit priorisierten Befunden, in der Regel innerhalb von 24 Stunden.",
    primary: "Prüfung anfragen",
    phone: "Anrufen",
    whatsapp: "WhatsApp",
  },
  form: {
    company: "Firmenname",
    name: "Ansprechpartner",
    email: "Geschäftliche E-Mail",
    phone: "Telefonnummer",
    postcode: "Postleitzahl",
    city: "Ort",
    locations: "Anzahl der Standorte",
    warehouseSize: "Geschätzte Lagergröße",
    rackTypes: "Regaltypen",
    reason: "Grund der Anfrage",
    timeframe: "Gewünschter Zeitraum",
    message: "Nachricht",
    messagePlaceholder:
      "Z. B. Anzahl der Felder, Hersteller, frühere Prüfungen oder Art des Schadens.",
    photos: "Fotos des Schadens (optional)",
    choose: "Bitte wählen",
    privacyBefore:
      "Ich bin damit einverstanden, dass meine Daten verwendet werden, um mich zu dieser Anfrage zu kontaktieren. Siehe unsere ",
    privacyLink: "Datenschutzerklärung",
    privacyAfter: ".",
    submit: "Prüfung anfragen",
    submitting: "Wird gesendet...",
    successTitle: "Vielen Dank für Ihre Anfrage",
    successText:
      "Wir haben Ihre Nachricht erhalten und melden uns innerhalb eines Werktags bei Ihnen.",
    errorText:
      "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut oder kontaktieren Sie uns direkt.",
    reasonOptions: [
      "Jährliche Prüfung",
      "Prüfung überfällig",
      "Anfahrschaden durch Stapler",
      "Sichtbarer Schaden",
      "Zweitmeinung",
      "Neue oder versetzte Regale",
      "Wiederkehrender Schaden",
      "Mehrere Standorte",
      "Sonstiges",
    ],
    subjectRequest: "Neue Prüfanfrage über RackCheck",
    subjectContact: "Neue Kontaktanfrage über RackCheck",
  },
  pages: {
    home: {
      metaTitle: "RackCheck | Unabhängige Regalprüfung für Lagerregale",
      metaDescription:
        "RackCheck prüft Lagerregale unabhängig. Ein klarer Prüfbericht mit Prioritäten, ein fester Prüfer und persönlicher Kontakt. Aktiv in den Niederlanden und Belgien.",
      breadcrumb: "Start",
      h1: "Sicherheit beginnt mit einer Prüfung",
      intro:
        "RackCheck prüft Ihre Lagerregale unabhängig und übersetzt jeden Befund in eine klare Priorität. Sie wissen genau, was sicher ist, was Aufmerksamkeit braucht und was sofort erledigt werden muss.",
      hero: {
        image: "/images/magazijn-hero-inrijstelling.jpg",
        imageAlt: "Lager mit hohen, voll beladenen Regalen entlang eines langen Gangs",
      },
      answer:
        "Eine Regalprüfung ist eine sachkundige Beurteilung der Sicherheit Ihrer Lagerregale gemäß EN 15635. Sie erhalten einen klaren Prüfbericht mit priorisierten Befunden und konkreten nächsten Schritten, in der Regel innerhalb von 24 Stunden.",
      blocks: [
        { t: "h2", text: "Warum RackCheck" },
        { t: "ul", items: [
          "Unabhängige Beurteilung ohne Verkaufsinteresse",
          "Ein priorisierter Prüfbericht, in der Regel innerhalb von 24 Stunden",
          "Ein fester Prüfer und persönlicher Kontakt",
          "Aktiv in den Niederlanden und Belgien, nach Absprache auch in Deutschland",
          "Reparaturen können separat über Hovuma erfolgen",
        ] },
      ],
      ctaTitle: "Sind Ihre Regalanlagen noch sicher?",
    },
    inspection: {
      metaTitle: "Regalprüfung | Unabhängige Prüfung von Lagerregalen",
      metaDescription:
        "Unabhängige Regalprüfung gemäß EN 15635. Was geprüft wird, wann eine Prüfung nötig ist und was im Prüfbericht steht.",
      breadcrumb: "Regalprüfung",
      eyebrow: "Kernleistung",
      h1: "Prüfung von Lagerregalen",
      intro:
        "Eine unabhängige Prüfung Ihrer Lagerregale, mit einem klaren Prüfbericht, priorisierten Befunden und konkreten Empfehlungen.",
      answer:
        "Eine Regalprüfung ist eine sachkundige Beurteilung der Sicherheit Ihrer Lagerregale gemäß EN 15635. Jeder Befund wird grün, orange oder rot eingestuft, mit einem Prüfbericht in der Regel innerhalb von 24 Stunden.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Lager mit hohen, voll beladenen Palettenregalen",
      },
      blocks: [
        { t: "h2", text: "Was wird geprüft?" },
        { t: "ul", items: [
          "Stützen auf Beulen, Verformung und Korrosion",
          "Traversen auf Durchbiegung und korrekte Sicherung",
          "Fußplatten und Bodenverankerung",
          "Anfahrschutz an gefährdeten Stellen",
          "Belastungsangaben und Schiefstand",
        ] },
        { t: "h2", text: "Wann ist eine Prüfung nötig?" },
        { t: "p", text: "In der Praxis werden Regale mindestens einmal jährlich von einer sachkundigen Person beurteilt, ergänzt durch regelmäßige interne Kontrollen. Auch nach einem Anfahrschaden, einer Änderung der Anlage oder bei Zweifeln an einem früheren Bericht ist eine Prüfung ratsam." },
      ],
      ctaTitle: "Planen Sie Ihre Regalprüfung",
    },
    "how-we-work": {
      metaTitle: "Arbeitsweise | Von der Anfrage bis zum Prüfbericht",
      metaDescription:
        "So läuft eine Regalprüfung bei RackCheck ab: Aufnahme, Planung, Prüfung vor Ort, sofortige Meldung bei Gefahr und ein Bericht in der Regel innerhalb von 24 Stunden.",
      breadcrumb: "Arbeitsweise",
      eyebrow: "Arbeitsweise",
      h1: "Von der Anfrage bis zum Prüfbericht",
      intro:
        "Ein klarer Ablauf, von der ersten Aufnahme bis zu einer optionalen erneuten Beurteilung nach der Reparatur. Prüfung und Reparatur bleiben strikt getrennt.",
      answer:
        "Nach Ihrer Anfrage planen wir die Prüfung zu einem passenden Zeitpunkt. Vor Ort beurteilen wir alle zugänglichen Regale, melden akute Gefahr sofort und halten im Bericht fest, was mit welcher Priorität zu tun ist.",
      blocks: [
        { t: "h2", text: "Der Ablauf in Kürze" },
        { t: "ol", items: [
          "Anfrage und Aufnahme Ihrer Situation",
          "Planung zu einem für Ihren Betrieb passenden Zeitpunkt",
          "Prüfung aller zugänglichen Regale vor Ort",
          "Sofortige Rückmeldung bei akuter Gefahr",
          "Ein priorisierter Prüfbericht, in der Regel innerhalb von 24 Stunden",
          "Auf Wunsch ein separates Reparaturangebot",
        ] },
      ],
      ctaTitle: "Prüfung planen",
    },
    pricing: {
      metaTitle: "Preise | Prüfung ab 395 EUR pro Jahr",
      metaDescription:
        "Eine Regalprüfung bei RackCheck beginnt ab 395 EUR pro Jahr. Den genauen Preis bestimmen wir anhand Ihrer Situation und bestätigen ihn im Voraus.",
      breadcrumb: "Preise",
      eyebrow: "Preise",
      h1: "Prüfung ab 395 EUR pro Jahr",
      intro:
        "Den genauen Preis bestimmen wir anhand Ihrer Situation und bestätigen ihn im Voraus. Vorab klar, was Sie zahlen, ohne Überraschungen im Nachhinein.",
      answer:
        "Eine Regalprüfung beginnt ab 395 EUR pro Jahr, zuzüglich USt. Der Preis richtet sich nach der Größe Ihres Lagers, der Anzahl und Art der Regalsysteme und der Anzahl der Standorte. Wir bestätigen den Preis im Voraus.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Übersicht voll beladener Palettenregale in einem Lager",
      },
      blocks: [
        { t: "h2", text: "Was bestimmt den Preis?" },
        { t: "ul", items: [
          "Die Größe Ihres Lagers",
          "Anzahl und Art der Regalsysteme",
          "Die Anzahl der Standorte",
        ] },
        { t: "p", text: "Mehrere Standorte fassen wir in einem Termin zusammen, das spart Anfahrt und Kosten." },
      ],
      ctaTitle: "Festpreis anfragen",
    },
    about: {
      metaTitle: "Über RackCheck | Unabhängige Regalprüfungen",
      metaDescription:
        "RackCheck führt unabhängige Prüfungen von Lagerregalen durch. Persönlicher Kontakt mit einem festen Prüfer, aktiv in den Niederlanden und Belgien.",
      breadcrumb: "Über RackCheck",
      eyebrow: "Über RackCheck",
      h1: "Unabhängig, sachkundig und persönlich",
      intro:
        "RackCheck beurteilt die Sicherheit von Lagerregalen unabhängig vom Reparaturverkauf. So erhalten Sie ein ehrliches Urteil darüber, was sicher ist und was Aufmerksamkeit braucht.",
      answer:
        "RackCheck ist auf die unabhängige Prüfung von Lagerregalen und Lagersystemen spezialisiert. Sie arbeiten mit einem festen Prüfer und erhalten einen Bericht, den Sie direkt für Ihre Dokumentation und Betreiberpflichten nutzen können.",
      image: {
        src: "/images/draagarmstelling.jpg",
        alt: "Kragarmregal mit schwarzen Armen für Langgut in einem Lager",
      },
      blocks: [
        { t: "h2", text: "Unsere Grundsätze" },
        { t: "ul", items: [
          "Prüfung ist getrennt von der Reparatur: kein Verkaufsinteresse",
          "Ein klarer Prüfbericht mit Prioritäten",
          "Ein fester Ansprechpartner und persönlicher Kontakt",
          "Aktiv in den Niederlanden und Belgien, nach Absprache auch in Deutschland",
        ] },
        { t: "p", text: "Ist eine Reparatur nötig, kann diese separat über Hovuma erfolgen, unabhängig von der Prüfung." },
      ],
      ctaTitle: "Lernen Sie RackCheck kennen",
    },
    contact: {
      metaTitle: "Kontakt | Nehmen Sie Kontakt mit RackCheck auf",
      metaDescription:
        "Nehmen Sie Kontakt mit RackCheck auf für eine unabhängige Regalprüfung. Rufen Sie an, schreiben Sie per WhatsApp oder E-Mail, oder fragen Sie direkt eine Prüfung an.",
      breadcrumb: "Kontakt",
      eyebrow: "Kontakt",
      h1: "Kontakt aufnehmen",
      intro:
        "Rufen Sie an, schreiben Sie per WhatsApp oder E-Mail, oder hinterlassen Sie Ihre Daten. Bei dringenden Schäden helfen wir Ihnen vorrangig.",
      form: "compact",
      ctaTitle: "Lieber direkt eine Prüfung anfragen?",
    },
    request: {
      metaTitle: "Prüfung anfragen | Unabhängige Regalprüfung",
      metaDescription:
        "Fragen Sie eine unabhängige Regalprüfung bei RackCheck an. Füllen Sie das Formular aus, wir melden uns innerhalb eines Werktags.",
      breadcrumb: "Prüfung anfragen",
      eyebrow: "Prüfung anfragen",
      h1: "Fragen Sie Ihre Regalprüfung an",
      intro:
        "Füllen Sie das Formular mit den Angaben zu Ihrem Lager aus. Wir melden uns innerhalb eines Werktags, um die Prüfung zu planen und den Preis zu bestätigen.",
      form: "full",
      ctaTitle: "Fragen? Rufen Sie uns direkt an",
    },
  },
};

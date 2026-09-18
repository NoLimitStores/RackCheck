import type { Block } from "@/lib/kennisbank";
import type { PageId } from "@/i18n/routes";

export type NavDict = {
  inspection: string;
  howWeWork: string;
  pricing: string;
  about: string;
  contact: string;
  request: string;
  langMenu: string;
  langCurrent: string;
  skipToContent: string;
};

export type FooterDict = {
  tagline: string;
  colServices: string;
  colCompany: string;
  contactTitle: string;
  workingArea: string;
  rights: string;
  kvk: string;
  vat: string;
};

export type CtaDict = {
  title: string;
  text: string;
  primary: string;
  phone: string;
  whatsapp: string;
};

export type FormDict = {
  company: string;
  name: string;
  email: string;
  phone: string;
  postcode: string;
  city: string;
  locations: string;
  warehouseSize: string;
  rackTypes: string;
  reason: string;
  timeframe: string;
  message: string;
  messagePlaceholder: string;
  photos: string;
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
  subjectRequest: string;
  subjectContact: string;
};

export type UiDict = {
  answerLabel: string;
};

export type Dictionary = {
  nav: NavDict;
  ui: UiDict;
  footer: FooterDict;
  cta: CtaDict;
  form: FormDict;
  pages: Record<PageId, LocalizedPage>;
};

/** Structuur van één vertaalde pagina. */
export type LocalizedPage = {
  metaTitle: string;
  metaDescription: string;
  breadcrumb: string;
  eyebrow?: string;
  h1: string;
  intro: string;
  /** Alleen op de homepage: donkere hero met achtergrondafbeelding. */
  hero?: { image: string; imageAlt: string; badge?: string };
  answer?: string;
  image?: { src: string; alt: string };
  blocks?: Block[];
  faq?: { q: string; a: string }[];
  form?: "full" | "compact";
  ctaTitle?: string;
  ctaText?: string;
};

/**
 * Nederlandse dictionary. Dit is de referentie voor de types en de fallback
 * voor ontbrekende vertalingen. De Nederlandse root-pagina's blijven hun eigen
 * (ongewijzigde) content gebruiken; deze dictionary voedt de meertalige views.
 */
export const nl: Dictionary = {
  nav: {
    inspection: "Stellinginspectie",
    howWeWork: "Werkwijze",
    pricing: "Prijzen",
    about: "Over RackCheck",
    contact: "Contact",
    request: "Inspectie aanvragen",
    langMenu: "Taal kiezen",
    langCurrent: "Huidige taal",
    skipToContent: "Naar hoofdinhoud",
  },
  ui: {
    answerLabel: "Kort antwoord",
  },
  footer: {
    tagline:
      "Onafhankelijke inspectie van magazijnstellingen. Een helder rapport met duidelijke prioriteiten, in principe binnen 24 uur.",
    colServices: "Inspecties",
    colCompany: "Organisatie",
    contactTitle: "Contact",
    workingArea: "Werkgebied: Nederland en België",
    rights: "Alle rechten voorbehouden.",
    kvk: "KvK",
    vat: "Btw",
  },
  cta: {
    title: "Weet u zeker dat uw stellingen veilig zijn?",
    text: "Vraag een onafhankelijke inspectie aan. U krijgt een helder rapport met duidelijke prioriteiten, in principe binnen 24 uur.",
    primary: "Inspectie aanvragen",
    phone: "Bellen",
    whatsapp: "WhatsApp",
  },
  form: {
    company: "Bedrijfsnaam",
    name: "Naam contactpersoon",
    email: "Zakelijk e-mailadres",
    phone: "Telefoonnummer",
    postcode: "Postcode",
    city: "Plaats",
    locations: "Aantal locaties",
    warehouseSize: "Geschatte magazijngrootte",
    rackTypes: "Type stellingen",
    reason: "Reden van aanvraag",
    timeframe: "Gewenste termijn",
    message: "Toelichting",
    messagePlaceholder:
      "Bijv. aantal stellingen, merk, eerdere keuringen of de aard van de schade.",
    photos: "Foto's van de schade (optioneel)",
    choose: "Maak een keuze",
    privacyBefore: "Ik ga ermee akkoord dat mijn gegevens worden gebruikt om contact met mij op te nemen over deze aanvraag. Zie de ",
    privacyLink: "privacyverklaring",
    privacyAfter: ".",
    submit: "Inspectie aanvragen",
    submitting: "Versturen...",
    successTitle: "Bedankt voor uw aanvraag",
    successText:
      "We hebben uw bericht ontvangen en nemen binnen één werkdag contact met u op.",
    errorText:
      "Het versturen is niet gelukt. Probeer het opnieuw of neem rechtstreeks contact met ons op.",
    reasonOptions: [
      "Jaarlijkse inspectie",
      "Inspectie verlopen",
      "Heftruckaanrijding",
      "Zichtbare schade",
      "Second opinion",
      "Nieuwe of verplaatste stellingen",
      "Terugkerende schade",
      "Meerdere vestigingen",
      "Anders",
    ],
    subjectRequest: "Nieuwe inspectieaanvraag via RackCheck",
    subjectContact: "Nieuwe contactaanvraag via RackCheck",
  },
  pages: {
    home: {
      metaTitle: "RackCheck | Onafhankelijke inspectie van magazijnstellingen",
      metaDescription:
        "RackCheck inspecteert magazijnstellingen onafhankelijk. Een helder rapport met prioriteiten, een vaste inspecteur en persoonlijk contact. Actief in Nederland en België.",
      breadcrumb: "Home",
      h1: "Veiligheid begint bij een keuring",
      intro:
        "RackCheck inspecteert uw magazijnstellingen onafhankelijk en vertaalt elke bevinding naar een duidelijke prioriteit. U weet precies wat veilig is, wat aandacht vraagt en wat direct moet gebeuren.",
      hero: {
        image: "/images/magazijn-hero-inrijstelling.jpg",
        imageAlt: "Magazijn met hoge, volledig gevulde stellingen in een lange gang",
      },
      answer:
        "Een stellinginspectie is een deskundige beoordeling van de veiligheid van uw magazijnstellingen conform NEN-EN 15635. U krijgt in principe binnen 24 uur een rapport met duidelijke prioriteiten en concrete vervolgstappen.",
      blocks: [
        { t: "h2", text: "Waarom RackCheck" },
        { t: "ul", items: [
          "Onafhankelijke beoordeling zonder verkoopbelang",
          "Rapport in principe binnen 24 uur, met prioriteiten",
          "Een vaste inspecteur en persoonlijk contact",
          "Actief in Nederland en België, in overleg ook in Duitsland",
          "Herstel kan apart via Hovuma worden geregeld",
        ] },
      ],
      ctaTitle: "Weet u zeker dat uw stellingen veilig zijn?",
    },
    inspection: {
      metaTitle: "Stellinginspectie | Onafhankelijke keuring van magazijnstellingen",
      metaDescription:
        "Onafhankelijke stellinginspectie conform NEN-EN 15635. Wat wordt gecontroleerd, wanneer inspectie nodig is en wat er in het rapport staat.",
      breadcrumb: "Stellinginspectie",
      eyebrow: "Hoofddienst",
      h1: "Stellinginspectie",
      intro:
        "Onafhankelijke inspectie van uw magazijnstellingen, met een helder rapport, duidelijke prioriteiten en concreet vervolgadvies.",
      answer:
        "Een stellinginspectie is een deskundige beoordeling van de veiligheid van uw magazijnstellingen conform NEN-EN 15635. Elke bevinding wordt geclassificeerd als groen, oranje of rood, met een rapport in principe binnen 24 uur.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Magazijn met hoge, volledig gevulde palletstellingen",
      },
      blocks: [
        { t: "h2", text: "Wat wordt gecontroleerd?" },
        { t: "ul", items: [
          "Staanders op deuken, vervorming en corrosie",
          "Liggers op doorbuiging en correcte borging",
          "Voetplaten en vloerverankering",
          "Aanrijdbeveiliging op kwetsbare plekken",
          "Belastinggegevens en scheefstand",
        ] },
        { t: "h2", text: "Wanneer is een inspectie nodig?" },
        { t: "p", text: "In de praktijk laat u stellingen minimaal jaarlijks door een deskundige beoordelen, aangevuld met regelmatige interne controles. Ook na een aanrijding, wijziging of bij twijfel over een eerder rapport is een inspectie verstandig." },
      ],
      ctaTitle: "Plan uw stellinginspectie",
    },
    "how-we-work": {
      metaTitle: "Werkwijze | Van aanvraag tot rapport",
      metaDescription:
        "Zo verloopt een stellinginspectie bij RackCheck: intake, planning, inspectie op locatie, directe melding bij gevaar en een rapport in principe binnen 24 uur.",
      breadcrumb: "Werkwijze",
      eyebrow: "Werkwijze",
      h1: "Van aanvraag tot rapport",
      intro:
        "Een helder proces, van de eerste intake tot een eventuele herbeoordeling na herstel. Inspectie en herstel blijven inhoudelijk gescheiden.",
      answer:
        "Na uw aanvraag plannen we de inspectie in overleg in. Op locatie beoordelen we alle bereikbare stellingen, melden we acuut gevaar direct en leggen we in het rapport vast wat er moet gebeuren en met welke prioriteit.",
      blocks: [
        { t: "h2", text: "Het proces in het kort" },
        { t: "ol", items: [
          "Aanvraag en intake van uw situatie",
          "Planning op een moment dat past bij uw operatie",
          "Inspectie op locatie van alle bereikbare stellingen",
          "Directe terugkoppeling bij acuut gevaar",
          "Rapport met prioriteiten, in principe binnen 24 uur",
          "Op verzoek een apart herstelvoorstel",
        ] },
      ],
      ctaTitle: "Plan een inspectie",
    },
    pricing: {
      metaTitle: "Prijzen | Inspectie vanaf 395 euro per jaar",
      metaDescription:
        "Een stellinginspectie bij RackCheck start vanaf 395 euro per jaar. De exacte prijs bepalen we op basis van uw situatie en bevestigen we vooraf.",
      breadcrumb: "Prijzen",
      eyebrow: "Prijzen",
      h1: "Inspectie vanaf 395 euro per jaar",
      intro:
        "De exacte prijs bepalen we op basis van uw situatie en bevestigen we vooraf. Vooraf duidelijk wat u betaalt, zonder verrassingen achteraf.",
      answer:
        "Een stellinginspectie start vanaf 395 euro per jaar, exclusief btw. De prijs hangt af van de grootte van uw magazijn, het aantal en type stellingen en het aantal locaties. We bevestigen de prijs vooraf.",
      image: {
        src: "/images/magazijn-palletstellingen-overzicht.jpg",
        alt: "Overzicht van volgeladen palletstellingen in een magazijn",
      },
      blocks: [
        { t: "h2", text: "Wat bepaalt de prijs?" },
        { t: "ul", items: [
          "De grootte van uw magazijn",
          "Het aantal en type stellingen",
          "Het aantal locaties",
        ] },
        { t: "p", text: "Meerdere locaties combineren we in één planning, wat reistijd en kosten scheelt." },
      ],
      ctaTitle: "Vraag een vaste prijs aan",
    },
    about: {
      metaTitle: "Over RackCheck | Onafhankelijke stellinginspecties",
      metaDescription:
        "RackCheck voert onafhankelijke inspecties uit van magazijnstellingen. Persoonlijk contact met een vaste inspecteur, actief in Nederland en België.",
      breadcrumb: "Over RackCheck",
      eyebrow: "Over RackCheck",
      h1: "Onafhankelijk, deskundig en persoonlijk",
      intro:
        "RackCheck beoordeelt de veiligheid van magazijnstellingen los van herstelverkoop. Zo krijgt u een eerlijk oordeel over wat veilig is en wat aandacht vraagt.",
      answer:
        "RackCheck is gespecialiseerd in de onafhankelijke inspectie van magazijnstellingen en opslagsystemen. U werkt met een vaste inspecteur en ontvangt een rapport dat direct bruikbaar is voor uw dossier en zorgplicht.",
      image: {
        src: "/images/draagarmstelling.jpg",
        alt: "Draagarmstelling met zwarte draagarmen voor langgoed in een magazijn",
      },
      blocks: [
        { t: "h2", text: "Onze uitgangspunten" },
        { t: "ul", items: [
          "Inspectie staat los van herstel: geen verkoopbelang",
          "Een helder rapport met prioriteiten",
          "Een vast aanspreekpunt en persoonlijk contact",
          "Actief in Nederland en België, in overleg ook in Duitsland",
        ] },
        { t: "p", text: "Is herstel nodig, dan kan dat apart via Hovuma worden geregeld, los van de inspectie." },
      ],
      ctaTitle: "Maak kennis met RackCheck",
    },
    contact: {
      metaTitle: "Contact | Neem contact op met RackCheck",
      metaDescription:
        "Neem contact op met RackCheck voor een onafhankelijke stellinginspectie. Bel, WhatsApp of mail ons, of vraag direct een inspectie aan.",
      breadcrumb: "Contact",
      eyebrow: "Contact",
      h1: "Neem contact op",
      intro:
        "Bel, WhatsApp of mail ons, of laat uw gegevens achter. Bij urgente schade helpen we u met voorrang.",
      form: "compact",
      ctaTitle: "Liever direct een inspectie aanvragen?",
    },
    request: {
      metaTitle: "Inspectie aanvragen | Onafhankelijke stellinginspectie",
      metaDescription:
        "Vraag een onafhankelijke stellinginspectie aan bij RackCheck. Vul het formulier in, dan nemen we binnen één werkdag contact op.",
      breadcrumb: "Inspectie aanvragen",
      eyebrow: "Inspectie aanvragen",
      h1: "Vraag uw stellinginspectie aan",
      intro:
        "Vul het formulier in met de gegevens van uw magazijn. We nemen binnen één werkdag contact met u op om de inspectie in te plannen en de prijs te bevestigen.",
      form: "full",
      ctaTitle: "Vragen? Bel ons direct",
    },
  },
};

/**
 * Centrale configuratie voor RackCheck.
 *
 * Alle algemene contactgegevens staan hier op één plek, zodat ze eenvoudig
 * aangepast kunnen worden (bijvoorbeeld zodra RackCheck een eigen e-maildomein
 * krijgt). Algemene contactacties (telefoon, WhatsApp, e-mail, formulier) gaan
 * naar het algemene aanspreekpunt Tjeerd Krikhaar. De regionale inspecteurs
 * staan in `inspecteurs`; gebruik de gegevens van Marcel Huijs uitsluitend in
 * het blok voor zijn eigen werkgebied.
 *
 * Nog wel PLACEHOLDER (verzin niets): juridische bedrijfsnaam, adres, KvK en
 * btw. Zie README.md.
 */
export const site = {
  name: "RackCheck",
  legalName: "RackCheck B.V.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://rackcheck.nl", // PLACEHOLDER: definitief domein
  tagline: "Onafhankelijke inspecties van magazijnstellingen",
  description:
    "RackCheck voert onafhankelijke inspecties uit van magazijnstellingen. U krijgt een helder rapport met duidelijke prioriteiten en concreet vervolgadvies, in principe binnen 24 uur.",

  // Algemeen aanspreekpunt en contactgegevens (Tjeerd Krikhaar).
  contactPerson: "Tjeerd Krikhaar",
  phoneDisplay: "06 53817775",
  phoneHref: "tel:+31653817775",
  phoneE164: "+31653817775", // voor structured data
  whatsappNumber: "31653817775", // internationaal, zonder +
  whatsappHref:
    "https://wa.me/31653817775?text=Hallo%20Tjeerd%2C%20ik%20wil%20graag%20meer%20informatie%20over%20een%20inspectie%20van%20onze%20magazijnstellingen.",
  email: "t.krikhaar@rackcheck.nl",

  // Bedrijfsgegevens.
  address: {
    street: "Henri Hermansstraat 1",
    postalCode: "5953 NN",
    city: "Reuver",
    country: "Nederland",
  },
  kvk: "42081213",
  btw: "NL8696.19.354.B.01",
  iban: "NL89ABNA0156167697",

  workingArea: "Nederland en België",
  openingHours: "Maandag tot en met vrijdag, 08:00 tot 17:00 uur",

  // Sociale media. PLACEHOLDER: invullen of leeg laten.
  social: {
    linkedin: "", // PLACEHOLDER
  },

  // Redactie en vakinhoudelijke toetsing.
  author: {
    name: "Redactie RackCheck",
    role: "Stellinginspecteurs RackCheck",
    review:
      "Inhoudelijk opgesteld en getoetst door de inspecteurs van RackCheck op basis van NEN-EN 15635 en de praktijk van dagelijkse stellinginspecties.",
  },
} as const;

/**
 * Vooraf ingevuld WhatsApp-bericht voor algemene WhatsApp-knoppen. De
 * geëncodeerde variant zit al in `site.whatsappHref`.
 */
export const whatsappMessage =
  "Hallo Tjeerd, ik wil graag meer informatie over een inspectie van onze magazijnstellingen.";

/**
 * Regionale inspecteurs en hun werkgebied. Het algemene aanspreekpunt
 * (`algemeen: true`) is Tjeerd Krikhaar; naar hem gaan alle algemene CTA's.
 * Gebruik de gegevens van andere inspecteurs alleen in hun eigen werkgebiedblok.
 */
export type Inspecteur = {
  naam: string;
  regio: string;
  regioDetail: string;
  phoneDisplay: string;
  phoneHref: string;
  email: string;
  algemeen?: boolean;
};

export const inspecteurs: Inspecteur[] = [
  {
    naam: "Tjeerd Krikhaar",
    regio: "Zuid-Nederland en België",
    regioDetail: "Aanspreekpunt voor Zuid-Nederland en België.",
    phoneDisplay: "06 53817775",
    phoneHref: "tel:+31653817775",
    email: "t.krikhaar@rackcheck.nl",
    algemeen: true,
  },
  {
    naam: "Marcel Huijs",
    regio: "Midden- en Noord-Nederland",
    regioDetail:
      "Aanspreekpunt voor magazijnen in Midden- en Noord-Nederland.",
    phoneDisplay: "+31 6 28 80 89 92",
    phoneHref: "tel:+31628808992",
    email: "m.huijs@rackcheck.nl",
  },
];

export const mainNav = [
  { label: "Inspecties", href: "/stellinginspectie/" },
  { label: "Oplossingen", href: "/oplossingen/" },
  { label: "Kennisbank", href: "/kennisbank/" },
  { label: "Prijzen", href: "/prijzen/" },
  { label: "Over RackCheck", href: "/over-rackcheck/" },
  { label: "Contact", href: "/contact/" },
] as const;

export const footerNav = {
  inspecties: {
    title: "Inspecties",
    links: [
      { label: "Stellinginspectie", href: "/stellinginspectie/" },
      { label: "Palletstelling inspecteren", href: "/inspecties/palletstelling/" },
      { label: "Legbordstelling inspecteren", href: "/inspecties/legbordstelling/" },
      { label: "Draagarmstelling inspecteren", href: "/inspecties/draagarmstelling/" },
      { label: "Werkwijze", href: "/werkwijze/" },
      { label: "Prijzen", href: "/prijzen/" },
    ],
  },
  oplossingen: {
    title: "Oplossingen",
    links: [
      { label: "Stelling aangereden", href: "/stelling-aangereden/" },
      { label: "Jaarlijkse inspectie", href: "/jaarlijkse-stellinginspectie/" },
      { label: "Duidelijk rapport", href: "/duidelijk-inspectierapport/" },
      { label: "Onafhankelijke inspectie", href: "/onafhankelijke-stellinginspectie/" },
      { label: "Terugkerende schade", href: "/terugkerende-stellingschade/" },
    ],
  },
  kennisbank: {
    title: "Kennisbank",
    links: [
      { label: "Wat is NEN-EN 15635?", href: "/kennisbank/nen-en-15635/" },
      { label: "Is een stellingkeuring verplicht?", href: "/kennisbank/is-stellingkeuring-verplicht/" },
      { label: "Hoe vaak stellingen keuren?", href: "/kennisbank/hoe-vaak-stellingen-keuren/" },
      { label: "Wat is een PRSES?", href: "/kennisbank/wat-is-een-prses/" },
      { label: "Alle artikelen", href: "/kennisbank/" },
    ],
  },
  organisatie: {
    title: "Organisatie",
    links: [
      { label: "Over RackCheck", href: "/over-rackcheck/" },
      { label: "Werkgebied", href: "/regio/" },
      { label: "Contact", href: "/contact/" },
      { label: "Inspectie aanvragen", href: "/inspectie-aanvragen/" },
      { label: "Privacyverklaring", href: "/privacy/" },
    ],
  },
} as const;

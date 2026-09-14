/**
 * Prijsinformatie RackCheck. Op de website tonen we bewust geen volledige
 * prijstabel meer. De algemene commerciële boodschap is
 * "Inspectie vanaf €395 per jaar" (zie `priceMessage`). De exacte prijs bepalen
 * we op basis van de situatie en bevestigen we vooraf.
 * PLACEHOLDER: laat RackCheck het vanaf-tarief bevestigen voordat de site live gaat.
 */
export const startingPrice = "395"; // excl. btw, kleinste magazijn

/** Algemene, websitebrede prijsboodschap. */
export const priceMessage = "Inspectie vanaf €395 per jaar";

export const priceIncludes = [
  "Telefonische of digitale intake vooraf",
  "Inspectie op locatie door een RackCheck-inspecteur",
  "Beoordeling van alle bereikbare stellingen",
  "Vastlegging van bevindingen met foto's waar relevant",
  "Schadeclassificatie volgens groen, oranje en rood",
  "Directe melding van urgente, onveilige situaties",
  "Inspectierapport met prioriteiten en vervolgstappen, in principe binnen 24 uur",
];

export const priceFactors = [
  {
    title: "Aantal en type stellingen",
    text: "Palletstellingen, legbordstellingen, draagarmstellingen en bijzondere systemen vragen elk om eigen controlepunten en inspectietijd.",
  },
  {
    title: "Grootte van het magazijn",
    text: "Een groter stellingoppervlak kost meer inspectietijd. We stemmen de prijs af op de omvang van uw locatie.",
  },
  {
    title: "Aantal locaties",
    text: "Meerdere vestigingen kunnen gecombineerd worden ingepland. Dat scheelt reistijd en levert vaak een gunstiger totaalprijs op.",
  },
  {
    title: "Bereikbaarheid",
    text: "Volle stellingen, smalle gangen en hoogbouw kosten meer tijd dan een leeg of goed toegankelijk magazijn.",
  },
  {
    title: "Urgentie",
    text: "Een spoedinspectie na een aanrijding of incident plannen we met voorrang in. Daar kan een toeslag voor gelden.",
  },
];

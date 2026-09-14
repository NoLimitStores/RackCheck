/** Data voor de stellingtypepagina's onder /inspecties/[type]/. */
export type StellingType = {
  slug: string;
  naam: string;
  korteNaam: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string;
  gebruik: string;
  schade: { title: string; text: string }[];
  inspectiepunten: string[];
  risicos: string;
  rapportage: string;
  faq: { q: string; a: string }[];
};

export const stellingtypen: StellingType[] = [
  {
    slug: "palletstelling",
    naam: "Palletstelling",
    korteNaam: "Palletstellingen",
    image: "/images/magazijn-palletstellingen-overzicht.jpg",
    imageAlt:
      "Palletstelling met gele liggers en gegalvaniseerde staanders, volledig gevuld met pallets in een magazijn",
    metaTitle: "Palletstelling inspecteren | Onafhankelijke keuring",
    metaDescription:
      "Laat uw palletstelling onafhankelijk inspecteren door RackCheck. Controle van staanders, liggers, borging en aanrijdschade, met een helder rapport binnen 24 uur.",
    h1: "Palletstelling inspecteren",
    intro:
      "De palletstelling is het meest gebruikte opslagsysteem in Nederlandse magazijnen en tegelijk het gevoeligst voor aanrijdschade. RackCheck beoordeelt uw palletstellingen onafhankelijk en vertaalt elke bevinding naar een duidelijke prioriteit en vervolgstap.",
    gebruik:
      "Palletstellingen dragen zware, geblokte lasten en worden intensief bediend met heftrucks en reachtrucks. Juist die combinatie van hoge belasting en veel verkeer in de gangen maakt regelmatige controle belangrijk. Een beschadigde staander verliest een deel van zijn draagvermogen, ook als de schade klein lijkt.",
    schade: [
      { title: "Aanrijdschade aan staanders", text: "Deuken en vervorming in de onderste meter, vaak door heftrucks bij het in- en uitrijden." },
      { title: "Doorgebogen liggers", text: "Blijvende doorbuiging door overbelasting of door pallets die zwaarder zijn dan toegestaan." },
      { title: "Ontbrekende borgpennen", text: "Losse liggers die niet meer geborgd zijn, waardoor ze bij een stoot kunnen loslaten." },
      { title: "Losse of ontbrekende verankering", text: "Vloerankers die zijn losgetrild of nooit correct zijn geplaatst." },
    ],
    inspectiepunten: [
      "Staanders op deuken, vervorming en corrosie, met bijzondere aandacht voor de onderste 400 millimeter",
      "Liggers op doorbuiging, beschadiging en correcte plaatsing in de haken",
      "Aanwezigheid en staat van borgpennen",
      "Diagonale en horizontale schoren op beschadiging en volledigheid",
      "Voetplaten en vloerverankering per staander",
      "Belastingborden: aanwezig, leesbaar en passend bij de huidige configuratie",
      "Aanrijdbeveiliging aan kopse kanten en hoeken",
      "Scheefstand en loodrechtheid van de staanders",
    ],
    risicos:
      "Bij palletstellingen is het grootste risico een progressieve instorting: als één zwaar belaste staander bezwijkt, kan een hele rij meegaan. Daarom weegt aanrijdschade aan staanders zwaar in de beoordeling en krijgt die vaak een rode of oranje classificatie.",
    rapportage:
      "In het rapport ziet u per bevinding de exacte locatie (gang, stelling, veld en niveau), een foto, de classificatie en de vervolgstap. Zo weet uw team precies waar het aan de slag moet en met welke prioriteit.",
    faq: [
      { q: "Moet de palletstelling leeg zijn voor de inspectie?", a: "Nee. We beoordelen alle bereikbare stellingen terwijl ze gevuld zijn. Alleen bij acuut gevaar vragen we een sectie tijdelijk te ontladen." },
      { q: "Wat gebeurt er met een beschadigde staander?", a: "Afhankelijk van de ernst krijgt die groen, oranje of rood. Bij rood adviseren we de sectie direct te ontlasten en de staander te vervangen. Rechtbuigen of lassen raden we af." },
      { q: "Inspecteert RackCheck ook oudere of onbekende merken?", a: "Ja. We beoordelen de constructie en de staat. Als een merk niet meer leverbaar is, benoemen we dat transparant in het rapport." },
    ],
  },
  {
    slug: "legbordstelling",
    naam: "Legbordstelling",
    korteNaam: "Legbordstellingen",
    image: "/images/legbordstelling.jpg",
    imageAlt:
      "Legbordstelling met grijze legborden en blauwe staanders in een magazijn voor de opslag van kleingoed en onderdelen",
    metaTitle: "Legbordstelling inspecteren | Onafhankelijke keuring",
    metaDescription:
      "Onafhankelijke inspectie van legbordstellingen door RackCheck. Controle van legborden, staanders, verankering en bordesconstructies, met een helder rapport.",
    h1: "Legbordstelling inspecteren",
    intro:
      "Legbordstellingen worden gebruikt voor handmatige opslag van dozen, bakken en kleingoed, vaak in meerdere lagen en soms gecombineerd met een bordesvloer. RackCheck beoordeelt de legborden, de draagconstructie en de bijbehorende bordessen onafhankelijk.",
    gebruik:
      "Legbordstellingen worden handmatig gevuld en lijken daardoor minder kwetsbaar dan palletstellingen. Toch ontstaat er wel degelijk schade: door overbelasting van legborden, door aanrijding met rolwagens of orderpicktrucks en door aanpassingen die in de loop der tijd zijn gedaan zonder herberekening.",
    schade: [
      { title: "Doorgebogen legborden", text: "Legborden die te zwaar zijn belast of ongelijkmatig zijn gevuld." },
      { title: "Aanrijdschade aan staanders", text: "Beschadiging door rolwagens, orderpicktrucks of handmatig transport in smalle gangen." },
      { title: "Ontbrekende of verplaatste legborden", text: "Legborden die zijn weggehaald of verhangen, waardoor de stabiliteit verandert." },
      { title: "Overbelaste bordesvloer", text: "Bij een bordesconstructie: te zware belasting of onduidelijkheid over de toegestane vloerbelasting." },
    ],
    inspectiepunten: [
      "Staanders en frames op vervorming, corrosie en verankering",
      "Legborden op doorbuiging, correcte oplegging en belasting",
      "Schoren en stabiliteitsverbanden op volledigheid",
      "Aanwezigheid en leesbaarheid van belastinggegevens",
      "Bij bordessen: kolommen, vloerplaten, leuningen en de trapconstructie",
      "Aanrijdbeveiliging op kwetsbare hoeken en doorgangen",
      "Scheefstand en algehele stabiliteit van de opstelling",
    ],
    risicos:
      "Bij legbordstellingen zit het risico vooral in geleidelijke overbelasting en in aanpassingen die niet zijn doorgerekend. Bij bordesconstructies komt daar de veiligheid van personen op de vloer bij: leuningen, trap en toegestane vloerbelasting zijn dan extra aandachtspunten.",
    rapportage:
      "Het rapport benoemt per bevinding de locatie en de classificatie. Bij bordesvloeren geven we apart aandacht aan de personenveiligheid, zoals leuningen en de aangegeven vloerbelasting.",
    faq: [
      { q: "Beoordeelt RackCheck ook de bordesvloer boven de stelling?", a: "Ja. Bij een geïntegreerde bordesconstructie beoordelen we ook de kolommen, de vloer, de leuningen en de trap, voor zover bereikbaar." },
      { q: "Onze legborden zijn verhangen, is dat een probleem?", a: "Verhangen op zich hoeft geen probleem te zijn, maar het verandert de belasting. We controleren of de opstelling nog past bij de toegestane waarden en benoemen het in het rapport." },
      { q: "Hoe vaak is een inspectie nodig bij legbordstellingen?", a: "Ook hier geldt een periodieke deskundige inspectie, in de praktijk jaarlijks, aangevuld met interne visuele controles." },
    ],
  },
  {
    slug: "draagarmstelling",
    naam: "Draagarmstelling",
    korteNaam: "Draagarmstellingen",
    image: "/images/draagarmstelling.jpg",
    imageAlt:
      "Draagarmstelling met zwarte draagarmen voor de opslag van langgoed in een magazijn",
    metaTitle: "Draagarmstelling inspecteren | Onafhankelijke keuring",
    metaDescription:
      "Onafhankelijke inspectie van draagarmstellingen door RackCheck. Controle van draagarmen, kolommen, verankering en belasting voor de opslag van langgoed.",
    h1: "Draagarmstelling inspecteren",
    intro:
      "Draagarmstellingen zijn gemaakt voor de opslag van langgoed zoals buizen, profielen, platen en houten balken. De uitkragende armen en de vaak forse belasting stellen eigen eisen aan de inspectie. RackCheck beoordeelt uw draagarmstellingen onafhankelijk.",
    gebruik:
      "Draagarmstellingen dragen lange, soms zware producten die met een zijlader of heftruck worden geplaatst. De uitstekende armen zijn kwetsbaar voor aanrijding en de belasting werkt als een hefboom op de kolom en de verankering. Een kleine vervorming aan de basis kan grote gevolgen hebben voor de stabiliteit.",
    schade: [
      { title: "Verbogen draagarmen", text: "Armen die zijn overbelast of van onderaf zijn aangereden bij het laden en lossen." },
      { title: "Beschadigde kolommen", text: "Deuken en vervorming aan de basis van de kolom, waar de krachten het grootst zijn." },
      { title: "Losse verankering", text: "Vloerankers die de kantelkrachten van de uitkragende last moeten opnemen." },
      { title: "Ontbrekende armborging", text: "Borgpennen of bouten die de draagarmen op hun plaats houden." },
    ],
    inspectiepunten: [
      "Kolommen op deuken, vervorming en scheefstand, met nadruk op de basis",
      "Draagarmen op verbuiging, scheurvorming en correcte bevestiging",
      "Borging van de draagarmen aan de kolom",
      "Voetplaten en verankering, afgestemd op de kantelkrachten",
      "Verbanden en eventuele kopschoren tussen de kolommen",
      "Belastinggegevens per arm en per niveau",
      "Aanrijdbeveiliging aan de uiteinden en onderkant van de kolommen",
    ],
    risicos:
      "Doordat de last uitkraagt, ontstaat er een kantelmoment op de kolom en de verankering. Beschadiging aan de basis of losse ankers wegen daarom zwaar. Ook een enkele verbogen arm kan de veilige belasting van dat niveau flink verlagen.",
    rapportage:
      "In het rapport staat per arm of kolom de bevinding, de classificatie en de vervolgstap. Bij draagarmstellingen letten we extra op de basis van de kolom en de staat van de verankering, omdat daar de grootste krachten samenkomen.",
    faq: [
      { q: "Kan een verbogen draagarm nog gebruikt worden?", a: "Dat hangt af van de mate van verbuiging. Bij twijfel classificeren we de arm als oranje of rood en adviseren we vervanging. Rechtbuigen raden we af, omdat dat het staal verzwakt." },
      { q: "Worden dubbelzijdige en enkelzijdige stellingen anders beoordeeld?", a: "De aandachtspunten zijn vergelijkbaar, maar bij enkelzijdige draagarmstellingen weegt de verankering nog zwaarder omdat de kantelkracht maar één kant op werkt." },
      { q: "Inspecteren jullie ook buiten opgestelde draagarmstellingen?", a: "Ja. Bij buitenopstelling kijken we extra naar corrosie en naar de staat van de fundering en verankering." },
    ],
  },
];

export function getStellingType(slug: string) {
  return stellingtypen.find((t) => t.slug === slug);
}

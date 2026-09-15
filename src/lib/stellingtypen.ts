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
  /** Optionele extra praktijkfoto's, getoond in een "In de praktijk"-galerij. */
  praktijk?: { src: string; alt: string; caption?: string }[];
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
  {
    slug: "inrijstelling",
    naam: "Inrijstelling",
    korteNaam: "Inrijstellingen",
    image: "/images/inrijstelling-drive-in.jpg",
    imageAlt:
      "Hoge blauwe inrijstelling met drive-in rijgangen en gele geleiderails in een magazijn",
    metaTitle: "Inrijstelling laten keuren | Onafhankelijke keuring",
    metaDescription:
      "Laat uw inrijstelling professioneel inspecteren. RackCheck controleert onder meer schade, stabiliteit, geleidingen en veilig gebruik.",
    h1: "Inrijstellingen laten inspecteren",
    intro:
      "Bij een inrijstelling rijdt de heftruck de stelling letterlijk in om pallets op doorlopende draagrails te plaatsen. Dat maakt dit systeem compact, maar ook gevoelig voor aanrijdschade op plekken die niet altijd goed zichtbaar zijn. RackCheck inspecteert uw inrijstellingen onafhankelijk.",
    gebruik:
      "Een inrijstelling, ook wel drive-instelling genoemd, slaat veel pallets van hetzelfde product compact op. De truck rijdt tussen de staanders een rijgang in en zet de pallets op doorlopende draagrails. Bij een drive-in is er aan één kant toegang, waardoor de laatst geplaatste pallet er als eerste weer uit gaat. Bij een drive-through is de rijgang aan twee kanten open. Doordat de truck zich binnen de constructie beweegt, is het risico op contact met staanders en rails groter dan bij een gewone palletstelling.",
    schade: [
      { title: "Aanrijdschade aan staanders", text: "Deuken en vervorming doordat de heftruck in de smalle rijgang langs de staanders manoeuvreert." },
      { title: "Beschadigde draag- en geleiderails", text: "Rails die krom staan, zijn losgeraakt of zijn geraakt bij het in- en uitrijden." },
      { title: "Verbogen of losse geleiding", text: "Aanrijdgeleiding aan de vloer die de truck in de rijgang moet houden en daarbij zelf schade oploopt." },
      { title: "Losse verbindingen en borging", text: "Verbindingen en borgingen die door de stoten en trillingen in de rijgang kunnen loskomen." },
    ],
    inspectiepunten: [
      "Staanders en portalen op deuken, vervorming en scheefstand, met nadruk op de rijgang",
      "Draagrails op doorbuiging, beschadiging en correcte bevestiging",
      "Aanrijdgeleiding en geleiderails langs de rijgang",
      "Verankering, verbindingen en stabiliteitsverbanden",
      "Borging van rails en liggers",
      "Aanrijdbeveiliging en portaalbescherming bij de ingang van de rijgang",
      "Belastinggegevens en de afstemming op het gebruikte pallettype",
      "Scheefstand en algehele stabiliteit van de opstelling",
    ],
    risicos:
      "Omdat de heftruck zich binnen de constructie beweegt en de zichtlijnen beperkt zijn, ontstaat schade vaak onopgemerkt en op moeilijk bereikbare plekken. Beschadiging aan staanders of draagrails in een sterk gevulde inrijstelling weegt zwaar, omdat veel pallets op een compacte constructie steunen.",
    rapportage:
      "In het rapport benoemen we per bevinding de locatie in de rijgang, de classificatie en de vervolgstap. Bij inrijstellingen letten we extra op de staanders langs de rijgang, de draagrails en de geleiding, omdat daar de meeste aanrijdschade ontstaat.",
    faq: [
      { q: "Moet de inrijstelling leeg zijn voor de inspectie?", a: "Een volledig gevulde inrijstelling is lastiger te beoordelen, omdat rails en staanders in de rijgang deels aan het zicht onttrokken zijn. We beoordelen wat bereikbaar is en geven aan als delen alleen in ontladen toestand goed te controleren zijn." },
      { q: "Wat is het verschil tussen drive-in en drive-through?", a: "Bij een drive-in is de rijgang aan één kant toegankelijk; bij een drive-through aan twee kanten. De inspectiepunten zijn vergelijkbaar, maar de looproutes en de manier van vullen verschillen." },
      { q: "Hoe vaak moet een inrijstelling gekeurd worden?", a: "Net als bij andere magazijnstellingen is een periodieke deskundige inspectie gebruikelijk, in de praktijk jaarlijks, aangevuld met regelmatige interne controles. De juiste frequentie hangt af van de gebruiksintensiteit." },
    ],
    praktijk: [
      {
        src: "/images/inrijstelling-magazijn.jpg",
        alt: "Gevulde inrijstelling met pallets in een lange rijgang van een magazijn",
        caption: "In een gevulde inrijstelling zijn staanders en rails in de rijgang deels aan het zicht onttrokken. Juist daar ontstaat vaak aanrijdschade.",
      },
    ],
  },
  {
    slug: "bordes-entresolvloer",
    naam: "Bordes of entresolvloer",
    korteNaam: "Bordessen en entresolvloeren",
    image: "/images/bordes-entresolvloer.jpg",
    imageAlt:
      "Bordes met legbordstellingen, een toegangstrap en leuningen in een magazijn",
    metaTitle: "Bordes of entresolvloer laten keuren | Onafhankelijke keuring",
    metaDescription:
      "Laat uw magazijnbordes of entresolvloer professioneel inspecteren. RackCheck beoordeelt de constructie, vloer, trappen en beveiligingen.",
    h1: "Inspectie van bordessen en entresolvloeren",
    intro:
      "Een bordes of entresolvloer is een tussenvloer die op een eigen kolommenstructuur rust en extra opslag- of werkruimte creëert in de hoogte. Omdat er niet alleen goederen op staan maar ook mensen op werken, gaat een inspectie hier zowel over de constructie als over de personenveiligheid.",
    gebruik:
      "Bordessen en entresolvloeren benutten de vrije hoogte in een pand voor extra vloeroppervlak. Ze rusten op kolommen en liggers en worden vaak gecombineerd met stellingen eronder of erop. Op de vloer wordt gelopen, gewerkt en opgeslagen, en goederen worden meestal via een palletsluis of hefopening aangevoerd. Daardoor spelen de draagconstructie, de vloer en de randbeveiliging allemaal een rol bij de veiligheid.",
    schade: [
      { title: "Aanrijdschade aan kolommen", text: "Ondersteunende kolommen die door heftrucks of intern transport onderaan worden geraakt." },
      { title: "Beschadigde of losse vloerdelen", text: "Vloerplaten die zijn beschadigd, doorbuigen of niet meer goed vastliggen." },
      { title: "Beschadigde trappen en leuningen", text: "Versleten treden, losse leuningen of ontbrekende kantplanken langs de rand." },
      { title: "Onduidelijke of gewijzigde belasting", text: "Een ontbrekende belastingaanduiding of een gebruik dat zwaarder is dan waarvoor de vloer is bedoeld." },
    ],
    inspectiepunten: [
      "Kolommen, liggers en verbindingen van de draagconstructie",
      "Verankering van de kolommen in de vloer",
      "Vloerdelen op beschadiging, bevestiging en zichtbare doorbuiging",
      "Trappen, leuningen, hekwerken en kantplanken",
      "Palletsluizen, hefopeningen en de valbeveiliging daaromheen",
      "Belastingaanduiding en of het huidige gebruik daarbij past",
      "Aanrijdschade aan de ondersteunende constructie",
    ],
    risicos:
      "Op een bordes of entresolvloer werken mensen, waardoor gebreken aan leuningen, trappen of de vloer direct raken aan de veiligheid van personen. Aanrijding van een dragende kolom kan bovendien de stabiliteit van het hele bordes beïnvloeden. Daarom wegen randbeveiliging, vloer en draagconstructie allemaal mee in de beoordeling.",
    rapportage:
      "In het rapport beschrijven we per bevinding de locatie, de classificatie en de vervolgstap, met aparte aandacht voor de personenveiligheid zoals leuningen, trappen en de aangegeven vloerbelasting. Een visuele inspectie is iets anders dan een constructieve herberekening; als een berekening nodig is, geven we dat aan.",
    faq: [
      { q: "Voert RackCheck een constructieve berekening van de vloer uit?", a: "Nee. Wij voeren een visuele, deskundige inspectie uit van de staat en het veilige gebruik. Is er een constructieve herberekening nodig, bijvoorbeeld bij twijfel over de draagkracht of bij zwaarder gebruik, dan geven we dat aan zodat een constructeur dat kan verzorgen." },
      { q: "Beoordelen jullie ook de stellingen op en onder het bordes?", a: "Ja, voor zover bereikbaar. Bordessen worden vaak gecombineerd met stellingen; die kunnen we in dezelfde inspectie meenemen." },
      { q: "Wat als de belastingaanduiding ontbreekt?", a: "Dan benoemen we dat in het rapport. De toegestane vloerbelasting hoort duidelijk zichtbaar te zijn, zodat gebruikers weten wat is toegestaan." },
    ],
    praktijk: [
      {
        src: "/images/bordes-entresol-rand.jpg",
        alt: "Rand van een entresolvloer met leuning, een palletopening en een deel van de vloer in een magazijn",
        caption: "Bij de rand van een entresolvloer komen vloer, leuning en een eventuele palletopening samen. Juist die overgang beoordelen we op valgevaar.",
      },
    ],
  },
];

export function getStellingType(slug: string) {
  return stellingtypen.find((t) => t.slug === slug);
}

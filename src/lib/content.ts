/** Gedeelde, herbruikbare contentdata voor meerdere pagina's. */

export const processSteps = [
  {
    title: "Aanvraag en intake",
    text: "U vraagt een inspectie aan via het formulier, telefoon of WhatsApp. In een korte intake bespreken we het type stellingen, de omvang en de reden van de aanvraag.",
  },
  {
    title: "Planning",
    text: "We plannen de inspectie op een moment dat past bij uw magazijn. In de meeste gevallen kan het werk gewoon doorlopen tijdens de inspectie.",
  },
  {
    title: "Inspectie op locatie",
    text: "De inspecteur beoordeelt alle bereikbare stellingen: staanders, liggers, schoren, voetplaten, verankering, borgpennen, belastingborden en aanrijdbeveiliging.",
  },
  {
    title: "Directe terugkoppeling bij urgent gevaar",
    text: "Wordt er een acuut onveilige situatie gevonden, dan melden we dat direct op locatie. U weet meteen welke sectie afgezet of ontladen moet worden.",
  },
  {
    title: "Rapport binnen 24 uur",
    text: "U ontvangt een overzichtelijk inspectierapport, in principe binnen 24 uur. Elke bevinding heeft een classificatie, locatie, foto, oorzaak, actie en termijn.",
  },
  {
    title: "Opvolging en eventueel herstelvoorstel",
    text: "Wilt u de gebreken laten herstellen, dan kan daarna een apart herstelvoorstel volgen. De inspectie en het herstel blijven inhoudelijk gescheiden.",
  },
  {
    title: "Herbeoordeling na herstel",
    text: "Zijn reparaties uitgevoerd, dan kunnen we de betreffende secties opnieuw beoordelen, zodat u zeker weet dat het herstel correct is uitgevoerd.",
  },
];

export const controlepunten = [
  { title: "Staanders", text: "Deuken, vervorming, scheurvorming en corrosie aan de verticale dragers." },
  { title: "Liggers", text: "Doorbuiging, beschadiging, borging en juiste plaatsing in de haken." },
  { title: "Schoren", text: "Diagonale en horizontale schoren op beschadiging en volledigheid." },
  { title: "Voetplaten", text: "Deuken, scheefstand en de aansluiting op de vloer." },
  { title: "Verankering", text: "Aanwezigheid en staat van de vloerankers per staander." },
  { title: "Borgpennen", text: "Aanwezigheid van veiligheidspennen die de liggers vergrendelen." },
  { title: "Belastingborden", text: "Aanwezig, leesbaar en passend bij de actuele configuratie." },
  { title: "Aanrijdbeveiliging", text: "Staanderbeschermers en hoekbeveiliging op plek en staat." },
  { title: "Scheefstand", text: "Uitlijning en loodrechtheid van de staanders." },
  { title: "Doorbuiging", text: "Doorbuiging van liggers onder belasting binnen aanvaardbare grenzen." },
  { title: "Overbelasting", text: "Aanwijzingen dat de opgeslagen last zwaarder is dan toegestaan." },
  { title: "Onjuist gebruik", text: "Pallets die niet passen, verkeerd geplaatste last of losse onderdelen." },
];

export const homeFaq = [
  {
    q: "Hoe vaak moeten magazijnstellingen worden geïnspecteerd?",
    a: "NEN-EN 15635 gaat uit van een periodieke inspectie door een deskundige, in de praktijk meestal één keer per jaar. Daarnaast horen er regelmatig interne visuele controles plaats te vinden, bijvoorbeeld wekelijks of maandelijks, uitgevoerd door een aangewezen medewerker binnen uw eigen organisatie.",
  },
  {
    q: "Kan de inspectie plaatsvinden terwijl het magazijn draait?",
    a: "In de meeste gevallen wel. De inspecteur werkt langs de stellingen en stemt de route af op uw operatie, zodat de verstoring beperkt blijft. Alleen bij acuut gevaar vragen we een sectie tijdelijk vrij te maken.",
  },
  {
    q: "Hoe snel ontvang ik het rapport?",
    a: "U ontvangt het inspectierapport in principe binnen 24 uur na de inspectie. Urgente, onveilige situaties melden we altijd al tijdens de inspectie zelf, zodat u meteen kunt handelen.",
  },
  {
    q: "Welke stellingmerken inspecteert RackCheck?",
    a: "RackCheck beoordeelt stellingen van verschillende merken en fabrikanten. De beoordeling gebeurt op basis van de constructie, de staat en de relevante normen, niet op basis van een bepaald merk.",
  },
  {
    q: "Wat gebeurt er wanneer schade wordt gevonden?",
    a: "Elke bevinding krijgt een classificatie: groen, oranje of rood. Groen kan blijven staan, oranje moet binnen een termijn hersteld worden en rood vraagt directe actie. In het rapport staat per punt wat de vervolgstap is.",
  },
  {
    q: "Kan RackCheck ook na een aanrijding langskomen?",
    a: "Ja. Na een heftruckaanrijding plannen we een inspectie met voorrang in. We beoordelen de schade onafhankelijk en vertellen u wat direct moet gebeuren en wat veilig kan blijven staan.",
  },
  {
    q: "Is RackCheck onafhankelijk van herstelverkoop?",
    a: "Ja. De inspectiebeoordeling staat los van eventuele herstelwerkzaamheden. We keuren niet onnodig af om onderdelen te verkopen. Een eventueel herstelvoorstel volgt pas na de inspectie, in een apart traject.",
  },
  {
    q: "Wat kost een inspectie?",
    a: "Een inspectie start vanaf €395 per jaar, exclusief btw. De exacte prijs hangt af van de grootte van uw magazijn, het aantal en type stellingen en het aantal locaties. We bepalen die op basis van uw situatie en bevestigen de prijs vooraf.",
  },
];

export const situaties = [
  {
    title: "Er is een stelling aangereden",
    text: "Een heftruck heeft een staander of ligger geraakt en u wilt snel weten of de stelling nog veilig is.",
    href: "/stelling-aangereden/",
    cta: "Direct hulp na aanrijding",
  },
  {
    title: "De jaarlijkse inspectie is verlopen",
    text: "De laatste keuring is te lang geleden of niet ingepland en u wilt weer aantoonbaar in orde zijn.",
    href: "/jaarlijkse-stellinginspectie/",
    cta: "Plan de jaarlijkse inspectie",
  },
  {
    title: "Het vorige rapport gaf geen duidelijkheid",
    text: "U kreeg een lijst met technische opmerkingen, maar zonder prioriteiten en zonder concrete vervolgstappen.",
    href: "/duidelijk-inspectierapport/",
    cta: "Zo ziet een helder rapport eruit",
  },
  {
    title: "U wilt een onafhankelijke second opinion",
    text: "U twijfelt of er niet onnodig is afgekeurd en wilt een oordeel zonder verkoopbelang.",
    href: "/onafhankelijke-stellinginspectie/",
    cta: "Vraag een second opinion",
  },
  {
    title: "Dezelfde schade blijft terugkomen",
    text: "Steeds dezelfde hoeken en staanders raken beschadigd en u wilt de oorzaak aanpakken, niet alleen repareren.",
    href: "/terugkerende-stellingschade/",
    cta: "Pak de oorzaak aan",
  },
];

export const waaromRackcheck = [
  {
    title: "Onafhankelijk",
    text: "We beoordelen uw stellingen zonder verkoopbelang. Geen afkeur om onderdelen te slijten.",
  },
  {
    title: "Praktisch rapport",
    text: "Een rapport dat leest als werkdocument, niet als een lijst losse technische opmerkingen.",
  },
  {
    title: "Duidelijke prioriteiten",
    text: "Per bevinding weet u of het urgent is, gepland kan worden of kan wachten.",
  },
  {
    title: "Snelle oplevering",
    text: "In principe binnen 24 uur het rapport, urgente zaken melden we direct op locatie.",
  },
  {
    title: "Transparante prijs",
    text: "Vaste tarieven op basis van magazijngrootte. Vooraf duidelijk wat u betaalt.",
  },
  {
    title: "Zonder verkoopdruk",
    text: "Herstel is een apart traject. U bepaalt zelf of en door wie u laat repareren.",
  },
];

/** Voorbeeldregels voor de geanonimiseerde rapportweergave. */
export const rapportVoorbeeld = [
  {
    bevinding: "Deuk in staander, onderste 400 mm",
    locatie: "Gang C, stelling 12, veld 3",
    prioriteit: "Rood",
    risico: "Hoog",
    actie: "Sectie ontladen en staander vervangen",
    termijn: "Direct",
  },
  {
    bevinding: "Ligger licht doorgebogen",
    locatie: "Gang A, stelling 4, niveau 2",
    prioriteit: "Oranje",
    risico: "Gemiddeld",
    actie: "Belasting controleren en ligger vervangen",
    termijn: "Binnen 4 weken",
  },
  {
    bevinding: "Borgpen ontbreekt",
    locatie: "Gang B, stelling 7, niveau 3",
    prioriteit: "Oranje",
    risico: "Gemiddeld",
    actie: "Borgpen plaatsen",
    termijn: "Binnen 4 weken",
  },
  {
    bevinding: "Oppervlakkige kras op ligger",
    locatie: "Gang A, stelling 9, niveau 1",
    prioriteit: "Groen",
    risico: "Laag",
    actie: "Registreren en monitoren",
    termijn: "Volgende inspectie",
  },
];

export const schadeClassificatie = [
  {
    kleur: "Groen",
    label: "Aanvaardbaar",
    text: "Lichte gebruikssporen zonder gevolgen voor de veiligheid. De stelling kan in gebruik blijven. Registreren en meenemen bij de volgende inspectie.",
  },
  {
    kleur: "Oranje",
    label: "Herstel binnen termijn",
    text: "Schade die aandacht vraagt maar geen direct gevaar oplevert. Herstel binnen een afgesproken termijn, meestal binnen enkele weken.",
  },
  {
    kleur: "Rood",
    label: "Direct handelen",
    text: "Schade die de veiligheid direct raakt. De betreffende sectie moet worden ontlast of afgezet tot het herstel is uitgevoerd.",
  },
];

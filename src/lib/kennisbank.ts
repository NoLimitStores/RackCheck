/**
 * Kennisbank RackCheck. Elk artikel is uniek geschreven voor RackCheck.
 * Inhoud is gebaseerd op openbare, gezaghebbende bronnen (Arbowet en
 * Arbobesluit, Arboportaal, Nederlandse Arbeidsinspectie, NEN). Er wordt geen
 * normtekst letterlijk geciteerd en er worden geen exacte toleranties uit
 * betaalde normen gepubliceerd.
 */

export type Block =
  | { t: "h2"; text: string }
  | { t: "h3"; text: string }
  | { t: "p"; text: string }
  | { t: "ul"; items: string[] }
  | { t: "ol"; items: string[] }
  | { t: "note"; text: string }
  | { t: "table"; head: string[]; rows: string[][] };

export type Artikel = {
  slug: string;
  category: string;
  title: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  answer: string;
  updated: string;
  featured?: boolean;
  image?: { src: string; alt: string; caption?: string };
  blocks: Block[];
  faq: { q: string; a: string; link?: { href: string; label: string } }[];
  related: string[];
};

export const categories = [
  "Normen en regels",
  "Inspectie en keuring",
  "Schade en preventie",
  "Kosten en praktijk",
] as const;

export const artikelen: Artikel[] = [
  {
    slug: "nen-en-15635",
    category: "Normen en regels",
    title: "Wat is NEN-EN 15635?",
    h1: "Wat is NEN-EN 15635?",
    metaTitle: "Wat is NEN-EN 15635? Uitleg over stellinginspectie",
    metaDescription:
      "NEN-EN 15635 beschrijft het veilig gebruik en de inspectie van magazijnstellingen. Lees wat de norm inhoudt, wat de PRSES-rol is en hoe de inspectie werkt.",
    excerpt:
      "De Europese norm voor het veilig gebruiken en inspecteren van magazijnstellingen, in begrijpelijke taal uitgelegd.",
    answer:
      "NEN-EN 15635 is de Europese norm die beschrijft hoe u magazijnstellingen veilig gebruikt en inspecteert. De norm benoemt onder meer de rol van een verantwoordelijke binnen het bedrijf (de PRSES), periodieke visuele controles en een periodieke inspectie door een deskundige. De norm zelf is geen wet, maar geeft invulling aan de wettelijke zorgplicht uit de Arbowet.",
    updated: "2026-07-15",
    featured: true,
    blocks: [
      { t: "p", text: "NEN-EN 15635 gaat over de toepassing en het onderhoud van opslagsystemen van staal, oftewel het veilig gebruiken van magazijnstellingen. De norm richt zich op de gebruiker: het bedrijf dat de stellingen dagelijks in bedrijf heeft. Het doel is eenvoudig: voorkomen dat schade onopgemerkt blijft en uitgroeit tot een gevaarlijke situatie." },
      { t: "note", text: "Kort gezegd: NEN-EN 15635 vertelt hoe u als gebruiker met stellingen omgaat, hoe u schade signaleert en beoordeelt, en hoe vaak controle en inspectie horen plaats te vinden." },
      { t: "h2", text: "Wat regelt de norm?" },
      { t: "p", text: "De norm beschrijft een systeem van controle in lagen. Naast het dagelijkse veilige gebruik gaat het om twee soorten controle die elkaar aanvullen:" },
      { t: "ul", items: [
        "Regelmatige interne visuele controles door een aangewezen medewerker, bedoeld om zichtbare schade snel op te merken.",
        "Een periodieke inspectie door een deskundige, die de stellingen grondiger beoordeelt en de bevindingen classificeert.",
      ] },
      { t: "h2", text: "De rol van de PRSES" },
      { t: "p", text: "De norm introduceert de PRSES: de Person Responsible for Storage Equipment Safety, de persoon binnen uw organisatie die verantwoordelijk is voor de veiligheid van de opslagsystemen. Deze persoon zorgt dat schade wordt gemeld, dat interne controles plaatsvinden en dat de deskundige inspectie op tijd wordt uitgevoerd." },
      { t: "h2", text: "Verhouding tot de wet" },
      { t: "p", text: "NEN-EN 15635 is een norm, geen wet. In Nederland komt de wettelijke verplichting voort uit de Arbowet en het Arbobesluit: een werkgever moet zorgen voor een veilige werkomgeving en arbeidsmiddelen periodiek keuren. De norm geeft een erkende, praktische invulling van die zorgplicht. Wie de norm volgt, maakt aantoonbaar dat de stellingen veilig worden gebruikt en gecontroleerd." },
      { t: "h2", text: "Hoe RackCheck de norm toepast" },
      { t: "p", text: "RackCheck voert de periodieke deskundige inspectie uit conform NEN-EN 15635. We beoordelen alle bereikbare stellingen, classificeren de bevindingen als groen, oranje of rood en leveren een rapport met concrete prioriteiten en vervolgstappen. Daarmee ondersteunen we de PRSES bij zijn of haar verantwoordelijkheid." },
    ],
    faq: [
      { q: "Is NEN-EN 15635 verplicht?", a: "De norm zelf is niet wettelijk verplicht, maar de onderliggende zorgplicht uit de Arbowet wel. De norm volgen is de meest praktische manier om aan die zorgplicht te voldoen." },
      { q: "Geldt de norm voor alle stellingtypen?", a: "De norm gaat over stalen opslagsystemen in het algemeen, waaronder pallet-, legbord- en draagarmstellingen." },
    ],
    related: ["is-stellingkeuring-verplicht", "wat-is-een-prses", "hoe-vaak-stellingen-keuren"],
  },
  {
    slug: "npr-5055",
    category: "Normen en regels",
    title: "Wat is NPR 5055?",
    h1: "Wat is NPR 5055?",
    metaTitle: "Wat is NPR 5055? De Nederlandse praktijkrichtlijn uitgelegd",
    metaDescription:
      "NPR 5055 is de Nederlandse praktijkrichtlijn die NEN-EN 15635 aanvult voor de Nederlandse situatie. Lees wat de richtlijn toevoegt en voor wie ze bedoeld is.",
    excerpt:
      "De Nederlandse praktijkrichtlijn die de Europese stellingnorm vertaalt naar de praktijk in Nederland.",
    answer:
      "NPR 5055 is een Nederlandse praktijkrichtlijn die aanvulling en toelichting geeft op de Europese normen voor magazijnstellingen, waaronder NEN-EN 15635. De richtlijn helpt gebruikers en inspecteurs om de norm toe te passen op de Nederlandse praktijk. Net als een norm is een praktijkrichtlijn geen wet.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Een NPR, ofwel Nederlandse praktijkrichtlijn, is een document dat praktische invulling en toelichting geeft bij een norm. Waar NEN-EN 15635 op Europees niveau beschrijft hoe stellingen veilig gebruikt en geïnspecteerd worden, helpt NPR 5055 om die uitgangspunten begrijpelijk toe te passen in Nederlandse magazijnen." },
      { t: "note", text: "In het kort: NEN-EN 15635 geeft de kaders, NPR 5055 helpt bij de praktische toepassing daarvan in Nederland." },
      { t: "h2", text: "Waarom een aparte praktijkrichtlijn?" },
      { t: "p", text: "Europese normen zijn bewust algemeen gehouden, zodat ze in alle lidstaten bruikbaar zijn. Een praktijkrichtlijn vult die ruimte in met voorbeelden, aandachtspunten en werkwijzen die aansluiten bij de manier waarop in Nederland met stellingen wordt gewerkt. Dat maakt het voor bedrijven makkelijker om de norm concreet te maken." },
      { t: "h2", text: "Voor wie is NPR 5055 bedoeld?" },
      { t: "ul", items: [
        "Gebruikers van magazijnstellingen die hun interne controles goed willen inrichten.",
        "Verantwoordelijken (PRSES) die willen weten hoe ze schade beoordelen en registreren.",
        "Inspecteurs die de Europese norm consequent willen toepassen.",
      ] },
      { t: "h2", text: "Verhouding tot wet en norm" },
      { t: "p", text: "De volgorde is: de Arbowet en het Arbobesluit vormen de wettelijke basis, NEN-EN 15635 geeft de erkende invulling en NPR 5055 helpt bij de praktische toepassing. Geen van deze richtlijnen of normen is op zichzelf een wet, maar samen vormen ze de gangbare, aantoonbare manier om veilig met stellingen om te gaan." },
    ],
    faq: [
      { q: "Moet ik zowel NEN-EN 15635 als NPR 5055 kennen?", a: "Als gebruiker hoeft u de documenten niet uit uw hoofd te kennen. Het belangrijkste is dat de interne controles en de deskundige inspectie op orde zijn. RackCheck neemt de inhoudelijke beoordeling voor zijn rekening." },
      { q: "Waar vind ik de exacte tekst van NPR 5055?", a: "De volledige tekst is een betaald document van NEN. Wij citeren die tekst niet, maar passen de uitgangspunten toe in onze inspectie." },
    ],
    related: ["nen-en-15635", "schadeclassificatie", "wat-wordt-gecontroleerd"],
  },
  {
    slug: "is-stellingkeuring-verplicht",
    category: "Normen en regels",
    title: "Is een stellingkeuring verplicht?",
    h1: "Is een stellingkeuring verplicht?",
    metaTitle: "Is een stellingkeuring verplicht? Wat de wet vraagt",
    metaDescription:
      "Een stellingkeuring is niet los in de wet genoemd, maar volgt uit de zorgplicht van de Arbowet en het Arbobesluit. Lees wat dat voor uw magazijn betekent.",
    excerpt:
      "Wat de Arbowet en het Arbobesluit vragen, en waarom een deskundige inspectie de logische invulling is.",
    answer:
      "Er is geen wet die letterlijk zegt dat u uw stellingen jaarlijks moet laten keuren. Wel verplicht de Arbowet werkgevers om te zorgen voor een veilige werkomgeving en verplicht het Arbobesluit om arbeidsmiddelen periodiek te keuren. Magazijnstellingen vallen daaronder. Een periodieke deskundige inspectie is daarmee de gangbare en aantoonbare manier om aan die zorgplicht te voldoen.",
    updated: "2026-09-21",
    featured: true,
    image: {
      src: "/images/praktijk/palletstelling-magazijn.jpg",
      alt: "Volgeladen palletstelling in een magazijn met gangpadaanduiding",
      caption: "Volgeladen palletstellingen zijn arbeidsmiddelen waarvoor de zorgplicht van de werkgever geldt.",
    },
    blocks: [
      { t: "p", text: "Deze vraag komt vaak voor en het antwoord vraagt om precisie. Het is onjuist om te zeggen dat een specifieke norm een wet is. Tegelijk is het te kort door de bocht om te zeggen dat er geen enkele verplichting bestaat." },
      { t: "h2", text: "Wat de wet wel zegt" },
      { t: "p", text: "De Arbowet legt werkgevers een zorgplicht op: zorgen voor een veilige en gezonde werkomgeving. Het Arbobesluit werkt dat verder uit en bepaalt dat arbeidsmiddelen die aan slijtage of veroudering onderhevig zijn, periodiek gekeurd worden door een deskundige. Magazijnstellingen zijn zulke arbeidsmiddelen." },
      { t: "note", text: "De verplichting zit dus niet in een los artikel over stellingen, maar in de bredere zorgplicht en keuringsplicht voor arbeidsmiddelen." },
      { t: "h2", text: "Hoe u die verplichting invult" },
      { t: "p", text: "NEN-EN 15635 geeft de erkende invulling: regelmatige interne controles plus een periodieke inspectie door een deskundige. Door die aanpak te volgen maakt u aantoonbaar dat u de veiligheid serieus neemt. Dat is niet alleen belangrijk voor de veiligheid van uw medewerkers, maar ook richting de Nederlandse Arbeidsinspectie en uw verzekeraar." },
      { t: "h2", text: "Wat als u niets doet?" },
      { t: "ul", items: [
        "U loopt een reëel veiligheidsrisico voor uw medewerkers.",
        "Bij een ongeval kan blijken dat u niet aan de zorgplicht heeft voldaan.",
        "Een verzekeraar kan bij schade vragen naar het inspectiedossier.",
      ] },
    ],
    faq: [
      { q: "Moet de keuring per se jaarlijks?", a: "De wet noemt geen vaste termijn. In de praktijk is een jaarlijkse deskundige inspectie gebruikelijk, aangevuld met frequentere interne controles. De juiste frequentie hangt af van hoe intensief de stellingen worden gebruikt." },
      { q: "Geldt dit ook voor kleine magazijnen?", a: "Ja. De zorgplicht geldt ongeacht de grootte. Bij een klein magazijn is de inspectie alleen korter en goedkoper. Een inspectie bij RackCheck kost vanaf €395 per jaar excl. btw.", link: { href: "/prijzen/", label: "Bekijk de prijzen" } },
    ],
    related: ["hoe-vaak-stellingen-keuren", "nen-en-15635", "wie-mag-stellingen-inspecteren", "nulinspectie", "kosten-stellinginspectie"],
  },
  {
    slug: "hoe-vaak-stellingen-keuren",
    category: "Inspectie en keuring",
    title: "Hoe vaak moeten magazijnstellingen worden gekeurd?",
    h1: "Hoe vaak moeten magazijnstellingen worden gekeurd?",
    metaTitle: "Hoe vaak stellingen keuren? Inspectiefrequentie uitgelegd",
    metaDescription:
      "Een deskundige inspecteert stellingen meestal jaarlijks, aangevuld met regelmatige interne controles. Lees hoe u de juiste frequentie bepaalt.",
    excerpt:
      "Van dagelijkse oplettendheid tot de jaarlijkse deskundige inspectie: zo bepaalt u het juiste ritme.",
    answer:
      "In de praktijk laat u magazijnstellingen minimaal één keer per jaar inspecteren door een deskundige. Daarnaast horen er regelmatige interne visuele controles plaats te vinden, bijvoorbeeld wekelijks of maandelijks, door een aangewezen medewerker. Bij intensief gebruik of na een incident kan een hogere frequentie nodig zijn.",
    updated: "2026-07-15",
    featured: true,
    blocks: [
      { t: "p", text: "Er is geen wettelijk vastgelegde termijn, maar wel een breed gedragen praktijk die voortkomt uit NEN-EN 15635. Die praktijk kent verschillende niveaus van controle die elkaar aanvullen." },
      { t: "table", head: ["Soort controle", "Wie", "Frequentie"], rows: [
        ["Direct melden van schade", "Iedere medewerker", "Doorlopend"],
        ["Interne visuele controle", "Aangewezen medewerker (PRSES)", "Wekelijks tot maandelijks"],
        ["Deskundige inspectie", "Externe deskundige", "In de regel jaarlijks"],
      ] },
      { t: "h2", text: "Waarom niet alleen jaarlijks?" },
      { t: "p", text: "Een jaarlijkse inspectie is een momentopname. Schade ontstaat het hele jaar door, vaak door aanrijdingen die niet worden gemeld. Daarom is de combinatie belangrijk: medewerkers die schade direct melden, een aangewezen persoon die regelmatig rondloopt en een deskundige die jaarlijks grondig beoordeelt." },
      { t: "h2", text: "Wanneer vaker inspecteren?" },
      { t: "ul", items: [
        "Bij intensief heftruckverkeer of meerploegendienst.",
        "Na een aanrijding of ander incident: laat de betreffende sectie meteen beoordelen.",
        "Na een wijziging aan de opstelling, zoals verplaatste liggers of een nieuwe configuratie.",
        "Bij veel gemelde schade in korte tijd, wat kan wijzen op een structureel probleem.",
      ] },
      { t: "note", text: "Tip: leg de datum van elke inspectie vast en plan de volgende meteen in. Zo verdwijnt de inspectie niet tussen andere werkzaamheden." },
    ],
    faq: [
      { q: "Kan ik een herinnering krijgen voor de volgende inspectie?", a: "Ja. RackCheck kan een terugkerende planning of jaarlijkse herinnering afspreken, zodat u de inspectie niet vergeet." },
      { q: "Telt een interne controle mee als keuring?", a: "Nee. Interne controles zijn belangrijk, maar vervangen de periodieke deskundige inspectie niet. Ze vullen elkaar aan." },
    ],
    related: ["is-stellingkeuring-verplicht", "interne-controle-vs-externe-inspectie", "wat-is-een-prses"],
  },
  {
    slug: "wie-mag-stellingen-inspecteren",
    category: "Inspectie en keuring",
    title: "Wie mag magazijnstellingen inspecteren?",
    h1: "Wie mag magazijnstellingen inspecteren?",
    metaTitle: "Wie mag magazijnstellingen inspecteren? Deskundigheid uitgelegd",
    metaDescription:
      "De periodieke inspectie hoort door een deskundige te gebeuren. Lees wat deskundigheid inhoudt en waarom onafhankelijkheid belangrijk is.",
    excerpt:
      "Wat deskundigheid betekent, welke rol de interne medewerker speelt en waarom onafhankelijkheid telt.",
    answer:
      "De periodieke inspectie van magazijnstellingen hoort te worden uitgevoerd door een deskundige: iemand met kennis van de constructie, de faalmechanismen en de relevante normen. Interne visuele controles kunnen door een getrainde eigen medewerker worden gedaan. De wet schrijft geen specifiek diploma voor, maar aantoonbare deskundigheid en onafhankelijkheid zijn wel belangrijk.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Rond deze vraag bestaan misverstanden. Sommigen denken dat er een wettelijk verplicht certificaat bestaat, anderen denken dat iedereen het mag doen. De werkelijkheid ligt daartussen." },
      { t: "h2", text: "Twee soorten controle, twee soorten mensen" },
      { t: "ul", items: [
        "Interne visuele controle: uitgevoerd door een aangewezen, getrainde medewerker binnen uw eigen organisatie (vaak de PRSES).",
        "Periodieke deskundige inspectie: uitgevoerd door een deskundige die de constructie kan beoordelen en schade correct kan classificeren.",
      ] },
      { t: "h2", text: "Wat is een deskundige?" },
      { t: "p", text: "Een deskundige inspecteur kent de opbouw van verschillende stellingtypen, weet hoe schade zich ontwikkelt en kan beoordelen wanneer een gebrek de veiligheid raakt. Die kennis komt uit opleiding en ervaring in de praktijk. Het gaat om aantoonbare vakbekwaamheid, niet om één specifiek wettelijk keurmerk." },
      { t: "h2", text: "Waarom onafhankelijkheid telt" },
      { t: "p", text: "Wie de inspectie combineert met de verkoop van nieuwe onderdelen, heeft een belang bij afkeur. Een onafhankelijke inspecteur beoordeelt puur op veiligheid en de relevante criteria. Bij RackCheck staat de inspectie los van eventueel herstel: dat volgt pas daarna, in een apart traject." },
      { t: "note", text: "Vraag bij twijfel altijd hoe de beoordeling tot stand komt en of degene die keurt ook belang heeft bij de reparatie." },
    ],
    faq: [
      { q: "Mag mijn eigen technische dienst de jaarlijkse inspectie doen?", a: "De interne controles kunnen intern gebeuren. Voor de periodieke deskundige inspectie is een onafhankelijke, deskundige beoordeling gebruikelijk en aan te raden, juist om blinde vlekken te voorkomen." },
      { q: "Is RackCheck onafhankelijk?", a: "Ja. Onze inspectiebeoordeling staat los van herstelverkoop. We keuren niet af om onderdelen te slijten." },
    ],
    related: ["onafhankelijke-stellinginspectie", "wat-is-een-prses", "nen-en-15635"],
  },
  {
    slug: "wat-is-een-prses",
    category: "Inspectie en keuring",
    title: "Wat is een PRSES?",
    h1: "Wat is een PRSES?",
    metaTitle: "Wat is een PRSES? De verantwoordelijke voor stellingveiligheid",
    metaDescription:
      "De PRSES is de persoon binnen uw bedrijf die verantwoordelijk is voor de veiligheid van de magazijnstellingen. Lees wat de rol inhoudt en hoe u die invult.",
    excerpt:
      "De persoon binnen uw organisatie die de veiligheid van de opslagsystemen bewaakt: taken en invulling.",
    answer:
      "PRSES staat voor Person Responsible for Storage Equipment Safety: de persoon binnen uw organisatie die verantwoordelijk is voor de veiligheid van de magazijnstellingen. NEN-EN 15635 raadt aan zo iemand aan te wijzen. De PRSES zorgt dat schade wordt gemeld en beoordeeld, dat interne controles plaatsvinden en dat de deskundige inspectie op tijd gebeurt.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "De term komt uit NEN-EN 15635. De gedachte erachter is dat stellingveiligheid pas werkt als er één duidelijk aanspreekpunt is. Zonder aangewezen persoon blijft schade vaak liggen omdat niemand zich er eigenaar van voelt." },
      { t: "h2", text: "Wat doet de PRSES?" },
      { t: "ul", items: [
        "Zorgt dat medewerkers weten hoe en waar ze schade melden.",
        "Voert of organiseert de regelmatige interne visuele controles.",
        "Beoordeelt gemelde schade of laat die beoordelen.",
        "Plant de periodieke deskundige inspectie op tijd in.",
        "Houdt het inspectiedossier en de opvolging van herstel bij.",
      ] },
      { t: "h2", text: "Wie is geschikt?" },
      { t: "p", text: "Vaak is dit de warehouse manager, een teamleider of een KAM- of preventiemedewerker. Belangrijk is dat de persoon de bevoegdheid heeft om actie te ondernemen, bijvoorbeeld om een sectie af te zetten, en voldoende kennis heeft om schade te herkennen." },
      { t: "note", text: "De PRSES vervangt de externe deskundige inspectie niet. De rol zorgt juist dat het hele systeem van controle en inspectie blijft draaien." },
      { t: "h2", text: "Hoe RackCheck de PRSES ondersteunt" },
      { t: "p", text: "Ons rapport is opgezet als werkdocument: per bevinding een locatie, classificatie en vervolgstap. Daarmee kan de PRSES direct de opvolging organiseren en aantonen dat er iets met de bevindingen is gedaan." },
    ],
    faq: [
      { q: "Is een PRSES wettelijk verplicht?", a: "De term komt uit de norm, niet uit de wet. Maar iemand aanwijzen die verantwoordelijk is, is de praktische manier om aan de zorgplicht te voldoen." },
      { q: "Kan één persoon PRSES zijn voor meerdere vestigingen?", a: "Dat kan, mits die persoon per locatie kan zorgen dat controles en meldingen goed geregeld zijn. Vaak wijst men per vestiging een aanspreekpunt aan." },
    ],
    related: ["hoe-vaak-stellingen-keuren", "interne-controle-vs-externe-inspectie", "nen-en-15635"],
  },
  {
    slug: "schadeclassificatie",
    category: "Schade en preventie",
    title: "Wat betekenen de schadeclassificaties groen, oranje en rood?",
    h1: "Wat betekenen de schadeclassificaties?",
    metaTitle: "Schadeclassificatie stellingen: groen, oranje en rood uitgelegd",
    metaDescription:
      "Bij een stellinginspectie krijgt elke bevinding een classificatie: groen, oranje of rood. Lees wat de kleuren betekenen en welke actie erbij hoort.",
    excerpt:
      "Groen, oranje of rood: wat de kleurcodes betekenen en welke vervolgactie erbij hoort.",
    answer:
      "Bij een stellinginspectie krijgt elke bevinding een kleurcode. Groen betekent aanvaardbaar: de stelling kan in gebruik blijven. Oranje betekent herstel binnen een afgesproken termijn. Rood betekent direct handelen: de sectie moet worden ontlast of afgezet tot het herstel is uitgevoerd. Deze systematiek maakt in één oogopslag duidelijk wat urgent is.",
    updated: "2026-07-15",
    featured: true,
    blocks: [
      { t: "p", text: "De kleurclassificatie is het hart van een bruikbaar inspectierapport. Ze vertaalt een technische bevinding naar een heldere actie, ook voor iemand zonder technische achtergrond." },
      { t: "table", head: ["Kleur", "Betekenis", "Actie"], rows: [
        ["Groen", "Aanvaardbaar, lichte gebruikssporen", "In gebruik houden, registreren en monitoren"],
        ["Oranje", "Vraagt aandacht, geen direct gevaar", "Herstel binnen een afgesproken termijn"],
        ["Rood", "Raakt de veiligheid direct", "Sectie ontlasten of afzetten en direct herstellen"],
      ] },
      { t: "h2", text: "Waarom niet alles rood of groen is" },
      { t: "p", text: "De kracht van het systeem zit in de middelste categorie. Niet elke deuk of kras is gevaarlijk, maar niet elke beschadiging kan onbeperkt wachten. Oranje geeft ruimte om herstel gepland en beheerst uit te voeren, zonder de operatie onnodig stil te leggen en zonder een risico te negeren." },
      { t: "h2", text: "Van kleur naar termijn" },
      { t: "ul", items: [
        "Rood: direct, voordat de sectie weer belast wordt.",
        "Oranje: binnen een termijn die past bij de ernst, vaak enkele weken.",
        "Groen: meenemen bij de volgende reguliere inspectie.",
      ] },
      { t: "note", text: "In een goed rapport staat bij oranje en rood altijd een concrete termijn en actie, niet alleen de kleur." },
    ],
    faq: [
      { q: "Wie bepaalt de classificatie?", a: "De inspecteur, op basis van de aard en de plaats van de schade en de gevolgen voor de draagkracht. Bij twijfel wordt naar de veilige kant geclassificeerd." },
      { q: "Wat als ik een oranje punt laat liggen?", a: "Dan groeit de kans dat het bij de volgende belasting of aanrijding verergert naar rood. Oranje is een uitnodiging om gepland te herstellen, niet om te negeren." },
    ],
    related: ["informatie-in-inspectierapport", "na-heftruckaanrijding", "magazijnstelling-afgekeurd", "duidelijk-inspectierapport", "verbogen-ligger", "roest-corrosie-magazijnstelling"],
  },
  {
    slug: "na-heftruckaanrijding",
    category: "Schade en preventie",
    title: "Wat moet u doen na een heftruckaanrijding?",
    h1: "Wat moet u doen na een heftruckaanrijding?",
    metaTitle: "Stelling aangereden door heftruck? Dit moet u doen",
    metaDescription:
      "Na een heftruckaanrijding tegen een stelling telt elke stap. Lees het stappenplan: afzetten, beoordelen en niet zelf rechtbuigen of lassen.",
    excerpt:
      "Een helder stappenplan voor de eerste minuten en uren na een aanrijding tegen een stelling.",
    answer:
      "Zet na een heftruckaanrijding de betreffende sectie direct veilig: houd mensen weg en beoordeel of de sectie ontladen moet worden. Buig of las een beschadigde staander nooit zelf recht. Laat de schade beoordelen door een deskundige, die bepaalt of de sectie veilig is, hersteld moet worden of moet worden vervangen.",
    updated: "2026-07-15",
    featured: true,
    blocks: [
      { t: "p", text: "Een aanrijding lijkt soms onschuldig, zeker als er niets is omgevallen. Toch kan een deuk in een staander de draagkracht flink verlagen. De eerste reactie bepaalt hoe veilig de situatie blijft." },
      { t: "h2", text: "Stappenplan na een aanrijding" },
      { t: "ol", items: [
        "Zorg eerst voor de veiligheid van mensen: houd iedereen uit de buurt van de geraakte sectie.",
        "Beoordeel of de sectie ontladen moet worden. Bij zichtbare vervorming van een staander: ga uit van onveilig tot het tegendeel is vastgesteld.",
        "Zet de sectie af of markeer die duidelijk, zodat er niet verder wordt gestapeld of gereden.",
        "Meld de aanrijding intern bij de verantwoordelijke (PRSES) en leg vast wat er is gebeurd.",
        "Buig of las niets zelf recht en vul geen last bij op de geraakte sectie.",
        "Laat de schade beoordelen door een deskundige inspecteur.",
      ] },
      { t: "note", text: "Belangrijk: rechtbuigen of lassen van een staander herstelt de sterkte niet en kan het staal juist verzwakken. Vervanging is bij structurele schade de veilige route." },
      { t: "h2", text: "Wanneer direct handelen?" },
      { t: "p", text: "Bij een duidelijk vervormde of geknikte staander, een losgeraakte ligger of een zichtbaar scheefgezakte sectie is er sprake van acuut gevaar. Ontlaad de sectie dan zo snel als veilig kan en wacht met verder gebruik tot een deskundige het heeft beoordeeld." },
      { t: "h2", text: "Spoedinspectie door RackCheck" },
      { t: "p", text: "Na een aanrijding plannen we een inspectie met voorrang in. We beoordelen de schade onafhankelijk, melden acuut gevaar direct op locatie en leggen in het rapport vast wat er moet gebeuren en met welke prioriteit. U kunt vooraf foto's van de schade sturen, zodat we goed voorbereid komen." },
    ],
    faq: [
      { q: "De stelling staat nog overeind, is dat niet genoeg?", a: "Nee. Een staander kan een groot deel van zijn draagkracht verliezen zonder direct om te vallen. Onder volgende belasting of bij een nieuwe stoot kan het alsnog misgaan." },
      { q: "Kan ik de sectie na beoordeling weer gebruiken?", a: "Als de deskundige de sectie groen classificeert wel. Bij oranje of rood volgt eerst herstel of vervanging." },
    ],
    related: ["stelling-aangereden", "staander-rechtbuigen-lassen", "magazijnstelling-afgekeurd", "schadeclassificatie", "beschadigde-schoor", "scheve-magazijnstelling"],
  },
  {
    slug: "wat-wordt-gecontroleerd",
    category: "Inspectie en keuring",
    title: "Wat wordt gecontroleerd bij een stellinginspectie?",
    h1: "Wat wordt gecontroleerd bij een stellinginspectie?",
    metaTitle: "Wat wordt gecontroleerd bij een stellinginspectie?",
    metaDescription:
      "Van staanders en liggers tot verankering, borging en belastingborden: lees welke onderdelen een deskundige bij een stellinginspectie beoordeelt.",
    excerpt:
      "Een overzicht van de onderdelen die een inspecteur nagaat, van staander tot belastingbord.",
    answer:
      "Bij een stellinginspectie beoordeelt de deskundige alle dragende en veiligheidsrelevante onderdelen: staanders, liggers, schoren, voetplaten, verankering, borgpennen en belastingborden. Daarnaast kijkt de inspecteur naar aanrijdschade, scheefstand, doorbuiging, aanwijzingen van overbelasting en onjuist gebruik. Elke bevinding wordt geclassificeerd en gefotografeerd.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Een stellinginspectie is meer dan een blik op de stelling. De inspecteur loopt langs de opstelling en beoordeelt onderdeel voor onderdeel, met bijzondere aandacht voor de plekken waar schade het meest voorkomt en het meest gevaarlijk is." },
      { t: "h2", text: "De belangrijkste controlepunten" },
      { t: "ul", items: [
        "Staanders: deuken, vervorming, scheurvorming en corrosie, vooral in de onderste meter.",
        "Liggers: doorbuiging, beschadiging en correcte plaatsing in de haken.",
        "Borgpennen: aanwezig, zodat liggers niet kunnen loslaten.",
        "Schoren: diagonale en horizontale verbanden op beschadiging en volledigheid.",
        "Voetplaten en verankering: staat en aanwezigheid van vloerankers.",
        "Belastingborden: aanwezig, leesbaar en passend bij de huidige configuratie.",
        "Aanrijdbeveiliging: staanderbeschermers en hoekbeveiliging.",
        "Scheefstand en doorbuiging: uitlijning en belasting binnen aanvaardbare grenzen.",
      ] },
      { t: "h2", text: "Ook het gebruik telt mee" },
      { t: "p", text: "Naast de constructie kijkt de inspecteur naar hoe de stelling wordt gebruikt: passen de pallets, staat de last stabiel, klopt de belasting met het belastingbord. Onjuist gebruik is een veelvoorkomende oorzaak van schade en wordt daarom meegenomen in de beoordeling." },
      { t: "note", text: "Alles wat de veiligheid raakt, wordt vastgelegd met locatie, foto, classificatie en vervolgstap, zodat het rapport direct bruikbaar is." },
    ],
    faq: [
      { q: "Worden ook de hoogste niveaus beoordeeld?", a: "De inspecteur beoordeelt alle bereikbare onderdelen visueel, ook de hogere niveaus voor zover die veilig te beoordelen zijn vanaf de vloer." },
      { q: "Wordt de vloer ook meegenomen?", a: "De staat van de vloer rond de voetplaten en verankering wordt meegenomen, omdat die de stabiliteit beïnvloedt." },
    ],
    related: ["schadeclassificatie", "belastingbord", "checklist-veilige-magazijnstelling", "verbogen-ligger", "roest-corrosie-magazijnstelling"],
  },
  {
    slug: "belastingbord",
    category: "Normen en regels",
    title: "Hoe werkt een belastingbord of draaglastbord?",
    h1: "Hoe werkt een belastingbord of draaglastbord?",
    metaTitle: "Belastingbord palletstelling: wat het is en waarom het moet",
    metaDescription:
      "Een belastingbord vermeldt hoeveel een stelling en een ligger mogen dragen. Lees wat erop staat, waarom het verplicht is en wat er misgaat zonder.",
    excerpt:
      "Wat op een belastingbord staat, waarom het onmisbaar is en wat er misgaat als het ontbreekt.",
    answer:
      "Een belastingbord, ook draaglastbord genoemd, vermeldt de toegestane belasting van een stelling: het maximale gewicht per liggerniveau en per stellingveld. Het bord hoort zichtbaar en leesbaar aanwezig te zijn en te passen bij de actuele configuratie. Zonder correct belastingbord weet niemand hoeveel er veilig opgeslagen mag worden.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Het belastingbord is een klein onderdeel met een grote functie. Het vertaalt de constructieberekening van de stelling naar een praktische grens voor de mensen op de vloer." },
      { t: "h2", text: "Wat staat er op?" },
      { t: "ul", items: [
        "De maximale belasting per liggerniveau (per liggerpaar).",
        "De maximale belasting per stellingveld of sectie.",
        "Vaak informatie over de configuratie waarop deze waarden gelden, zoals de afstand tussen de liggers.",
      ] },
      { t: "h2", text: "Waarom het belangrijk is" },
      { t: "p", text: "De toegestane belasting hangt af van de opbouw: het type staander, het aantal liggers en de onderlinge afstand. Verandert die opbouw, bijvoorbeeld doordat liggers worden verhangen, dan verandert ook de toegestane belasting. Een belastingbord dat niet meer klopt met de werkelijke opstelling is daarom net zo riskant als een ontbrekend bord." },
      { t: "note", text: "Bij een inspectie controleren we of het belastingbord aanwezig, leesbaar en passend is bij de huidige configuratie." },
      { t: "h2", text: "Wat gaat er mis zonder?" },
      { t: "p", text: "Zonder duidelijk bord wordt de belasting een kwestie van inschatten. Overbelasting is dan een kwestie van tijd, met doorgebogen liggers of in het ergste geval een instorting als gevolg. Een leesbaar, kloppend belastingbord voorkomt die onzekerheid." },
    ],
    faq: [
      { q: "Wij hebben liggers verhangen, klopt ons bord nog?", a: "Waarschijnlijk niet zonder herberekening. Verhangen verandert de toegestane belasting. Laat de nieuwe waarden bepalen en pas het bord aan." },
      { q: "Wie levert een belastingbord?", a: "De leverancier of fabrikant van de stelling kan een bord leveren op basis van de configuratie. RackCheck signaleert in het rapport of een bord ontbreekt of niet klopt." },
    ],
    related: ["wat-wordt-gecontroleerd", "nen-en-15635", "checklist-veilige-magazijnstelling"],
  },
  {
    slug: "kosten-stellinginspectie",
    category: "Kosten en praktijk",
    title: "Wat kost een stellinginspectie?",
    h1: "Wat kost een stellinginspectie?",
    metaTitle: "Wat kost een stellinginspectie? Prijzen en factoren",
    metaDescription:
      "Een stellinginspectie start vanaf €395 per jaar. Lees welke factoren de prijs bepalen en wat er bij de inspectie is inbegrepen.",
    excerpt:
      "Wat een inspectie kost, waar de prijs van afhangt en wat er allemaal bij inbegrepen zit.",
    answer:
      "Een stellinginspectie kost bij RackCheck vanaf €395 per jaar, exclusief btw. De exacte prijs hangt af van de grootte van het magazijn, het aantal en type stellingen en het aantal locaties. We bepalen die op basis van uw situatie en bevestigen de prijs vooraf.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Bij RackCheck start een inspectie vanaf €395 per jaar, exclusief btw. We werken zonder verborgen kosten: de prijs stemmen we af op uw situatie en bevestigen we vooraf, zodat u niet voor verrassingen komt te staan." },
      { t: "note", text: "De uiteindelijke prijs hangt vooral af van de grootte van het magazijn, het aantal en type stellingen en het aantal locaties. Vraag vrijblijvend een vaste prijs aan voor uw situatie." },
      { t: "h2", text: "Wat zit erbij in?" },
      { t: "ul", items: [
        "Intake vooraf en de inspectie op locatie.",
        "Beoordeling van alle bereikbare stellingen.",
        "Vastlegging met foto's en schadeclassificatie.",
        "Inspectierapport met prioriteiten en vervolgstappen, in principe binnen 24 uur.",
        "Directe melding van urgente situaties tijdens de inspectie.",
      ] },
      { t: "h2", text: "Welke factoren beïnvloeden de prijs?" },
      { t: "p", text: "Naast de grootte spelen het aantal en type stellingen, de bereikbaarheid en de urgentie mee. Meerdere vestigingen kunnen gecombineerd worden ingepland, wat vaak gunstiger uitpakt. Een spoedinspectie na een incident plannen we met voorrang, waar een toeslag voor kan gelden." },
      { t: "note", text: "Wilt u een exacte prijs? Vraag vrijblijvend een vaste prijs aan, dan bevestigen we die vooraf op basis van uw magazijn en stellingen." },
    ],
    faq: [
      { q: "Is de prijs inclusief herstel?", a: "Nee. De prijs is voor de onafhankelijke inspectie en het rapport. Herstel is een apart traject met een eigen voorstel, zodat de beoordeling onafhankelijk blijft." },
      { q: "Krijg ik korting bij meerdere vestigingen?", a: "Meerdere locaties gecombineerd inplannen scheelt reistijd en levert vaak een gunstiger totaalprijs op. Vraag een vaste prijs aan voor uw situatie." },
    ],
    related: ["duidelijk-inspectierapport", "informatie-in-inspectierapport", "hoe-vaak-stellingen-keuren"],
  },
  {
    slug: "aanrijdschade-voorkomen",
    category: "Schade en preventie",
    title: "Hoe voorkomt u aanrijdschade aan palletstellingen?",
    h1: "Hoe voorkomt u aanrijdschade aan palletstellingen?",
    metaTitle: "Aanrijdschade aan palletstellingen voorkomen: 8 maatregelen",
    metaDescription:
      "Aanrijdschade is de meest voorkomende oorzaak van onveilige stellingen. Lees acht praktische maatregelen om aanrijdingen in uw magazijn te voorkomen.",
    excerpt:
      "Acht praktische maatregelen die aanrijdingen tegen palletstellingen echt verminderen.",
    answer:
      "Aanrijdschade voorkomt u met een combinatie van maatregelen: voldoende gangbreedte, goede aanrijdbeveiliging, duidelijke rijroutes en zichtlijnen, goede verlichting, getrainde heftruckchauffeurs en een cultuur waarin schade direct wordt gemeld. Geen enkele maatregel is op zichzelf genoeg, de combinatie maakt het verschil.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Aanrijdschade is verreweg de meest voorkomende oorzaak van onveilige stellingen. De goede boodschap: een groot deel is te voorkomen met maatregelen die geen grote investering vragen." },
      { t: "h2", text: "Acht maatregelen die werken" },
      { t: "ol", items: [
        "Zorg voor voldoende gangbreedte in verhouding tot de gebruikte trucks.",
        "Plaats aanrijdbeveiliging: staanderbeschermers en hoekbeveiliging op kwetsbare plekken.",
        "Maak rijroutes en looppaden duidelijk zichtbaar met belijning.",
        "Verbeter de zichtlijnen bij kruisingen en kopse kanten, bijvoorbeeld met spiegels.",
        "Zorg voor goede, gelijkmatige verlichting zonder donkere hoeken.",
        "Train chauffeurs en houd hun vaardigheid op peil.",
        "Beperk werkdruk en tijdsdruk die tot risicovol rijgedrag leiden.",
        "Maak schade melden makkelijk en vanzelfsprekend, zonder schuldvraag.",
      ] },
      { t: "note", text: "Aanrijdbeveiliging voorkomt geen aanrijding, maar vangt de klap op zodat de staander minder of geen schade oploopt. Het is een aanvulling, geen vervanging van goed rijgedrag." },
      { t: "h2", text: "Van incident naar patroon" },
      { t: "p", text: "Als dezelfde plekken telkens geraakt worden, is er meestal een onderliggende oorzaak: een krappe bocht, een slechte zichtlijn of een looproute die kruist met heftruckverkeer. Door schade te registreren en te vergelijken over meerdere inspecties, wordt zo'n patroon zichtbaar en kunt u het gericht aanpakken." },
    ],
    faq: [
      { q: "Is aanrijdbeveiliging verplicht?", a: "Er is geen los wetsartikel dat het letterlijk verplicht, maar het hoort bij een veilige inrichting en dus bij de zorgplicht. Op risicovolle plekken is het sterk aan te raden." },
      { q: "Helpt het om schade te registreren?", a: "Zeker. Registratie maakt patronen zichtbaar, zodat u de oorzaak aanpakt in plaats van steeds opnieuw te repareren." },
    ],
    related: ["terugkerende-stellingschade", "na-heftruckaanrijding", "checklist-veilige-magazijnstelling"],
  },
  {
    slug: "staander-rechtbuigen-lassen",
    category: "Schade en preventie",
    title: "Mag u een beschadigde staander zelf rechtbuigen of lassen?",
    h1: "Mag u een beschadigde staander zelf rechtbuigen of lassen?",
    metaTitle: "Beschadigde staander rechtbuigen of lassen? Waarom niet",
    metaDescription:
      "Een beschadigde staander zelf rechtbuigen of lassen herstelt de sterkte niet en is riskant. Lees waarom vervanging bij structurele schade de veilige keuze is.",
    excerpt:
      "Waarom rechtbuigen en lassen geen echte reparatie zijn en wat wel de veilige route is.",
    answer:
      "Nee, een beschadigde staander zelf rechtbuigen of lassen is niet veilig. Het staal is bij de vervorming al verzwakt en rechtbuigen of lassen herstelt de oorspronkelijke sterkte niet, het kan die zelfs verder verminderen. Bij structurele schade is vervanging van de staander of het beschadigde deel de veilige route.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "De verleiding is begrijpelijk: een deuk lijkt met wat kracht of een lasapparaat zo verholpen. Toch is dit een van de gevaarlijkste misverstanden rond stellingveiligheid." },
      { t: "h2", text: "Waarom rechtbuigen niet werkt" },
      { t: "p", text: "Koudgevormd staal dat vervormd is geraakt, heeft ter plekke een deel van zijn eigenschappen verloren. Terugbuigen brengt de vorm misschien terug, maar niet de sterkte. Het materiaal is dan tweemaal vervormd en juist brozer geworden. De staander lijkt hersteld, maar is dat niet." },
      { t: "h2", text: "Waarom lassen niet de oplossing is" },
      { t: "p", text: "Lassen aan een dragende staander verandert de eigenschappen van het staal door de warmte en voegt geen betrouwbare sterkte toe die te controleren is. Bovendien is de originele constructie ontworpen zonder die las. Een gelaste reparatie is daarom niet gelijkwaardig aan het oorspronkelijke onderdeel." },
      { t: "note", text: "Vuistregel: constructieve schade aan een dragend onderdeel los je op met vervanging, niet met rechtbuigen of lassen." },
      { t: "h2", text: "Wat dan wel?" },
      { t: "ol", items: [
        "Ontlaad de sectie en zet die af tot beoordeling.",
        "Laat de schade classificeren door een deskundige.",
        "Vervang bij structurele schade de staander of het beschadigde deel door een passend origineel of gelijkwaardig onderdeel.",
        "Laat na herstel de sectie herbeoordelen.",
      ] },
    ],
    faq: [
      { q: "Een hele kleine kras, moet die ook vervangen?", a: "Niet per se. Oppervlakkige gebruikssporen zonder vervorming zijn vaak groen. Het gaat om vervorming, knik of scheur in een dragend onderdeel." },
      { q: "Waar haal ik een vervangende staander?", a: "Afhankelijk van het merk via de fabrikant, dealer of een geschikte leverancier. Bij een onbekend of niet meer leverbaar merk zoeken we naar een technisch verantwoord alternatief." },
    ],
    related: ["na-heftruckaanrijding", "schadeclassificatie", "stelling-aangereden", "verbogen-ligger", "beschadigde-schoor", "roest-corrosie-magazijnstelling"],
  },
  {
    slug: "nulinspectie",
    category: "Inspectie en keuring",
    title: "Wanneer is een nulinspectie relevant?",
    h1: "Wanneer is een nulinspectie relevant?",
    metaTitle: "Nulinspectie stellingen: wanneer en waarom",
    metaDescription:
      "Een nulinspectie legt de begintoestand van een stelling vast, bijvoorbeeld na installatie of verhuizing. Lees wanneer een nulmeting waarde heeft.",
    excerpt:
      "Wat een nulinspectie inhoudt en op welke momenten het slim is de begintoestand vast te leggen.",
    answer:
      "Een nulinspectie legt de toestand van een stelling vast op een startmoment, meestal direct na installatie, verhuizing of een grote wijziging. Zo weet u zeker dat de stelling correct is opgebouwd en heeft u een referentiepunt voor latere inspecties. Een nulinspectie is vooral relevant bij nieuwe of net verplaatste installaties.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "De naam zegt het al: een nulinspectie is de meting op nul, het startpunt. Ze bevestigt dat de stelling in orde is opgeleverd voordat er last op komt en dient later als vergelijkingsbasis." },
      { t: "h2", text: "Wanneer is een nulinspectie zinvol?" },
      { t: "ul", items: [
        "Direct na installatie van een nieuwe stelling, om de opbouw en verankering te bevestigen.",
        "Na een verhuizing of het opnieuw opbouwen van een bestaande stelling.",
        "Na een grote wijziging aan de configuratie.",
        "Bij oplevering door een leverancier, als onafhankelijke controle van het geleverde werk.",
      ] },
      { t: "h2", text: "Wat levert het op?" },
      { t: "p", text: "Een nulinspectie voorkomt dat opbouwfouten pas jaren later opvallen. Ontbrekende ankers, verkeerd geplaatste schoren of een ontbrekend belastingbord komen zo meteen aan het licht, op het moment dat ze nog eenvoudig te verhelpen zijn. Bovendien heeft u een gedocumenteerd startpunt waartegen u latere schade kunt afzetten." },
      { t: "note", text: "Een nulinspectie is geen vervanging van de periodieke inspectie, maar een waardevol startpunt aan het begin van de levensduur." },
    ],
    faq: [
      { q: "Is een nulinspectie verplicht?", a: "Nee, het is geen wettelijke verplichting. Het is een verstandige keuze bij nieuwe of verplaatste installaties, zeker als u de oplevering onafhankelijk wilt laten controleren." },
      { q: "Kan RackCheck de oplevering van mijn leverancier controleren?", a: "Ja. We beoordelen onafhankelijk of de stelling correct is opgebouwd en verankerd, los van de partij die heeft geleverd." },
    ],
    related: ["wat-wordt-gecontroleerd", "belastingbord", "hoe-vaak-stellingen-keuren", "losse-vloerankers-magazijnstelling"],
  },
  {
    slug: "interne-controle-vs-externe-inspectie",
    category: "Inspectie en keuring",
    title: "Verschil tussen interne controle en externe stellinginspectie",
    h1: "Verschil tussen interne controle en externe stellinginspectie",
    metaTitle: "Interne controle versus externe stellinginspectie",
    metaDescription:
      "Interne controles en de externe deskundige inspectie vullen elkaar aan. Lees het verschil, wie wat doet en waarom u beide nodig heeft.",
    excerpt:
      "Twee soorten controle die elkaar aanvullen: wie doet wat, hoe vaak en waarom u beide nodig heeft.",
    answer:
      "Een interne controle is een regelmatige visuele check door een eigen, aangewezen medewerker, gericht op het snel opmerken van zichtbare schade. Een externe inspectie is de periodieke, grondige beoordeling door een onafhankelijke deskundige die schade classificeert en rapporteert. De twee vervangen elkaar niet, ze vullen elkaar aan.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Veel bedrijven denken dat één van beide volstaat. In werkelijkheid werkt stellingveiligheid alleen goed als beide op hun plek zijn: de frequente eigen ogen en de periodieke deskundige blik." },
      { t: "table", head: ["", "Interne controle", "Externe inspectie"], rows: [
        ["Wie", "Aangewezen medewerker (PRSES)", "Onafhankelijke deskundige"],
        ["Frequentie", "Wekelijks tot maandelijks", "In de regel jaarlijks"],
        ["Diepgang", "Zichtbare schade signaleren", "Grondige beoordeling en classificatie"],
        ["Resultaat", "Melding en directe actie", "Rapport met prioriteiten en vervolgstappen"],
      ] },
      { t: "h2", text: "Waarom allebei?" },
      { t: "p", text: "De interne controle vangt schade op die tussen twee jaarlijkse inspecties ontstaat, bijvoorbeeld een verse aanrijding. De externe inspectie brengt diepgang en onafhankelijkheid: een deskundige ziet dingen die in de dagelijkse drukte over het hoofd worden gezien en beoordeelt de ernst objectief." },
      { t: "note", text: "Zie de interne controle als het rookmelder-principe: dagelijkse waakzaamheid. De externe inspectie is de periodieke keuring van het hele systeem." },
    ],
    faq: [
      { q: "Kan de interne controle de externe inspectie vervangen?", a: "Nee. De interne controle is waardevol, maar mist de diepgang en onafhankelijkheid van de deskundige inspectie." },
      { q: "Hoe leg ik interne controles vast?", a: "Houd een eenvoudig logboek bij met datum, wie de controle deed en welke meldingen eruit kwamen. Dat versterkt uw dossier en helpt de externe inspecteur." },
    ],
    related: ["wat-is-een-prses", "hoe-vaak-stellingen-keuren", "checklist-veilige-magazijnstelling"],
  },
  {
    slug: "checklist-veilige-magazijnstelling",
    category: "Kosten en praktijk",
    title: "Checklist voor een veilige magazijnstelling",
    h1: "Checklist voor een veilige magazijnstelling",
    metaTitle: "Checklist veilige magazijnstelling: 10 punten om te controleren",
    metaDescription:
      "Een praktische checklist voor een veilige magazijnstelling. Loop de tien punten na voor uw interne controle, van staanders tot belastingbord.",
    excerpt:
      "Tien concrete punten voor uw interne controle, van staanders en borging tot belastingborden.",
    answer:
      "Een veilige magazijnstelling herkent u aan onbeschadigde staanders, correct geplaatste en geborgde liggers, aanwezige schoren en verankering, een leesbaar belastingbord dat past bij de opstelling, aanrijdbeveiliging op kwetsbare plekken en een last die stabiel en binnen de toegestane grenzen is opgeslagen. Onderstaande checklist helpt u dit systematisch na te lopen.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Deze checklist is bedoeld voor uw interne visuele controle. Ze vervangt de deskundige inspectie niet, maar helpt u om zichtbare problemen snel op te merken tussen twee inspecties door." },
      { t: "h2", text: "De checklist" },
      { t: "ol", items: [
        "Staanders: geen deuken, knikken of scheuren, zeker niet in de onderste meter.",
        "Liggers: recht, onbeschadigd en correct in de haken geplaatst.",
        "Borgpennen: overal aanwezig, zodat liggers niet kunnen loslaten.",
        "Schoren: alle diagonale en horizontale verbanden aanwezig en heel.",
        "Voetplaten: vlak op de vloer, niet vervormd of losgetrild.",
        "Verankering: vloerankers aanwezig en vast.",
        "Belastingbord: aanwezig, leesbaar en passend bij de huidige opstelling.",
        "Aanrijdbeveiliging: op kwetsbare hoeken en kopse kanten aanwezig en heel.",
        "Belasting: pallets passen, staan stabiel en overschrijden de toegestane last niet.",
        "Algemeen beeld: geen scheefstand, geen losse onderdelen op de vloer.",
      ] },
      { t: "note", text: "Ziet u bij een van deze punten iets afwijkends dat de veiligheid kan raken? Meld het bij de verantwoordelijke en laat het bij twijfel beoordelen." },
      { t: "h2", text: "Van checklist naar dossier" },
      { t: "p", text: "Leg de uitkomst van elke controle kort vast: datum, wie de controle deed en de meldingen. Zo bouwt u een dossier op dat uw zorgplicht onderbouwt en dat de externe inspecteur helpt." },
    ],
    faq: [
      { q: "Hoe vaak moet ik deze checklist doorlopen?", a: "Voor een interne controle is wekelijks tot maandelijks gebruikelijk, afhankelijk van hoe intensief de stellingen worden gebruikt." },
      { q: "Wat doe ik als ik iets ergs zie?", a: "Bij duidelijke vervorming of schade aan een dragend onderdeel: zet de sectie af, ontlaad indien nodig en laat het beoordelen. Ga uit van onveilig tot het tegendeel vaststaat." },
    ],
    related: ["wat-wordt-gecontroleerd", "interne-controle-vs-externe-inspectie", "magazijn-voorbereiden-op-inspectie"],
  },
  {
    slug: "magazijn-voorbereiden-op-inspectie",
    category: "Kosten en praktijk",
    title: "Hoe bereidt u het magazijn voor op een inspectie?",
    h1: "Hoe bereidt u het magazijn voor op een inspectie?",
    metaTitle: "Magazijn voorbereiden op stellinginspectie: praktische tips",
    metaDescription:
      "Met een goede voorbereiding verloopt de stellinginspectie sneller en soepeler. Lees welke stappen helpen, van bereikbaarheid tot documentatie.",
    excerpt:
      "Praktische stappen waarmee de inspectie sneller verloopt en de operatie zo min mogelijk hindert.",
    answer:
      "Bereid een stellinginspectie voor door de stellingen goed bereikbaar te maken, eerdere rapporten en tekeningen klaar te leggen, bekende schade alvast te melden en een contactpersoon aan te wijzen die de inspecteur wegwijs maakt. Een goede voorbereiding maakt de inspectie sneller en beperkt de verstoring van uw operatie.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Een inspectie kan in de meeste gevallen gewoon tijdens werktijd plaatsvinden. Met een beetje voorbereiding verloopt het bezoek soepel en houdt het uw operatie zo min mogelijk op." },
      { t: "h2", text: "Voor de inspectie" },
      { t: "ul", items: [
        "Zorg dat de gangen en stellingen goed bereikbaar zijn, ruim losse obstakels op.",
        "Leg eerdere inspectierapporten, plattegronden en belastinggegevens klaar.",
        "Meld vooraf bekende schade of aanrijdingen, dan kan de inspecteur daar extra op letten.",
        "Wijs een contactpersoon aan die de weg kent en beslissingen mag nemen.",
      ] },
      { t: "h2", text: "Tijdens de inspectie" },
      { t: "p", text: "De inspecteur loopt langs de stellingen en beoordeelt onderdeel voor onderdeel. Meestal kan het werk doorgaan. Alleen wanneer er acuut gevaar wordt gevonden, vragen we een sectie tijdelijk vrij te maken of te ontladen. Die melding krijgt u dan direct." },
      { t: "h2", text: "Na de inspectie" },
      { t: "p", text: "U ontvangt in principe binnen 24 uur het rapport. Loop de bevindingen door met uw contactpersoon of PRSES en plan de opvolging: rood direct, oranje binnen de aangegeven termijn en groen bij de volgende inspectie." },
      { t: "note", text: "Een goede voorbereiding bespaart inspectietijd en dus kosten, en zorgt dat niets over het hoofd wordt gezien." },
    ],
    faq: [
      { q: "Moet ik stellingen leeghalen voor de inspectie?", a: "Nee. We beoordelen gevulde stellingen. Alleen bij acuut gevaar vragen we een specifieke sectie te ontladen." },
      { q: "Hoe lang duurt een inspectie?", a: "Van ongeveer twee uur voor een klein magazijn tot een dag voor een zeer groot of complex magazijn." },
    ],
    related: ["kosten-stellinginspectie", "checklist-veilige-magazijnstelling", "informatie-in-inspectierapport"],
  },
  {
    slug: "informatie-in-inspectierapport",
    category: "Inspectie en keuring",
    title: "Welke informatie hoort in een inspectierapport?",
    h1: "Welke informatie hoort in een inspectierapport?",
    metaTitle: "Wat hoort in een stellinginspectierapport? De 7 elementen",
    metaDescription:
      "Een bruikbaar inspectierapport bevat per bevinding een classificatie, locatie, foto, oorzaak, actie en termijn. Lees welke informatie niet mag ontbreken.",
    excerpt:
      "De zeven elementen die een inspectierapport tot een bruikbaar werkdocument maken.",
    answer:
      "Een goed inspectierapport bevat per bevinding: een duidelijke omschrijving, de exacte locatie, een foto, de schadeclassificatie (groen, oranje of rood), de oorzaak, de benodigde actie en een termijn. Daarnaast horen de datum, de scope van de inspectie en een samenvatting van de urgente punten erin. Alleen een lijst met gebreken is niet genoeg.",
    updated: "2026-07-15",
    blocks: [
      { t: "p", text: "Een rapport is pas nuttig als iemand ermee aan de slag kan zonder de inspecteur erbij te hoeven halen. Dat vraagt om meer dan een opsomming van wat er mis is." },
      { t: "h2", text: "De zeven elementen per bevinding" },
      { t: "ol", items: [
        "Omschrijving: wat is er precies aan de hand.",
        "Locatie: gang, stelling, veld en niveau, zodat de plek meteen te vinden is.",
        "Foto: een beeld dat de bevinding ondersteunt.",
        "Classificatie: groen, oranje of rood.",
        "Oorzaak: bijvoorbeeld aanrijding, overbelasting of ontbrekend onderdeel.",
        "Actie: de concrete vervolgstap, zoals vervangen, borgen of monitoren.",
        "Termijn: direct, binnen enkele weken of bij de volgende inspectie.",
      ] },
      { t: "h2", text: "En het rapport als geheel" },
      { t: "ul", items: [
        "De datum van de inspectie en de naam van de inspecteur.",
        "De scope: welke stellingen en welk deel van het magazijn zijn beoordeeld.",
        "Een samenvatting die de urgente punten bovenaan zet.",
        "Ruimte om de opvolging bij te houden, zodat u kunt aantonen wat er is gebeurd.",
      ] },
      { t: "note", text: "Met deze opzet is het rapport een werkdocument: uw team weet direct waar, wat en wanneer, en u kunt de opvolging aantonen." },
    ],
    faq: [
      { q: "Krijg ik een voorbeeld van het rapport?", a: "Ja. Op de pagina over een duidelijk inspectierapport ziet u een geanonimiseerde voorbeeldweergave van hoe de bevindingen worden gepresenteerd." },
      { q: "Hoe lang moet ik het rapport bewaren?", a: "Bewaar rapporten zolang de stellingen in gebruik zijn en voor uw dossieropbouw. Ze onderbouwen uw zorgplicht en helpen bij het vergelijken over de tijd." },
    ],
    related: ["duidelijk-inspectierapport", "schadeclassificatie", "magazijnstelling-afgekeurd", "kosten-stellinginspectie"],
  },
  {
    slug: "magazijnstelling-afgekeurd",
    category: "Schade en preventie",
    title: "Wat gebeurt er als een magazijnstelling wordt afgekeurd?",
    h1: "Wat gebeurt er als een magazijnstelling wordt afgekeurd?",
    metaTitle: "Magazijnstelling afgekeurd: wat betekent het en wat nu?",
    metaDescription:
      "Een stelling of sectie afgekeurd bij de inspectie? Lees wat oranje en rood betekenen, welke actie direct nodig is, wie mag herstellen en hoe herkeuring werkt.",
    excerpt:
      "Wat een afkeuring betekent, welke stappen direct nodig zijn en hoe u de sectie weer veilig in gebruik neemt.",
    answer:
      "Afgekeurd betekent dat een bevinding de veiligheid raakt. Bij een rode classificatie moet de betreffende sectie direct worden ontlast of afgezet tot het herstel is uitgevoerd. Bij oranje mag de sectie meestal in gebruik blijven, maar moet het herstel binnen een afgesproken termijn gebeuren. Laat herstel uitvoeren met originele onderdelen en laat de sectie daarna opnieuw beoordelen voordat u die weer volledig belast.",
    updated: "2026-09-15",
    image: {
      src: "/images/praktijk/aanrijdschade-staander-losgereden.jpg",
      alt: "Stellingstaander die na een aanrijding is losgescheurd van de voetplaat",
      caption: "Voorbeeld van een rode bevinding: een staander die is losgescheurd van de voetplaat. Zo'n sectie wordt direct ontlast.",
    },
    blocks: [
      { t: "p", text: "Een afkeuring klinkt ingrijpend, en soms is dat ook zo. Maar afgekeurd betekent niet automatisch dat uw hele magazijn stil moet. Het betekent dat een of meer bevindingen de veiligheid raken en dat er iets moet gebeuren. Wat precies, hangt af van de classificatie en de plaats van de schade." },
      { t: "h2", text: "Wat betekent afgekeurd precies?" },
      { t: "p", text: "Bij een inspectie volgens NEN-EN 15635 krijgt elke bevinding een kleurcode. Afgekeurd gaat over de categorieen oranje en rood. Groen betekent aanvaardbaar. Het onderscheid tussen oranje en rood bepaalt hoe snel u moet handelen." },
      { t: "table", head: ["Classificatie", "Betekenis", "Wat u moet doen"], rows: [
        ["Oranje", "Raakt de veiligheid, geen direct gevaar", "Herstel binnen een afgesproken termijn, gebruik mag doorgaan"],
        ["Rood", "Raakt de veiligheid direct", "Sectie direct ontlasten of afzetten en herstellen voor hergebruik"],
      ] },
      { t: "note", text: "Een afkeuring geldt vrijwel altijd voor een specifieke sectie of onderdeel, niet voor het hele magazijn. Zo blijft de rest gewoon in bedrijf." },
      { t: "h2", text: "Direct na een rode afkeuring" },
      { t: "ol", items: [
        "Ontlast de afgekeurde sectie zo snel als veilig kan en houd mensen uit de directe omgeving.",
        "Zet de sectie duidelijk af of markeer die, zodat er niet verder wordt gestapeld of gereden.",
        "Meld de afkeuring intern bij de verantwoordelijke voor de opslagveiligheid (de PRSES).",
        "Plan het herstel of de vervanging op basis van de bevinding in het rapport.",
        "Buig of las beschadigd staal niet zelf recht; dat herstelt de sterkte niet.",
      ] },
      { t: "h2", text: "Wie mag de stelling herstellen?" },
      { t: "p", text: "Herstel is meer dan een onderdeel vervangen. Beschadigde dragende onderdelen zoals staanders en liggers horen te worden vervangen door originele onderdelen van de fabrikant, met het juiste type en de juiste sterkte. Een staander rechtbuigen of dichtlassen is geen betrouwbaar herstel: het staal is dan al vervormd en kan onder belasting alsnog bezwijken. Laat in twijfelgevallen de fabrikant of leverancier het juiste onderdeel bepalen." },
      { t: "h2", text: "Herkeuring: weer veilig in gebruik" },
      { t: "p", text: "Na herstel neemt u een afgekeurde sectie pas weer volledig in gebruik als is vastgesteld dat de schade daadwerkelijk is verholpen. In de praktijk laat u de herstelde sectie opnieuw beoordelen en legt u vast wat er is vervangen of gerepareerd. Zo bouwt u een dossier op waarmee u aantoont dat de stelling weer veilig is." },
      { t: "note", text: "Bewaar de rapportage van de afkeuring en het herstel bij elkaar. Dat onderbouwt uw zorgplicht en helpt bij een eventuele controle of schademelding." },
      { t: "h2", text: "Is een afkeuring wettelijk bindend?" },
      { t: "p", text: "De classificatie zelf komt uit de norm NEN-EN 15635 en is geen wet. De onderliggende verplichting is dat wel: op grond van de Arbowet heeft de werkgever een zorgplicht voor een veilige werkomgeving, en het Arbobesluit vraagt om periodieke keuring en goed onderhoud van arbeidsmiddelen. Een afkeuring negeren betekent dus dat u een bekend veiligheidsrisico laat bestaan. Dat raakt zowel de veiligheid van uw medewerkers als uw verantwoordelijkheid als werkgever." },
      { t: "h2", text: "Hoe RackCheck u verder helpt" },
      { t: "p", text: "RackCheck beoordeelt uw stellingen onafhankelijk en los van herstel of verkoop. In het rapport staat per bevinding wat er aan de hand is, waar, met welke classificatie en welke vervolgstap eraan hangt. Acuut gevaar melden we direct op locatie. Zo weet u meteen welke secties door kunnen en welke aandacht nodig hebben." },
    ],
    faq: [
      { q: "Moet mijn hele magazijn dicht na een afkeuring?", a: "Nee. Een afkeuring geldt voor de betreffende sectie of het betreffende onderdeel. Bij rood ontlast u die sectie; de overige stellingen kunnen in gebruik blijven zolang die niet zijn afgekeurd." },
      { q: "Mag ik een afgekeurde staander laten rechtbuigen?", a: "Dat wordt afgeraden. Rechtbuigen of lassen herstelt de oorspronkelijke sterkte niet en kan het staal verder verzwakken. Vervanging door een origineel onderdeel is de veilige route." },
      { q: "Hoe snel moet een rode bevinding hersteld zijn?", a: "Een rode sectie moet direct worden ontlast of afgezet en mag pas weer belast worden na herstel. De exacte hersteltermijn hangt af van de bevinding en de beschikbaarheid van onderdelen." },
    ],
    related: ["schadeclassificatie", "na-heftruckaanrijding", "staander-rechtbuigen-lassen"],
  },
  {
    slug: "verbogen-ligger",
    category: "Schade en preventie",
    title: "Verbogen ligger in een magazijnstelling: wanneer is deze onveilig?",
    h1: "Verbogen ligger in een magazijnstelling: wanneer is deze onveilig?",
    metaTitle: "Verbogen ligger magazijnstelling: wanneer onveilig?",
    metaDescription:
      "Een ligger die doorbuigt onder belasting is niet altijd een probleem, blijvende vervorming wel. Lees hoe u het verschil herkent en wat u dan moet doen.",
    excerpt:
      "Lichte doorbuiging onder belasting hoort erbij, een blijvende knik niet. Zo herkent u het verschil en weet u wanneer ontlasten nodig is.",
    answer:
      "Een lichte, elastische doorbuiging van een ligger onder belasting is normaal en hoort bij het ontwerp van de stelling: de ligger veert enigszins door en komt weer recht zodra de last eraf gaat. Een ligger is onveilig zodra de vervorming blijvend is, dus zichtbaar blijft nadat de sectie is ontlast, of wanneer er een duidelijke knik, deuk of beschadigde inhaakverbinding zichtbaar is. Ontlast de sectie in dat geval direct en laat de ligger beoordelen door een deskundige. De precieze toegestane doorbuiging hangt af van de liggerlengte en staat in de fabrikantopgave en NEN-EN 15635; dat is aan de inspecteur om te beoordelen, niet iets om zelf in te schatten.",
    updated: "2026-09-16",
    image: {
      src: "/images/praktijk/ligger-geknikt-overbelast.jpg",
      alt: "Stalen steunbalk die zichtbaar is doorgebogen en geknikt onder een zwaar beladen bordesvloer",
      caption: "Voorbeeld van blijvende vervorming: deze balk is duidelijk geknikt onder de last van de platen erboven en veert niet meer terug.",
    },
    blocks: [
      { t: "p", text: "Een ligger die er niet helemaal recht meer uitziet, roept al snel de vraag op of de sectie nog wel veilig belast mag worden. Het antwoord hangt af van het soort vervorming: een lichte, tijdelijke doorbuiging onder belasting is iets anders dan een blijvende knik." },
      { t: "h2", text: "Doorbuiging onder belasting is normaal" },
      { t: "p", text: "Liggers zijn ontworpen om onder een gevulde pallet enigszins door te veren. Die elastische doorbuiging zit in de constructieberekening verwerkt en is op zich geen teken van gevaar. Het kenmerk van elastische doorbuiging is dat de ligger weer recht komt zodra de last eraf gaat, bijvoorbeeld wanneer de pallet wordt weggehaald." },
      { t: "note", text: "Kort gezegd: veert de ligger terug zodra de sectie leeg is, dan gaat het om normale, elastische doorbuiging." },
      { t: "h2", text: "Wanneer wordt het een probleem?" },
      { t: "p", text: "Een ligger vraagt om beoordeling zodra de vervorming niet meer verdwijnt of duidelijk verder gaat dan een lichte welving. Let op de volgende signalen:" },
      { t: "ul", items: [
        "De ligger blijft zichtbaar doorgebogen of scheef, ook nadat de sectie is ontlast.",
        "Er is een duidelijke knik, deuk of plooi in het profiel te zien, meestal bij het midden of bij de inhaakverbinding.",
        "De inhaakverbinding met de staander is beschadigd, uitgerekt of zit niet meer goed vast.",
        "De ligger ligt zichtbaar scheef ten opzichte van de andere liggers in hetzelfde niveau.",
      ] },
      { t: "h2", text: "Oorzaak: belasting of aanrijding?" },
      { t: "p", text: "Het onderscheid tussen beide oorzaken helpt om de juiste vervolgstap te bepalen." },
      { t: "ul", items: [
        "Overbelasting: ontstaat geleidelijk, bijvoorbeeld door pallets die zwaarder zijn dan het belastingbord toestaat of door een ongelijkmatig gevulde pallet. De doorbuiging is dan vaak over de hele lengte van de ligger zichtbaar en treedt soms op meerdere liggers in dezelfde sectie tegelijk op.",
        "Aanrijdschade: ontstaat plotseling door een stoot van een heftruck of lading. De vervorming zit dan vaak lokaal, bijvoorbeeld een deuk of knik dichtbij een van de uiteinden, en is meestal aan één ligger te zien.",
      ] },
      { t: "p", text: "Bij twijfel over de oorzaak is dat voor de veiligheid van de sectie niet doorslaggevend: in beide gevallen geldt dat blijvende vervorming om beoordeling vraagt." },
      { t: "h2", text: "Wat moet u doen bij een verbogen ligger?" },
      { t: "ol", items: [
        "Meld de bevinding bij de verantwoordelijke voor de opslagveiligheid (de PRSES).",
        "Ontlast de sectie of het betreffende liggerniveau bij twijfel over de veiligheid, en zet die af zodat er niet verder wordt gestapeld.",
        "Buig de ligger niet zelf terug. Net als bij een staander is het staal op de plek van de vervorming al aangetast; terugbuigen herstelt de sterkte niet.",
        "Laat de ligger beoordelen door een deskundige, die de doorbuiging vergelijkt met wat voor die liggerlengte is toegestaan.",
        "Vervang de ligger bij blijvende vervorming door een origineel of gelijkwaardig onderdeel van het juiste type en de juiste lengte.",
        "Laat de sectie na vervanging herbeoordelen voordat u die weer volledig belast.",
      ] },
      { t: "note", text: "Dezelfde regel als bij een staander geldt voor een ligger: rechtbuigen of lassen herstelt de oorspronkelijke sterkte niet en is geen veilige reparatie." },
      { t: "h2", text: "Wie bepaalt of de doorbuiging toegestaan is?" },
      { t: "p", text: "De toegestane doorbuiging verschilt per liggerlengte, profiel en merk, en staat in de fabrikantopgave en in NEN-EN 15635. Dat maakt het geen kwestie van op het oog inschatten: een deskundige inspecteur meet de doorbuiging en toetst die aan de gegevens die bij die specifieke ligger horen. Zonder die vergelijking is niet met zekerheid te zeggen of een doorbuiging nog binnen de marge valt." },
      { t: "h2", text: "Hoe RackCheck dit beoordeelt" },
      { t: "p", text: "Bij een inspectie beoordelen we liggers op doorbuiging, vervorming en de staat van de inhaakverbinding, en vergelijken we opvallende bevindingen met wat voor die ligger toelaatbaar is. Een verbogen ligger die de veiligheid raakt, classificeren we als oranje of rood, met een concrete vervolgstap in het rapport." },
    ],
    faq: [
      { q: "Moet ik een lichte doorbuiging altijd melden?", a: "Een lichte, elastische doorbuiging die verdwijnt zodra de sectie leeg is, hoeft u niet te melden. Blijft de ligger zichtbaar vervormd, of ziet u een knik of beschadigde inhaakverbinding, meld dat dan wel bij de verantwoordelijke." },
      { q: "Mag ik zelf inschatten of een ligger nog veilig is?", a: "Bij een lichte, tijdelijke doorbuiging kunt u dat als medewerker signaleren. Of de vervorming binnen de toegestane marge valt, is aan een deskundige om te beoordelen op basis van de liggerlengte en de fabrikantopgave." },
      { q: "Kan één verbogen ligger de hele sectie onveilig maken?", a: "Dat hangt af van de plek en de ernst van de vervorming. Een deskundige beoordeelt of alleen dat liggerniveau ontlast moet worden of dat de hele sectie aandacht nodig heeft." },
    ],
    related: ["schadeclassificatie", "staander-rechtbuigen-lassen", "na-heftruckaanrijding", "belastingbord", "scheve-magazijnstelling"],
  },
  {
    slug: "beschadigde-schoor",
    category: "Schade en preventie",
    title: "Beschadigde schoor in een palletstelling: wat moet u doen?",
    h1: "Beschadigde schoor in een palletstelling: wat moet u doen?",
    metaTitle: "Beschadigde schoor in een palletstelling: wat nu?",
    metaDescription:
      "Een beschadigde schoor tast de stabiliteit van een stellingframe aan. Lees hoe u de schade herkent, waarom snel handelen nodig is en wat de veilige vervolgstap is.",
    excerpt:
      "Waarom een beschadigde schoor de stabiliteit van het hele staanderframe raakt en wat u dan het beste doet.",
    answer:
      "Een beschadigde schoor mag u niet negeren. Schoren verbinden de staanders van een stellingframe met elkaar en houden dat frame stabiel, ook zijwaarts en in de diepte. Ziet u een knik, scheur, losse of ontbrekende bevestiging, meld dit dan bij de verantwoordelijke en laat de sectie beoordelen door een deskundige inspecteur. Die bepaalt of ontlasten nodig is en of de schoor vervangen moet worden. Buig of las een beschadigde schoor nooit zelf recht.",
    updated: "2026-09-18",
    image: {
      src: "/images/praktijk/schoor-detail-palletstelling.jpg",
      alt: "Detail van een schoor tussen twee staanders van een palletstelling",
    },
    blocks: [
      { t: "p", text: "Schoren vallen minder snel op dan een verbogen ligger of een geraakte staander. Ze zitten vaak aan de achterzijde van het frame, tussen de gangpaden in, en zijn tijdens het dagelijks werk lastig te zien. Toch is een beschadigde schoor geen kosmetisch probleem: het raakt de stabiliteit van de hele stellingsectie." },
      { t: "h2", text: "Wat doet een schoor in een stellingframe?" },
      { t: "p", text: "Een stellingframe bestaat uit twee staanders die met horizontale en diagonale schoren aan elkaar zijn bevestigd. Samen vormen staanders en schoren een stijf geheel: de schoren voorkomen dat de staanders naar elkaar toe of van elkaar af bewegen en dat het frame scheef trekt onder belasting of bij een lichte stoot. Zonder intacte schoren verliest het frame een groot deel van zijn zijwaartse stabiliteit, ook als de staanders zelf onbeschadigd lijken." },
      { t: "h2", text: "Hoe herkent u schade aan een schoor?" },
      { t: "ul", items: [
        "Een zichtbare knik of buiging in de schoor.",
        "Een scheur of breuk in het materiaal, vaak bij een lasnaad of verbindingspunt.",
        "Een losse, verbogen of ontbrekende boutverbinding met de staander.",
        "Een volledig ontbrekende schoor, bijvoorbeeld na een eerdere aanrijding die niet is hersteld.",
        "Vergevorderde roest ter plaatse van een verbinding, waardoor de bevestiging kan verzwakken.",
      ] },
      { t: "h2", text: "Waarom is dit risicovol?" },
      { t: "p", text: "Een beschadigde schoor beïnvloedt niet alleen de plek waar de schade zit, maar de stijfheid van het hele frame. Bij een aanrijding of overbelasting van een naastgelegen sectie kan een frame met een verzwakte schoor minder weerstand bieden, met een groter risico op scheefstand of het verder bezwijken van de constructie. Omdat schoren vaak lastig te zien zijn tijdens normaal gebruik, wordt deze schade regelmatig pas opgemerkt bij een periodieke inspectie." },
      { t: "note", text: "Ontbreekt een schoor of ziet u duidelijke vervorming? Ga dan uit van een verminderde stabiliteit van het hele frame, ook als de staanders zelf recht lijken." },
      { t: "h2", text: "Wat moet u doen bij een beschadigde schoor?" },
      { t: "ol", items: [
        "Meld de schade bij de verantwoordelijke binnen uw organisatie (de PRSES).",
        "Beoordeel of de sectie ontladen moet worden, zeker bij een knik, scheur of ontbrekende schoor.",
        "Buig of las de schoor niet zelf recht en herstel de verbinding niet zelf.",
        "Laat de schade beoordelen en classificeren door een deskundige inspecteur.",
        "Vervang de schoor bij structurele schade door een passend origineel of gelijkwaardig onderdeel.",
      ] },
      { t: "h2", text: "Mag u een schoor zelf vervangen of repareren?" },
      { t: "p", text: "Net als bij een beschadigde staander geldt: rechtbuigen of lassen van een schoor herstelt de oorspronkelijke sterkte niet en kan het materiaal juist verder verzwakken. Bij structurele schade is vervanging van de schoor de veilige route, uitgevoerd met een onderdeel dat past bij het merk en type van de stelling." },
    ],
    faq: [
      { q: "Kan ik zelf zien of een schoor nog voldoende stevig is?", a: "U kunt zichtbare schade zoals een knik, scheur of losse bevestiging signaleren en melden. Of de resterende sterkte nog voldoende is, is aan een deskundige inspecteur om te beoordelen." },
      { q: "Is één beschadigde schoor al reden om de sectie af te zetten?", a: "Dat hangt af van de aard en plaats van de schade. Bij een knik, breuk of ontbrekende schoor is voorzichtigheid verstandig; de inspecteur bepaalt op basis van de classificatie of ontlasten nodig is." },
    ],
    related: ["staander-rechtbuigen-lassen", "na-heftruckaanrijding", "schadeclassificatie", "scheve-magazijnstelling", "losse-vloerankers-magazijnstelling"],
  },
  {
    slug: "scheve-magazijnstelling",
    category: "Schade en preventie",
    title: "Scheve magazijnstelling: wanneer is scheefstand te groot?",
    h1: "Scheve magazijnstelling: wanneer is scheefstand te groot?",
    metaTitle: "Scheve magazijnstelling: wanneer is scheefstand te groot?",
    metaDescription:
      "Staat een magazijnstelling scheef? Lees waar scheefstand vandaan komt, hoe u het herkent, waarom u het niet op het oog beoordeelt en wat u nu moet doen.",
    excerpt:
      "Scheefstand is een signaal dat de stelling is geraakt, verzakt of overbelast. Zo herkent u het en handelt u verantwoord.",
    answer:
      "Of scheefstand te groot is, bepaalt u niet op het oog. De toelaatbare afwijking hangt af van de stelling, de hoogte en de belasting, en staat in de fabrikantgegevens en de normen (NEN-EN 15635, NPR 5055). Ziet u een stelling die zichtbaar scheef staat of die verder scheef trekt, ontlast de sectie dan, zet het gangpad af en laat een deskundige inspecteur de afwijking meten en beoordelen.",
    updated: "2026-09-19",
    image: {
      src: "/images/praktijk/aangereden-staander-vervormd.jpg",
      alt: "Vervormd onderstuk van een stellingstaander naast een gele aanrijdbeveiliging",
    },
    blocks: [
      { t: "p", text: "Een stelling die niet meer recht lijkt te staan, roept meteen de vraag op of het nog veilig is om de pallets erin te laten staan. Het eerlijke antwoord is dat u dit niet zelf op het oog kunt vaststellen. Wel kunt u scheefstand vroeg signaleren en weten wat de veilige eerste stappen zijn." },
      { t: "h2", text: "Waar komt scheefstand vandaan?" },
      { t: "ul", items: [
        "Een aanrijding met een heftruck of pallet, waarbij een staander of het frame is verschoven of vervormd.",
        "Een beschadigde of ontbrekende schoor, waardoor het frame zijn zijwaartse stijfheid verliest.",
        "Overbelasting of ongelijkmatige belasting van liggers en frames.",
        "Een losse of beschadigde verankering of voetplaat.",
        "Een ongelijke of verzakte vloer onder de stelling.",
        "Een onjuiste of onvolledige montage, of een latere aanpassing van de opstelling.",
      ] },
      { t: "p", text: "Scheefstand kan dus een gevolg zijn van schade, maar ook een teken dat er een andere oorzaak onder ligt. Daarom is alleen het scheefstaan corrigeren niet genoeg: de oorzaak moet worden gevonden." },
      { t: "h2", text: "Hoe herkent u scheefstand?" },
      { t: "ul", items: [
        "Een staander die zichtbaar niet loodrecht staat, in de gangrichting of in de diepterichting.",
        "Liggerniveaus die niet meer op één lijn liggen met de naastgelegen secties.",
        "Een frame dat naar een kant helt, of een rij die een zichtbare knik in het verloop vertoont.",
        "Pallets die anders op de liggers rusten dan voorheen, of die tegen de staander aan schuren.",
        "Een afwijking die in de loop van weken toeneemt.",
      ] },
      { t: "note", text: "Zichtbaar scheef is nooit een schaalkwestie die u zelf wegmeet. Ook een kleine afwijking kan bij een hoge, volgeladen stelling relevant zijn, en een grote afwijking kan bij een lege stelling nog beperkt lijken." },
      { t: "h2", text: "Wanneer is scheefstand te groot?" },
      { t: "p", text: "Er bestaat geen bruikbare vuistregel die voor elke stelling geldt. In de Europese norm NEN-EN 15635 en de Nederlandse praktijkrichtlijn NPR 5055 staat hoe stellingen worden gebruikt en geïnspecteerd, en de fabrikant geeft voor zijn systeem aan welke afwijkingen aanvaardbaar zijn. Die grenzen verschillen per type stelling, per hoogte en per belastingsituatie. Omdat exacte normwaarden bij de norm zelf horen te worden nagelezen, publiceren wij hier bewust geen getallen: een verkeerd overgenomen waarde geeft schijnzekerheid." },
      { t: "p", text: "Wat u wel kunt onthouden: de beoordeling gebeurt aan de hand van een meting, niet van een indruk. Een deskundige inspecteur meet de afwijking van de staanders ten opzichte van de loodlijn, vergelijkt die met de toelaatbare waarden voor dat systeem en kijkt tegelijk naar de oorzaak, zoals schade aan staander, schoor, voetplaat en verankering." },
      { t: "h2", text: "Wat doet u bij een scheve stelling?" },
      { t: "ol", items: [
        "Ontlast de betreffende sectie en de aangrenzende secties zo veel mogelijk, zeker als de afwijking groot is of toeneemt.",
        "Zet het gangpad af en houd heftrucks en personeel op afstand.",
        "Meld de situatie bij de verantwoordelijke binnen uw organisatie (de PRSES).",
        "Leg de situatie vast met foto's, inclusief de plek in de stelling en het tijdstip.",
        "Laat de afwijking meten en beoordelen door een deskundige inspecteur, en laat de oorzaak vaststellen.",
        "Herstel schade aan onderdelen door vervanging, niet door zelf recht te buigen of te lassen.",
        "Laat de sectie na herstel opnieuw beoordelen voordat u hem weer belast.",
      ] },
      { t: "h2", text: "Waarom niet zelf rechtzetten?" },
      { t: "p", text: "Een stelling terugduwen of terugtrekken herstelt de sterkte van vervormde onderdelen niet en kan verborgen schade juist maskeren. Bij structurele schade is vervanging van het onderdeel de veilige route, zoals ook beschreven bij het rechtbuigen of lassen van een staander." },
      { t: "h2", text: "Wat is uw verantwoordelijkheid als werkgever?" },
      { t: "p", text: "Als werkgever moet u ervoor zorgen dat arbeidsmiddelen, en dus ook uw magazijnstellingen, veilig zijn en blijven. Schade en afwijkingen die u signaleert, moet u serieus nemen, laten beoordelen en herstellen. Meer over de periodieke inspectie leest u in het artikel over hoe vaak stellingen moeten worden gekeurd." },
    ],
    faq: [
      { q: "Mag ik een lichte scheefstand negeren?", a: "Niet zonder beoordeling. Of een afwijking aanvaardbaar is, hangt af van het systeem, de hoogte en de belasting. Laat een deskundige inspecteur meten voordat u de stelling ongewijzigd blijft belasten." },
      { q: "Kan ik zelf meten hoeveel de stelling scheef staat?", a: "U kunt met een waterpas of schietlood een indicatie krijgen en die vastleggen. De beoordeling of de waarde toelaatbaar is, hoort bij een deskundige inspecteur die de toelaatbare waarden voor uw systeem kent." },
      { q: "Wat als de scheefstand steeds groter wordt?", a: "Dan is er mogelijk sprake van voortgaande verzakking, losraken of overbelasting. Ontlast de sectie direct en laat de stelling zo snel mogelijk beoordelen." },
    ],
    related: ["staander-rechtbuigen-lassen", "beschadigde-schoor", "schadeclassificatie", "losse-vloerankers-magazijnstelling"],
  },
  {
    slug: "losse-vloerankers-magazijnstelling",
    category: "Schade en preventie",
    title: "Losse of ontbrekende vloerankers bij magazijnstellingen: hoe gevaarlijk is dat?",
    h1: "Losse of ontbrekende vloerankers: hoe gevaarlijk is dat?",
    metaTitle: "Losse of ontbrekende vloerankers in een stelling: risico",
    metaDescription:
      "Los of ontbrekend vloeranker bij een magazijnstelling? Lees waarom verankering telt, hoe u het herkent en wat u nu doet: ontlasten, melden en laten beoordelen.",
    excerpt:
      "Een staander zonder deugdelijk vloeranker mist een deel van zijn stabiliteit. Zo herkent u het en handelt u verantwoord.",
    answer:
      "Een los of ontbrekend vloeranker is een reëel veiligheidsrisico, want de verankering hoort de staander conform de fabrikantspecificaties aan de vloer te verbinden. Hoe groot het risico is, hangt af van het type stelling, de belasting en de vloer, en is niet op het oog vast te stellen. Zet de sectie bij twijfel af, ontlast deze en laat een deskundige inspecteur de verankering en de oorzaak beoordelen.",
    updated: "2026-09-20",
    image: {
      src: "/images/praktijk/aanrijdschade-staander-losgereden.jpg",
      alt: "Voetplaat met bout van een stellingstaander waarvan de staander door een aanrijding is losgescheurd",
    },
    blocks: [
      { t: "p", text: "Vloerankers zijn kleine onderdelen met een grote functie: ze verbinden de voetplaat van de staander met de vloer. Een los of ontbrekend anker valt zelden op, maar het kan de stabiliteit van de hele sectie beïnvloeden. Deze pagina legt uit waar u op let en wat u doet als u iets constateert." },
      { t: "h2", text: "Waarom is verankering belangrijk?" },
      { t: "p", text: "Een staander staat met zijn voetplaat op de vloer. De verankering houdt die voetplaat op zijn plek, zodat de staander niet kan verschuiven of kantelen, bijvoorbeeld bij een stoot van een heftruck of bij ongelijkmatige belasting. Volgens de gangbare praktijk rond NEN-EN 15635 hoort de verankering te worden uitgevoerd volgens de specificaties van de fabrikant of leverancier van de stelling. Welke ankers en welke vloer daarvoor vereist zijn, verschilt per systeem, en die gegevens noemen wij hier bewust niet." },
      { t: "h2", text: "Hoe herkent u een los of ontbrekend anker?" },
      { t: "ul", items: [
        "Een voetplaat waarin een boutgat leeg is of waar een bout of anker ontbreekt.",
        "Een bout of anker die zichtbaar los zit, scheef staat of uit de vloer omhoog komt.",
        "Een voetplaat die zichtbaar is verschoven, gekanteld of niet meer vlak op de vloer rust.",
        "Scheuren of afbrokkelend beton rond het anker.",
        "Een staander die na een aanrijding is verschoven of losgescheurd van de voetplaat.",
        "Een sectie die scheef begint te staan of waarvan de staander zich anders gedraagt dan voorheen.",
      ] },
      { t: "note", text: "Een anker dat er goed uitziet, is niet automatisch goed bevestigd. Of een anker voldoende vastzit, hoort een deskundige te beoordelen aan de hand van de gegevens van het systeem." },
      { t: "h2", text: "Hoe gevaarlijk is het?" },
      { t: "p", text: "Het risico hangt af van meerdere factoren: het type stelling, de hoogte, de belasting, de aanwezigheid van aanrijdgevaar en de staat van de vloer. Eén los anker in een lage, lichtbelaste sectie is een andere situatie dan meerdere ontbrekende ankers in een hoge, volgeladen palletstelling in een druk gangpad. Een vaste risicogrens per anker geven wij niet; die bestaat niet zonder de fabrikantgegevens." },
      { t: "p", text: "Wat u wel kunt zeggen: verankering is een onderdeel dat een inspecteur standaard beoordeelt, en een gebrek hieraan is een reden om de situatie serieus te nemen. Vaak is het bovendien een signaal van een onderliggende oorzaak, zoals een aanrijding, trillingen of een vloer die niet in orde is." },
      { t: "h2", text: "Waar komt het vandaan?" },
      { t: "ul", items: [
        "Aanrijding met een heftruck, waardoor het anker of de voetplaat is losgetrokken of vervormd.",
        "Ankers die bij de montage niet of niet correct zijn geplaatst, zoals bij een nulinspectie aan het licht kan komen.",
        "Verplaatsing of aanpassing van de stelling waarbij ankers niet opnieuw zijn aangebracht.",
        "Een beschadigde of verzwakte vloer rond het anker.",
        "Trillingen en dynamische belasting in de loop der tijd.",
      ] },
      { t: "h2", text: "Wat doet u bij een los of ontbrekend anker?" },
      { t: "ol", items: [
        "Zet de betreffende sectie af en beperk het gebruik, zeker bij een hoge of zwaarbelaste sectie.",
        "Ontlast de sectie zo veel mogelijk als u twijfelt aan de stabiliteit.",
        "Meld de situatie bij de verantwoordelijke binnen uw organisatie (de PRSES).",
        "Leg de situatie vast met foto's van de voetplaat, het anker en de directe omgeving.",
        "Laat de verankering en de oorzaak beoordelen door een deskundige inspecteur.",
        "Laat herstel uitvoeren volgens de specificaties van de fabrikant of leverancier, niet met een willekeurig anker.",
        "Laat na herstel vaststellen dat de sectie weer in orde is voordat u hem volledig belast.",
      ] },
      { t: "h2", text: "Wie is verantwoordelijk?" },
      { t: "p", text: "Als werkgever moet u ervoor zorgen dat arbeidsmiddelen, en dus ook uw magazijnstellingen, veilig zijn en blijven. Een geconstateerd gebrek aan verankering laat u dus niet liggen. De periodieke inspectie door een deskundige is daarvoor het vaste moment, maar signalen tussendoor vraagt u direct op te volgen." },
    ],
    faq: [
      { q: "Mag een stelling zonder vloerankers worden gebruikt?", a: "Of verankering vereist is en hoe, staat in de gegevens van de fabrikant of leverancier van het systeem. Ontbreekt een voorgeschreven anker, laat de situatie dan door een deskundige beoordelen voordat u de sectie volledig belast." },
      { q: "Kan ik een los anker zelf vastzetten?", a: "Wij raden dat af. Een los anker kan wijzen op schade aan de vloer, de voetplaat of de staander. Een deskundige beoordeelt de oorzaak en het herstel volgens de specificaties van het systeem." },
      { q: "Wordt verankering bij een stellinginspectie gecontroleerd?", a: "Ja. Voetplaten en verankering horen bij de onderdelen die een deskundige inspecteur beoordeelt, samen met staanders, liggers, schoren en borging." },
    ],
    related: ["wat-wordt-gecontroleerd", "na-heftruckaanrijding", "scheve-magazijnstelling", "nulinspectie"],
  },
  {
    slug: "roest-corrosie-magazijnstelling",
    category: "Schade en preventie",
    title: "Roest en corrosie op magazijnstellingen: wanneer wordt het een risico?",
    h1: "Roest en corrosie op een magazijnstelling: wanneer is het een risico?",
    metaTitle: "Roest op een magazijnstelling: wanneer is het risico?",
    metaDescription:
      "Roest op een magazijnstelling is niet altijd een probleem. Lees het verschil tussen oppervlakkige roest en corrosie die de sterkte kan aantasten.",
    excerpt:
      "Wanneer oppervlakkige roest onschuldig is en wanneer corrosie de sterkte van een stelling raakt.",
    answer:
      "Oppervlakkige roest op een magazijnstelling is meestal geen directe veiligheidskwestie, maar corrosie die doorzet in een dragend onderdeel wel: het staal verliest dan sterkte zonder dat dit van buitenaf goed is vast te stellen. Vooral vochtige of slecht geventileerde ruimtes, buitenopslag en liggers met een gesloten profiel zijn gevoelig. Laat roest die verder gaat dan de oppervlakte altijd beoordelen door een deskundige inspecteur.",
    updated: "2026-09-23",
    image: {
      src: "/images/praktijk/corrosie-roest-detail.jpg",
      alt: "Beginnende roestvorming bij de verbinding tussen een schoor en een staander van een magazijnstelling",
      caption: "Roest bij een verbinding: een aandachtspunt tijdens de periodieke inspectie.",
    },
    blocks: [
      { t: "p", text: "Een roestplekje op een staander valt vaak pas op als u er specifiek naar zoekt, en niet elke verkleuring is reden tot zorg. Toch kan corrosie, als die eenmaal doorzet in het staal, de sterkte van een dragend onderdeel aantasten zonder dat u dat van buitenaf goed kunt beoordelen. Dit artikel legt uit wanneer roest oppervlakkig is en wanneer het een zaak voor een deskundige is." },
      { t: "h2", text: "Oppervlakkige roest versus roest die het staal aantast" },
      { t: "table", head: ["", "Oppervlakkige roest", "Corrosie die aantast"], rows: [
        ["Uiterlijk", "Kleine, verspreide vlekken of een beschadigde verflaag/zinklaag", "Putvorming, opbollende of afbladderende laag, roest die doorloopt bij een las of verbinding"],
        ["Waar", "Vooral op oppervlakken die zichtbaar en bereikbaar zijn", "Vaak bij verbindingen, lasnaden en in gesloten profielen"],
        ["Wat te doen", "Signaleren en meenemen bij de eerstvolgende controle", "Melden en laten beoordelen door een deskundige"],
      ] },
      { t: "note", text: "Vuistregel: roest die alleen de coating raakt en het onderliggende staal nog intact laat, is doorgaans geen probleem. Zodra het staal zelf zichtbaar is aangetast, is beoordeling nodig." },
      { t: "h2", text: "Waarom liggers met een gesloten profiel extra aandacht vragen" },
      { t: "p", text: "Bij liggers met een gesloten, kokervormig profiel kan roest ook aan de binnenzijde ontstaan, bijvoorbeeld doordat vocht via een naad of lasverbinding naar binnen is getrokken. Dat is vaak pas te herkennen aan roestsporen bij een lasnaad of verbindingspunt aan de buitenkant. Omdat u van buitenaf niet kunt vaststellen hoe ver de aantasting aan de binnenzijde is gevorderd, is voorzichtigheid hier op zijn plaats: bij twijfel over inwendige roest in een dragende ligger is vervanging de veilige route, niet een visuele inschatting." },
      { t: "h2", text: "Omgevingen waarin roest sneller vat krijgt" },
      { t: "ul", items: [
        "Vochtige of slecht geventileerde ruimtes, waar condensvorming optreedt.",
        "Buitenopslag of overkapte opslag die aan weersinvloeden blootstaat.",
        "Koelruimtes en vriescellen, waar temperatuurwisselingen tot condens leiden.",
        "Omgevingen met agressieve stoffen, stof of strooizout, bijvoorbeeld nabij een laad- of losdeur.",
        "Plekken waar de coating of zinklaag is beschadigd door een stoot, kras of aanrijding, waardoor kaal staal blootligt.",
      ] },
      { t: "h2", text: "Wat te doen als u roest ziet" },
      { t: "ol", items: [
        "Beoordeel of het gaat om een oppervlakkige verkleuring of om zichtbare aantasting van het staal, zoals putjes of een opbollende laag.",
        "Let extra op bij verbindingen, lasnaden en gesloten profielen: roest op die plekken kan wijzen op meer dan alleen oppervlakteschade.",
        "Meld twijfelgevallen bij de verantwoordelijke binnen uw organisatie en laat de plek beoordelen door een deskundige.",
        "Ga bij een dragend onderdeel niet zelf schuren en overschilderen als alternatief voor beoordeling; daarmee kunt u een onderliggend probleem aan het zicht onttrekken.",
        "Neem corrosie mee als vast aandachtspunt bij elke periodieke inspectie, zeker in vochtige, koude of buiten gelegen opslag.",
      ] },
      { t: "h2", text: "Voorkomen is eenvoudiger dan genezen" },
      { t: "p", text: "Een intacte verf- of zinklaag is de eerste bescherming tegen roest. Beschadigingen aan die laag, bijvoorbeeld door een aanrijding of een kras van een pallet, geven roest de kans om te beginnen. Een beschadigde coating tijdig laten beoordelen en waar nodig herstellen, en zorgen voor voldoende ventilatie in vochtgevoelige ruimtes, beperkt het risico aanzienlijk." },
      { t: "h2", text: "Hoe RackCheck corrosie beoordeelt" },
      { t: "p", text: "Tijdens de periodieke inspectie nemen we roest en corrosie mee als vast controlepunt, naast andere schade zoals vervorming en scheefstand. We onderscheiden oppervlakkige gebruikssporen van aantasting die de sterkte kan raken, classificeren de bevinding volgens groen, oranje of rood en benoemen in het rapport concreet wat de vervolgstap is." },
    ],
    faq: [
      { q: "Is een beetje roest reden om een stelling af te keuren?", a: "Niet per se. Oppervlakkige roest die alleen de coating heeft aangetast, is meestal geen probleem. Zodra de roest het staal zelf aantast, of bij twijfel over een gesloten profiel, is beoordeling door een deskundige nodig." },
      { q: "Kan ik roest zelf wegschuren en overschilderen?", a: "Bij lichte, oppervlakkige roest kan dat een redelijke maatregel zijn. Bij twijfel, of bij een dragend onderdeel, is het verstandiger dit eerst te laten beoordelen, zodat u niet onbedoeld een dieperliggend probleem afdekt." },
    ],
    related: ["schadeclassificatie", "wat-wordt-gecontroleerd", "staander-rechtbuigen-lassen"],
  },
];

export function getArtikel(slug: string) {
  return artikelen.find((a) => a.slug === slug);
}

export function relatedArtikelen(slugs: string[]) {
  return slugs
    .map((s) => artikelen.find((a) => a.slug === s))
    .filter((a): a is Artikel => Boolean(a));
}

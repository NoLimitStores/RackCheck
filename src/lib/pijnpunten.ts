import type { Block } from "@/lib/kennisbank";

export type Pijnpunt = {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  eyebrow: string;
  h1: string;
  sub: string;
  answer: string;
  spoed?: boolean;
  formReden: string;
  blocks: Block[];
  checklist?: { title: string; items: string[] };
  faq: { q: string; a: string }[];
  related: string[];
  ctaTitle: string;
  image?: { src: string; alt: string; caption?: string };
};

export const pijnpunten: Record<string, Pijnpunt> = {
  "stelling-aangereden": {
    slug: "stelling-aangereden",
    metaTitle: "Stelling aangereden? Krijg snel duidelijkheid over de veiligheid",
    metaDescription:
      "Na een heftruckaanrijding tegen een stelling telt snelheid. RackCheck beoordeelt de schade onafhankelijk en vertelt u wat direct moet gebeuren. Spoedinspectie mogelijk.",
    eyebrow: "Spoed na aanrijding",
    h1: "Stelling aangereden? Krijg snel duidelijkheid over de veiligheid",
    sub: "Na een heftruckaanrijding wilt u geen aannames. RackCheck beoordeelt de schade onafhankelijk en vertelt u wat direct moet gebeuren, wat hersteld moet worden en wat veilig kan blijven staan.",
    answer:
      "Zet na een aanrijding de betreffende sectie direct veilig en beoordeel of die ontladen moet worden. Buig of las een beschadigde staander nooit zelf recht. Laat de schade beoordelen door een deskundige. RackCheck plant een spoedinspectie in en meldt acuut gevaar direct.",
    spoed: true,
    formReden: "Heftruckaanrijding",
    blocks: [
      { t: "h2", text: "Wat moet u nu doen?" },
      { t: "ol", items: [
        "Zorg eerst voor de veiligheid van mensen: houd iedereen weg bij de geraakte sectie.",
        "Beoordeel of de sectie ontladen moet worden. Bij een zichtbaar vervormde staander: ga uit van onveilig.",
        "Zet de sectie af of markeer die, zodat er niet verder wordt gestapeld of gereden.",
        "Meld de aanrijding intern en leg vast wat er is gebeurd.",
        "Buig of las niets zelf recht en laad de geraakte sectie niet bij.",
        "Laat de schade beoordelen door een onafhankelijke deskundige.",
      ] },
      { t: "note", text: "Rechtbuigen of lassen van een staander herstelt de sterkte niet en kan het staal juist verzwakken. Bij structurele schade is vervanging de veilige route." },
      { t: "h2", text: "Wanneer een sectie direct afzetten of ontladen?" },
      { t: "p", text: "Bij een duidelijk vervormde of geknikte staander, een losgeraakte ligger of een zichtbaar scheefgezakte sectie is er sprake van acuut gevaar. Ontlaad die sectie dan zo snel als veilig kan en wacht met verder gebruik tot een deskundige het heeft beoordeeld. Twijfelt u? Behandel de situatie als onveilig tot het tegendeel vaststaat." },
      { t: "h2", text: "Zo werkt de spoedinspectie van RackCheck" },
      { t: "p", text: "Na uw melding plannen we een inspectie met voorrang in. U kunt vooraf foto's van de schade sturen, zodat we goed voorbereid komen. Op locatie beoordelen we de schade onafhankelijk, melden we acuut gevaar direct en leggen we in het rapport vast wat er moet gebeuren en met welke prioriteit." },
    ],
    checklist: {
      title: "Checklist direct na een aanrijding",
      items: [
        "Mensen weg bij de geraakte sectie",
        "Beoordeeld of ontladen nodig is",
        "Sectie afgezet of gemarkeerd",
        "Aanrijding intern gemeld en vastgelegd",
        "Niet zelf rechtgebogen of gelast",
        "Foto's gemaakt van de schade",
        "Deskundige inspectie aangevraagd",
      ],
    },
    faq: [
      { q: "De stelling staat nog overeind, is dat niet genoeg?", a: "Nee. Een staander kan een groot deel van zijn draagkracht verliezen zonder direct om te vallen. Onder de volgende belasting of bij een nieuwe stoot kan het alsnog misgaan." },
      { q: "Hoe snel kan RackCheck langskomen?", a: "Een aanrijding behandelen we met voorrang. Neem telefonisch contact op voor de snelst mogelijke afspraak en stuur alvast foto's mee." },
      { q: "Mag ik de sectie na beoordeling weer gebruiken?", a: "Als de deskundige de sectie groen classificeert wel. Bij oranje of rood volgt eerst herstel of vervanging." },
    ],
    related: ["na-heftruckaanrijding", "staander-rechtbuigen-lassen", "schadeclassificatie", "stellinginspectie"],
    ctaTitle: "Een stelling aangereden? Bel ons direct",
    image: {
      src: "/images/aanrijdschade-staander.jpg",
      alt: "Een aangereden, vervormde staander van een palletstelling met een beschadigde staanderbeschermer",
      caption: "Voorbeeld van aanrijdschade: een vervormde staander en een beschadigde staanderbeschermer. Zulke schade hoort door een deskundige beoordeeld te worden.",
    },
  },

  "jaarlijkse-stellinginspectie": {
    slug: "jaarlijkse-stellinginspectie",
    metaTitle: "Is uw jaarlijkse stellinginspectie nog geldig?",
    metaDescription:
      "Voorkom dat de jaarlijkse stellinginspectie tussen andere werkzaamheden verdwijnt. RackCheck brengt de status in kaart en helpt een vast inspectieritme opzetten.",
    eyebrow: "Jaarlijkse inspectie",
    h1: "Is uw jaarlijkse stellinginspectie nog geldig?",
    sub: "Voorkom dat de inspectie tussen andere werkzaamheden verdwijnt. RackCheck brengt de huidige status in kaart en helpt u een structureel inspectieritme op te zetten.",
    answer:
      "In de praktijk laat u magazijnstellingen minimaal één keer per jaar inspecteren door een deskundige, aangevuld met regelmatige interne controles. Is de laatste inspectie te lang geleden of niet ingepland, dan is het verstandig de status te laten bepalen en een vast ritme af te spreken.",
    formReden: "Jaarlijkse inspectie",
    blocks: [
      { t: "h2", text: "Is bij u actie nodig?" },
      { t: "p", text: "Loop deze vragen na. Herkent u er één of meer, dan is het tijd voor een inspectie of een vast inspectieritme." },
      { t: "ul", items: [
        "Is de laatste deskundige inspectie langer dan een jaar geleden?",
        "Weet u niet zeker wanneer de laatste inspectie was?",
        "Staat er geen volgende inspectie in de planning?",
        "Zijn er sinds de vorige inspectie stellingen bijgeplaatst of gewijzigd?",
      ] },
      { t: "h2", text: "Wetgeving en norm: het verschil" },
      { t: "p", text: "De Arbowet en het Arbobesluit verplichten u om te zorgen voor een veilige werkomgeving en om arbeidsmiddelen periodiek te keuren. Magazijnstellingen vallen daaronder. NEN-EN 15635 is de norm die daar een erkende invulling aan geeft. De norm zelf is geen wet, maar wie de norm volgt, maakt aantoonbaar dat de stellingen veilig worden gebruikt." },
      { t: "note", text: "We overdrijven de juridische kant niet: er is geen los wetsartikel dat letterlijk een jaarlijkse stellingkeuring eist. Wel is een periodieke deskundige inspectie de gangbare en aantoonbare manier om aan de zorgplicht te voldoen." },
      { t: "h2", text: "Een werkbaar inspectieritme" },
      { t: "p", text: "Een goed ritme combineert verschillende niveaus: iedere medewerker meldt schade direct, een aangewezen persoon (de PRSES) loopt regelmatig een interne controle en een externe deskundige beoordeelt in de regel jaarlijks. Bij intensief gebruik of meerploegendienst kan een hogere frequentie passen." },
      { t: "h2", text: "De PRSES kort uitgelegd" },
      { t: "p", text: "De PRSES is de persoon binnen uw organisatie die verantwoordelijk is voor de veiligheid van de opslagsystemen. Die persoon zorgt dat meldingen en controles gebeuren en dat de deskundige inspectie op tijd wordt ingepland. Wij ondersteunen die rol met een rapport dat direct bruikbaar is." },
    ],
    faq: [
      { q: "Moet de inspectie precies elk jaar?", a: "De wet noemt geen vaste termijn. Jaarlijks is gebruikelijk, aangevuld met frequentere interne controles. De juiste frequentie hangt af van hoe intensief u de stellingen gebruikt." },
      { q: "Kan RackCheck me herinneren aan de volgende inspectie?", a: "Ja. We kunnen een terugkerende planning of jaarlijkse herinnering afspreken, zodat de inspectie niet vergeten wordt." },
      { q: "Onze inspectie is al een tijd verlopen, is dat erg?", a: "Het belangrijkste is dat u het nu oppakt. We bepalen de huidige status en helpen u weer aantoonbaar in orde te zijn." },
    ],
    related: ["hoe-vaak-stellingen-keuren", "is-stellingkeuring-verplicht", "wat-is-een-prses", "nen-en-15635"],
    ctaTitle: "Plan uw jaarlijkse stellinginspectie",
    image: {
      src: "/images/palletstelling-jaarinspectie.jpg",
      alt: "Volgeladen palletstellingen in een magazijn die jaarlijks op veiligheid worden gecontroleerd",
      caption: "Volle palletstellingen staan onder constante belasting. Een vaste jaarlijkse inspectie houdt de veiligheid aantoonbaar op orde.",
    },
  },

  "duidelijk-inspectierapport": {
    slug: "duidelijk-inspectierapport",
    metaTitle: "Een inspectierapport moet tot actie leiden",
    metaDescription:
      "Geen losse technische opmerkingen, maar een rapport met prioriteiten en vervolgstappen. Zie hoe een duidelijk stellinginspectierapport van RackCheck eruitziet.",
    eyebrow: "Het rapport",
    h1: "Een inspectierapport moet tot actie leiden",
    sub: "Geen losse technische opmerkingen zonder context. U krijgt een overzichtelijk rapport waarin direct staat wat urgent is, wat gepland kan worden en welke vervolgstap nodig is.",
    answer:
      "Een bruikbaar inspectierapport bevat per bevinding een omschrijving, de exacte locatie, een foto, de classificatie (groen, oranje of rood), de oorzaak, de benodigde actie en een termijn. Alleen een lijst met gebreken is niet genoeg: het rapport moet leesbaar zijn als werkdocument.",
    formReden: "Second opinion",
    blocks: [
      { t: "h2", text: "Waarom een lijst met gebreken niet volstaat" },
      { t: "p", text: "Veel rapporten zijn een opsomming van technische opmerkingen: een codenummer, een korte tekst en soms een foto. Voor wie de opvolging moet organiseren is dat onvoldoende. Welke bevinding is urgent? Waar zit het precies? Wat moet er gebeuren en binnen welke termijn? Zonder die informatie blijft een rapport liggen." },
      { t: "h2", text: "Wat een bruikbaar rapport wel bevat" },
      { t: "p", text: "Bij RackCheck krijgt elke bevinding zeven elementen mee, zodat uw team er direct mee aan de slag kan." },
      { t: "ol", items: [
        "Omschrijving: wat is er aan de hand.",
        "Locatie: gang, stelling, veld en niveau.",
        "Foto: een beeld dat de bevinding ondersteunt.",
        "Classificatie: groen, oranje of rood.",
        "Oorzaak: bijvoorbeeld aanrijding of overbelasting.",
        "Actie: de concrete vervolgstap.",
        "Termijn: direct, binnen enkele weken of bij de volgende inspectie.",
      ] },
      { t: "h2", text: "Hoe bevindingen worden geprioriteerd" },
      { t: "p", text: "De classificatie vertaalt de technische ernst naar een heldere prioriteit. Rood raakt de veiligheid direct en vraagt om onmiddellijke actie. Oranje moet binnen een termijn hersteld worden. Groen kan in gebruik blijven en wordt gemonitord. Zo weet u in één oogopslag waar u moet beginnen." },
      { t: "h2", text: "Van rapport naar opvolging" },
      { t: "p", text: "Omdat elke bevinding een actie en termijn heeft, kunt u de opvolging eenvoudig organiseren en bijhouden. Dat versterkt uw dossier en maakt aantoonbaar dat u iets met de bevindingen doet. Wilt u laten herstellen, dan volgt daarna een apart herstelvoorstel, los van de inspectie." },
    ],
    faq: [
      { q: "Krijg ik een echt voorbeeldrapport te zien?", a: "We tonen een geanonimiseerde voorbeeldweergave van de manier waarop bevindingen worden gepresenteerd. Een echt klantdocument publiceren we niet zonder toestemming." },
      { q: "In welk formaat ontvang ik het rapport?", a: "U ontvangt een digitaal rapport dat u eenvoudig kunt delen en archiveren. De opzet is bedoeld als werkdocument voor uw team." },
      { q: "Kan ik een second opinion op een bestaand rapport krijgen?", a: "Ja. We kunnen uw stellingen opnieuw beoordelen en onze bevindingen naast een eerder rapport leggen." },
    ],
    related: ["informatie-in-inspectierapport", "schadeclassificatie", "onafhankelijke-stellinginspectie", "stellinginspectie"],
    ctaTitle: "Ontvang een rapport waar u iets aan heeft",
    image: {
      src: "/images/schade-perforatie-detail.jpg",
      alt: "Detailfoto van een vervormde perforatie in een stellingstaander, zoals vastgelegd in een inspectierapport",
      caption: "Elke bevinding krijgt in het rapport een foto, een locatie en een classificatie. Zoals hier: een vervormde perforatie in een staander.",
    },
  },

  "onafhankelijke-stellinginspectie": {
    slug: "onafhankelijke-stellinginspectie",
    metaTitle: "Laat uw stellingen beoordelen zonder verkoopbelang",
    metaDescription:
      "Een onafhankelijke stellinginspectie zonder verkoopbelang. RackCheck beoordeelt op basis van de situatie en de criteria, niet op basis van te verkopen onderdelen.",
    eyebrow: "Onafhankelijk",
    h1: "Laat uw stellingen beoordelen zonder verkoopbelang",
    sub: "RackCheck beoordeelt de veiligheid van uw stellingen op basis van de situatie en de relevante criteria. Niet op basis van hoeveel onderdelen er verkocht kunnen worden.",
    answer:
      "Een onafhankelijke stellinginspectie is een beoordeling waarbij degene die keurt geen belang heeft bij de verkoop van herstelonderdelen. De schade wordt objectief beoordeeld op basis van meetbare criteria. Niet elk gebruiksspoor vereist vervanging, en ernstige schade wordt niet gebagatelliseerd.",
    formReden: "Second opinion",
    blocks: [
      { t: "h2", text: "Inspectie en verkoop: waarom scheiding telt" },
      { t: "p", text: "Wie de inspectie combineert met de verkoop van nieuwe onderdelen, heeft een belang bij afkeur. Dat hoeft niet kwaad bedoeld te zijn, maar het kleurt onvermijdelijk de beoordeling. Bij RackCheck staat de inspectie los van herstel: we beoordelen puur op veiligheid en de relevante criteria." },
      { t: "h2", text: "Hoe wij schade objectief beoordelen" },
      { t: "p", text: "We kijken naar de aard en de plaats van de schade en naar de gevolgen voor de draagkracht. Een oppervlakkige kras is iets anders dan een vervormde staander. Elke bevinding krijgt een classificatie op basis van dezelfde, herkenbare maatstaven, zodat de beoordeling navolgbaar en consistent is." },
      { t: "note", text: "Niet ieder gebruiksspoor vraagt om vervanging. Tegelijk bagatelliseren we ernstige schade nooit: veiligheid staat voorop." },
      { t: "h2", text: "Een second opinion op een eerdere keuring" },
      { t: "p", text: "Twijfelt u of er bij een eerdere keuring niet onnodig is afgekeurd? Dan kunnen we een second opinion geven. We beoordelen uw stellingen opnieuw en leggen onze bevindingen naast het eerdere rapport. We vallen daarbij geen andere partij aan, maar geven u een transparant, navolgbaar oordeel." },
      { t: "h2", text: "En als er wel hersteld moet worden?" },
      { t: "p", text: "Blijkt herstel nodig, dan volgt dat pas na de inspectie, in een apart traject. Zo blijft de beoordeling onafhankelijk. Afhankelijk van het merk kunnen onderdelen via de fabrikant, dealer of een geschikte leverancier worden verkregen." },
    ],
    faq: [
      { q: "Verdient RackCheck aan afgekeurde onderdelen?", a: "Nee. De inspectiebeoordeling staat los van herstelverkoop. Een eventueel herstelvoorstel volgt pas daarna, in een apart traject." },
      { q: "Wat als een eerdere partij te streng heeft gekeurd?", a: "We geven een onafhankelijke second opinion op basis van meetbare criteria. We beschuldigen niemand, maar geven u helderheid." },
      { q: "Beoordelen jullie ook merken die jullie niet leveren?", a: "Ja. We beoordelen de constructie en de staat, ongeacht het merk. Bij een niet meer leverbaar merk benoemen we dat transparant." },
    ],
    related: ["wie-mag-stellingen-inspecteren", "tweedehands-hovuma-stellingen", "duidelijk-inspectierapport", "schadeclassificatie"],
    ctaTitle: "Vraag een onafhankelijke beoordeling aan",
    image: {
      src: "/images/bordes-entresol-portret.jpg",
      alt: "Bordes met legbordstellingen en een toegangstrap in een magazijn, onafhankelijk beoordeeld op veiligheid",
      caption: "Of het nu om stellingen of een bordes gaat: we beoordelen de constructie objectief op basis van de criteria, niet op basis van te verkopen onderdelen.",
    },
  },

  "terugkerende-stellingschade": {
    slug: "terugkerende-stellingschade",
    metaTitle: "Steeds schade op dezelfde plekken? Pak de oorzaak aan",
    metaDescription:
      "Terugkerende aanrijdschade aan palletstellingen? RackCheck helpt patronen herkennen en vertaalt ze naar praktische preventiemaatregelen. Inspectie met oorzaakanalyse.",
    eyebrow: "Terugkerende schade",
    h1: "Steeds schade op dezelfde plekken? Pak de oorzaak aan",
    sub: "Wanneer dezelfde staanders, hoeken of doorgangen telkens beschadigd raken, is alleen repareren niet genoeg. RackCheck helpt patronen herkennen en vertaalt deze naar praktische preventiemaatregelen.",
    answer:
      "Terugkerende schade op dezelfde plekken wijst meestal op een onderliggende oorzaak, zoals een krappe bocht, een slechte zichtlijn of een looproute die heftruckverkeer kruist. Door schade te registreren en te vergelijken over meerdere inspecties, wordt het patroon zichtbaar en kunt u het gericht aanpakken in plaats van steeds opnieuw te repareren.",
    formReden: "Terugkerende schade",
    blocks: [
      { t: "h2", text: "Van losse reparaties naar een patroon" },
      { t: "p", text: "Als u telkens dezelfde staanders of hoeken repareert, bestrijdt u het symptoom, niet de oorzaak. De schade komt terug omdat de onderliggende situatie niet verandert. De eerste stap is daarom niet nog een reparatie, maar het herkennen van het patroon." },
      { t: "h2", text: "Waar de oorzaak vaak zit" },
      { t: "ul", items: [
        "Rijroutes en gangbreedte die te krap zijn voor de gebruikte trucks.",
        "Slechte zichtlijnen bij kruisingen en kopse kanten.",
        "Werksnelheid en werkdruk die tot risicovol rijgedrag leiden.",
        "Plaatsing van pallets die te ver uitsteekt in de gang.",
        "Ontbrekende of beschadigde aanrijdbeveiliging op kwetsbare plekken.",
        "Schade die niet wordt gemeld, waardoor het patroon onzichtbaar blijft.",
      ] },
      { t: "h2", text: "Inspectie met oorzaakanalyse" },
      { t: "p", text: "Naast de reguliere beoordeling kijken we naar het geheel: waar zit de schade, hoe loopt het verkeer, waar kruisen routes en zichtlijnen. Zo ontstaat een beeld van de oorzaak achter de losse schadepunten. Die vertalen we naar concrete, praktische preventiemaatregelen." },
      { t: "note", text: "Door rapportdata over meerdere inspecties te vergelijken, wordt zichtbaar of schade zich concentreert op bepaalde plekken. Dat maakt gerichte preventie mogelijk." },
      { t: "h2", text: "Symptoombestrijding versus structurele preventie" },
      { t: "p", text: "Repareren blijft nodig, maar het is niet de oplossing voor een terugkerend probleem. Structurele preventie, zoals betere zichtlijnen, aangepaste routes of extra aanrijdbeveiliging, voorkomt dat dezelfde schade opnieuw ontstaat. Dat scheelt op termijn kosten en verhoogt de veiligheid." },
    ],
    faq: [
      { q: "Kunnen jullie ook onze eerdere schadegegevens gebruiken?", a: "Ja. Als u schade heeft geregistreerd of eerdere rapporten heeft, betrekken we die om patronen zichtbaar te maken." },
      { q: "Wat levert een oorzaakanalyse concreet op?", a: "Een overzicht van waar en waarom schade ontstaat, met praktische maatregelen om herhaling te voorkomen." },
      { q: "Is aanrijdbeveiliging altijd de oplossing?", a: "Niet altijd. Beveiliging vangt de klap op, maar de echte oplossing ligt vaak in routes, zichtlijnen en gedrag. We adviseren wat in uw situatie het meeste effect heeft." },
    ],
    related: ["aanrijdschade-voorkomen", "na-heftruckaanrijding", "informatie-in-inspectierapport", "stellinginspectie"],
    ctaTitle: "Pak terugkerende schade bij de oorzaak aan",
    image: {
      src: "/images/stelling-detail.jpg",
      alt: "Detail van een palletstelling met staanders, schoren en voetplaat op de plek waar aanrijdschade ontstaat",
      caption: "Dezelfde hoeken en doorgangen raken vaak opnieuw beschadigd. Een oorzaakanalyse legt dat patroon bloot.",
    },
  },
};

export function getPijnpunt(slug: string) {
  return pijnpunten[slug];
}

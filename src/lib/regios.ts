/**
 * Regiodata voor /regio/[plaats]/. Elke regio heeft unieke lokale context om
 * thin of doorway-content te voorkomen. Nieuwe regio toevoegen = één object.
 * RackCheck werkt landelijk; er is geen lokaal kantoor per stad (geen verzonnen
 * vestigingsadressen).
 */
export type Regio = {
  slug: string;
  stad: string;
  provincie: string;
  context: string;
  relevantie: string;
  omgeving: string[];
  /** Land voor de indeling op /regio/. Onbepaald = Nederland. */
  land?: "Nederland" | "België";
  /** Optionele meta-overrides; zonder deze wordt een standaardpatroon gebruikt. */
  metaTitle?: string;
  metaDescription?: string;
};

export const regios: Regio[] = [
  {
    slug: "venlo",
    stad: "Venlo",
    provincie: "Limburg",
    context:
      "Venlo geldt al jaren als een van de logistieke hotspots van Nederland. Trade Port Noord, de greenport en de directe grensligging met Duitsland maken de regio tot draaischijf voor Europese distributie en versstromen.",
    relevantie:
      "Vers- en e-commercestromen zorgen voor piekbelasting en seizoensdrukte. In die periodes ontstaat schade sneller en blijft ze vaker onopgemerkt, precies wanneer een onafhankelijke inspectie het meeste oplevert.",
    omgeving: ["Venray", "Horst", "Tegelen", "Roermond", "Panningen"],
  },
  {
    slug: "eindhoven",
    stad: "Eindhoven",
    provincie: "Noord-Brabant",
    context:
      "Brainport Eindhoven draait op hightech-toeleverketens. Magazijnen op GDC Acht, Ekkersrijt en rond Veldhoven bedienen productielijnen waar stilstand direct geld kost. Precisieonderdelen en elektronica vragen om ordelijke, betrouwbare opslag.",
    relevantie:
      "Bij levering net op tijd is een afgekeurde of ingestorte sectie geen ongemak maar een ketenverstoring. Preventieve inspectie is hier ook een continuïteitsmaatregel.",
    omgeving: ["Veldhoven", "Son en Breugel", "Best", "Helmond", "Waalre"],
  },
  {
    slug: "tilburg",
    stad: "Tilburg",
    provincie: "Noord-Brabant",
    context:
      "Tilburg is uitgegroeid tot een van de grootste logistieke hotspots van het land. Vossenberg en Loven vormen de thuisbasis van grote distributiecentra, met een railterminal die de regio verbindt met de haven van Rotterdam en met Azië.",
    relevantie:
      "De grootschalige, hoge stellingen in moderne Tilburgse distributiecentra vragen om inspecteurs die ook entresolvloeren en smalle-gangenstellingen beoordelen.",
    omgeving: ["Waalwijk", "Dongen", "Rijen", "Goirle", "Oisterwijk"],
  },
  {
    slug: "den-bosch",
    stad: "Den Bosch",
    provincie: "Noord-Brabant",
    context:
      "Rondom Den Bosch, met bedrijventerreinen als De Brand, Rietvelden en het knooppunt bij Empel, combineren bedrijven regionale distributie met productie en groothandel. De centrale ligging aan de A2 en A59 maakt het een logisch verdeelpunt.",
    relevantie:
      "Waar groothandel en distributie samenkomen, wisselt de stellingconfiguratie regelmatig. Elke wijziging vraagt om herbeoordeling van de betreffende secties.",
    omgeving: ["Rosmalen", "Vught", "Oss", "Zaltbommel", "Waalwijk"],
  },
  {
    slug: "nijmegen",
    stad: "Nijmegen",
    provincie: "Gelderland",
    context:
      "De regio Nijmegen bedient met bedrijventerreinen als Bijsterhuizen en de ligging aan de Waal zowel regionale distributie als maakindustrie. De nabijheid van de Duitse grens versterkt de rol als doorvoerregio.",
    relevantie:
      "Gemengd gebruik van opslag en productie betekent uiteenlopende stellingtypen op één locatie. Een inspecteur die meerdere systemen beoordeelt, brengt het geheel in één keer in beeld.",
    omgeving: ["Wijchen", "Beuningen", "Elst", "Cuijk", "Arnhem"],
  },
  {
    slug: "arnhem",
    stad: "Arnhem",
    provincie: "Gelderland",
    context:
      "Arnhem ligt op het knooppunt van de A12, A50 en A15 en vormt samen met de regio De Liemers een belangrijk logistiek scharnierpunt richting het Ruhrgebied. Bedrijventerreinen als IJsseloord en Kleefse Waard huisvesten distributie en groothandel.",
    relevantie:
      "Door de doorvoerfunctie draaien veel magazijnen met hoge omloopsnelheid. Intensief heftruckverkeer betekent een bovengemiddeld aanrijdrisico voor de stellingen.",
    omgeving: ["Duiven", "Westervoort", "Elst", "Zevenaar", "Velp"],
  },
  {
    slug: "utrecht",
    stad: "Utrecht",
    provincie: "Utrecht",
    context:
      "Door de centrale ligging is de regio Utrecht, met bedrijventerreinen als Lage Weide en Oudenrijn, een favoriete uitvalsbasis voor landelijke distributie en fulfilment. Veel magazijnen combineren opslag met assemblage en waardetoevoegende activiteiten.",
    relevantie:
      "Waar opslag en assemblage door elkaar lopen, verandert de stellingopstelling vaak. Elke aanpassing vraagt om herberekening en herbeoordeling van de betreffende delen.",
    omgeving: ["Nieuwegein", "Houten", "Woerden", "Amersfoort", "Zeist"],
  },
  {
    slug: "rotterdam",
    stad: "Rotterdam",
    provincie: "Zuid-Holland",
    context:
      "Met de grootste haven van Europa is Rotterdam het logistieke hart van Nederland. Van de distributiecentra op de Maasvlakte en in de Botlek tot de stadsdistributie vanuit Spaanse Polder en Waalhaven staan hier bijzonder veel magazijnstellingen bij elkaar.",
    relevantie:
      "De hoge omloopsnelheid en het intensieve heftruckverkeer in havengebonden magazijnen betekenen een bovengemiddeld aanrijdrisico. Juist hier maakt een jaarlijkse deskundige inspectie het verschil.",
    omgeving: ["Schiedam", "Barendrecht", "Ridderkerk", "Spijkenisse", "Dordrecht"],
  },
  {
    slug: "breda",
    stad: "Breda",
    provincie: "Noord-Brabant",
    land: "Nederland",
    metaTitle: "Stellinginspectie Breda | Magazijnstellingen keuren",
    metaDescription:
      "Stellinginspectie in Breda en omgeving? RackCheck keurt magazijnstellingen onafhankelijk, van Hazeldonk tot Moerdijk, met een helder rapport binnen 24 uur.",
    context:
      "Breda ligt strategisch tussen de havens van Rotterdam en Antwerpen, ontsloten door de A16, A27 en A58. Op bedrijventerreinen als Hazeldonk aan de Belgische grens, Steenakker en het nabijgelegen haven- en industriecomplex Moerdijk zit een mix van distributie, groothandel, productie en transport. Die grensligging maakt de regio tot een logisch overslag- en verdeelpunt voor internationale stromen.",
    relevantie:
      "Veel Bredase magazijnen draaien op doorvoer met een hoge omloopsnelheid en intensief heftruckverkeer, wat het aanrijdrisico voor staanders vergroot. Bij bedrijven die opslag met productie combineren wisselt de stellingopstelling bovendien regelmatig, en elke wijziging vraagt om een nieuwe beoordeling.",
    omgeving: ["Oosterhout", "Etten-Leur", "Moerdijk", "Roosendaal", "Rijen", "Zevenbergen"],
  },
  {
    slug: "roermond",
    stad: "Roermond",
    provincie: "Limburg",
    land: "Nederland",
    metaTitle: "Stellinginspectie Roermond | Magazijnstellingen keuren",
    metaDescription:
      "Magazijnstellingen keuren in Roermond en Midden-Limburg. RackCheck inspecteert uw stellingen onafhankelijk, met een duidelijk rapport en concrete prioriteiten.",
    context:
      "Roermond ligt centraal in Midden-Limburg, op een steenworp van zowel de Duitse als de Belgische grens en ontsloten door de A2 en A73. Rond bedrijventerreinen als de Roerstreek en de Willem-Alexanderhaven combineren bedrijven distributie, productie en groothandel. De grensligging en de ontsluiting via water, weg en spoor maken de regio tot een aantrekkelijk verdeelpunt voor Nederland, Duitsland en België.",
    relevantie:
      "De retail- en outletlogistiek rond Roermond kent uitgesproken seizoenspieken, waarin magazijnen tijdelijk voller en drukker zijn. Juist in die periodes ontstaat schade sneller en blijft ze langer onopgemerkt, wat een periodieke onafhankelijke inspectie extra waardevol maakt.",
    omgeving: ["Weert", "Echt", "Swalmen", "Sittard", "Panningen", "Venray"],
  },
  {
    slug: "antwerpen",
    stad: "Antwerpen",
    provincie: "Provincie Antwerpen",
    land: "België",
    metaTitle: "Stellinginspectie Antwerpen | Magazijnstellingen keuren",
    metaDescription:
      "Onafhankelijke stellinginspectie in Antwerpen en de havenregio. RackCheck keurt uw magazijnstellingen en rekken met een helder rapport en duidelijke prioriteiten.",
    context:
      "Antwerpen draait om een van de grootste zeehavens van Europa. In het uitgestrekte haven- en industriegebied ten noorden van de stad en op bedrijventerreinen rond de ring bevinden zich talloze distributiecentra, chemie- en overslagbedrijven. De internationale goederenstromen zorgen voor grootschalige opslag met een hoge omloopsnelheid.",
    relevantie:
      "Het intensieve heftruck- en reachtruckverkeer in havengebonden magazijnen betekent een bovengemiddeld risico op aanrijdschade aan staanders en liggers. In de vaak hoge palletstellingen en magazijnrekken van deze distributiecentra kan zulke schade snel doorwerken op de stabiliteit van een hele rij.",
    omgeving: ["Wommelgem", "Wijnegem", "Kontich", "Mechelen", "Sint-Niklaas", "Turnhout"],
  },
  {
    slug: "gent",
    stad: "Gent",
    provincie: "Oost-Vlaanderen",
    land: "België",
    metaTitle: "Stellinginspectie Gent | Magazijnstellingen keuren",
    metaDescription:
      "Stellinginspectie in Gent en de regio North Sea Port. RackCheck keurt magazijnstellingen bij haven, opslag en productie, onafhankelijk en met een helder rapport.",
    context:
      "De regio Gent groepeert zich rond North Sea Port, de havenzone langs het kanaal Gent-Terneuzen. Naast havenlogistiek en overslag is er een sterke aanwezigheid van maak- en automotive-industrie, groothandel en distributiecentra. Die combinatie zorgt voor uiteenlopende opslagvormen op korte afstand van elkaar.",
    relevantie:
      "Waar havenlogistiek, productie en opslag samenkomen, staan verschillende stellingtypen door elkaar: palletstellingen naast draagarmstellingen voor langgoed en profielen. Een inspecteur die meerdere systemen beoordeelt, brengt de veiligheid van het geheel in één keer in beeld.",
    omgeving: ["Evergem", "Zelzate", "Lokeren", "Aalst", "Deinze", "Sint-Niklaas"],
  },
  {
    slug: "genk",
    stad: "Genk",
    provincie: "Limburg (België)",
    land: "België",
    metaTitle: "Stellinginspectie Genk | Magazijnstellingen keuren",
    metaDescription:
      "Magazijnstellingen keuren in Genk en Belgisch Limburg. RackCheck inspecteert stellingen bij industrie en logistiek rond het Albertkanaal, onafhankelijk en helder.",
    context:
      "Genk is een van de belangrijkste industriële en logistieke centra van Belgisch Limburg. Op grootschalige bedrijventerreinen als Genk-Zuid en Genk-Noord, deels op voormalige automotive-sites die zijn herontwikkeld tot XXL-magazijnen, zitten productie, transport en distributie. De ontsluiting via het Albertkanaal, spoor en snelweg versterkt de rol als logistieke hub.",
    relevantie:
      "De zeer grote, hoge stellingopstellingen in deze XXL-magazijnen en de aanwezigheid van zware industrie en langgoedopslag stellen eigen eisen aan een inspectie. Hoge stellingen en draagarmsystemen vragen om een deskundige die ook deze configuraties beoordeelt.",
    omgeving: ["Hasselt", "Diepenbeek", "Zonhoven", "Maasmechelen", "Lommel", "Sint-Truiden"],
  },
];

export function getRegio(slug: string): Regio | undefined {
  return regios.find((r) => r.slug === slug);
}

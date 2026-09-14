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
];

export function getRegio(slug: string): Regio | undefined {
  return regios.find((r) => r.slug === slug);
}

import type { Metadata } from "next";
import { site } from "@/lib/site";
import PageHeader from "@/components/PageHeader";
import { Section } from "@/components/Section";

export const metadata: Metadata = {
  title: "Privacyverklaring",
  description:
    "In deze privacyverklaring leest u hoe RackCheck omgaat met de persoonsgegevens die u via de website en het contactformulier deelt.",
  alternates: { canonical: "/privacy/" },
  robots: { index: true, follow: true },
};

export default function Page() {
  return (
    <>
      <PageHeader
        title="Privacyverklaring"
        intro="Hoe RackCheck omgaat met uw persoonsgegevens."
        crumbs={[{ name: "Privacyverklaring", href: "/privacy/" }]}
      />
      <Section>
        <div className="content mx-auto max-w-3xl">
          <p className="text-sm text-navy-500">
            Dit is een algemene privacyverklaring. RackCheck controleert en vult de
            bedrijfsgegevens en juridische details aan voordat de website live gaat.
          </p>

          <h2>Wie wij zijn</h2>
          <p>
            {site.legalName} verzorgt onafhankelijke inspecties van magazijnstellingen
            in {site.workingArea}
            {site.kvk ? ` (KvK-nummer ${site.kvk})` : ""}. Voor vragen over uw privacy
            kunt u contact opnemen via {site.email}
            {site.phoneDisplay ? ` of ${site.phoneDisplay}` : ""}.
          </p>

          <h2>Welke gegevens wij verwerken</h2>
          <p>
            Wanneer u het contact- of aanvraagformulier gebruikt, verwerken wij de
            gegevens die u zelf invult, zoals uw bedrijfsnaam, naam, e-mailadres,
            telefoonnummer, plaats en de informatie over uw magazijn en aanvraag.
            Daarnaast kunnen wij, om aanvragen te herleiden en te verbeteren, technische
            gegevens vastleggen zoals de pagina waarop u het formulier invulde en de
            herkomst van uw bezoek.
          </p>

          <h2>Waarvoor wij deze gegevens gebruiken</h2>
          <ul>
            <li>Om contact met u op te nemen over uw aanvraag of vraag.</li>
            <li>Om een inspectie in te plannen en uit te voeren.</li>
            <li>Om onze dienstverlening en website te verbeteren.</li>
          </ul>
          <p>
            Wij gebruiken uw gegevens uitsluitend voor deze doelen en delen ze niet met
            derden voor commerciële doeleinden.
          </p>

          <h2>Bewaartermijn</h2>
          <p>
            Wij bewaren uw gegevens niet langer dan nodig is voor de doelen waarvoor ze
            zijn verzameld, of zolang dit wettelijk vereist is.
          </p>

          <h2>Cookies en statistieken</h2>
          <p>
            De website kan gebruikmaken van functionele cookies en, wanneer u daar
            toestemming voor geeft, van statistiekcookies om het gebruik van de site te
            meten. Er wordt pas een analysetool geactiveerd zodra daarvoor een geldige
            configuratie is ingesteld.
          </p>

          <h2>Uw rechten</h2>
          <p>
            U heeft het recht om uw persoonsgegevens in te zien, te laten corrigeren of
            te laten verwijderen. Ook kunt u bezwaar maken tegen de verwerking. Neem
            hiervoor contact met ons op via {site.email}. Bent u niet tevreden over hoe
            wij met uw gegevens omgaan, dan kunt u een klacht indienen bij de Autoriteit
            Persoonsgegevens.
          </p>

          <h2>Contact</h2>
          <p>
            Heeft u vragen over deze privacyverklaring? Neem dan contact met ons op via{" "}
            {site.email}
            {site.phoneDisplay ? ` of ${site.phoneDisplay}` : ""}.
          </p>
        </div>
      </Section>
    </>
  );
}

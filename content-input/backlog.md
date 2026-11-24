# RackCheck.nl kennisbank-contentbacklog

Doel: organische autoriteit rond magazijnstellingen en stellinginspecties, doorgestuurd naar een inspectieaanvraag.

Deze backlog is uitsluitend voor **informatieve kennisbankartikelen** onder `/kennisbank/[slug]`
(datamodel: objecten in `src/lib/kennisbank.ts`). De dagelijkse contentroutine kiest het
eerste openstaande geschikte item in prioriteitsvolgorde.

## Regels

- Maak geen artikel dat dezelfde zoekintentie bedient als een bestaand artikel of een
  bestaande pagina (zie "Reeds gedekt / niet in scope").
- Verzin geen toleranties, normteksten, belastingwaarden of wettelijke verplichtingen.
  Controleer belangrijke claims bij primaire bronnen (Arboportaal, Nederlandse
  Arbeidsinspectie, wetten.overheid.nl, NEN).
- Ieder artikel bevat minimaal een passende praktijkfoto (zie `afbeeldingen-manifest.md`).
- Ieder artikel linkt naar minimaal een commerciele pagina (inspectie aanvragen /
  stellinginspectie / prijzen) en naar relevante bestaande kennisbankartikelen.
- Vink een item pas af na een geslaagde live controle en vermeld de live-URL + datum.

## Reeds gedekt / NIET in scope (cannibalisatie voorkomen)

Bestaande kennisbankartikelen (niet opnieuw maken): nen-en-15635, npr-5055,
is-stellingkeuring-verplicht, hoe-vaak-stellingen-keuren, wie-mag-stellingen-inspecteren,
wat-is-een-prses, schadeclassificatie, na-heftruckaanrijding, wat-wordt-gecontroleerd,
belastingbord, kosten-stellinginspectie, aanrijdschade-voorkomen, staander-rechtbuigen-lassen,
nulinspectie, interne-controle-vs-externe-inspectie, checklist-veilige-magazijnstelling,
magazijn-voorbereiden-op-inspectie, informatie-in-inspectierapport, hoe-lang-duurt-stellinginspectie.

Bestaande pagina's buiten deze routine: `/inspecties/palletstelling`, `/inspecties/legbordstelling`,
`/inspecties/draagarmstelling`, `/regio/[plaats]`, `/stellinginspectie`, `/prijzen`,
`/stelling-aangereden`, `/terugkerende-stellingschade`, en alle commerciele landings- en
locatiepagina's. **Deze routine maakt hier geen content voor.**

---

## PRIORITEIT 1 - Schade, urgentie en veiligheid

- [x] Wat gebeurt er als een magazijnstelling wordt afgekeurd?
  - Gepubliceerd: 2026-09-15 -> https://www.rackcheck.nl/kennisbank/magazijnstelling-afgekeurd/
  - Primair zoekwoord: magazijnstelling afgekeurd
  - Secundaire zoekwoorden: stelling afgekeurd wat nu, rode kaart stellinginspectie
  - Zoekintentie: probleemgedreven / urgent
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt schadeclassificatie; leg de focus op het vervolgtraject (ontlasten, herstel, herkeuring), niet op de kleurcodes zelf.

- [x] Verbogen ligger in een magazijnstelling: wanneer is deze onveilig?
  - Gepubliceerd: 2026-09-16 -> https://www.rackcheck.nl/kennisbank/verbogen-ligger/
  - Primair zoekwoord: verbogen ligger magazijnstelling
  - Secundaire zoekwoorden: doorgebogen ligger, ligger vervangen stelling
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: onderscheid doorbuiging door belasting vs. aanrijdschade; geen verzonnen mm-grenzen.

- [ ] Doorbuiging van een ligger: hoeveel is toegestaan?
  - Overgeslagen 2026-09-30: zoekintentie al gedekt door verbogen-ligger (elastisch vs. blijvend, wie bepaalt de toegestane doorbuiging); concrete tolerantie alleen in betaalde norm/fabrikantopgave.
  - Primair zoekwoord: doorbuiging ligger stelling toegestaan
  - Secundaire zoekwoorden: maximale doorbuiging ligger, ligger doorhangt
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: verwijs naar fabrikantopgave en beoordeling door deskundige; noem geen concrete tolerantie zonder bron.

- [ ] Beschadigde staander: vervangen of repareren?
  - Overgeslagen 2026-09-30: afweging vervangen vs. herstellen al gedekt door staander-rechtbuigen-lassen en magazijnstelling-afgekeurd.
  - Primair zoekwoord: beschadigde staander stelling vervangen
  - Secundaire zoekwoorden: stellingstaander repareren, staander vervangen kosten
  - Zoekintentie: probleemgedreven / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt staander-rechtbuigen-lassen; focus hier op de afweging vervangen vs. herstellen en wie dat mag beoordelen.

- [x] Beschadigde schoor in een palletstelling: wat moet u doen?
  - Gepubliceerd: 2026-09-18 -> https://www.rackcheck.nl/kennisbank/beschadigde-schoor/
  - Primair zoekwoord: beschadigde schoor palletstelling
  - Secundaire zoekwoorden: diagonaal stelling kapot, schoor vervangen stelling
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [x] Scheve magazijnstelling: wanneer is scheefstand te groot?
  - Gepubliceerd: 2026-09-19 -> https://www.rackcheck.nl/kennisbank/scheve-magazijnstelling/
  - Primair zoekwoord: scheve magazijnstelling
  - Secundaire zoekwoorden: stelling staat scheef, scheefstand stelling toegestaan
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: onderscheid onbelaste/belaste scheefstand; verwijs naar beoordeling, geen verzonnen grens.

- [x] Losse of ontbrekende vloerankers bij magazijnstellingen: hoe gevaarlijk is dat?
  - Gepubliceerd: 2026-09-20 -> https://www.rackcheck.nl/kennisbank/losse-vloerankers-magazijnstelling/
  - Primair zoekwoord: losse vloerankers magazijnstelling
  - Secundaire zoekwoorden: verankering stelling los, stelling niet verankerd
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Wanneer moet een beschadigde stelling direct worden ontlast?
  - Overgeslagen 2026-09-30: ontlasten bij rood al gedekt door magazijnstelling-afgekeurd, schadeclassificatie en na-heftruckaanrijding.
  - Primair zoekwoord: beschadigde stelling ontlasten
  - Secundaire zoekwoorden: stelling leeghalen schade, stelling afzetten
  - Zoekintentie: urgent / probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Mag een beschadigde magazijnstelling worden gerepareerd?
  - Overgeslagen 2026-09-30: herstel met originele onderdelen al gedekt door magazijnstelling-afgekeurd en staander-rechtbuigen-lassen.
  - Primair zoekwoord: beschadigde stelling repareren mag dat
  - Secundaire zoekwoorden: stelling herstellen regels, reparatie stelling toegestaan
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: benoem fabrikantinstructies en originele onderdelen; raakt staander-rechtbuigen-lassen, houd het breder.

- [x] Roest en corrosie op magazijnstellingen: wanneer wordt het een risico?
  - Gepubliceerd: 2026-09-23 -> https://www.rackcheck.nl/kennisbank/roest-corrosie-magazijnstelling/
  - Primair zoekwoord: roest magazijnstelling
  - Secundaire zoekwoorden: corrosie stelling, verzinkte stelling roest
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen

## PRIORITEIT 2 - Compliance, verantwoordelijkheid en aansprakelijkheid

- [ ] Mag een medewerker zelf stellingschade beoordelen?
  - Overgeslagen 2026-09-30: grens signaleren vs. beoordelen al gedekt door interne-controle-vs-externe-inspectie.
  - Primair zoekwoord: stellingschade zelf beoordelen
  - Secundaire zoekwoorden: interne controle stelling medewerker, wie beoordeelt schade
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: raakt interne-controle-vs-externe-inspectie; focus op de grens tussen signaleren en beoordelen.

- [x] Hoe lang moet u een stellingkeuringsrapport bewaren?
  - Gepubliceerd: 2026-09-24 -> https://www.rackcheck.nl/kennisbank/stellingkeuringsrapport-bewaren/
  - Primair zoekwoord: stellingkeuringsrapport bewaren
  - Secundaire zoekwoorden: bewaartermijn keuringsrapport, inspectierapport bewaren
  - Zoekintentie: informatief
  - Gewenste CTA: contact opnemen

- [x] Wat controleert de Nederlandse Arbeidsinspectie in een magazijn?
  - Gepubliceerd: 2026-09-25 -> https://www.rackcheck.nl/kennisbank/arbeidsinspectie-magazijn/
  - Primair zoekwoord: arbeidsinspectie magazijn stellingen
  - Secundaire zoekwoorden: inspectie SZW magazijn, controle stellingen arbeidsinspectie
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: baseer op Arbeidsinspectie/Arboportaal; geen verzonnen boetebedragen.

- [x] Wie is aansprakelijk bij een ingestorte magazijnstelling?
  - Gepubliceerd: 2026-09-27 -> https://www.rackcheck.nl/kennisbank/aansprakelijkheid-ingestorte-stelling/
  - Primair zoekwoord: aansprakelijkheid ingestorte stelling
  - Secundaire zoekwoorden: stelling ingestort aansprakelijk, ongeval magazijnstelling
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: algemene toelichting werkgeversverantwoordelijkheid; geen juridisch advies pretenderen.

- [ ] Stellingkeuring en verzekering: welke documenten moet u kunnen aantonen?
  - Primair zoekwoord: stellingkeuring verzekering
  - Overgeslagen 2026-09-28: geen primaire bron voor eisen van verzekeraars (verschilt per polis); documentenkant nu gedekt door documenten-magazijnstellingen.
  - Secundaire zoekwoorden: keuringsbewijs stelling verzekeraar, aantonen onderhoud stelling
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen

- [x] Welke documenten horen bij veilig gebruik van magazijnstellingen?
  - Gepubliceerd: 2026-09-28 -> https://www.rackcheck.nl/kennisbank/documenten-magazijnstellingen/
  - Primair zoekwoord: documenten magazijnstellingen veiligheid
  - Secundaire zoekwoorden: belastingbord tekening stelling, dossier stellingen
  - Zoekintentie: informatief
  - Gewenste CTA: contact opnemen
  - Opmerking: raakt belastingbord; houd dit breder (dossier/aantoonbaarheid).

- [x] Magazijnstellingen aanpassen: wanneer is een nieuwe draagkrachtberekening nodig?
  - Gepubliceerd: 2026-09-30 -> https://www.rackcheck.nl/kennisbank/draagkrachtberekening-stelling-aanpassen/
  - Primair zoekwoord: draagkrachtberekening magazijnstelling
  - Secundaire zoekwoorden: stelling ombouwen draagvermogen, liggerniveau wijzigen
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Liggerhoogte veranderen: moet het belastingbord worden aangepast?
  - Overgeslagen 2026-10-02: zoekintentie al gedekt door draagkrachtberekening-stelling-aanpassen (liggers verhangen, bord aanpassen) en de FAQ in belastingbord.
  - Primair zoekwoord: liggerhoogte veranderen belastingbord
  - Secundaire zoekwoorden: stelling verstellen belasting, veldlast aanpassen
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt belastingbord; focus op het gevolg van verstellen voor de toegestane belasting.

## PRIORITEIT 3 - Stellingtypen en praktische inspectievragen

- [ ] Inrijstellingen (drive-in) inspecteren: waar wordt op gelet?
  - Overgeslagen 2026-10-02: zelfde zoekwoord en intentie als bestaande pagina /inspecties/inrijstelling (inspectiepunten, schade, risico staan daar al).
  - Primair zoekwoord: inrijstelling inspecteren
  - Secundaire zoekwoorden: drive-in stelling keuren, inrijstelling aanrijdschade
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: benadruk verhoogd aanrijdrisico bij inrijden.

- [ ] Draagarmstellingen inspecteren: aandachtspunten bij langgoed
  - Overgeslagen 2026-10-02: zelfde zoekwoord en intentie als bestaande pagina /inspecties/draagarmstelling (armen, verankering, kantelmoment staan daar al).
  - Primair zoekwoord: draagarmstelling inspecteren
  - Secundaire zoekwoorden: draagarmstelling keuren, cantilever stelling veiligheid
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: onderscheiden van commerciele pagina /inspecties/draagarmstelling; puur inhoudelijk (armen, verankering, uitkraging).

- [x] Doorrolstellingen inspecteren: rollenbanen en veiligheid
  - Gepubliceerd: 2026-10-02 -> https://www.rackcheck.nl/kennisbank/doorrolstelling-inspecteren/
  - Primair zoekwoord: doorrolstelling inspecteren
  - Secundaire zoekwoorden: doorrolstelling keuren, live storage inspectie
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen

- [ ] Entresolvloer en bordes: wat komt er bij inspectie kijken?
  - Overgeslagen 2026-10-06: zelfde zoekwoord en intentie als bestaande pagina /inspecties/bordes-entresolvloer.
  - Primair zoekwoord: entresolvloer inspecteren
  - Secundaire zoekwoorden: bordes keuren, verdiepingsvloer magazijn veiligheid
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: hekwerk, leuningen, vloerbelasting, valbeveiliging; geen verzonnen normwaarden.

- [x] Stellingen keuren na verplaatsing of herinrichting
  - Gepubliceerd: 2026-10-06 -> https://www.rackcheck.nl/kennisbank/stellingen-keuren-na-verplaatsing/
  - Primair zoekwoord: stellingen keuren na verplaatsing
  - Secundaire zoekwoorden: stelling verplaatst opnieuw keuren, magazijn herinrichten stelling
  - Zoekintentie: probleemgedreven / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt nulinspectie; focus op verplaatsing/hermontage.

- [x] Gebruikte magazijnstellingen gekocht: wanneer laten keuren?
  - Gepubliceerd: 2026-10-07 -> https://www.rackcheck.nl/kennisbank/gebruikte-magazijnstellingen-keuren/
  - Primair zoekwoord: gebruikte magazijnstellingen keuren
  - Secundaire zoekwoorden: tweedehands stelling veilig, overgenomen stelling keuren
  - Zoekintentie: probleemgedreven / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen

- [x] Jaarlijkse stellingkeuring verlopen: wat nu?
  - Gepubliceerd: 2026-10-08 -> https://www.rackcheck.nl/kennisbank/stellingkeuring-verlopen/
  - Primair zoekwoord: stellingkeuring verlopen
  - Secundaire zoekwoorden: keuring te laat stelling, herkeuring stelling
  - Zoekintentie: probleemgedreven / urgent
  - Gewenste CTA: inspectie aanvragen

## PRIORITEIT 4 - Terminologie, scope en offerte

- [x] Wat is het verschil tussen een stellinginspectie en een stellingkeuring?
  - Gepubliceerd: 2026-10-13 -> https://www.rackcheck.nl/kennisbank/verschil-stellinginspectie-stellingkeuring/
  - Primair zoekwoord: verschil stellinginspectie en stellingkeuring
  - Secundaire zoekwoorden: keuring of inspectie stelling, terminologie stelling
  - Zoekintentie: informatief
  - Gewenste CTA: uitleg over stellinginspecties
  - Opmerking: begripsverheldering; link naar nen-en-15635 en is-stellingkeuring-verplicht.

- [x] Nulkeuring versus periodieke keuring: wat is het verschil?
  - Gepubliceerd: 2026-10-15 -> https://www.rackcheck.nl/kennisbank/nulinspectie/ (opgenomen via onderhoud van nulinspectie; apart artikel zou cannibaliseren)
  - Primair zoekwoord: nulkeuring versus periodieke keuring
  - Secundaire zoekwoorden: eerste keuring stelling, periodieke inspectie stelling
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt nulinspectie; hier de vergelijking centraal.

- [x] Welke soorten magazijnstellingen moeten worden gekeurd?
  - Gepubliceerd: 2026-10-20 -> https://www.rackcheck.nl/kennisbank/welke-stellingen-keuren/
  - Primair zoekwoord: welke stellingen moeten gekeurd worden
  - Secundaire zoekwoorden: soorten magazijnstellingen keuren, stellingtypen inspectie
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen

- [ ] Moeten kleine of lichte magazijnstellingen ook worden gekeurd?
  - Overgeslagen 2026-10-21: kernvraag al beantwoord in welke-stellingen-keuren (H2 "En kleine of lichte stellingen?") en /inspecties/legbordstelling.
  - Primair zoekwoord: kleine stellingen keuren verplicht
  - Secundaire zoekwoorden: lichte stelling inspectie, legbordstelling keuren verplicht
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen

- [ ] Moeten stellingen zonder heftruckverkeer ook worden gekeurd?
  - Overgeslagen 2026-10-21: kernantwoord (ook handmatig beladen stellingen vallen onder 7.4a) al gedekt door welke-stellingen-keuren en /inspecties/legbordstelling.
  - Primair zoekwoord: stellingen zonder heftruck keuren
  - Secundaire zoekwoorden: handmatig laden stelling inspectie, magazijn zonder heftruck
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen

- [x] Wie betaalt de stellingkeuring: huurder of verhuurder?
  - Gepubliceerd: 2026-10-21 -> https://www.rackcheck.nl/kennisbank/stellingkeuring-huurder-of-verhuurder/
  - Primair zoekwoord: stellingkeuring huurder of verhuurder
  - Secundaire zoekwoorden: stellingen huurpand keuren, verantwoordelijkheid huurder stelling
  - Zoekintentie: informatief
  - Gewenste CTA: contact opnemen

- [x] Hoeveel stellingsecties heeft mijn magazijn en hoe tel ik ze?
  - Gepubliceerd: 2026-11-08 -> https://www.rackcheck.nl/kennisbank/stellingsecties-tellen/
  - Primair zoekwoord: stellingsecties tellen
  - Secundaire zoekwoorden: aantal secties stelling offerte, hoeveel velden stelling
  - Zoekintentie: commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: helpt bezoeker een offerte voor te bereiden; link naar prijzen.

- [x] Hoe lang duurt een stellinginspectie en moet het magazijn stil?
  - Gepubliceerd: 2026-11-10 -> https://www.rackcheck.nl/kennisbank/hoe-lang-duurt-stellinginspectie/
  - Primair zoekwoord: hoe lang duurt stellinginspectie
  - Secundaire zoekwoorden: magazijn stilleggen inspectie, doorlooptijd stellingkeuring
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen

- [ ] Welke informatie heeft de inspecteur vooraf van u nodig?
  - Overgeslagen 2026-11-19: aan te leveren gegevens (type, rijen/secties, hoogte, niveaus, locaties, tekening, merk, vorig rapport, bekende schade) staan al in stellingsecties-tellen (H2 "Wat u aanlevert bij een aanvraag"); klaarleggen van tekeningen/belastinggegevens/rapport en contactpersoon in magazijn-voorbereiden-op-inspectie en hoe-lang-duurt-stellinginspectie; dossier in documenten-magazijnstellingen.
  - Primair zoekwoord: informatie voor stellinginspectie
  - Secundaire zoekwoorden: voorbereiden stellingkeuring gegevens, inspecteur aanleveren
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt magazijn-voorbereiden-op-inspectie; focus op aan te leveren gegevens/tekeningen.

## PRIORITEIT 5 - Aanvulling 2026-11-24 (gebruik, organisatie en randvoorwaarden)

Toegevoegd na uitputting van de eerdere backlog. Per item staat welke bestaande content al
raakvlak heeft; houd het artikel binnen de genoemde focus. Bronnen zijn een startpunt en moeten
tijdens de run actueel worden gecontroleerd; niets uit deze notities is al geverifieerd.

- [ ] Ontbrekende of losse liggerborgingen: hoe gevaarlijk is dat?
  - Primair zoekwoord: liggerborging ontbreekt
  - Secundaire zoekwoorden: borgpen ligger stelling, ligger springt uit staander, veiligheidspen palletstelling
  - Zoekintentie: informatief (schade/urgentie)
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: vergelijkbaar format als losse-vloerankers-magazijnstelling. Raakvlak: wat-wordt-gecontroleerd en checklist noemen borging alleen als controlepunt; hier focus op functie, oorzaken (aanrijding van onderaf, herinrichting) en wat te doen. Bron: fabrikantinstructie, NEN-EN 15635 (alleen benoemen, niet citeren), Arbobesluit 7.4a. Geen classificatie verzinnen.

- [ ] Klimmen in een magazijnstelling: mag dat?
  - Primair zoekwoord: klimmen in stelling
  - Secundaire zoekwoorden: stelling beklimmen verboden, op liggers staan magazijn, werken op hoogte stelling
  - Zoekintentie: informatief (veiligheid/gedrag)
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: geen bestaand artikel. Bronnen: Arbobesluit hoofdstuk 3 (valgevaar, art. 3.16) en hoofdstuk 7 (gebruik arbeidsmiddelen volgens bestemming), Arboportaal "Werken op hoogte". Alternatieven benoemen (orderpicker, rolsteiger, trap) zonder merkadvies.

- [ ] Doorvalbeveiliging in palletstellingen: wanneer is die nodig?
  - Primair zoekwoord: doorvalbeveiliging palletstelling
  - Secundaire zoekwoorden: doorvalnet stelling, rugleuning palletstelling, vallende lading magazijn
  - Zoekintentie: informatief / oplossingsgericht
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: geen bestaande treffers op "doorval" in src. Bronnen: Arbobesluit (vallende voorwerpen, art. 3.16 en hoofdstuk 7), RI&E, fabrikantinstructie. Niet stellen dat het altijd verplicht is; het hangt af van de risicobeoordeling. Benoemen wat de inspecteur hierbij beoordeelt.

- [ ] Pallets in een stelling plaatsen: welke fouten ziet u het vaakst?
  - Primair zoekwoord: pallets correct plaatsen stelling
  - Secundaire zoekwoorden: palletoverstek ligger, beschadigde pallet stelling, pallet dwars op ligger
  - Zoekintentie: informatief (dagelijks gebruik)
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakvlak doorrolstelling-inspecteren (alleen doorrol) en belastingbord (gewicht). Hier focus op plaatsing in conventionele palletstellingen: oriëntatie, overstek, beschadigde pallets, ladingen tegen schoren/staanders. Overstekmaten en toleranties NIET noemen tenzij uit een openbare primaire bron; anders verwijzen naar fabrikant/belastinggegevens.

- [ ] Verrijdbare (mobiele) stellingen keuren: waar let u op?
  - Primair zoekwoord: verrijdbare stelling keuren
  - Secundaire zoekwoorden: mobiele stelling inspectie, rijdende archiefstelling keuring, verrijdbare palletstelling
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: alleen een tabelrij in welke-stellingen-keuren; geen /inspecties-pagina voor dit type. Onderscheid staalconstructie (stellinginspectie) vs onderwagens/aandrijving/beveiligingen (onderhoud volgens fabrikant). Machinerichtlijn/Machineverordening alleen noemen als de bron dat bevestigt.

- [ ] Stellingkeuring in België: wat zegt de Codex over het welzijn op het werk?
  - Primair zoekwoord: stellingkeuring België
  - Secundaire zoekwoorden: rekkeuring verplicht België, inspectie magazijnrekken Codex, palletrekken keuring
  - Zoekintentie: informatief (BE-doelgroep)
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: welke-stellingen-keuren en stellingkeuring-huurder-of-verhuurder hebben alleen een korte alinea over België. Bron uitsluitend primair: Codex boek IV (arbeidsmiddelen) via werk.belgie.be / FOD WASO. Let op Belgische terminologie (rekken, preventieadviseur). Geen frequentie of erkenningsplicht noemen die niet in de Codex staat.

- [ ] Magazijnstellingen in de RI&E: wat neemt u op?
  - Primair zoekwoord: RI&E magazijnstellingen
  - Secundaire zoekwoorden: risico-inventarisatie stellingen, plan van aanpak magazijn, RI&E palletstelling
  - Zoekintentie: informatief (compliance)
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: arbeidsinspectie-magazijn noemt de RI&E alleen als controlepunt; hoe-vaak-stellingen-keuren noemt vastleggen in RI&E. Hier focus op concrete risico's en maatregelen voor stellingen in RI&E en plan van aanpak. Bron: Arbowet art. 5, Arboportaal RI&E, RI&E-instrumenten (alleen noemen als ze bestaan).

- [ ] Stellingschade melden: hoe richt u een meldprocedure in?
  - Primair zoekwoord: stellingschade melden
  - Secundaire zoekwoorden: meldprocedure aanrijdschade, schade stelling melden medewerkers, schaderegistratie magazijn
  - Zoekintentie: informatief / organisatorisch
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: raakvlak na-heftruckaanrijding (acute stappen), aanrijdschade-voorkomen ("melden zonder schuldvraag") en wat-is-een-prses. Hier focus op het proces: wie meldt, hoe, registratie, opvolging door PRSES. Bron: Arbowet art. 8 (voorlichting), NEN-EN 15635 rol PRSES (benoemen, niet citeren). Geen statistieken verzinnen.

- [ ] Medewerkers instrueren over veilig stellinggebruik: wat moet erin?
  - Primair zoekwoord: instructie stellinggebruik medewerkers
  - Secundaire zoekwoorden: toolbox magazijnstelling, voorlichting stellingen Arbowet, heftruckchauffeur instructie stelling
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: documenten-magazijnstellingen heeft een korte H3 over voorlichting. Pak dit alleen op als stellingschade-melden de instructiekant niet al afdekt; anders overslaan met reden. Bron: Arbowet art. 8, Arbobesluit art. 7.5 (voorlichting/onderricht arbeidsmiddelen; nummer verifiëren).

- [ ] Stellingen in koel- en vriescellen: extra aandachtspunten bij inspectie
  - Primair zoekwoord: stelling vriescel inspectie
  - Secundaire zoekwoorden: palletstelling koelcel, stellingen lage temperatuur, ijsvorming stelling
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: roest-corrosie-magazijnstelling noemt koelcellen alleen bij condens. Alleen publiceren als er een betrouwbare primaire of fabrikantbron is voor de aandachtspunten; anders overslaan met reden. Geen materiaal- of temperatuurgrenzen verzinnen.

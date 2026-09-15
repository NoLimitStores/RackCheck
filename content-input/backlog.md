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
magazijn-voorbereiden-op-inspectie, informatie-in-inspectierapport.

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

- [ ] Verbogen ligger in een magazijnstelling: wanneer is deze onveilig?
  - Primair zoekwoord: verbogen ligger magazijnstelling
  - Secundaire zoekwoorden: doorgebogen ligger, ligger vervangen stelling
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: onderscheid doorbuiging door belasting vs. aanrijdschade; geen verzonnen mm-grenzen.

- [ ] Doorbuiging van een ligger: hoeveel is toegestaan?
  - Primair zoekwoord: doorbuiging ligger stelling toegestaan
  - Secundaire zoekwoorden: maximale doorbuiging ligger, ligger doorhangt
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: verwijs naar fabrikantopgave en beoordeling door deskundige; noem geen concrete tolerantie zonder bron.

- [ ] Beschadigde staander: vervangen of repareren?
  - Primair zoekwoord: beschadigde staander stelling vervangen
  - Secundaire zoekwoorden: stellingstaander repareren, staander vervangen kosten
  - Zoekintentie: probleemgedreven / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt staander-rechtbuigen-lassen; focus hier op de afweging vervangen vs. herstellen en wie dat mag beoordelen.

- [ ] Beschadigde schoor in een palletstelling: wat moet u doen?
  - Primair zoekwoord: beschadigde schoor palletstelling
  - Secundaire zoekwoorden: diagonaal stelling kapot, schoor vervangen stelling
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Scheve magazijnstelling: wanneer is scheefstand te groot?
  - Primair zoekwoord: scheve magazijnstelling
  - Secundaire zoekwoorden: stelling staat scheef, scheefstand stelling toegestaan
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: onderscheid onbelaste/belaste scheefstand; verwijs naar beoordeling, geen verzonnen grens.

- [ ] Losse of ontbrekende vloerankers bij magazijnstellingen: hoe gevaarlijk is dat?
  - Primair zoekwoord: losse vloerankers magazijnstelling
  - Secundaire zoekwoorden: verankering stelling los, stelling niet verankerd
  - Zoekintentie: probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Wanneer moet een beschadigde stelling direct worden ontlast?
  - Primair zoekwoord: beschadigde stelling ontlasten
  - Secundaire zoekwoorden: stelling leeghalen schade, stelling afzetten
  - Zoekintentie: urgent / probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Mag een beschadigde magazijnstelling worden gerepareerd?
  - Primair zoekwoord: beschadigde stelling repareren mag dat
  - Secundaire zoekwoorden: stelling herstellen regels, reparatie stelling toegestaan
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: benoem fabrikantinstructies en originele onderdelen; raakt staander-rechtbuigen-lassen, houd het breder.

- [ ] Roest en corrosie op magazijnstellingen: wanneer wordt het een risico?
  - Primair zoekwoord: roest magazijnstelling
  - Secundaire zoekwoorden: corrosie stelling, verzinkte stelling roest
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen

## PRIORITEIT 2 - Compliance, verantwoordelijkheid en aansprakelijkheid

- [ ] Mag een medewerker zelf stellingschade beoordelen?
  - Primair zoekwoord: stellingschade zelf beoordelen
  - Secundaire zoekwoorden: interne controle stelling medewerker, wie beoordeelt schade
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen
  - Opmerking: raakt interne-controle-vs-externe-inspectie; focus op de grens tussen signaleren en beoordelen.

- [ ] Hoe lang moet u een stellingkeuringsrapport bewaren?
  - Primair zoekwoord: stellingkeuringsrapport bewaren
  - Secundaire zoekwoorden: bewaartermijn keuringsrapport, inspectierapport bewaren
  - Zoekintentie: informatief
  - Gewenste CTA: contact opnemen

- [ ] Wat controleert de Nederlandse Arbeidsinspectie in een magazijn?
  - Primair zoekwoord: arbeidsinspectie magazijn stellingen
  - Secundaire zoekwoorden: inspectie SZW magazijn, controle stellingen arbeidsinspectie
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: baseer op Arbeidsinspectie/Arboportaal; geen verzonnen boetebedragen.

- [ ] Wie is aansprakelijk bij een ingestorte magazijnstelling?
  - Primair zoekwoord: aansprakelijkheid ingestorte stelling
  - Secundaire zoekwoorden: stelling ingestort aansprakelijk, ongeval magazijnstelling
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: algemene toelichting werkgeversverantwoordelijkheid; geen juridisch advies pretenderen.

- [ ] Stellingkeuring en verzekering: welke documenten moet u kunnen aantonen?
  - Primair zoekwoord: stellingkeuring verzekering
  - Secundaire zoekwoorden: keuringsbewijs stelling verzekeraar, aantonen onderhoud stelling
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen

- [ ] Welke documenten horen bij veilig gebruik van magazijnstellingen?
  - Primair zoekwoord: documenten magazijnstellingen veiligheid
  - Secundaire zoekwoorden: belastingbord tekening stelling, dossier stellingen
  - Zoekintentie: informatief
  - Gewenste CTA: contact opnemen
  - Opmerking: raakt belastingbord; houd dit breder (dossier/aantoonbaarheid).

- [ ] Magazijnstellingen aanpassen: wanneer is een nieuwe draagkrachtberekening nodig?
  - Primair zoekwoord: draagkrachtberekening magazijnstelling
  - Secundaire zoekwoorden: stelling ombouwen draagvermogen, liggerniveau wijzigen
  - Zoekintentie: informatief / probleemgedreven
  - Gewenste CTA: inspectie aanvragen

- [ ] Liggerhoogte veranderen: moet het belastingbord worden aangepast?
  - Primair zoekwoord: liggerhoogte veranderen belastingbord
  - Secundaire zoekwoorden: stelling verstellen belasting, veldlast aanpassen
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt belastingbord; focus op het gevolg van verstellen voor de toegestane belasting.

## PRIORITEIT 3 - Stellingtypen en praktische inspectievragen

- [ ] Inrijstellingen (drive-in) inspecteren: waar wordt op gelet?
  - Primair zoekwoord: inrijstelling inspecteren
  - Secundaire zoekwoorden: drive-in stelling keuren, inrijstelling aanrijdschade
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: benadruk verhoogd aanrijdrisico bij inrijden.

- [ ] Draagarmstellingen inspecteren: aandachtspunten bij langgoed
  - Primair zoekwoord: draagarmstelling inspecteren
  - Secundaire zoekwoorden: draagarmstelling keuren, cantilever stelling veiligheid
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: onderscheiden van commerciele pagina /inspecties/draagarmstelling; puur inhoudelijk (armen, verankering, uitkraging).

- [ ] Doorrolstellingen inspecteren: rollenbanen en veiligheid
  - Primair zoekwoord: doorrolstelling inspecteren
  - Secundaire zoekwoorden: doorrolstelling keuren, live storage inspectie
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen

- [ ] Entresolvloer en bordes: wat komt er bij inspectie kijken?
  - Primair zoekwoord: entresolvloer inspecteren
  - Secundaire zoekwoorden: bordes keuren, verdiepingsvloer magazijn veiligheid
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: hekwerk, leuningen, vloerbelasting, valbeveiliging; geen verzonnen normwaarden.

- [ ] Stellingen keuren na verplaatsing of herinrichting
  - Primair zoekwoord: stellingen keuren na verplaatsing
  - Secundaire zoekwoorden: stelling verplaatst opnieuw keuren, magazijn herinrichten stelling
  - Zoekintentie: probleemgedreven / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt nulinspectie; focus op verplaatsing/hermontage.

- [ ] Gebruikte magazijnstellingen gekocht: wanneer laten keuren?
  - Primair zoekwoord: gebruikte magazijnstellingen keuren
  - Secundaire zoekwoorden: tweedehands stelling veilig, overgenomen stelling keuren
  - Zoekintentie: probleemgedreven / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen

- [ ] Jaarlijkse stellingkeuring verlopen: wat nu?
  - Primair zoekwoord: stellingkeuring verlopen
  - Secundaire zoekwoorden: keuring te laat stelling, herkeuring stelling
  - Zoekintentie: probleemgedreven / urgent
  - Gewenste CTA: inspectie aanvragen

## PRIORITEIT 4 - Terminologie, scope en offerte

- [ ] Wat is het verschil tussen een stellinginspectie en een stellingkeuring?
  - Primair zoekwoord: verschil stellinginspectie en stellingkeuring
  - Secundaire zoekwoorden: keuring of inspectie stelling, terminologie stelling
  - Zoekintentie: informatief
  - Gewenste CTA: uitleg over stellinginspecties
  - Opmerking: begripsverheldering; link naar nen-en-15635 en is-stellingkeuring-verplicht.

- [ ] Nulkeuring versus periodieke keuring: wat is het verschil?
  - Primair zoekwoord: nulkeuring versus periodieke keuring
  - Secundaire zoekwoorden: eerste keuring stelling, periodieke inspectie stelling
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt nulinspectie; hier de vergelijking centraal.

- [ ] Welke soorten magazijnstellingen moeten worden gekeurd?
  - Primair zoekwoord: welke stellingen moeten gekeurd worden
  - Secundaire zoekwoorden: soorten magazijnstellingen keuren, stellingtypen inspectie
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen

- [ ] Moeten kleine of lichte magazijnstellingen ook worden gekeurd?
  - Primair zoekwoord: kleine stellingen keuren verplicht
  - Secundaire zoekwoorden: lichte stelling inspectie, legbordstelling keuren verplicht
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen

- [ ] Moeten stellingen zonder heftruckverkeer ook worden gekeurd?
  - Primair zoekwoord: stellingen zonder heftruck keuren
  - Secundaire zoekwoorden: handmatig laden stelling inspectie, magazijn zonder heftruck
  - Zoekintentie: informatief
  - Gewenste CTA: vrijblijvend advies aanvragen

- [ ] Wie betaalt de stellingkeuring: huurder of verhuurder?
  - Primair zoekwoord: stellingkeuring huurder of verhuurder
  - Secundaire zoekwoorden: stellingen huurpand keuren, verantwoordelijkheid huurder stelling
  - Zoekintentie: informatief
  - Gewenste CTA: contact opnemen

- [ ] Hoeveel stellingsecties heeft mijn magazijn en hoe tel ik ze?
  - Primair zoekwoord: stellingsecties tellen
  - Secundaire zoekwoorden: aantal secties stelling offerte, hoeveel velden stelling
  - Zoekintentie: commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: helpt bezoeker een offerte voor te bereiden; link naar prijzen.

- [ ] Hoe lang duurt een stellinginspectie en moet het magazijn stil?
  - Primair zoekwoord: hoe lang duurt stellinginspectie
  - Secundaire zoekwoorden: magazijn stilleggen inspectie, doorlooptijd stellingkeuring
  - Zoekintentie: informatief / commercieel ondersteunend
  - Gewenste CTA: inspectie aanvragen

- [ ] Welke informatie heeft de inspecteur vooraf van u nodig?
  - Primair zoekwoord: informatie voor stellinginspectie
  - Secundaire zoekwoorden: voorbereiden stellingkeuring gegevens, inspecteur aanleveren
  - Zoekintentie: informatief
  - Gewenste CTA: inspectie aanvragen
  - Opmerking: raakt magazijn-voorbereiden-op-inspectie; focus op aan te leveren gegevens/tekeningen.

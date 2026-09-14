# RackCheck.nl dagelijkse kennisbank-publicatieroutine (cloud)

Dit is de instructie die de dagelijkse cloud-routine uitvoert. Zelfstandig; geen bevestiging vragen.
De eigenaar controleert gepubliceerde artikelen achteraf.

## Instellingen
- PUBLICATIERITME: DAGELIJKS (max. 1 contentactie per kalenderdag)
- ACTIEMODUS: AUTO (normaal nieuw artikel; na elke 5 nieuwe artikelen 1 onderhoudsrun)
- ONDERHOUD_NA_AANTAL_NIEUWE_ARTIKELEN: 5
- MAX_CONTENTACTIES_PER_RUN: 1

## Omgeving (belangrijk, cloud)
- Repo: `NoLimitStores/RackCheck`, branch `main`. Je werkt in een cloud-clone; lokale
  bestanden of externe schijven bestaan hier niet.
- Productie: een push naar `main` wordt door Vercel automatisch gedeployed naar
  `https://rackcheck.nl`. Gebruik dat domein voor canonicals en live-controle.
- Node-project (Next.js). Kwaliteitspoorten: `npm run lint` en `npm run build`
  (er draait een prebuild em-dash-check: gebruik nooit em dashes).

## Architectuur
- Kennisbankartikelen zijn TypeScript-objecten in `src/lib/kennisbank.ts`, in de array
  `artikelen`. Een nieuw artikel = een nieuw object toevoegen. Route: `/kennisbank/<slug>`.
- Objectvorm: `slug, category, title, h1, metaTitle, metaDescription, excerpt, answer,
  updated (YYYY-MM-DD), featured?, image?, blocks[], faq[], related[]`.
  - `category` moet een van de bestaande categorieen zijn (zie `categories`).
  - `blocks` gebruikt het `Block`-type (h2, h3, p, ul, ol, note, table).
  - `image` (optioneel maar VERPLICHT gebruiken voor nieuwe artikelen):
    `{ src: "/images/praktijk/<bestand>", alt: "...", caption?: "..." }`. Dit wordt als
    hoofdafbeelding, OG-image en Article-schema-image gebruikt. Zonder `image` valt de
    template terug op een generieke poolfoto; dat is niet toegestaan voor nieuwe artikelen.
  - `related` bevat bestaande slugs (minimaal 2-3 relevante).
- Overzicht: `src/app/kennisbank/page.tsx`. Sitemap en llms-bestanden worden gegenereerd;
  controleer dat het nieuwe artikel meekomt.
- Herbruik bestaande componenten (AnswerBox, Blocks, FAQ, CTASection, Breadcrumbs). Introduceer
  geen nieuwe architectuur.

## Input
- Backlog: `content-input/backlog.md` (alleen kennisbank-onderwerpen; locatie- en dienstpagina's
  zijn buiten scope). Kies het eerste openstaande geschikte item in prioriteitsvolgorde.
- Status: `content-input/publishing-state.json`.
- Foto's: `content-input/afbeeldingen-manifest.md` beschrijft de gecureerde praktijkfoto's in
  `public/images/praktijk/`. Gebruik UITSLUITEND foto's die in de repo staan
  (`public/images/` en `public/images/praktijk/`). Er is geen externe fotobron in de cloud.
- Onderhoudslog: `content-input/maintenance-log.md` (aanmaken indien nodig).

## Werkwijze per run
1. Controleer ritme: als `lastSuccessfulRun` van vandaag is (UTC-kalenderdag), publiceer niets
   en rapporteer wanneer de volgende run mag.
2. Controleer repo, branch, en dat de working tree schoon is. Rond een aantoonbaar eigen,
   onafgeronde eerdere run veilig af; gooi nooit werk van anderen weg; geen `git reset --hard`.
3. Kies nieuw vs. onderhoud volgens AUTO (onderhoud na 5 nieuwe, of eerder bij aantoonbaar
   onjuiste/verouderde info of een kapotte pagina).
4. NIEUW: kies backlog-item -> cannibalisatiecheck (`rg -ni "<term>" src`) tegen bestaande
   artikelen en pagina's -> actueel bronnenonderzoek (primaire bronnen) -> schrijf een
   volledig, praktisch, scanbaar artikel dat de zoekintentie vroeg beantwoordt -> kies een
   inhoudelijk passende praktijkfoto uit het manifest -> zet interne links (min. 1 commerciele
   pagina + relevante artikelen) en voeg vanuit 2-5 bestaande artikelen een link naar het
   nieuwe artikel toe (via hun `related`) -> metadata/schema kloppen automatisch via de template.
5. ONDERHOUD: kies het artikel met de meeste verbeterpotentie; verbeter inhoud/claims/links/
   afbeelding; behoud slug en `datePublished`-gedrag; log in `maintenance-log.md`.
6. Kwaliteit: `npm run lint` en `npm run build` moeten slagen. Los fouten op; lukt dat niet
   betrouwbaar, publiceer niets en rapporteer.
7. Publiceer: commit alleen de gewijzigde/nieuwe bestanden met een duidelijke boodschap
   (`Add RackCheck article: <onderwerp>` of `Update RackCheck article: <onderwerp>`), push naar
   `main`, wacht op de Vercel-deploy, controleer live op `https://rackcheck.nl/kennisbank/<slug>`
   (HTTP 200, title, H1, canonical, zichtbare content, afbeelding + alt, Article-schema, CTA,
   interne links).
8. Werk na geslaagde live-controle bij: vink het backlog-item af (met live-URL + datum), werk
   `publishing-state.json` bij (tellers, `lastActionType`, `lastSuccessfulRun`, URL), en commit +
   push die status/backlog-wijziging.

## Inhoud, betrouwbaarheid, doelgroep
- Schrijf voor NL/BE B2B (warehouse/HSE/QHSE-managers, preventiemedewerkers, technische dienst).
  Professioneel, begrijpelijk Nederlands; spreek de lezer aan met u waar passend.
- Verzin nooit toleranties, mm-grenzen, belastingwaarden, inspectiefrequenties, normteksten,
  wettelijke verplichtingen, certificeringen, auteurs, reviewers of praktijkcases. Benoem of een
  eis uit wet, norm, richtlijn, fabrikantinstructie of praktijkadvies komt. Bij onzekerheid:
  weglaten of de onzekerheid duidelijk formuleren.
- Controleer belangrijke claims bij primaire bronnen: Arboportaal, Nederlandse Arbeidsinspectie,
  wetten.overheid.nl, Rijksoverheid, NEN. Kopieer geen beschermde normtekst; parafraseer en
  verwijs. Externe links: `target="_blank" rel="noopener noreferrer"`.
- Geen em dashes. Geen keyword stuffing. Geen fictieve experts of resultaten.
- Auteurschap: gebruik alleen bestaande structuren (AuthorBlock/SourceRef). Verzin geen persoon.

## Bedrijfsgegevens (verifieer tegen `src/lib/site.ts`)
Website https://rackcheck.nl - e-mail planning@rackcheck.nl - tel. +31 77 474 1010 -
Henri Hermansstraat 1, Reuver. Introduceer geen afwijkende gegevens.

## Stopcondities
Publiceer niets bij: te vroege run, ontbrekende backlog, geen geschikt onopgelost onderwerp,
cannibalisatie, ontbrekende betrouwbare bron, geen passende repo-foto, niet-herstelbare lint/
build/typecheck, of een mislukte deploy. Rapporteer dan de blokkade en wanneer een nieuwe poging
verantwoord is. Werk `publishing-state.json` bij een mislukte run niet bij.

## Rapport per run
Rapporteer: gepubliceerd of niet, nieuw/onderhoud, titel, live-URL, datum, gekozen backlog-item
en reden, primair/secundair zoekwoord + intentie, meta title/description, gebruikte foto(s) +
waarom passend, interne links (uit en naar), CTA, primaire bronnen, lint/build/commit/deploy/
live-controle, resterende backlog en of de volgende run nieuw of onderhoud wordt.

## Git-attributie
Sluit iedere commit af met:
Co-Authored-By: Claude Opus 4.8 <noreply@anthropic.com>

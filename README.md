# RackCheck

Onafhankelijke inspecties van magazijnstellingen. Marketing- en leadgeneratiewebsite,
gebouwd met Next.js (App Router), TypeScript en Tailwind CSS v4.

## Lokaal starten

```bash
npm install
npm run lint
npm run build
npm run dev
```

De developmentserver draait standaard op http://localhost:3000 (in deze werkomgeving
op poort 4200 via `.claude/launch.json`).

## Structuur

- `src/app` bevat alle routes (App Router).
- `src/components` bevat de herbruikbare componenten.
- `src/lib` bevat de centrale data en configuratie:
  - `site.ts` centrale bedrijfs- en contactconfiguratie.
  - `pricing.ts` prijsstructuur.
  - `content.ts` gedeelde secties (proces, controlepunten, FAQ, situaties).
  - `stellingtypen.ts` data voor `/inspecties/[type]`.
  - `kennisbank.ts` de 18 kennisbankartikelen.
  - `pijnpunten.ts` de vijf pijnpunt-landingspagina's.
  - `regios.ts` de regiopagina's.
- De statische voorloper-site staat in `legacy/` en is geen onderdeel van de build.

## Contactgegevens

De algemene contactgegevens en de regionale inspecteurs staan centraal in
`src/lib/site.ts` (`site`, `inspecteurs`, `whatsappMessage`).

- Algemeen aanspreekpunt: Tjeerd Krikhaar, `+31 6 53 81 77 75`, `t.krikhaar@hovuma.com`.
- Alle algemene CTA's (telefoon, WhatsApp, e-mail, formulier) gaan naar Tjeerd.
- Marcel Huijs (`+31 6 28 80 89 92`, `m.huijs@hovuma.com`) is alleen zichtbaar in
  het werkgebiedblok voor Midden- en Noord-Nederland (`Inspecteurs`-component).

## Nog te controleren of in te vullen (PLACEHOLDER)

Deze staan gemarkeerd in `src/lib/site.ts`. Verzin geen gegevens.

- [ ] Juridische bedrijfsnaam (`legalName`)
- [ ] Adresgegevens (`address`)
- [ ] KvK-nummer (`kvk`) en btw-nummer (`btw`)
- [ ] LinkedIn of andere socials (`social`)
- [ ] Definitief domein (`NEXT_PUBLIC_SITE_URL`)
- [ ] Prijstarief `startingPrice` bevestigen (`src/lib/pricing.ts`)
- [ ] Inhoudelijke claims over normen en werkwijze laten valideren
- [ ] Officiële logo's `RACKCHECK logo wit.png` en `RACKCHECK logo (1).png`
      aanleveren (zie hieronder)

## Logo's

De header gebruikt het woordmerk-component en de footer het bestaande witte logo
(`public/images/rackcheck-logo-white.png`). De twee door de opdrachtgever genoemde
bestanden (`RACKCHECK logo wit.png` en `RACKCHECK logo (1).png`) waren niet aanwezig
in de projectmap en konden dus nog niet worden geplaatst. Lever deze aan (bij
voorkeur transparant en horizontaal), dan worden ze in header, footer en contact
verwerkt.

## Environment variables (productie)

Zet deze op het hostingplatform (bijvoorbeeld Vercel):

- `NEXT_PUBLIC_SITE_URL` het definitieve productiedomein, bijvoorbeeld `https://rackcheck.nl`.
- `WEB3FORMS_ACCESS_KEY` de sleutel voor de formulierverwerking. Zonder deze sleutel
  toont de site lokaal een correcte succesflow en logt inzendingen alleen in
  development. Zet nooit een geheime sleutel in de repository.
- `NEXT_PUBLIC_GA_ID` optioneel, het Google Analytics 4 meet-ID. Zonder waarde wordt
  er geen tracking geladen.

## Formulieren

Het lead-formulier (`src/components/LeadForm.tsx`) verstuurt naar de eigen API-route
`src/app/api/lead/route.ts`. Die route:

- controleert een honeypot-veld tegen spam,
- valideert de verplichte velden server-side,
- stuurt de inzending door naar Web3Forms wanneer `WEB3FORMS_ACCESS_KEY` is gezet,
- logt de inzending in development wanneer er geen sleutel is.

**Ontvanger:** de recipient wordt door Web3Forms bepaald op basis van het account
achter `WEB3FORMS_ACCESS_KEY`. Gebruik een access key van een Web3Forms-account dat
aflevert bij `t.krikhaar@hovuma.com`. De ontvanger staat dus niet in de code; die
stel je in bij Web3Forms en zet je als env var in Vercel.

UTM-parameters, de landingspagina en de bronpagina worden automatisch meegestuurd.

## Contentregels

Er staan geen zichtbare em dashes of en dashes in de copy. De check
`scripts/no-dash.mjs` draait vóór elke build en blokkeert de build als er toch een
insluipt.

## SEO en GEO

- Dynamische `sitemap.xml` en `robots.txt`.
- `/llms.txt` en `/llms-full.txt` voor AI-zoekmachines.
- Structured data: ProfessionalService, WebSite, Service, Article, FAQPage,
  BreadcrumbList en HowTo.
- Per pagina unieke titel, meta description en canonical.

## Afbeeldingen

De gebruikte foto's en logo's staan in `public/images/`. De brand-foto's tonen echte
RackCheck-inspecteurs. Controleer bij het toevoegen van nieuwe afbeeldingen dat de
getoonde stellingen technisch correct zijn opgebouwd.

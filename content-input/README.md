# content-input

Aansturing voor de dagelijkse RackCheck kennisbank-publicatieroutine (cloud).

- `backlog.md` - onderwerpenlijst (alleen kennisbankartikelen). De routine kiest het eerste
  openstaande geschikte item in prioriteitsvolgorde en vinkt het pas af na een geslaagde
  live-controle.
- `publishing-state.json` - status tussen runs (tellers, laatste run, laatste URL's). Alleen
  bijwerken na een geslaagde publicatie + live-controle.
- `afbeeldingen-manifest.md` - gecureerde praktijkfoto's in `public/images/praktijk/` met
  suggesties voor plaatsing en alt-tekst. Alleen foto's uit de repo gebruiken.
- `routine-prompt.md` - de volledige instructie die de routine uitvoert.
- `maintenance-log.md` - wordt door de routine bijgehouden bij onderhoudsruns.

Artikelen leven als objecten in `src/lib/kennisbank.ts` en verschijnen op `/kennisbank/<slug>`.
Een push naar `main` deployt via Vercel naar https://rackcheck.nl.

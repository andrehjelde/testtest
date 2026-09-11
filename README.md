# Delekatalog

Vanlig statisk nettside i HTML, CSS og JavaScript. Ingen installasjon eller bygging er nødvendig. Åpne `index.html` i nettleseren for å se nettsiden.

## Kategorier og produkter

Alle katalogdata ligger i `data.js`. Legg til en oppføring under `categories` for å opprette en ny fane. Hvert produkt i `products` kobles til fanen via `category`.

Produktfelter: `id`, `category`, `name`, `partNumber`, `description`, `fits`, `availability`. Utelat informasjon som ikke er bekreftet. Katalogen er foreløpig tom, og har fanene Høyttalere og Fjernlyssignal.

Excel, PDF og andre kildefiler kan leveres i samtalen og brukes til å fylle katalogen. Nettsiden har ikke filopplasting eller automatisk dokumenttolking.

## GitHub Pages

Last filene i denne mappen opp til et GitHub-repositorium. I repositoriets Settings → Pages velger du «Deploy from a branch», deretter aktuell gren og mappen «/ (root)».

Alle stier er relative, slik at nettsiden også virker under et prosjektnavn på GitHub Pages. Publiser bare data som skal være synlige for nettsidens besøkende.

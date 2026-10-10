# sv

Everything you need to build a Svelte project, powered by [`sv`](https://github.com/sveltejs/cli).

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

```sh
# create a new project
npx sv create my-app
```

To recreate this project with the same configuration:

```sh
# recreate this project
npx sv@0.17.1 create --template minimal --no-types --install npm .
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.

## SNAPPTHIS

SNAPPTHIS is een webapplicatie waarmee gebruikers samen met een groep photo mind maps (Snappmaps) kunnen maken. Groepsleden krijgen een foto-opdracht en kunnen hun gemaakte foto's eenvoudig delen en bekijken.

<table>
  <tr>
    <td align="center"><strong>Landing page</strong></td>
    <td align="center"><strong>Groups page</strong></td>
    <td align="center"><strong>Snappmap view</strong></td>
    <td align="center"><strong>Snappmap detail view</strong></td>
    <td align="center"><strong>User page</strong></td>
  </tr>
  <tr>
    <td><img width="200" height="350" alt="Landing page" src="https://github.com/user-attachments/assets/46a2d115-bcae-4365-933e-914f2424d73d" /></td>
    <td><img width="200" height="350" alt="Groups page" src="https://github.com/user-attachments/assets/6097301e-c865-4907-b17d-63dc59f525aa" /></td>
    <td><img width="200" height="350" alt="Snappmap view" src="https://github.com/user-attachments/assets/b350ed01-656c-4f8b-b093-faca8c47139c" /></td>
    <td><img width="200" height="350" alt="Snappmap detail view" src="https://github.com/user-attachments/assets/3ee43bfa-5ce0-4177-915d-4de21f20c551" /></td>
    <td><img width="200" height="350" alt="User page" src="https://github.com/user-attachments/assets/8b976343-e2e8-459e-87e5-dcf5349402bd" /></td>
  </tr>
</table>

## Gebruik van de site 

Gebruikers kunnen binnen hun groepen de beschikbare Snappmaps bekijken. Per Snappmap kunnen zij de bijbehorende Snapps bekijken en hierop reageren met een heart, tomato of star. Wanneer een Snappmap actief is, krijgen studenten de mogelijkheid om zelf een Snapp te maken en deze binnen de betreffende Snappmap te uploaden.

Docenten hebben daarnaast extra mogelijkheden om groepen te beheren. Zij kunnen leden aan een groep toevoegen en binnen een groep nieuwe Snappmaps aanmaken. Een Snappmap kan vervolgens actief worden gemaakt, waarna studenten hun foto's kunnen insturen.


## Bronnen 


## Designkeuzes 

Het basisdesign is aangeleverd door de opdrachtgever. Wij hebben dit verder uitgewerkt in onze styleguide. De aangeleverde HEX-kleuren zijn omgezet naar HSL, waarbij we per kleur extra lichte en donkere varianten hebben toegevoegd.

Voor de typografie is Major Second (1.125) als modular scale gekozen en opgenomen in de styleguide. Hiermee is een duidelijke hiërarchie tussen de verschillende tekstniveaus aangebracht.

Bij de toegankelijkheid is erop gelet dat interactieve elementen met het toetsenbord bereikbaar zijn en dat er een duidelijke :focus-visible outline wordt weergegeven. Daarnaast is gebruikgemaakt van semantische HTML, duidelijke link- en button-elementen en voldoende contrast tussen tekst en achtergrond.

Bij de gebruiksvriendelijkheid is de interface bewust eenvoudig en overzichtelijk gehouden, met herkenbare iconen, consistente spacing en duidelijke interactie-elementen.



## Datamodel

SNAPPTHIS gebruikt Directus als backend en werkt met vijf hoofdcollecties: User, Group, Snapp Map, Snap en Action.

Een gebruiker kan bij meerdere groepen horen en een groep kan meerdere gebruikers bevatten. Groepen kunnen daarnaast meerdere Snapp Maps bevatten. Een Snapp Map bestaat uit meerdere Snapps, waarbij iedere Snap gekoppeld is aan een auteur en een Snapp Map.

Acties zoals een heart, tomato of star worden opgeslagen in de Action-collectie en zijn gekoppeld aan zowel een gebruiker als een Snap.


<h3>Belangrijkste relaties</h3>

<table>
  <thead>
    <tr>
      <th>Relatie</th>
      <th>Type</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>User ↔ Group</td>
      <td><code>M:N</code></td>
    </tr>
    <tr>
      <td>Group ↔ Snapp Map</td>
      <td><code>M:N</code></td>
    </tr>
    <tr>
      <td>Snapp Map → Snap</td>
      <td><code>1:N</code></td>
    </tr>
    <tr>
      <td>User → Snap</td>
      <td><code>1:N</code></td>
    </tr>
    <tr>
      <td>User → Action</td>
      <td><code>1:N</code></td>
    </tr>
    <tr>
      <td>Snap → Action</td>
      <td><code>1:N</code></td>
    </tr>
  </tbody>
</table>

Daarmee wordt de structuur van groepen, opdrachten, foto's en interacties binnen SNAPPTHIS vastgelegd.

## Kenmerken 

De site is gebouwd met SvelteKit en maakt gebruik van server-side rendering. De data wordt opgehaald via de Directus API en dynamisch weergegeven binnen de verschillende routes.

Bij de ontwikkeling is Progressive Enhancement toegepast: de basisfunctionaliteit werkt eerst server-side en wordt daarna waar nodig uitgebreid met JavaScript. De site is component-based opgebouwd en maakt gebruik van dynamische routes, zoals /groups/[slug] en /snappmaps/[slug].

De interface is mobile-first en responsive opgebouwd. Voor de styling wordt gebruikgemaakt van CSS nesting, custom properties en een centrale styleguide. Daarnaast is aandacht besteed aan toegankelijkheid, onder andere door interactieve elementen met het toetsenbord bereikbaar te maken en duidelijke focus states toe te voegen. In de code zijn waar nodig comments toegevoegd om keuzes en onderdelen te verduidelijken.

## Link naar code conventies

## Link naar CONTRIBUTING.md

https://github.com/fdnd-agency/snappthis/blob/dev/CONTRIBUTING.md

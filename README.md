# SnappThis

Design Challenge: Ontwerp en ontwikkel een webapplicatie voor Snappthis die gebruikers een intuïtieve en naadloze ervaring biedt bij het maken en delen van foto's en 'photo mind maps' binnen een groep.

## Table of Contents
  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving

Snappthis is een innovatieve webapplicatie die gebruikers in staat stelt om eenvoudig 'photo mind maps' (of 'snappmaps') te maken met een groep: een verzameling foto's gemaakt door de groepsleden naar aanleiding van een foto-opdracht (een onderwerp). De app richt zich op een gebruiksvriendelijke en efficiënte manier van groepen maken, onderwerpen uitzetten, foto's maken, delen en bekijken, waardoor het een ideaal hulpmiddel is voor zowel professionele als persoonlijke doeleinden.

## Kenmerken

SnappThis is verdeeld onder de pagina met verschillende SnappMaps (dit zijn projecten waar de foto's geimporteerd kunnen worden) de overzichtspagina van de SnappMap zelf en de detailpagina van een specifieke foto. Voor Sprint 14 hebben we deze drie pagina's uitgewerkt, hierbij hebben we een werkende [datamodel](https://github.com/fdnd-agency/snappthis/wiki/Data-Model) opgesteld. Deze data wordt geladen op alle webpagina's.

### Alle SnappMaps

### SnappMap overzichtspagina
De overzichtspagina bestaat uit alle foto's van een SnappMap (subject) dit wordt in het datamodel aangegeven als (snappmapID). Op deze pagina worden alle foto's ingeladen die verbonden zijn met een bepaalde SnapMap ID. Op de live website is dit nog niet zichtbaar omdat dit nog een voorbeeld is. Er is een ontwerp gemaakt van deze pagina op [Figma](https://www.figma.com/design/ACEivj97iw7ao1eFssYlej/Redesign-SnappThis?node-id=0-1&t=IpVuISbZlMLqMQpd-1). Ik heb hier een aantal ontwerp keuze's gemaakt.

#### 

### SnappMap detailpagina


## Installatie

1. Clone de repo
2. Install dependencies met `npm install`
3. Start een development server met `npm run dev` of start de server en open de applicatie gelijk in een nieuw browser tabje met `npm run dev -- --open`
4. Je kan ook een productie versie van de app maken met `npm run build`
5. Preview de productie versie met `npm run preview`
6. Om de app te deployen is mogelijk nodig om een [adapter](https://svelte.dev/docs/kit/adapters) te installeren. 

## Bronnen

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

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

## Ontwerpkeuzes

SnappThis is verdeeld onder de pagina met verschillende SnappMaps (dit zijn projecten waar de foto's geimporteerd kunnen worden) de overzichtspagina van de SnappMap zelf en de detailpagina van een specifieke foto. Voor Sprint 14 hebben we deze drie pagina's uitgewerkt, hierbij hebben we een werkende [datamodel](https://github.com/fdnd-agency/snappthis/wiki/Data-Model) opgesteld. Deze data wordt geladen op alle webpagina's.

### Alle SnappMaps

### SnappMap overzichtspagina
De overzichtspagina bestaat uit alle foto's van een SnappMap (subject) dit wordt in het datamodel aangegeven als (snappmapID). Op deze pagina worden alle foto's ingeladen die verbonden zijn met een bepaalde SnapMap ID. Op de live website is dit nog niet zichtbaar omdat dit nog een voorbeeld is. Er is een ontwerp gemaakt van deze pagina op [Figma](https://www.figma.com/design/ACEivj97iw7ao1eFssYlej/Redesign-SnappThis?node-id=0-1&t=IpVuISbZlMLqMQpd-1). Ik heb hier een aantal ontwerp keuze's gemaakt.

#### Border-radius
Uit [referentie](https://bereal.com/nl/) die ik heb gebruikt BeReal komt er veel border-radius voor. Dit wil ik in de foto's terug laten komen omdat dit er moderner uitziet. Dit ga ik dan ook toepassen op de form elementen, de feedback en de explore maar niet zo hevig. Door een standaard waarde te geven aan de stylesheet komen dezelfde afmetingen terug.

#### Informatieverwerking
<img width="602" height="650" alt="image" src="https://github.com/user-attachments/assets/5dca71a6-198d-4b24-b73a-1bf06cd0a9b3" />

In het ontwerp wat we hebben gekregen staat alle informatie onderaan aan de foto. Het is leuker om dit met verschillende groottes aan te geven. Voor de overzichtspagina is dit enkel de naam en de plaats waar het is genomen. Dit geeft een veel rustigere blik en zorgt er ook voor dat aandacht meer naar de foto zelf gaat.

<img width="574" height="214" alt="image" src="https://github.com/user-attachments/assets/c3b16e7a-f9a8-451a-b6f4-74f02819f174" />

Bij de list view komt er ook nog een bio er bij te staan zo krijg je een indruk van een foto.

#### Navigatie bar
<img width="408" height="70" alt="image" src="https://github.com/user-attachments/assets/c77f01b9-9790-4b6e-85cd-ce9c030f418a" />

Voor de snapmap zelf heb ik een navigatie bar opgesteld dit geld dus alleen voor de overzichtspagina, hier kan je de naam zien van de SnappMap en terug gaan naar alle SnappMaps. Ook kan je de layout veranderen.

### SnappMap detailpagina


## Functionaliteiten

### Layout-Grid
Je kan de layout van de SnappMap overview veranderen van grid met 5 kolommen naar one-column-layout. Er is een dropdown menu gemaakt waarbij je kan klikken op welke grid je wilt toepassen. Er moet nog wat gesleuteld worden aan de styling. 

<img width="184" height="942" alt="image" src="https://github.com/user-attachments/assets/1ac33c67-d977-40e6-bcc5-962a20239048" />


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

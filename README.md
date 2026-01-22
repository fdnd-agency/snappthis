# SnappThis

Design Challenge: Ontwerp en ontwikkel een webapplicatie voor Snappthis die gebruikers een intuïtieve en naadloze ervaring biedt bij het maken en delen van foto's en 'photo mind maps' binnen een groep.

## Table of Contents
  * [Description](#beschrijving)
  * [Techniques](#techniques)
  * [Features](#features)
  * [Installation](#installation)
  * [User Manual](#Usermanual)
  * [Sources](#sources)
  * [License](#License)

## Description

Snappthis is an innovative web application that enables users to easily create “photo mind maps” (or “snappmaps”) with a group: a collection of photos taken by group members in response to a photo assignment (a theme). The app focuses on a user-friendly and efficient way to create groups, set topics, take photos, share them, and view them, making it an ideal tool for both professional and personal use.

## Techniques

### FrontEnd
- **SvelteKit** – The main framework of this project is SvelteKit
- **Mobile-first design** - This is a mobile first design

### BackEnd
- **Directus** - Data will be fetched by the Directus Database
- **Account** - Account can be created and can be divided in general and admin role

### Development Tools
- **Git & GitHub** – Version control and project collaboration.

### Deployment Tools
- **Netify** - This repositry is deployed by Netify

## Features

You can create a new account by the invitelink which is send to you. When you created an account you are part of a group where you can add snappmaps on. On these snappmaps there will be a timestamp where the user can add photo's(snaps). The user also can like, dislike and star a post by clicking on the snap and give their feedback.

### Sitemap

<img width="1092" height="152" alt="image" src="https://github.com/user-attachments/assets/dfb2e8f2-97b2-46c6-8cc2-f7bd2d2ef83f" />

The application has 4 icons on its navigationbar. The Home (SnappThis), Explore, Groups and You-page. From scratch we made a [sitemap](https://www.figma.com/board/aIExdeeMtV8fQrmc3RYlKv/SnappThis?node-id=0-1&t=ch9RnFUiLucIOph4-1) to get better understanding of the navigation through the application.

#### Home

<img width="3024" height="1534" alt="image" src="https://github.com/user-attachments/assets/5fa4b3b2-2d32-4e63-8f9f-3c719ab9f893" />

The home page exist out of the current group you are assigned to. It shows the snappmappreview components where you can also navigate to those snappmaps. This is the first page you will land on when you open the app when you are already a user.

#### Explore
The Explore page is the navigation to all snappmaps that are uploaded on the database. You can search for a subject where you can view, give feedback to snapps. This page is not made yet.

#### Groups

<img width="3024" height="1534" alt="image" src="https://github.com/user-attachments/assets/782c06b6-7de2-4a48-bd86-edf15e6e5b7d" />


The Group page shows the groups that are made by an admin. When an admin invites you, you can only see the groups of that admin. From here you are able to navigate to other groups. You can also add users to a particular group.

When you click on a group you will directly redirected to the latest snappmap of that particular group. From this snappmap you can navigate to other snappmaps within that group.

#### SnappMap Overview

<img width="3024" height="1534" alt="image" src="https://github.com/user-attachments/assets/736c8de9-9615-4da2-8a41-0d9382094e89" />

On the SnappMap page you will see all the snaps that have been posted on that snappmap. On desktop version you will find a sidebar where you can change the grid and view information of that snappmap. From there you can click on a snap to give the snap feedback.

#### SnappMap Detailpage

<img width="3024" height="1534" alt="image" src="https://github.com/user-attachments/assets/1c1621cb-fc15-4c7b-893c-dc2e493a309a" />

You just came to the detailpage, here you can specifically view a snap and give this feedback by giving a like, tomato or star it. From here you can also navigate through the author and the location of that particular snap that has been made.

#### You

<img width="3024" height="1534" alt="image" src="https://github.com/user-attachments/assets/592c41cb-dbc0-4fe3-bbc7-00b9cd9de0b4" />

On the you page you will see all the information you have given when signing up. Here you can see all your starred snaps, and the snappmaps you are included. When you have no account yet this is the page where you can sign up. You can also change the settings of your profile from here.

## User Manual

### Create an account
For entering SnappThis you need to create an account you can do this when you open the application for the first time or with an inviting link you received. From here you can fill in information like name, gender and birthdecade. After signed up you will automatically join the group you are invited to. When you didn't enter with invitation link you are not in any group

### Navigating through the app
You can navigate to the app with the navigation bar through the Home, Explore, Groups and You page.

### Viewing snappmaps
You can view snappmaps by clicking on groups where you see all the groups of the groups the admin has provided. From here you can click on a group where you will be redirected to the latest snappmap. From the snappmap overview page you can navigate to other snappmaps.

### Adding snaps
You can add a snap only by mobile device. Clicking on the green button allows you to post a picture which will be displayed somewhere on the database. This will save your picture, location and create a specific id where you can also land on this page when navigating to the detailpage.

### Feedback
This function allows you to give feedback to a snap. You can throw a tomato (creative way of disliking), like or star a snap which also will be saved on the database. It also displays the amount of feedback with the snap.

### Profile and Settings
From the profile you can change the seetings. This can be changing your password, get more information about the application and more. From here you can also sign out where you will be redirected to the landing page.


## Installation
1. Clone the repository
2. Install dependencies with npm install
3. Start a development server with npm run dev, or start the server and automatically open the application in a new browser tab with npm run dev -- --open
4. You can also create a production version of the app with npm run build
5. Preview the production version with npm run preview
6. To deploy the app, it may be necessary to install an adapter

## User Manual



## Sources

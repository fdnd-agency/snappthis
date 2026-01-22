# Handover to the next team!

## Table of Contents
  * [Status](#status)
  * [Features](#features)
  * [Challenges](#challenges)
  * [Next steps](#next-steps)

## Status
SnappThis is not yet ready to go live. The database in Directus has been set up and contains the data. The API is connected to the project via the server. The data can be fetched in the code and displayed on the page. The page structure has been set up based on the SnappThis design. Not all pages have the correct content yet.

### Pages that are (almost) finished:
- Groups page
- Snappmap page
- Profile page 

### Pages that are not finished yet:
- Home _(needs different content)_
- Explore _(does not exist yet)_
- Snapp detail page _(needs styling)_
- Profile page _(needs styling)_

### Components that are finished:
- Header.svelte
- NavBar.svelte
- LayoutNavigation.svelte
- Card.svelte
- SnappMapPreview.svelte
- Snap.svelte

### Components that are not finished yet:
- Sidebar.svelte _(needs SortFuncition)_
- AddButton.svelte _(needs styling)_

## Features
What functionalities are operational on the website? <br>

- On the SnappMap page, users can adjust the grid layout of the Snapps. On the desktop version of the page, the sidebar provides an overview of the different grid options, all of which are fully functional. Snapps can be viewed in four different grid sizes. <br>
- On the mobile version of the page, users can upload a Snapp. This is done by clicking the “Choose File” button. On a desktop, users can upload a photo from their computer. On a mobile device, users can either take a new photo or select one from their gallery to upload. To submit the Snapp, users click the green button. Once submitted, the Snapp appears on the SnappMap.

## Challenges
There are several important points to keep in mind.
 
- The client is very attached to her design and wants it to be followed as closely as possible. If you propose new ideas or designs, make sure you can clearly explain and justify why they will work effectively.
- The page structure is fairly complex. Many pages look very similar but display slightly different data. Pay close attention to the design to understand which information appears on which page.
- The data model is complex, with connections between different pieces of data that sometimes come from far. Each connection has a purpose, so it is important to pay close attention to the data model and design. For example, a Snapp always belongs to a single SnappMap. A SnappMap always belongs in only 1 Group, while a Group can contain multiple SnappMaps.

## Next steps
The project board backlog contains tasks that still need to be completed. The majority of these tasks are linked to corresponding user stories, which are documented in the user story column. All backlog items are prioritized using the MoSCoW method, making it clear in which order the tasks should be addressed. Must-have items are treated as the highest priority. Based on this prioritization, the following issues represent the most critical next steps in the project:
- Styling snap detailpage
[#72](https://github.com/fdnd-agency/snappthis/issues/72)
- Set up post requests for liking/disliking/starring Snapps
[#16](https://github.com/fdnd-agency/snappthis/issues/16)
- Snappmap error page
[#100](https://github.com/fdnd-agency/snappthis/issues/100)
- SnappMap dropdown
[#71](https://github.com/fdnd-agency/snappthis/issues/71)
- Error, empty and succses states
[#179](https://github.com/fdnd-agency/snappthis/issues/179)


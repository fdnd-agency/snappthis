<script>
    import { page } from '$app/state'

    export let data
    // debug all the data
    const snaps = data?.snaps?.[0]?.snaps ?? [];
    const snapMap = data.snaps[0]
    const usersdata = data.users
    const id = data.id

    // at general the grid columns shows medium size
    let gridsize = 'medium'

    import Header from '$lib/components/Header.svelte'
    import Snap from '$lib/components/Snap.svelte'
    import Card from '$lib/components/Card.svelte'

    // sort function is an option
    // import SortCard from '$lib/components/SortCard.svelte'
    // the sidebar is an option
    // import Sidebar from '$lib/components/Sidebar.svelte'

    import LayoutNavigation from '$lib/components/LayoutNavigation.svelte'
    import AddButton from '$lib/components/AddButton.svelte'

    // to get the user of the snap this function is there to check which name is connected to the user uuid
    const userMap = new Map(
        usersdata
            .filter(u => u?.uuid && u?.name)
            .map(u => [u.uuid, u.name])
    );
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<Header page="snappmap" icon="snappmap" title="{snapMap.name}" active="groups"/>

<main>
    <div class="sidebar">
        <div class="title-card">
            <Card text="Squad 2A" icon="group" />
        </div>

        <h2>Layout</h2>
        <div>
            <!-- with bind gridsize is displaying the size that you are currently in -->
            <LayoutNavigation bind:selected={gridsize} />
        </div>
    </div>
            <AddButton/>

    <ul class="snaps-{gridsize}">
        <!-- the url to the detailpage is fetched from the API the snap component shows the photo and in the list view also the author and location -->
        {#each snaps as snap}
            <Snap href={`${page.url.pathname}/snapp/${snap.uuid}`} picture={snap.picture} list="items-{gridsize}" author={userMap.get(snap.author)} location={snap.location}/>
        {/each}
    </ul>
</main>

<style>
    main {
        display: grid;
        grid-template-columns:30% 70%;

        @media (max-width: 1080px) {
            display: 20% 80%;
        }

        /* from here the sidebar disappears */
        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    ul {
        margin: 0;
    }

    .sidebar {
        background-color: var(--neutral-color-light);
        height: 100%;
        width: 30vw;
        padding: 1em;

        @media (max-width: 720px) {
            display: none;
        }
    }

    .list-items {
        display: none;
    }

    .list-container {
        display: flex;
        flex-direction: row;
        width: 100vw;
        height: 87vh;
    }

    /* all the gridstates */
    .snaps-xlarge {
        padding: 1em;
        display: grid;
        height: 87vh;
        width: 100vw;
        grid-template-columns: 1fr 1fr;
        overflow: scroll;
    }

    .snaps-large {
        padding: 1em;
        display: grid;
        height: 87vh;
        grid-template-columns: 1fr 1fr 1fr;
        overflow: scroll;
    }

    .snaps-medium {
        padding: 1em;
        height: 87vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        overflow: scroll;
    }

    .snaps-small {
        padding: 1em;
        height: 87vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        overflow: scroll;
    }

    .snaps-list {
        padding: 1em;
        overflow: scroll;
        height: 90vh;
    }
</style>
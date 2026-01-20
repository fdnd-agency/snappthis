<script>
    import { page } from '$app/state'

    export let data
    const snaps = data?.snaps?.[0]?.snaps ?? [];
    const snapMap = data.snaps[0]
    const usersdata = data.users
    const id = data.id

    let gridsize = 'medium'

    import Header from '$lib/components/Header.svelte'
    import Snap from '$lib/components/Snap.svelte'
    import Card from '$lib/components/Card.svelte'
    import SortCard from '$lib/components/SortCard.svelte'
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import GridOne from '$lib/components/icons/Grid1Icon.svelte'
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'

    import LayoutNavigation from '$lib/components/LayoutNavigation.svelte'
    import AddButton from '$lib/components/AddButton.svelte'

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
            <LayoutNavigation bind:selected={gridsize} />
        </div>
    </div>

    <ul class="snaps-{gridsize}">
        {#each snaps as snap}
            <Snap href={`${page.url.pathname}/snapp/${snap.uuid}`} picture={snap.picture} list="items-{gridsize}" author={userMap.get(snap.author)} location={snap.location}/>
        {/each}
    </ul>
</main>

<style>
    main {
        margin-bottom: 5%;
        display: grid;
        grid-template-columns:30% 70%;

        @media (max-width: 1080px) {
            display: 20% 80%;
        }

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .sidebar {
        background-color: var(--neutral-color-light);
        height: 100vh;
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
    }

    .snaps-xlarge {
        padding: 1em;
        display: grid;
        height: 100vh;
        grid-template-columns: 1fr 1fr;
        overflow: scroll;
    }

    .snaps-large {
        padding: 1em;
        display: grid;
        height: 100vh;
        grid-template-columns: 1fr 1fr 1fr;
        overflow: scroll;
    }

    .snaps-medium {
        padding: 1em;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        overflow: scroll;
    }

    .snaps-small {
        padding: 1em;
        height: 100vh;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
        overflow: scroll;
        height: 100vh;
    }

    .snaps-list {
        padding: 1em;
        overflow: scroll;
        height: 100vh;
    }
</style>
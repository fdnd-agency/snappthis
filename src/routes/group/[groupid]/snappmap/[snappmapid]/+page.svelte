<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid2')

    const snapMap = data.snaps[0]

    // components
    import Header from '$lib/components/Header.svelte'
    import Image from '$lib/components/Image.svelte'
    import Card from '$lib/components/Card.svelte'
    import SortCard from '$lib/components/SortCard.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'
    import LayoutNavigation from '$lib/components/LayoutNavigation.svelte'
    import AddButton from '$lib/components/AddButton.svelte'
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
        <h2>Sort by</h2>
        <div class="sort-function">
            <SortCard icon="clock" />
            <SortCard icon="star" />
            <SortCard icon="tomato" />
        </div>
        <h2>Layout</h2>
        <div>
            <LayoutNavigation />
        </div>
    </div>

    <div class="content">
        <AddButton />
     <ul class="snaps-{gridsize}">

    {#each snaps as snap}
        <Image picture="{snap.picture}"/>
    {/each}
    </ul>
    </div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 20% 80%;


        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .sidebar {
        background-color: var(--primary-color-light);
        color: var(--neutral-color-lightest);
        height: 100%;
        position: fixed;
        padding: 1em;

        @media (max-width: 720px) {
            display: none;
        }
    }

    .content {

        @media (max-width: 1080px) {
            margin-left: 10em;
        }
        @media (max-width: 720px) {
            margin-left: 0em;
        }
    }

    .sort-function {
        display: flex;
        gap: 1em;
    }

    .list-container {
        display: flex;
        flex-direction: row;
        width: 100vw;
    }

    ul {
        margin-left: 30vw;
        width: 70vw;
        gap: 1em;
        padding: 0;
        margin-top: 1em;

        @media (max-width: 1080px) {
            margin-left: 20vw;
            width: 80vw;
        }
        @media (max-width: 720px) {
            margin-left: 0em;
        }

        @media (max-width: 720px) {
            margin-left: 0em;
            grid-template-columns: 1fr 1fr;
            width: fit-content
        }
    }
</style>
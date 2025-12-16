<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid2')

    const snapMap = data.snaps?.[0]
    import Header from '$lib/components/Header.svelte'
    import Image from '$lib/components/Image.svelte'
    import Card from '$lib/components/Card.svelte'
    import SortCard from '$lib/components/Sort-Card.svelte'
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

    import LayoutNavigation from '$lib/components/Layout-navigation.svelte'
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<Header page="snappmap" icon="snappmap"/>

<main>

    <div class="sidebar">
        <div>
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
        {#each snaps as snap}
            <Image picture="{snap.uuid}"/>
        {/each}
        
    </div>
</main>

<style>
    main {
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: 20% 80%;
        font-family: 'Bariol Bold';

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .sidebar {
        background-color: var(--neutral-color-light);
        height: 100vh;
        width: 20vw;
        position: fixed;
        padding: 1em;

        @media (max-width: 720px) {
            display: none;
        }
    }

    .content {
        overflow-y: hidden;
        width: fit-content;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
    }
</style>
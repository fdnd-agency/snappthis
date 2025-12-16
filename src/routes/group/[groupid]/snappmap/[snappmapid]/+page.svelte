<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snap[0].snap;
    const groupId = data.id;  
    const snapMap = data.snapmap[0];

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

<Header page="snappmap" icon="snappmap" title="{snapMap.name}"/>

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
        <ul class="snaps-{gridsize}">
        {#each snaps as snap}
            <li class="list {gridsize === 'list' ? 'visible' : ''}">
            <a href={'/'}>
                    <img
                    src={'https://fdnd-agency.directus.app/assets/' + snap.picture}
                    alt="snap foto"
                    height="256"
                    width="256" />
                </a>
            </li>
        {/each}
    </ul>
    </div>
</main>

<style>
    main {
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: 20% 80%;

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .sidebar {
        background-color: var(--neutral-color-light);
        height: 100vh;
        position: fixed;
        padding: 1em;

        @media (max-width: 720px) {
            display: none;
        }
    }


    .content {
        display: grid;
        grid-template-columns: repeat(4, minmax(200px, 1fr));
        gap: 1em;
        margin-left: 28em;

        @media (max-width: 720px) {
            grid-template-columns: 1fr 1fr 1fr;
            margin-left: 0em;
        }
    }

    .content img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    display: block;
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

    img {
        height: 256px;
        width: 256px;
        contain: cover;
    }

    ul {
        list-style: none;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr 1fr;
        width: 65vw;
        gap: 1em;
        margin: 0;
        padding: 0;
        margin-top: 1em;
    }

</style>
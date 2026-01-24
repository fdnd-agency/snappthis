<script>
    import { page } from '$app/state'
    import { onMount } from 'svelte'
    import { initSnowflakes } from '$lib/scripts/snowflakes.js'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid2')

    const snapMap = data.snaps[0]

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

    import ChristmasBalls from '$lib/components/icons/ChristmasBalls.svelte'
    import LayoutNavigation from '$lib/components/Layout-navigation.svelte'

    // snowflake effect
    onMount(() => {
        initSnowflakes()
    })

  function toggleChristmas() {
    document.body.classList.toggle('xmas')
  }
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
        <canvas id="canvas"></canvas>
        <!-- <canvas id="canvas"></canvas> -->
     <ul class="snaps-{gridsize}">
        {#each snaps as snap}
            <li class="list {gridsize === 'list' ? 'visible' : ''}">
                <a href="{page.url.pathname}/{snap.uuid}">
                    <img
                        src={'https://fdnd-agency.directus.app/assets/' +
                            snap.picture}
                        alt="Photo by ${snap.author} at ${snap.location}"
                        height="256"
                        width="256" />
                </a>
            </li>
        {/each}
    </ul>
    </div>

<button class="christmasballs" on:click={toggleChristmas}>
    <ChristmasBalls />
</button>
</main>

<style>
    :root {
        --christmas-sidebar-color: #C79C9C;
        --christmas-sidebar-color-dark: #AF6666;

        --christmas-header-color: #99B695;
        --christmas-header-color-dark: #00E53D;

        --content-background: #090029;

        --ice: #6BB8DE;
        --snow: #FFFFFF;

        --stroke: 1px solid black;
    }

    canvas {
        position: fixed;
        inset: 0;
        z-index: -1;
        pointer-events: none;
    }

    main {
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: 20% 80%;


        @media (max-width: 1080px) {
            display: 10% 90%;
        }

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    content.xmas {
        background-color: var(--content-background);
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

    :global(body.xmas) .content {
        background: #090029;
    }

    :global(body.xmas) .sidebar {
        background: #C79C9C;
    }

    :global(body.xmas) img {
        border: 1px solid black;
        scale: 0.9;
        opacity: 0.9;
        transition-duration: 0.3s;
    }


    .content {
        margin-left: 28em;


        @media (max-width: 1080px) {
            margin-left: 21em;
        }
        @media (max-width: 720px) {
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

        @media (max-width: 720px) {
            margin-left: 0em;
            grid-template-columns: 1fr 1fr;
            width: fit-content
        }
    }

    .christmasballs {
        position: fixed;
        left: 10px;
        bottom: 10px;
    }

    button {
  all: unset;
}

</style>
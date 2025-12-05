<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid1')

    const snapMap = data.snaps?.[0]
    // import Header from '$lib/components/Header.svelte'
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import GridOne from '$lib/components/icons/Grid1Icon.svelte'
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<!-- <Header title={snapMap.name}></Header> -->

<main>
    <div class="layout-navigation">
        <label>
            <input
                type="radio"
                name="settings"
                value="grid1"
                bind:group={gridsize} />
            <GridOne />
            <p>One-Column</p>
        </label>
        <label>
            <input
                type="radio"
                name="settings"
                value="grid2"
                bind:group={gridsize} />
            <GridTwo />
            <p>XLarge</p>
        </label>
        <label>
            <input
                type="radio"
                name="settings"
                value="grid3"
                bind:group={gridsize} />
            <GridThree />
            <p>Large</p>
        </label>
        <label>
            <input
                type="radio"
                name="settings"
                value="grid4"
                bind:group={gridsize} />
            <GridFour />
            <p>Medium</p>
        </label>
        <label>
            <input
                type="radio"
                name="settings"
                value="grid5"
                bind:group={gridsize} />
            <GridFive />
            <p>Small</p>
        </label>
        <label>
            <input
                class="listradio"
                type="radio"
                name="settings"
                value="list"
                bind:group={gridsize} />
            <ListView />
            <p>List</p>
        </label>
    </div>

    <ul class="snaps-{gridsize}">
        {#each snaps as snap}
            <li class="list {gridsize === 'list' ? 'visible' : ''}">
                <a href="{page.url.pathname}/{snap.uuid}">
                    <img
                        src={'https://fdnd-agency.directus.app/assets/' +
                            snap.picture}
                        alt="Photo by ${snap.author} at ${snap.location}" />
                </a>
                <div
                    class="list-container {gridsize === 'list'
                        ? 'visible'
                        : ''}">
                    <h2>{snap.author}</h2>
                    <h3>{snap.location}</h3>

                    <form class="feedback">
                        <button aria-label="Star"><Star /></button>
                        <button aria-label="Tomato"><Tomato /></button>
                        <button aria-label="Heart"><Heart /></button>
                    </form>

                    <a href="{page.url.pathname}/{snap.uuid}"> View Photo </a>
                </div>
            </li>
        {/each}
    </ul>
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

    .layout-navigation {
        background-color: var(--neutral-color-light);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        padding: 1em;

        @media (max-width: 720px) {
            flex-direction: row;
            justify-content: center;
            gap: 1em;
        }

        p {
            font-family: 'Bariol bold';

            @media (max-width: 720px) {
                display: none;
            }
        }

        label {
            display: flex;
            gap: 1em;
        }

        input {
            display: none;
        }
    }

    .container {
        display: grid;
        gap: 2em;
        top: 0;
        list-style: none;
        margin: 1em;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 1em;
        overflow: scroll;
        height: 100vh;
        gap: 1em;
    }

    img {
        border-radius: 5%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .snaps-grid1 {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .snaps-grid2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .snaps-grid3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .snaps-grid4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .snaps-grid5 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .list-container {
        display: grid;
        grid-template-rows: 50% 40% 10%;
    }

    .feedback {
        display: flex;
        justify-content: flex-end;
    }

    .list.visible {
        display: grid;
        grid-template-columns: 30% 70%;
        padding: 1em;
    }

    .list-container {
        display: none;
    }

    .list-container.visible {
        display: block;
    }
</style>

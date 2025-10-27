<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    import Header from '$lib/components/Header.svelte'
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'
    let gridsize = $state('grid1')
</script>

<Header {data} />

<label>
    <input type="radio" name="settings" value="grid1" bind:group={gridsize} />
    <GridTwo />
</label>
<label>
    <input type="radio" name="settings" value="grid2" bind:group={gridsize} />
    <GridTwo />
</label>
<label>
    <input type="radio" name="settings" value="grid3" bind:group={gridsize} />
    <GridThree />
</label>
<label>
    <input type="radio" name="settings" value="grid4" bind:group={gridsize} />
    <GridFour />
</label>
<label>
    <input type="radio" name="settings" value="grid5" bind:group={gridsize} />
    <GridFive />
</label>
<label>
    <input
        class="listradio"
        type="radio"
        name="settings"
        value="list"
        bind:group={gridsize} />
    <ListView />
</label>

<ul class="snaps-{gridsize}">
    {#each snaps as snap}
        <li class="liststyle">
            <picture>
                <a href="/{snap.uuid}/{snap.picture}">
                    <img
                        src={'https://fdnd-agency.directus.app/assets/' +
                            snap.picture}
                        alt="" />
                </a>
            </picture>
        </li>
        <div class="list-container {gridsize === 'list' ? 'visible' : ''}">
            <h2>{snap.author}</h2>
            <h3>{snap.location}</h3>

            <div class="feedback">
                <button aria-label="Star"><Star /></button>
                <button aria-label="Tomato"><Tomato /></button>
                <button aria-label="Heart"><Heart /></button>
            </div>
        </div>
    {/each}
</ul>

<style>
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
        padding: 0;
    }
    picture img {
        border-radius: 5%;
        width: 100%;
        height: auto;
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
        height: 1em;
    }
    .snaps-list {
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

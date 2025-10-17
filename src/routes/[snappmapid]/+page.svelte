<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Header from '$lib/components/Header.svelte'
    import Star from '$lib/components/icons/Star.svelte'
    import Tomato from '$lib/components/icons/Tomato.svelte'
    import Heart from '$lib/components/icons/Heart.svelte'

    import GridOne from '$lib/components/icons/Grid1.svelte'
    import GridTwo from '$lib/components/icons/Grid2.svelte'
    import GridThree from '$lib/components/icons/Grid3.svelte'
    import GridFour from '$lib/components/icons/Grid4.svelte'
    import GridFive from '$lib/components/icons/Grid5.svelte'
    import ListView from '$lib/components/icons/Listview.svelte'


    let gridsize = $state('grid1')

</script>

<Header {data}/>

            <label>
                <input type="radio" name="settings" value="grid1" bind:group={gridsize} />
                <GridOne />
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
                <input type="radio" name="settings" value="list-view" bind:group={gridsize} />
                <ListView />
            </label>


<div class='snaps-grid-{gridsize}'>
    {#each snaps as snap}
        <picture>
            <a href="/{ snap.uuid }/{ snap.picture}">
                    <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture} alt="" />
            </a>
        </picture>
    {/each}
</div>

<div class="snaps-list-">
    {#each snaps as snap}
    <p> {snap.author} </p>
    <p> {snap.location} </p>
        <picture>
            <a href="/{ snap.uuid }/{ snap.picture}">
                    <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture} alt="" />
            </a>
        </picture>
    <button aria-label="Star"> <Star /> </button>
    <button aria-label="Tomato"> <Tomato /> </button>
    <button aria-label="Heart"> <Heart /> </button>
    {/each}
</div>

<style>
.container {
        display: grid;
        gap: 1em;
        top: 0;
        list-style: none;
        margin: 1em;
}

picture img {
    border-radius: var(--border-radius-desktop);
    width: 100%;
    height: auto;
    object-fit: cover;
}

.snaps-grid-grid1 { 
    display: grid;
    grid-template-columns: repeat(1, 1fr); 
}

.snaps-grid-grid2 { 
    display: grid;
    grid-template-columns: repeat(2, 1fr); 
}

.snaps-grid-grid3 { 
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
}

.snaps-grid-grid4 { 
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
}

.snaps-grid-grid5 { 
    display: grid;
    grid-template-columns: repeat(5, 1fr); 
}
</style>
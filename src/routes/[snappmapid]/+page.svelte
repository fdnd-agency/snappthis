<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Header from '$lib/components/Header.svelte'
    import Star from '$lib/components/icons/Star.svelte'
    import Tomato from '$lib/components/icons/Tomato.svelte'
    import Heart from '$lib/components/icons/Heart.svelte'

    let gridState = 'grid-3'

    function setGrid(state) {
        gridState = state;
    }
</script>

<Header {data}/>

<!-- <div class="grid-toggle">
    <button on:click={() => setGrid('grid-1')}>1</button>
    <button on:click={() => setGrid('grid-2')}>2</button>
    <button on:click={() => setGrid('grid-3')}>3</button>
    <button on:click={() => setGrid('grid-4')}>4</button>
    <button on:click={() => setGrid('grid-5')}>5</button>
    <button on:click={() => setGrid('list-view')}>List</button>
</div> -->

<li class="snaps-list {gridState}">
    {#each snaps as snap}
        <picture>
            <a href="/{ snap.uuid }/{ snap.picture}">
                    <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture} alt="" />
            </a>
        </picture>
    {/each}
</li>

<li class="snaps-list">
    {#each snaps as snap}
    <p> {snap.author} </p>
    <p> {snap.location} </p>
        <picture>
            <a href="/{ snap.uuid }/{ snap.picture}">
                    <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture} alt="" />
            </a>
        </picture>
    <button> <Star /> </button>
    <button> <Tomato /> </button>
    <button> <Heart /> </button>
    {/each}
</li>

<style>
    .snaps-list {
        display: grid;
        gap: 1em;
        top: 0;
        list-style: none;
        margin: 1em;
    }

.snaps-list.grid-1 { 
    grid-template-columns: repeat(1, 1fr); 
}

.snaps-list.grid-2 { 
    grid-template-columns: repeat(2, 1fr); 
}

.snaps-list.grid-3 { 
    grid-template-columns: repeat(3, 1fr); 
}

.snaps-list.grid-4 { 
    grid-template-columns: repeat(4, 1fr); 
}

.snaps-list.grid-5 { 
    grid-template-columns: repeat(5, 1fr); 
}

.snaps-list.list-view { 
    display: block; 
}

picture img {
    border-radius: var(--border-radius-desktop);
    width: 100%;
    height: auto;
    object-fit: cover;
}
</style>
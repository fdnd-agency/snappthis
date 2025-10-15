<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Header from '$lib/components/Header.svelte'
    import Star from '$lib/components/icons/Star.svelte'
    import Tomato from '$lib/components/icons/Tomato.svelte'
    import Heart from '$lib/components/icons/Heart.svelte'



</script>

<Header {data}/>

<ul class="snaps-list">
    {#each snaps as snap}
        <picture>
            <a href="/{ snap.uuid }/{ snap.picture}">
                    <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture} alt="" />
            </a>
        </picture>
    {/each}
</ul>

<li>
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
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 1rem;
        padding: 1rem;
        width: 100%;

    .grid-1 {
        grid-template-columns: repeat(1, 1fr);
    }

    .grid-2 {
        grid-template-columns: repeat(2, 1fr);
    }

    .grid-3 {
        grid-template-columns: repeat(4, 1fr);
    }

    .grid-5 {
        grid-template-columns: repeat(5, 1fr);
    }

    .list-view {
        grid-template-columns: repeat(1, 1fr);
    }
    }

    picture img {
        border-radius: var(--border-radius-desktop);
        width: 100%;
        height: auto;
        object-fit: cover;
    }
</style>

<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Header from '$lib/components/Header.svelte'


</script>

<Header {data}/>

<ul class="snaps-list">
    {#each snaps as snap}
        <picture>
            <a href="/{ snap.uuid }/{ snap.picture}">
                <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture + "?width=200&height=200&format=webp"} height="200" width="200" alt="" />
            </a>
        </picture>
    {/each}
</ul>

<style>
    .snaps-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 1rem;
        list-style: none;
        padding: 1rem;
        max-width: 1000px;
        margin: 0 auto;

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
        border: var(--accent-green-20) 2px solid;
    }

</style>

<script>
    import Header from '$lib/components/Header.svelte'
    import Gallery from '$lib/components/GalleryComponent.svelte'

    // icons

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    const users = data.users
    const snapmap = data.snaps?.[0]


    const userMap = new Map(users.map((u) => [u.uuid, u.name]))
</script>

<svelte:head>
    <title>{snapmap.name}</title>
</svelte:head>

<Header title={snapmap.name}></Header>

<nav>
    <!-- title of group (component) -->
    <!-- sort function (component) -->
</nav>

<main>
{#each snaps as snap}
    <Gallery
        url={snapmap.uuid}
        snap={snap.uuid}
        picture={snap.picture}
        author={snap.author}
        location={snap.location}
    />
{/each}
</main>

<style>
    main {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
        margin: 1em;
    }

p {
    color: black;
}
</style>

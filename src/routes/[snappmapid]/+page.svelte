<script>
    import Header from '$lib/components/Header.svelte'
    import Gallery from '$lib/components/snappmap-overviewpage/gallery-component.svelte'
    import Card from '$lib/components/snappmap-overviewpage/card.svelte'

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

<h1>Snaps:</h1>

<nav>
    <!-- title of group (component) -->
    <!-- sort function (component) -->
    <!-- layout navigation (component) -->
</nav>

<main>
{#each snaps as snap}
    <Gallery
        picture={snap.picture}
        author={snap.author}
        location={snap.location}
    />
{/each}
</main>

<style>
p {
    color: black;
}

</style>

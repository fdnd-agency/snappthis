<script>
    import Header from '$lib/components/Header.svelte'
    import Gallery from '$lib/components/snappmap-overviewpage/gallery-component.svelte'

    // icons



    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    const users = data.users
    const snapmap = data.snaps?.[0]

    export let data;

    // function to get the name
    const userMap = new Map(users.map((u) => [u.uuid, u.name]))
</script>

<svelte:head>
    <title>{snapmap.name}</title>
</svelte:head>

<Header title={snapmap.name}></Header>

<nav>
    <Gallery snappMaps={data.snappMaps} />
    <!-- title of group (component) -->
    <!-- sort function (component) -->
    <!-- layout navigation (component) -->
</nav>

<main>
    <Gallery />
</main>

<style>


</style>

<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Header from '$lib/components/Header.svelte'
</script>


<Header />

<ul>
    {#each snaps as snap}
        <li><a href="/{id}/{snap.uuid}">{snap.uuid}</a></li>
    {/each}
</ul>

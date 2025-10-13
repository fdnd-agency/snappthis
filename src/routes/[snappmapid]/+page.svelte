<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
</script>

<!-- temporary list of snaps. feel free to overwrite -->

<h1>SnappMap</h1>

<ul>
    {#each snaps as snap}
        <li><a href="/{id}/{snap.uuid}">{snap.uuid}</a></li>
    {/each}
</ul>

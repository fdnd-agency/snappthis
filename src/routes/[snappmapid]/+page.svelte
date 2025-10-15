<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Header from '$lib/components/Header.svelte'
</script>

<Header {data}/>

<ul>
    {#each snaps as snap}
        <picture>
            <img src={"https://fdnd-agency.directus.app/assets/" + snap.picture + "?width=200&height=200&format=webp"} height="200" width="200" alt=""/>
        </picture>
        <li><a href="/{id}/{snap.uuid}">{snap.uuid}</a></li>
    {/each}
</ul>

<script>
    import { onMount } from 'svelte'
    import Card from "./Card.svelte"

    let snappmaps = [];

    onMount(async () => {
        async function fetchSnappmap() {
        const snappmapResponse = await fetch(
            'https://fdnd-agency.directus.app/items/snappthis_snapmap'
        )

        const snappmapJSON = await snappmapResponse.json()
        snappmaps = snappmapJSON.data
        return snappmaps
        }
    })

    console.log(snappmaps)

</script>
<p>{snappmaps.title}</p>
<div class="active-card">
    <Card text="{snappmaps.title}" active="" />
</div>
<div class="dropdown">
    {#each snappmaps as map}
        <Card text="{map.title}" active=""/>
    {/each}
</div>

<style>

</style>
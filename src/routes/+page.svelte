<script>
    import SnappMapPreview from "$lib/components/SnappMapPreview.svelte"

    let { data } = $props()
    const snappMaps = data.snappMaps
</script>

<h1>SnappMaps</h1>

{#each snappMaps as snappMap}
    <SnappMapPreview {snappMap}></SnappMapPreview>
{/each}

<style>
    h1 {
        font-family: "Bariol", sans-serif;
    }
</style>
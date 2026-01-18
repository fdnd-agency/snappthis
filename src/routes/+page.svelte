<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
</script>

<svelte:head>
    <title>SnappThis Homepage</title>
</svelte:head>

<h1>SnappMap Overview</h1>

{#each snappMaps as snappMap}
    <SnappMapPreview {snappMap}></SnappMapPreview>
{/each}

<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
    }
</style>

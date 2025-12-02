<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import Header from '$lib/components/header.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
</script>


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

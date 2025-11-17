<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import ButtonXL from '$lib/components/snappmap-overview/XL-button.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
</script>

<h1>SnappMap Overview</h1>

{#each snappMaps as snappMap}
    <SnappMapPreview {snappMap}></SnappMapPreview>
{/each}

<ButtonXL />

<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
    }
</style>

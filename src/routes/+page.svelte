<script>
    import Header from '$lib/components/Header.svelte'
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
    const groups = data.groups
</script>


{#each snappMaps as snappMap}
    <SnappMapPreview {snappMap} {groups}></SnappMapPreview>
{/each}

<style>
</style>

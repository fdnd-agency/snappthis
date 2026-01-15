<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import Header from '$lib/components/Header.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
    const groups = data.groups
</script>

<Header page="home" active="home"/>

{#each snappMaps as snappMap}
    <SnappMapPreview {snappMap} {groups}></SnappMapPreview>
{/each}


<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import Header from '$lib/components/Header.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
    const groups = data.groups

    const snappMap = data.snappMaps[0]
</script>

<Header page="home" active="home"/>


<SnappMapPreview {snappMap}  groupID="217f68ac-44d3-4980-9914-9ef5f7649d8f"></SnappMapPreview>


<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
        color: var(--neutral-color-darkest);
    }
</style>

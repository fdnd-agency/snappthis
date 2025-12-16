<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'

    let { data } = $props();
    const { snappMaps, groups } = data;

    const groupID = groups[0]?.uuid;
</script>

<h1>SnappMap Overview</h1>
<ul>
    {#each snappMaps as snappMap}
        <SnappMapPreview
            snappMap={snappMap}
            groupID={groupID}
        />
    {/each}
</ul>



<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
        color: var(--neutral-color-darkest);
    }
</style>

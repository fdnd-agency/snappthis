<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import Header from '$lib/components/Header.svelte'

    let page = 'home'
    let { data } = $props()
    const snappMaps = data.snappMaps
    const groups = data.groups
</script>

<Header page="home" active="home"/>

{#each snappMaps as snappMap}
    <SnappMapPreview {snappMap} {groups}></SnappMapPreview>
{/each}

<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
        color: var(--neutral-color-darkest);
    }
</style>

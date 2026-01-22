<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import Header from '$lib/components/Header.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
    const groups = data.groups

    const fourthGroup = data.groups[2]

    const ThirdSnappMap = data.snappMaps[2]
    const FourthSnappMap = data.snappMaps[3]
</script>
<main>
<Header page="home" active="home"/>

<SnappMapPreview snappMap={ThirdSnappMap}  groupID={fourthGroup}></SnappMapPreview>
<SnappMapPreview snappMap={FourthSnappMap}  groupID={fourthGroup}></SnappMapPreview>


<h2>You are in group <strong>{fourthGroup.name}</strong> </h2>
</main>
<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
        color: var(--neutral-color-darkest);
    }
    h2 {
        display: flex;
        justify-content: center;
    }

    strong {
        color: var(--secondary-color);
        margin-left: 1em;
    }
</style>

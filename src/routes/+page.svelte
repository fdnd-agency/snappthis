<script>
    // import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'

    // let { data } = $props()
    // const snappMaps = data.snappMaps
</script>

<main>
    <div></div>

    <div></div>
    <div></div>
    <div></div>
    <div></div>

    <div></div>
    <div></div>
    <div></div>
    <div></div>
</main>

<style>
main {
    position: relative;
    width: 30em;
    height: 30em;
}

div {
    position: absolute;
    background-color: pink;
    border: solid hotpink .5em;
    height: 10em;
    width: 10em;
    border-radius: 5em;

    &:nth-of-type(1) {
        top: 2.5em;
        left: 2.5em;
        height: 25em;
        width: 25em;
        border-radius: 12.5em;
        z-index: 1;
    }

    &:nth-of-type(2) {
        top: 2.5em;
        left: 2.5em;
    }

    &:nth-of-type(3) {
        top: 2.5em;
        right: 2.5em; 
    }

    &:nth-of-type(4) {
        bottom: 2.5em;
        left: 2.5em;
    }

    &:nth-of-type(5) {
        bottom: 2.5em;
        right: 2.5em; 
    }

    &:nth-of-type(6) {
        bottom: 10em;
        right: 0em; 
        height: 7em;
        width: 7em;
        border-radius: 3.5em;
    }

    &:nth-of-type(7) {
        bottom: 0em;
        right: 10em; 
        height: 7em;
        width: 7em;
        border-radius: 3.5em;
    }

    &:nth-of-type(8) {
        top: 0em;
        left: 12.5em; 
        height: 7em;
        width: 7em;
        border-radius: 3.5em;
    }

    &:nth-of-type(9) {
        top: 10em;
        left: 0em; 
        height: 7em;
        width: 7em;
        border-radius: 3.5em;
    }
}

</style>




<!-- <h1>SnappMap Overview</h1> -->

<!-- {#each snappMaps as snappMap}
    <SnappMapPreview {snappMap}></SnappMapPreview>
{/each}

<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
    }
</style> -->

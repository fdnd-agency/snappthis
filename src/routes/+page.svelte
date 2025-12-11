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
    --border-radius: 50%;
    --l: 12.5em;
    --m: 5em;
    --s: 3.5em;
    --position-1: 0;
    --position-2: 1.25em;
    --position-3: 5em;
  
    position: relative;
    width: 15em;
    height: 15em;
  
    @media ( width > 500px ) {
        --l: 25em;
        --m: 10em;
        --s: 7em;
        --position-1: 0;
        --position-2: 2.5em;
        --position-3: 10em;
        width: 30em;
        height: 30em;
    }
}

div {
    position: absolute;
    height: var(--m);
    width: var(--m);
    background-color: pink;
    border: solid hotpink .5em;
    border-radius: var(--border-radius);
    transition: easeOutBack;
    opacity: 0;
    animation: splat 1.5s;
    animation-delay: calc( .5s + (.15s * sibling-index()));

    &:nth-of-type(1) {
        top: var(--position-2);
        left: var(--position-2);
        height: var(--l);
        width: var(--l);
        border-radius: var(--border-radius);
        z-index: 1;
        /* opacity: 1; */
        animation: splash 3s;
    }

    &:nth-of-type(2) {
        top: var(--position-2);
        left: var(--position-2);
    }

    &:nth-of-type(3) {
        top: var(--position-2);
        right:var(--position-2); 
    }

    &:nth-of-type(4) {
        bottom: var(--position-2);
        left: var(--position-2);
    }

    &:nth-of-type(5) {
        bottom: var(--position-2);
        right: var(--position-2); 
    }

    &:nth-of-type(6) {
        bottom: var(--position-3);
        right: var(--position-1); 
        height: var(--s);
        width: var(--s);
    }

    &:nth-of-type(7) {
        bottom: var(--position-1);
        right: var(--position-3); 
        height: var(--s);
        width: var(--s);
    }

    &:nth-of-type(8) {
        top: var(--position-1);
        left: var(--position-3); 
        height: var(--s);
        width: var(--s);
    }

    &:nth-of-type(9) {
        top: var(--position-3);
        left: var(--position-1); 
        height: var(--s);
        width: var(--s);
    }
}

/* ANIMATIE - KLEINE BLOBJES */
@keyframes splat {
    0% {
        corner-shape: round;
        opacity: 0;
    }

    10% {
        corner-shape: round;
        opacity: 1;
    }

    90% {
        corner-shape: notch;
        opacity: 30%;
    }

    100% {
        corner-shape: notch;
        opacity: 0;
    }
}

/* ANIMATIE - GROTE BLOB */
@keyframes splash {
    0% {
        corner-shape: round;
        opacity: 1;
    }

    20% {
        corner-shape: round;
    }

    85% {
        corner-shape: notch;
        opacity: 0;
    }

    100% {
        corner-shape: notch;
        opacity: 0;
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

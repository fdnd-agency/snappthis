<script>
    import { page } from '$app/state'
    import { onMount } from 'svelte'

    let { data } = $props()
    let transitionRef
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid1')
    const snapMap = data.snaps?.[0]


    import Header from '$lib/components/header.svelte'
    import ViewTransition from '$lib/components/ViewTransition.svelte'

    const nextPage = `/${snappid}`;

    function handleDone(e) {
        goto(e.detail.next);  
    }

    function handleClick() {
        const nextPage = `/${data.id}`;
        transitionRef.next = nextPage;
        transitionRef.start();
    }
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<ViewTransition
     bind:this={transitionRef} on:done={handleDone}
/>

<Header title={snapMap.name}></Header>
<main>  
    {#each snaps as snap}
        <button on:click={() => goToSnap(snap.uuid)}>Open {snap.uuid}</button>
    {/each}
</main>

<style>
    main {
        overflow: scroll;
        margin-bottom: 5%;
        font-family: 'Bariol Bold';
        display: flex;
        justify-content: center;
        margin-top: 2em;

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .list {
        height: 4em;
        width: 8em;

    }




</style>

<script>
    import { page } from '$app/state'
    import { goto } from '$app/navigation';
    import Header from '$lib/components/header.svelte'
    import ViewTransition from '$lib/components/ViewTransition.svelte'


    let { data } = $props()
    const snapMap = data.snaps?.[0]
    let transitionRef
    const nextPage = '/';

    function handleDone(e) {
        goto(e.detail.next);  
    }

    function handleClick() {
        transitionRef.next = '/' 
        transitionRef.start()    
    }
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>



<Header title={snapMap.name} />

<main>  
    <button on:click={handleClick}>Home</button>
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

    a {
        height: 4em;
        width: 8em;
    }

</style>

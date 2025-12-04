<script>
    import { page } from '$app/state'
    import { onMount } from 'svelte'

    let { data } = $props()
    let transitionRef
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid1')
    const snapMap = data.snaps?.[0]

    function handleDone(e){
        goto(e.detail.next);  
    }

    import Header from '$lib/components/header.svelte'
    import ViewTransition from '$lib/components/ViewTransition.svelte'

    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import GridOne from '$lib/components/icons/Grid1Icon.svelte'
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'

    onMount(async () => {

    const listItems = document.querySelectorAll('.list')

    listItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault()

            // get the current link
            const link = item.querySelector("a")?.getAttribute("href")
            if (!link) return

            transitionRef.next = link
            transitionRef.start()
        })
    })

    // when navigation start the animation
    function navigate() {
        transitionRef.start(); 
    }
    });
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>
<ViewTransition
    bind:this={transitionRef}
    on:done={handleDone}
/>

<Header title={snapMap.name}></Header>
<main>

    <button class="list" bind:this={listItem}> GO </button>

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

<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid2')

    const snapMap = data.snaps?.[0]
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import GridOne from '$lib/components/icons/Grid1Icon.svelte'
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'

    import { Canvas } from '@threlte/core'
    import Scene from '$lib/components/threlthe/active-planet.svelte'

</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<header>
    <div class="title-block">
        <p> {snapMap.name} </p>

    </div>
    <div class="active-icon">
        <!-- threlte obj -->
    </div>
</header>
<main>

</main>

<style>
    :root {
        --dark-blue: #0d0f25;
    }
    main {
        background-color: var(--dark-blue);
    }

    .active-icon {
        height: 100%;
        width: 100%;
    }

    header {
        height: 10%;
    }
</style>
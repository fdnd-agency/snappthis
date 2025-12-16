<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid1')

    const snapMap = data.snaps?.[0]
    import Header from '$lib/components/Header.svelte'
    import LayoutNavigation from '$lib/components/Layout-navigation.svelte'
    import AddButton from '$lib/components/AddButton.svelte'
</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<Header title={snapMap.name}></Header>

<main>
    <div class="sidebar">
        <LayoutNavigation />
    </div>

    <div class="content">
        <AddButton />
    </div>
</main>

<style>
    main {
        margin-bottom: 5%;
        display: grid;
        grid-template-columns: 20% 80%;
        font-family: 'Bariol Bold';

        @media (max-width: 720px) {
            grid-template-columns: 1fr;
        }
    }

    .sidebar {
        background-color: var(--neutral-color-light);
        height: 100vh;
        width: fit-content;

        @media (max-width: 720px) {
            display: none;
        }
    }

    .content {
        display: grid;
        justify-content: center;
    }
</style>
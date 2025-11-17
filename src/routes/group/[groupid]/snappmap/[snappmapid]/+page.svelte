<script>
    import { page } from '$app/state'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid1')

    const snapMap = data.snaps?.[0]
    import Header from '$lib/components/Header.svelte'

</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

<Header title={snapMap.name}></Header>

<main>
    
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

    .layout-navigation {
        background-color: var(--neutral-color-80);
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        height: 100%;
        padding: 1em;

        @media (max-width: 720px) {
            flex-direction: row;
            justify-content: center;
            gap: 1em;
        }

        p {
            font-family: 'Bariol bold';

            @media (max-width: 720px) {
                display: none;
            }
        }

        label {
            display: flex;
            gap: 1em;
        }

        input {
            display: none;
        }
    }

    .container {
        display: grid;
        gap: 2em;
        top: 0;
        list-style: none;
        margin: 1em;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 1em;
        overflow: scroll;
        height: 100vh;
        gap: 1em;
    }

    img {
        border-radius: 5%;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .snaps-grid1 {
        display: grid;
        grid-template-columns: repeat(1, 1fr);
    }

    .snaps-grid2 {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
    }

    .snaps-grid3 {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
    }

    .snaps-grid4 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
    }

    .snaps-grid5 {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
    }

    .list-container {
        display: grid;
        grid-template-rows: 50% 40% 10%;
    }

    .feedback {
        display: flex;
        justify-content: flex-end;
    }

    .list.visible {
        display: grid;
        grid-template-columns: 30% 70%;
        padding: 1em;
    }

    .list-container {
        display: none;
    }

    .list-container.visible {
        display: block;
    }
</style>

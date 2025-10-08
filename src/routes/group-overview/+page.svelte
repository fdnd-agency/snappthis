<script>
    import Header from '$lib/components/header.svelte'
    import Nav from '$lib/components/navigation-bar.svelte'


    import { onMount } from 'svelte'
    import { loadPictures } from '$lib/components/index.js'

    let pictures = [];

    onMount(async () => {
        pictures = await loadPictures()
    });
</script>

<Header />
<main>
    <Nav />


    <!-- there should be the name of the snapmap here -->


    <div class="photo-overview">
        {#each pictures as picture}
            <img class="pic" src={`https://fdnd-agency.directus.app/assets/${picture.picture}`} height="512" width="512" alt="example photo"/>
        {/each}
    </div>
</main>

<style>
    main {
        height: 100%;
        width: 100%;
        background-color: var(--neutral-color-80);

    }


    .photo-overview {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1em;
        margin: 2em;


        .grid-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        .grid-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        .grid-4 {
            grid-template-columns: repeat(3, 1fr);
        }

        .grid-5 {
            grid-template-columns: repeat(3, 1fr);
        }

        & img {
            width: 100%;
            height: 100%;
            border-radius: var(--border-radius-desktop);
            border: 2px solid var(--accent-green-20);
            object-fit: cover;

            @media screen and (min-width: 720px) {
                border-radius: var(--border-radius-mobile);
            }
        }
    }
</style>

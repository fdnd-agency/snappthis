<script>
    import Header from '$lib/components/header.svelte'
    import Nav from '$lib/components/navbar-groupoverview.svelte'


    import { onMount } from 'svelte'
    import { loadPictures } from '$lib/components/index.js'

    let pictures = []
    let currentGrid = 'grid-1'

    onMount(async () => {
        pictures = await loadPictures()
    })

    // let notLoading = pictures
</script>

<Header />
<main>
    <Nav />


    <!-- there should be the name of the snapmap here -->


    <div class="photo-overview {currentGrid}">
        {#each pictures as picture}
            <img class="pic" src={`https://fdnd-agency.directus.app/assets/${picture.picture}`} height="512" width="512" alt="example photo"/>
            <!-- {#if notLoading}
             <picture>
                <source srcset="./src/lib/assets/group-overview/fallback.webp">
                <source srcset="./src/lib/assets/group-overview/fallback.avif">      
                    <img src="/src/lib/assets/group-overview/fallback.png"> 
            </picture> 
            {/if} -->
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
        gap: 1em;
        margin: 2em;

        .grid-1 {
            grid-template-columns: 1fr;
            gap: 1em;
            
        }

        &.grid-2 {
            grid-template-columns: repeat(2, 1fr);
        }

        &.grid-3 {
            grid-template-columns: repeat(3, 1fr);
        }

        &.grid-4 {
            grid-template-columns: repeat(4, 1fr);
        }

        &.grid-5 {
            grid-template-columns: repeat(5, 1fr);
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

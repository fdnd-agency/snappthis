<script>
    import Header from '$lib/components/header.svelte'


    import { onMount } from 'svelte'
    import { loadPictures } from '$lib/components/index.js'

    let pictures = [];

    onMount(async () => {
        pictures = await loadPictures()
    });
</script>

<Header />
<main>


    <!-- there should be the name of the snapmap here -->


    <div class="photo-overview">
        {#each pictures as picture}
            <img class="pic" src={`https://fdnd-agency.directus.app/assets/${picture.picture}`} height="512" width="512" alt="example photo"/>
        {/each}
    </div>
</main>

<style>
    main {
        height: 100vh;
        width: 100%;
        background-color: var(--neutral-color-80);
    }

    .snappmapnav {
        height: 50px;
        background-color: var(--neutral-color-60);
        display: flex;
        justify-content: space-between;
    }

    .photo-overview {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 1em;

        .gridtwo {
            grid-template-columns: repeat(2, 1fr);
        }

        .gridthree {
            grid-template-columns: repeat(3, 1fr);
        }

        .gridfour {
            grid-template-columns: repeat(3, 1fr);
        }

        .gridfive {
            grid-template-columns: repeat(3, 1fr);
        }

        & img {
            width: 100%;
            height: 100%;
            border-radius: 20px;
            border: 2px solid var(--accent-green-20);
            object-fit: cover;
        }
    }
</style>

<script>
    import Header from '$lib/components/header.svelte'
    import Dropdown from '$lib/components/dropdown-button.svelte'

    import { onMount } from 'svelte'
    import { loadPictures } from '$lib/components/index.js'

    let pictures = [];

    onMount(async () => {
        pictures = await loadPictures()
    });

</script>

<Header />

<main>
    <Dropdown />

    {#each pictures as picture}
        <picture>
            <source srcset={`https://fdnd-agency.directus.app/assets/${picture.picture}`} type="image/webp" media="(min-width: 512px)">
            <source srcset="/example/example-photo.webp" type="image/webp" media="(min-width: 512px)">
            <img class="pic" src={`https://fdnd-agency.directus.app/assets/${picture.picture}`} height="512" width="512" alt="example photo"/>
        </picture>
    {/each}
</main>

<style>
    main {
        height: 100vh;
        background-color: var(--neutral-color-80);
    }
</style>

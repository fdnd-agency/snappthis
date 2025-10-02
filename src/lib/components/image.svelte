<script>
    import { fetchPictures } from '$lib/components/index.js';
    import { onMount } from 'svelte';

    let pictures = [];

    onMount(async () => {
        pictures = await fetchPictures();
    });
</script>

<picture>
    <source class="pic" srcset="./src/lib/assets/example/example-photo.avif" media="(min-width: 512px)">    <source srcset="$lib/assets/example/example-photo.webp" media="(min-width: 512px)">
    <source class="pic" srcset="./src/lib/assets/example/example-photo.webp" media="(min-width: 512px)">    <source srcset="$lib/assets/example/example-photo.webp" media="(min-width: 512px)">
        <img class="pic" src=".src/lib/assets/example/example-photo.png" height="512" width="512" alt="example photo"/>
</picture>
        {#each pictures.data as picture}
            <p>{picture.location}</p>
        {/each}
<h2>hallo</h2>

<style>
    .pic:nth-last-of-type(1) {
        height: 512px;
        width: 512px;
        border-radius: 20px;
        border: var(--accent-green-20) 2px solid;
    }

</style>
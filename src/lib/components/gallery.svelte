<script>
    import { fetchPictures } from '$lib/components/index.js';
    import { onMount } from 'svelte';

    let pictures = [];

    onMount(async () => {
        pictures = await fetchPictures();
    });
</script>

{#each pictures.data as picture}
  <picture>
      <source srcset={`https://fdnd-agency.directus.app/assets/${picture.picture}`} type="image/webp" media="(min-width: 512px)">
      <source srcset="/example/example-photo.webp" type="image/webp" media="(min-width: 512px)">
    <img class="pic" src={`https://fdnd-agency.directus.app/assets/${picture.picture}`} alt="example photo"/>
  </picture>
{/each}

<style>
    .pic {
      width: 100%;
      height: 100%;
      border-radius: 40px;
      border: var(--accent-green-20) 2px solid;
      object-fit: cover;
    }
</style>
<script>
  import { onMount } from 'svelte';
  import { loadPictures } from '$lib/utils/fetchData.js';

  let pictures = [];

  onMount(async () => {
    pictures = await loadPictures();
  });
</script>

{#each pictures as picture}
  <picture>
    <source srcset={`https://fdnd-agency.directus.app/assets/${picture.picture}`} type="image/webp" media="(min-width: 512px)">
    <source srcset="/example/example-photo.webp" type="image/webp" media="(min-width: 512px)">
    <img class="pic" src={`https://fdnd-agency.directus.app/assets/${picture.picture}`} height="512" width="512" alt="example photo"/>
  </picture>
{/each}

<style>
    .pic:nth-last-of-type(1) {
        height: 512px;
        width: 512px;
        border-radius: 20px;
        border: var(--accent-green-20) 2px solid;
    }

</style>
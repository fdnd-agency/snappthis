<script>
    import Header from '$lib/components/header.svelte'
    import Picture from '$lib/components/gallery.svelte'
    import { fetchPictures } from '$lib/components/index.js';
    import { fetchUsers } from '../+page.index.js'
    import { onMount } from 'svelte'

  let users = []
  let pictures = []

  onMount(async () => {
    users = await fetchUsers()
    pictures = await fetchPictures()
  })
</script>

<Header title="SnappThis" />

<main>
    <div class="container">
      {#each pictures.data as picture}
        <Picture {picture} />
      {/each}
    </div>
</main>

<style>
    main {
        background-color: var(--neutral-color-90);
        height: 100vh;
    }

    .container {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 20px;
    }
</style>
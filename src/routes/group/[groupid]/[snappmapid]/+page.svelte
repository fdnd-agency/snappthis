<script>
import Header from '$lib/components/Header.svelte';
import Gallery from '$lib/components/GalleryComponent.svelte';
import Layout from '$lib/components/Layout-navigation.svelte';

  // get data from load function
  export let data;

  const snaps = data.snaps[0]?.snaps || [];
  const snapmap = data.snapmap;
  const users = data.users || [];

  const userMap = new Map(users.map(u => [u.uuid, u.name]));
</script>

<svelte:head>
    <title>{snapmap.name}</title>
</svelte:head>

<Header title={snapmap.name}></Header>

<main>
<div class="navbar">
    <Layout />
</div>
<div class="content">
{#each snaps as snap}

<p>{snap.picture}</p>
    <!-- <Gallery
      url={snapmap.uuid}        
      snap={snap.uuid}
      picture={snap.picture}
      author={userMap.get(snap.author) || snap.author}
      location={snap.location}
    /> -->
{/each}
</div>
</main>

<style>
    main {
        display: grid;
        grid-template-columns: 20% 1fr;
    }
    .content {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 1em;
        margin: 1em;
    }

p {
    color: black;
}
</style>

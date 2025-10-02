<script>
    import Header from '$lib/components/header.svelte';
    import Image from '$lib/components/image.svelte';
    import { fetchUsers } from '$lib/index.js';
    import { onMount } from 'svelte';

  let users = [];

  onMount(async () => {
    users = await fetchUsers();
  });
</script>

<Header title="SnappThis" />

<main>
    <Image />
        <Image />
            <Image />
                <Image />
                    <Image />
    <p>{users.name}</p>
</main>

<style>
    main {
        background-color: var(--neutral-color-90);
        height: 100vh;
    }
</style>
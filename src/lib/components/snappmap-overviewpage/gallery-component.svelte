<script>
    import { fetchPictures } from '$lib/components/index.js';
    import { onMount } from 'svelte';

    let pictures = [];

    let { data } = $props();
    const snaps = data.snaps?.[0]?.snaps || [];
    const id = data.id;
    const users = data.users;

    onMount(async () => {
        pictures = await fetchPictures();
        console.log("Fetched pictures:", pictures);
    });
</script>

<div class="snaps">
    <ul>
        {#each snaps as snap}
            <li>
                <picture>
                    {#if snap.picture}
                    <source
                        srcset={`https://fdnd-agency.directus.app/assets/${snap.picture}?width=512&height=512&format=webp`}
                        type="image/webp"
                        loading="lazy"

                    />
                    <source
                        srcset={`https://fdnd-agency.directus.app/assets/${snap.picture}?width=512&height=512&format=avif`}
                        type="image/avif"
                        loading="lazy"

                    />
                    <img
                        src={`https://fdnd-agency.directus.app/assets/${snap.picture}?width=512&height=512`}
                        height="512"
                        width="512"
                        alt="example photo"
                        loading="lazy"

                    />
                        {:else}
                    <source
                        srcset="./src/lib/assets/example/example-photo.webp"
                        type="image/webp"
                        alt="fallback photo"
                        loading="lazy"
                    />
                    <source
                        srcset="./src/lib/assets/example/example-photo.avif"
                        type="image/avif"
                        alt="fallback photo"
                        loading="lazy"

                    />
                    <img
                        src="./src/lib/assets/example/example-photo.webp"
                        height="512"
                        width="512"
                        alt="fallback photo"
                        loading="lazy"
                    />
                {/if}
                </picture>

                <h2>{snap.author}</h2>
                <p>{snap.location}</p>

                <Feedback />
            </li>
        {/each}
    </ul>
</div>

<style>
    .snaps ul {
        list-style: none;
        padding: 0;
    }
</style>

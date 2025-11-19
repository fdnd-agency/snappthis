<script>
    import { onMount } from 'svelte';

    let pictures = [];

    let { data } = $props();

    onMount(async () => {
        pictures = await fetchPictures();
        console.log("Fetched pictures:", pictures);
    });

    // which data needed?

    // picture-code as picture
    // author of the picture snap user (traced in the code itself)
    // location of where the picture is made
    // feedback of the snapp starred tomato and starred
</script>

<div class="snaps">
    <ul>
        
            <li>
                <picture>
                    {#if picture}
                    <source
                        srcset={`https://fdnd-agency.directus.app/assets/${picture}?width=512&height=512&format=webp`}
                        type="image/webp"
                        loading="lazy"

                    />
                    <source
                        srcset={`https://fdnd-agency.directus.app/assets/${picture}?width=512&height=512&format=avif`}
                        type="image/avif"
                        loading="lazy"

                    />
                    <img
                        src={`https://fdnd-agency.directus.app/assets/${picture}?width=512&height=512`}
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
    </ul>
</div>

<style>
    .snaps ul {
        list-style: none;
        padding: 0;
    }
</style>

<script>
    import { fetchPictures } from '$lib/components/index.js'
    import { onMount } from 'svelte'

    export let pictures = []
</script>

    <picture>
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${picture}`}
            type="image/webp"
            media="(min-width: 256px)" />
        <source
            srcset="/example/example-photo.webp"
            type="image/webp"
            media="(min-width: 256px)" />
        <img
            class="pic"
            src={`https://fdnd-agency.directus.app/assets/${picture}`}
            height="256"
            width="256"
            alt="example photo" />
    </picture>

<style>
    picture {
        @media (max-width: 720px) {
            height: 256px;
            width: 256px;
        }
    }

</style>

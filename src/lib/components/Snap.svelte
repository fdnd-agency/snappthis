<script>
    import { fetchPictures } from '$lib/components/index.js'
    import { onMount } from 'svelte'

    
    export let picture = []
</script>

<a href="/">
    <picture>
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${picture}?width=200&height=200&format=avif`}
            type="image/avif"
        />
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${picture}?width=200&height=200&format=webp`}
            type="image/webp"
        />
        <img
            src={`https://fdnd-agency.directus.app/assets/${picture}`}
            alt="photo by author at location"
        />
    </picture>

    <div class="list-items">
        <h2>The Author</h2>
        <h3>Location</h3>
    </div>
</a>


<style>

    picture {
        height: 200px;
        width: 200px;
        overflow: hidden;
    }
    
    .list-items {
        padding: 1em;
        display: flex;
        flex-direction: column;
    }
</style>

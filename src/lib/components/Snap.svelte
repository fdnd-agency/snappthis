<script>
    import { fetchPictures } from '$lib/components/index.js'
    import { onMount } from 'svelte'
    
    export let picture = []
    export let list = []


</script>

<li href="/">
    <picture>
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${picture}&format=avif`}
            type="image/avif"
        />
        <source
            srcset={`https://fdnd-agency.directus.app/assets/${picture}&format=webp`}
            type="image/webp"
        />
        <img
            src={`https://fdnd-agency.directus.app/assets/${picture}`}
            alt="photo by author at location"
        />
    </picture>

    <div class={list}>
        <h2>The Author</h2>
        <h3>Location</h3>
    </div>
</li>


<style>
    li {
        list-style: none;
    }
    picture img {
        overflow: hidden;
    }

    .items-list {
        display: block;
    }

    .items-xlarge {
        display: none;
    }

    .items-large {
        display: none;
    }

    .items-medium {
        display: none;
    }

    .items-small {
        display: none;
    }
</style>

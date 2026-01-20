<script>
    import { fetchPictures } from '$lib/components/index.js'
    import { onMount } from 'svelte'
    
    export let href = []
    export let picture = []
    export let list = []

    export let author = []
    export let location = []


</script>

<a href={href}>
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
        <h2>{author}</h2>
        <h3>{location}</h3>
    </div>
</a>


<style>
    li {
        list-style: none;
    }
    picture img {
        height: 100%;
        width: 100%;
        padding: 0.5em;
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

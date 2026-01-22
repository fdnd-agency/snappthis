<script>
    import { onMount } from 'svelte'
    
    export let href = []
    export let picture = []
    export let list = []

    export let author = []
    export let location = []
</script>

<li>
<a href={href} class="all-{list}">
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
</li>


<style>
    .all-items-list {
        text-decoration: none;
        display: grid;
        grid-template-columns: 20% 80%;
        margin: 1em;
        background-color: var(--neutral-color-lighter);
    }

    li {
        list-style: none;
    }

    picture img {
        height: auto;
        width: 100%;
        aspect-ratio: 1/1;
        padding: 0.5em;
        object-fit:cover;
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

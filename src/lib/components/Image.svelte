<script>
    import { fetchPictures } from '$lib/components/index.js'
    import { onMount } from 'svelte'

    export let picture = []
</script>

<a>
    <picture>
        <img
            class="pic"
            src={`https://fdnd-agency.directus.app/assets/${picture}`}
            height="256"
            width="256"
            alt="example photo" />
    </picture>
</a>

<style>
    
    .list-items {
        padding: 1em;
        display: flex;
        flex-direction: column;
    }

    .listview-a {
        height: 2em;
        width: 8em;
        background-color: var(--neutral-color);
        padding: 1em;
        text-decoration: none;
        display: flex;
        justify-content: center;
        align-items: center;
    }



</style>

<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';

    let snappmaps = [];

    onMount(async () => {
        const response = await fetch(
            'https://fdnd-agency.directus.app/items/snappthis_snapmap'
        );

        const json = await response.json();
        snappmaps = json.data;
    });
</script>

{#if snappmaps.length}
    <p>{snappmaps[0].title}</p>

    <div class="dropdown">
        {#each snappmaps as map}
            <a href=""> {map.name} </a>
        {/each}
    </div>
{/if}

<style>
    .dropdown {
        position: relative;
        width: 50%;
        left: 25%
    }
</style>

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
    <div class="dropdown">
    <div class="card-dropdown">
        {content}
        {#each snappmaps as map}
            <a href="/{map.uuid}"> {map.name} </a>
        {/each}
    </div>
    </div>
{/if}

<style>
    .dropdown {
        position: absolute;
        width: 50%;
        left: 25%;
        color: var(--neutral-color-lighter)
    }

    .card-dropdown {
        color: var(--neutral-color-whitest);
        background-color: var(--primary-color-lighter);
        border-radius: 1em;
        display: flex;
        align-items: center;
        padding: 5em;
        justify-content: center;
    }

    a {
        display: flex;
        flex-direction: row;
        height: 2em;
        width: 10em;
        text-decoration: none;
        justify-content: center;
        gap: 2em;
        font-size: 25px;

    }
</style>

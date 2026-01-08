<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';

    let snappmaps = [];

    onMount(async () => {

        const base = 'https://fdnd-agency.directus.app/items/snappthis_snapmap'
        let url = base;

        // check the current URL or it is a group id
        if (groupId) {
            url += `?filter[group][_eq]=${encodeURIComponent(groupId)}`;
        } else if (groupUuid) {
            url += `?filter[group][uuid][_eq]=${encodeURIComponent(groupUuid)}`;
        }

        // fetch the API
        const response = await fetch(url);
        const json = await response.json();
        let data = json.data ?? [];
        snappmaps = json.data;
    });
</script>

{#if snappmaps.length}
    <div class="dropdown">
        {#each snappmaps as map}
        <div class="card-dropdown">
            <a href="/{map.uuid}"> {map.name} </a>
        </div>
        {/each}
    </div>
{/if}

<style>
    .dropdown {
        position: relative;
        width: 50%;
        background-color: var(--primary-color-darker);
        left: 25%;
    }

    .card-dropdown {
        color: var(--neutral-color-whitest);
        background-color: var(--primary-color-lighter);
        gap: 2em;
    }

    a {
        display: flex;
        flex-direction: row;
        height: 2em;
        width: 5em;
        text-decoration: none;
        justify-content: center;
        gap: 2em;
    }
</style>

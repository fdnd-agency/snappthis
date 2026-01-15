<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';

    // all exports
    export let groupUuid = null;
    export let currentId = null;
    export let data = null;

    onMount(async () => {
        try {
            // fetching the group uuid from the database
            if (groupUuid) {
                const res = await fetch(
                `https://fdnd-agency.directus.app/items/snappthis_group?filter[uuid][_eq]=${encodeURIComponent(
                        groupUuid
                    )}&fields=name,uuid,snappmap.snappthis_snapmap_uuid.*`
                );    
                const js = await res.json();
                const group = js.data?.[0] ?? null;

                snappmaps =
                (group?.snappmap ?? [])
    
                    .map(rel => rel?.snapthis_snapmap_uuid)
            }
        }
    })
</script>

{#if snappmaps.length}
    <div class="dropdown">
        {#each snappmaps as map}
            <a href="/group"> {map.name} </a>
        {/each}
    </div>
{/if}

<style>
    .dropdown {
        position: absolute;
        width: 60%;
        left: 20%;
        background-color: var(--neutral-color-lighter);
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
        animation: slidedown 0.3s forwards;

        @media (width < 720px) {
            width: 200%;
            left: -50%;
    }

        a {
            display: flex;
            justify-content: flex-start;
            padding: 1em;
            background-color: var(--neutral-color-light);
            border-radius: 1em;
            text-decoration: none;

        }
    }

    @keyframes slidedown {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0%);
        }
    }

</style>

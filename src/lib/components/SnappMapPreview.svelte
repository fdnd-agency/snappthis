<script>
    import HeartIcon from '$lib/components/icons/HeartIcon.svelte'
    import StarIcon from '$lib/components/icons/StarIcon.svelte'
    import TomatoIcon from '$lib/components/icons/TomatoIcon.svelte'
    import GalleryIcon from '$lib/components/icons/GalleryIcon.svelte'

    export let snappMap
    export let groupID
</script>

<li>
    <div>
        <a href={`/group/${groupID}/snappmap/${snappMap.uuid}`}>{snappMap.name}</a>
        <ul>
            <li><HeartIcon />15</li>
            <li><TomatoIcon />9</li>
            <li><StarIcon />2</li>
        </ul>
    </div>

    <ul>
        <li>
            <GalleryIcon />
            {snappMap.snaps.length}
        </li>

        {#each snappMap.snaps.slice(0, 4) as snap}
            <li>
                <img
                    src={
                        'https://fdnd-agency.directus.app/assets/' +
                        snap.picture +
                        '?width=200&height=200&format=webp'
                    }
                    width="200"
                    height="200"
                    alt=""
                />
            </li>
        {/each}
    </ul>
</li>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: var(--neutral-color-darkest);
    }

    li {
        margin: 0 auto;
        padding: 1rem;
        width: 100%;
        max-width: 1000px;
        list-style: none;
        font-family: 'Bariol', sans-serif;
    }

    ul {
        list-style: none;
        display: flex;
    }

    ul li {
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
    }

    /* First row */
    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-block: 1rem;
        font-size: clamp(1.25rem, 0.75rem + 1.5vw, 2rem);
    }

    div > ul {
        gap: 1rem;
    }

    div > ul li {
        display: flex;
        margin: 0;
        padding: 0;
        max-width: unset;
    }

    div > ul li :global(svg) {
        height: 1.25em;
        width: 1.25em;
        padding-right: 0.15em;
    }

    /* Second row */
    div + ul {
        max-width: 100%;
        overflow-x: scroll;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 0.5rem;
    }

    div + ul li {
        margin: 0;
        padding: 0;
        height: 100%;
        min-width: 6.25rem;
        width: 100%;
        max-width: 12.5rem;
    }

    div + ul li img {
        width: 100%;
        object-fit: cover;
        height: auto;
        aspect-ratio: 1 / 1;
    }

    /* Second row: first block (gallery icon) */
    div + ul li:first-of-type {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #e9ecee;
        font-size: clamp(1.25rem, 0.75rem + 1.5vw, 2rem);
    }

    div + ul li:first-of-type :global(svg) {
        height: 50%;
        width: 50%;
    }
</style>

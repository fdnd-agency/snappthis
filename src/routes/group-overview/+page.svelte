<script>
    import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'
    import PlusIcon from '$lib/components/icons/PlusIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'

    let { data } = $props()
    const groups = data.groups
</script>

<svelte:head>
    <title>Your Groups</title> 
</svelte:head>

<header>
    <div>
        <a href="/"><ArrowLeftIcon title="back"></ArrowLeftIcon></a>
        <h1>Your Groups</h1>
        <a href="/"><PlusIcon title="Add group"></PlusIcon></a>
    </div>
</header>

<main>
    <div>
        <ul>
            {#each groups as group}
                <li>
                    <a href={group.uuid}>{group.name}</a>
                    <p>
                        {#if group.users.length == 0}
                            No members yet
                        {:else if group.users.length == 1}
                            {group.users.length} member
                        {:else}
                            {group.users.length} members
                        {/if}
                    </p>
                    <div class="options">
                        <a href="/"><UserIcon title="Add User"></UserIcon></a>
                        <a href="/"><LogoIcon title="Add Snappmap"></LogoIcon></a>
                    </div>
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
    /* Header styles */
    header {
        background-color: var(--primary-color);
        width: 100%;
        color: white;
        font-family: 'Bariol';
    }

    h1 {
        font-size: clamp(1.5rem, 1.3rem + 1.15vw, 2rem);
    }

    header a {
        color: white;
        text-decoration: none;
    }

    header a :global(svg) {
        height: 1.25em;
    }

    header > div,
    main > div {
        max-width: 1000px;
        margin-inline: auto;
    }

    header > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;
    }

    /* Main styles */
    main {
        font-family: 'Bariol';
        color: var(--primary-color);
        width: 100%;
    }

    ul,
    li {
        margin: 0;
        padding-inline: 0;
    }

    li {
        list-style: none;
        padding: 1em;
        border-bottom: 2px solid #E9ECEE;
        display: grid;
        grid-template-areas:
            'title link'
            'members link ';
            align-items: center;
    }

    li > a {
        font-size: 1.5rem;
        margin: 0;
        color: currentColor;
        text-decoration: none;
        grid-area: title;
        align-self: top;
    }

    li p {
        grid-area: members;
        margin: 0;
        color: var(--primary-color-30);
    }

    li .options {
        grid-area: link;
        justify-self: end;
    }

    li .options a {
        color: var(--primary-color-30);
    }

    li .options a :global(svg) {
        height: 1.5em;
    }
</style>

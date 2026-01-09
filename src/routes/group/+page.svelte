<script>
    import Header from '$lib/components/header.svelte'
    import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'
    import PlusIcon from '$lib/components/icons/PlusIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'

    let page = 'groups'
    let { data } = $props()
    const groups = data.groups
</script>

<svelte:head>
    <title>Your Groups</title>
</svelte:head>

<Header title="Groups" page="add" active="groups"/>
<main>
    <div>
        <ul>
            {#each groups as group}
                <li class="group">
                    <a href="/group/{group.uuid}"> {group.name} </a>
                    <p>
                        {#if group.users.length == 0}
                            No members yet
                        {:else if group.users.length == 1}
                            {group.users.length} member
                        {:else}
                            {group.users.length} members
                        {/if}
                    </p>
                    <ul class="options">
                        <li>
                            <a href="/">
                                <UserIcon title="Add User"></UserIcon>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <LogoIcon title="Add Snappmap"></LogoIcon>
                            </a>
                        </li>
                    </ul>
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
    main > div {
        max-width: 1000px;
        margin-inline: auto;
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

    .group {
        list-style: none;
        padding: 1em;
        border-bottom: 2px solid var(--neutral-color-lightest);
        display: grid;
        grid-template-areas:
            'title link'
            'members link ';
        align-items: center;
    }

    .group > a {
        font-size: 1.5rem;
        margin: 0;
        color: currentColor;
        text-decoration: none;
        grid-area: title;
        align-self: top;
    }

    .group > p {
        grid-area: members;
        margin: 0;
        color: var(--primary-color-light);
    }

    .options {
        grid-area: link;
        justify-self: end;
        display: flex;
        list-style: none;
    }

    .options a {
        color: var(--primary-color-light);
    }

    .options a :global(svg) {
        height: 1.5em;
    }
</style>

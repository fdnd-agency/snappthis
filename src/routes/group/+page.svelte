<script>
    import Header from '$lib/components/Header.svelte'

    // icons
    import PlusIcon from '$lib/components/icons/PlusIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'

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
                    <a href="/group/{group.uuid}">{group.name}</a>
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
                                <UserIcon title="Add User"/>
                            </a>
                        </li>
                        <li>
                            <a href="/">
                                <LogoIcon title="Add Snappmap"/>
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

    .group {
        padding: 1em;
        border-bottom: 2px solid var(--neutral-color-light);
        display: grid;
        grid-template-areas:
            'title link'
            'members link ';
        align-items: center;
    }

    .group > a {
        font-size: 1.5em;
        color: currentColor;
        text-decoration: none;
        grid-area: title;
        align-self: top;
    }

    .group > p {
        grid-area: members;
        margin: 0;
        color: var(--neutral-color-dark);
    }

    .options {
        grid-area: link;
        justify-self: end;
        display: flex;
        list-style: none;
    }

    .options a {
        color: var(--neutral-color-dark);
    }
</style>

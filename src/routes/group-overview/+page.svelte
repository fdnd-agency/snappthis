<script>
    let { data } = $props()
    const groups = data.groups
</script>

<header>
    <div>
        <a href="/">Back</a>
        <h1>Group Overview</h1>
        <a href="/">Add group</a>
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
                    <a href="/">Add person</a>
                    <a href="/">Add SnappMap</a>
                </li>
            {/each}
        </ul>
    </div>
</main>

<style>
    header {
        background-color: #172f3b;
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

    div {
        max-width: 1000px;
        margin-inline: auto;
    }

    header div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;
    }

    main {
        font-family: 'Bariol';
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
        border-bottom: 1px solid grey;
    }

    li a:nth-of-type(1) {
        font-size: 1.5rem;
        margin-block: 0.25em;
        color: currentColor;
        text-decoration: none;
    }
</style>

<script>
    let { data } = $props()
    const groups = data.groups
</script>

<header>
    <h1>Group Overview</h1>
    <a href="/">Add group</a>
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
        display: flex;
        color: white;
        font-family: 'Bariol';
    }

    ul,
    li {
        margin-inline: 0;
        padding-inline: 0;
    }
    li {
        list-style: none;
        padding: 1em;
        border-bottom: 1px solid grey;
    }
</style>

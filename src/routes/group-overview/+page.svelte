<script>
    let { data } = $props()
    const groups = data.groups
</script>

<header>
    <h1>Group Overview</h1>
    <a href="/">Add group</a>
</header>

<main>
    <ul>
        {#each groups as group}
            <li>
                <p>{group.name}</p>
                <p>{group.users.length}</p>
                <a href="/">Add person</a>
                <a href="/">Add SnappMap</a>
            </li>
        {/each}
    </ul>
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

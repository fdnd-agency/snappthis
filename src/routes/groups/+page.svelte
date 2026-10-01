<script>
    import Header from '$lib/components/Header.svelte';

    import Footer from '$lib/components/Footer.svelte';

    let { data } = $props()
</script>

<Header
    title="Your groups"
    showBackButton={true}
    showAddButton={true}
/>

<ul class="groups">
    {#each data.groups as group}
        <li class="group-list-container">
            <a href={`/groups/${group.slug}`}>
                <div class="group-list-stats">
                    <h2>{group.name}</h2>
                    <p>{group.users.length} members</p>
                </div>
            </a>

            <div class="group-list-interactive">
                
            </div>
        </li>
    {/each}
</ul>

<Footer/>

<style>
    .groups {
        min-width: 223px;
    }

    .groups a {
        text-decoration: none;
        color: var(--dark-text-color-on-light-bg);
        display: flex;
        align-items: center;
        flex: 1;
    }

    .group-list-container {
        border-bottom: var(--text-color-on-light-bg) 1px solid;
        padding-inline: var(--spacing-s);
        display: flex;
        justify-content: space-between;
        height: var(--bar-height);
    }

    .group-list-stats {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .group-list-stats h2 {
        line-height: 1.25;
        font-size: var(--font-size-m);
        font-weight: 400;
    }

    .group-list-stats p {
        font-size: var(--font-size-xs);
        color: var(--text-color-on-light-bg);
    }

    .group-list-interactive {
        display: flex;
        align-items: center;
        gap: 0.5rem;
    }
</style>
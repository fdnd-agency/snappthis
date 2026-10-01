<script>
    // haalt de props uit de server js
    let { data } = $props()

    import Header from '$lib/components/Header.svelte';

    import Footer from '$lib/components/Footer.svelte';
</script>

<Header 
    title={data.group.name}
    showBackButton={true}
    showAddButton={true}
/>

<ul class="groups">
    {#each data.snappmaps as snapmap}
        <li class="group-list-container">
            <div class="group-list-stats snappmap">
                <h2>
                    <a href={`/snappmaps/${snapmap.slug}`}>
                        {snapmap.name}
                    </a>
                </h2>

                <p>
                    {snapmap.time_start} - {snapmap.time_end}
                </p>
            </div>
        </li>
    {/each}
</ul>

<Footer />

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
</style>

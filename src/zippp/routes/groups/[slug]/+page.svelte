<script>
    // haalt de props uit de server js
    let { data } = $props()

    import Header from '$lib/components/Header.svelte';

    import Footer from '$lib/components/Footer.svelte';
</script>

<Header 
    title="Your snappmaps"
    showBackButton={true}
    backUrl="/groups"
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

</style>

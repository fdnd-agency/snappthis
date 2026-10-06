<script>
    import Header from '$lib/components/Header.svelte';

    import SnappmapOverview from '$lib/components/SnappmapOverview.svelte';

    import Footer from '$lib/components/Footer.svelte';

    let { data } = $props();

    // console.log(data.snappmaps)
</script>

<Header title="Your snappmaps" />

<ul>
    {#each data.snappmaps as snappmap}
      <li>
<SnappmapOverview {snappmap} />
    </li>
{/each}
</ul>

<Footer />
<!-- The landing page with header, snappmapp-list, footer and empty state  -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';

	import SnappmapPreview from '$lib/components/SnappmapPreview.svelte';

	// Data from the load function in +page.server.js
	let { data } = $props();
</script>

<svelte:head>
	<title>SnappThis</title>
</svelte:head>


<Header
    title="Welcome back"
    showBackButton={false}
    showAddButton={true}
/>

<main>
	<!-- The first 2 snappmaps are visible without scrolling, so their images load immediately -->
     <!-- perfomance fix for the first snappmaps to be loading eager -->
    {#each data.snappmaps as snappmap, index (snappmap.uuid)}
     <SnappmapPreview {snappmap} eager={index < 2} />
	{:else}
		<p class="empty">There are no snappmaps yet.</p>
	{/each}
</main>

<Footer />

<style>
	main {
		/* Room for the fixed footer, so the last snappmap doesn't disappear behind it */
		padding-block-end: var(--bar-height);
	}

	.empty {
		padding: var(--spacing-s);
		color: var(--text-color-on-light-bg);
		font-size: var(--font-size-xs);
	}
</style>
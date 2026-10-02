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
    showBackButton={true}
    showAddButton={true}
/>

<main>
	{#each data.snappmaps as snappmap (snappmap.uuid)}
		<SnappmapPreview {snappmap} />
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
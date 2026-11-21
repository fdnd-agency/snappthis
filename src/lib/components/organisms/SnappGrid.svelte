<!-- Grid with all snapps of a snappmap: 2 to 5 per row, or a list (MoSCoW 90) -->
<script>
	import SnappThumbnail from '$lib/components/molecules/SnappThumbnail.svelte';

	// view = '2', '3', '4', '5' or 'list', checked by load in +page.server.js
	let { snapps, snappmapName = '', view = '3' } = $props();

	// A list is one photo per row
	const columns = $derived(view === 'list' ? 1 : Number(view));

	// Fewer columns = bigger photos, so ask Directus for a bigger image.
	// 900 / 3 = 300, the size we used before for the default grid.
	const imageSize = $derived(Math.round(900 / columns));
</script>

{#if snapps.length > 0}
	<ul class="snapp-grid" style:--columns={columns}>
		{#each snapps as snapp, index (snapp.uuid)}
			<li>
				<!-- The first row loads right away, the rest lazily -->
				<SnappThumbnail
					{snapp}
					size={imageSize}
					eager={index < columns}
					label="Snapp {index + 1} of {snapps.length} in {snappmapName}"
				/>
			</li>
		{/each}
	</ul>
{:else}
	<p class="empty">No snapps yet. Be the first!</p>
{/if}

<style>
	.snapp-grid {
		display: grid;
		grid-template-columns: repeat(var(--columns, 3), 1fr);
		gap: var(--grid-gap);
		list-style: none;
	}

	.empty {
		padding: var(--spacing-s);
		color: var(--color-accent-blue-white-50);
		font-size: var(--font-size-p);
	}
</style>
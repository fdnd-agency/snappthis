<!-- Grid with all snapps of a snappmap, 3 per row -->
<script>
	import SnappThumbnail from '$lib/components/SnappThumbnail.svelte';

	let { snapps, snappmapName = '' } = $props();
</script>

{#if snapps.length > 0}
	<ul class="snapp-grid">
		{#each snapps as snapp, index (snapp.uuid)}
			<li>
				<!-- First row loads right away, the rest lazily -->
				<SnappThumbnail
					{snapp}
					size={300}
					eager={index < 3}
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
		grid-template-columns: repeat(3, 1fr);
		gap: var(--grid-gap);
		list-style: none;
	}

	.empty {
		padding: var(--spacing-s);
		color: var(--text-color-on-light-bg);
		font-size: var(--font-size-xs);
	}
</style>

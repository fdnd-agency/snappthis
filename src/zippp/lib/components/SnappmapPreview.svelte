<!-- Snappmap preview component, able to be reused with its own styling -->
 <!-- 1 Snappmap title "add your snapp" and row of 5 thumbnails -->
<script>
	import SnappThumbnail from '$lib/components/SnappThumbnail.svelte'; //thumbnail also as a component

	// One snappmap on the homepage: title, optional "Add your snapp!" and up to 5 thumbnails
    // check!

	// eager = true for the snappmaps at the top of the page, so their images load immediately
    let { snappmap, eager = false } = $props();
</script>

<section class="snappmap">
	<h2><a href="/snappmaps/{snappmap.slug}">{snappmap.name}</a></h2>

	{#if snappmap.showAddSnapp}
		<p class="active"><strong>Add your snapp!</strong></p>
	{/if}

	{#if snappmap.thumbnails.length > 0}
		<ul class="image-thumbnails">
			{#each snappmap.thumbnails as snapp, index (snapp.uuid)}
				<li>
					<SnappThumbnail
						{snapp}
                        {eager}
						label="Snapp {index + 1} of {snappmap.thumbnails.length} in {snappmap.name}"
					/>
				</li>
			{/each}
		</ul>
	{:else}
    <!-- empty state -->
		<p class="empty">No snapps yet.</p>
	{/if}
</section>

<style>
	.snappmap {
		display: grid;
		grid-template-columns: 1fr max-content;
		align-items: center;

		@media (prefers-reduced-motion: no-preference) {
			animation: fade-in 0.5s backwards;
			animation-delay: calc(100ms * sibling-index());
		}
	}

	h2 {
		display: flex;
		align-items: center;
		height: var(--bar-height);
		padding-inline: var(--spacing-s);
		font-size: var(--font-size-m);
		font-weight: 400;

		a {
			display: inline-block;
			color: var(--dark-text-color-on-light-bg);
			text-decoration: none;
			transition: scale var(--transition-duration);

			@media (any-pointer: fine) {
				&:hover {
					scale: var(--hover-scale);
				}
			}

			&:focus-visible {
				outline: 2px solid var(--accent-color-on-light-bg);
				outline-offset: 4px;
			}
		}
	}

	.active {
		padding-inline: var(--spacing-s);
		color: var(--accent-color-on-light-bg);
		font-size: var(--font-size-xs);
	}

	.empty {
		grid-column: 1 / -1;
		padding-inline: var(--spacing-s);
		padding-block-end: var(--spacing-s);
		color: var(--text-color-on-light-bg);
		font-size: var(--font-size-xs);
	}

	.image-thumbnails {
		grid-column: 1 / -1;
		display: grid;
		grid-template-columns: repeat(5, 1fr);
		gap: var(--grid-gap);
		list-style: none;
	}

	@keyframes fade-in {
		from {
			opacity: 0;
		}
	}
</style>
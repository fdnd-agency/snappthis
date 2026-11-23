<!-- Grid with all snapps of a snappmap: 2 to 5 per row, or a list with date and location (MoSCoW 90) -->
<script>
	import SnappThumbnail from '$lib/components/molecules/SnappThumbnail.svelte';

	// view = '2', '3', '4', '5' or 'list', checked by load in +page.js
	let { snapps, snappmapName = '', view = '3' } = $props();

	const isList = $derived(view === 'list');

	// A list is one photo per row
	const columns = $derived(isList ? 1 : Number(view));

	// Fewer columns = bigger photos, so ask Directus for a bigger image.
	// 900 / 3 = 300, the size we used before for the default grid.
	const imageSize = $derived(Math.round(900 / columns));

	// "23 Nov 2026, 14:05". The time zone is fixed, so the server and the browser
	// show the same time (the server may run in another time zone than the user)
	const dateFormat = new Intl.DateTimeFormat('en-GB', {
		day: 'numeric',
		month: 'short',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
		timeZone: 'Europe/Amsterdam'
	});
</script>

{#if snapps.length > 0}
	<ul class="snapp-grid" class:list={isList} style:--columns={columns}>
		{#each snapps as snapp, index (snapp.uuid)}
			<li>
				<!-- The first row loads right away, the rest lazily -->
				<SnappThumbnail
					{snapp}
					size={imageSize}
					eager={index < columns}
					label="Snapp {index + 1} of {snapps.length} in {snappmapName}"
				/>

				<!-- Only in the list view: when and where the photo was taken -->
				{#if isList && snapp.date}
					<p class="details">
						<time datetime={snapp.date}>{dateFormat.format(new Date(snapp.date))}</time>

						<!-- 'Unknown' means there was no location, so we don't show it -->
						{#if snapp.location && snapp.location !== 'Unknown'}
							<span>{snapp.location}</span>
						{/if}
					</p>
				{/if}
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

	/* In the list there is more room between the photos, for the details */
	.snapp-grid.list {
		row-gap: var(--spacing-m);
	}

	.details {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
		padding: var(--spacing-xs) var(--spacing-s);
		font-size: var(--font-size-p);
		color: var(--color-accent-blue-white-30);
	}

	.empty {
		padding: var(--spacing-s);
		color: var(--color-accent-blue-white-50);
		font-size: var(--font-size-p);
	}
</style>
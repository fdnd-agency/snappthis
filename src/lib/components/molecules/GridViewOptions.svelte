<!-- Panel to choose how the photo grid is shown: 2 to 5 columns or a list (MoSCoW 90) -->
<!-- Every option is a link so it works without JavaScript (PE) -->
<script>
	// view = the current view: '2', '3', '4', '5' or 'list'
	let { view = '3' } = $props();

	// Names from the design, from big to small
	const options = [
		{ value: '2', label: 'XLarge', columns: 2 },
		{ value: '3', label: 'Large', columns: 3 },
		{ value: '4', label: 'Medium', columns: 4 },
		{ value: '5', label: 'Small', columns: 5 }
	];
</script>

<!-- A grid icon: n × n small squares, drawn in a 24 × 24 box -->
{#snippet gridIcon(columns)}
	{@const cell = 24 / columns}
	<svg class="option-icon" viewBox="0 0 24 24" aria-hidden="true">
		{#each Array(columns * columns) as _, index (index)}
			<rect
				x={(index % columns) * cell}
				y={Math.floor(index / columns) * cell}
				width={cell - 1.5}
				height={cell - 1.5}
			/>
		{/each}
	</svg>
{/snippet}

<nav class="grid-view-options" aria-labelledby="grid-view-title">
	<h2 id="grid-view-title" class="title">View</h2>

	<ul class="list">
		{#each options as option (option.value)}
			<li>
				<a
					href="?view={option.value}"
					class="option"
					aria-current={view === option.value ? 'true' : undefined}
					data-sveltekit-noscroll
					data-sveltekit-replacestate
				>
					{@render gridIcon(option.columns)}
					<span>{option.label}</span>
				</a>
			</li>
		{/each}

		<li>
			<a
				href="?view=list"
				class="option"
				aria-current={view === 'list' ? 'true' : undefined}
				data-sveltekit-noscroll
				data-sveltekit-replacestate
			>
				<!-- List icon: three rows of a small square and a line -->
				<svg class="option-icon" viewBox="0 0 24 24" aria-hidden="true">
					<rect x="0" y="1" width="5" height="5" />
					<rect x="8" y="2.5" width="16" height="2" />
					<rect x="0" y="9.5" width="5" height="5" />
					<rect x="8" y="11" width="16" height="2" />
					<rect x="0" y="18" width="5" height="5" />
					<rect x="8" y="19.5" width="16" height="2" />
				</svg>
				<span>List</span>
			</a>
		</li>
	</ul>
</nav>

<style>
	.grid-view-options {
		/* Fixed under the header, so it stays in view when the page is scrolled */
		position: fixed;
		top: var(--bar-height);
		right: 0;
		z-index: 1;
		width: min(100%, 20rem);
		padding: var(--spacing-s);
		background-color: var(--color-white);
		box-shadow: 0 0.5rem 1rem hsl(200 43% 23% / 0.2);
	}

	/* Small triangle that points up to the grid icon, like the + on the members page */
	.grid-view-options::before {
		content: '';
		position: absolute;
		bottom: 100%;
		right: calc(var(--spacing-header-inline) + var(--bar-height) * 0.2 - 0.6rem);
		width: 1.2rem;
		height: 0.6rem;
		background-color: var(--color-white);
		clip-path: polygon(50% 0, 100% 100%, 0 100%);
	}

	.title {
		font-size: var(--font-size-p);
		font-weight: 400;
		color: var(--color-accent-blue-white-30);
	}

	.list {
		list-style: none;
	}

	.option {
		display: flex;
		align-items: center;
		gap: var(--spacing-s);
		min-block-size: 2.75rem; /* 44px touch target */
		color: var(--color-accent-blue);
		font-size: var(--font-size-p);
		text-decoration: none;

		&:focus-visible {
			outline: 2px solid var(--color-accent-green-black-20);
			outline-offset: 2px;
		}
	}

	/* The current view gets a check mark after its name, like in the design */
	.option[aria-current='true']::after {
		content: '✓';
		color: var(--color-accent-green-black-20);
		font-weight: 700;
	}

	.option-icon {
		width: 1.5rem;
		height: 1.5rem;
		fill: currentColor;
	}
</style>
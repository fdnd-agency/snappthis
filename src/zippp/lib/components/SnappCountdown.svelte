<!-- Remaining time until the snappmap closes, plus "Add your snapp!" -->
<!-- The server renders the time once; with JavaScript it counts down live -->
<script>
	let { timeEnd } = $props();

	let now = $state(Date.now());

	// Update the time every second (only runs in the browser)
	$effect(() => {
		const interval = setInterval(() => (now = Date.now()), 1000);
		return () => clearInterval(interval); // stop when the component disappears
	});

	const remaining = $derived(Math.max(0, new Date(timeEnd).getTime() - now));
	const hours = $derived(Math.floor(remaining / 3_600_000));
	const minutes = $derived(Math.floor((remaining % 3_600_000) / 60_000));

	const pad = (number) => String(number).padStart(2, '0');
</script>

<div class="countdown">
	{#if remaining > 0}
		<!-- role="timer" tells screen readers this changes, without announcing every update -->
		<p class="time" role="timer">
			<time datetime="PT{hours}H{minutes}M">{pad(hours)}:{pad(minutes)}</time>
			<span class="visually-hidden">left</span>
		</p>
		<p class="call-to-action">Add your snapp!</p>
	{:else}
		<p class="call-to-action">Time's up!</p>
	{/if}
</div>

<style>
	.countdown {
		display: grid;
		justify-items: center;
		padding-block: var(--spacing-s) var(--spacing-m);
		text-align: center;
	}

	.time {
		font-size: var(--font-size-l);
		color: var(--dark-text-color-on-light-bg);
		font-variant-numeric: tabular-nums; /* digits stay the same width, so the timer doesn't wobble */
	}

	.call-to-action {
		font-size: var(--font-size-xs);
		font-weight: 700;
		color: var(--accent-color-on-light-bg);
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip-path: inset(50%);
		white-space: nowrap;
	}
</style>

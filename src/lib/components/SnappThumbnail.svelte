<!-- component for square picture with the link to the snapp -->

<script>
	// One square snapp thumbnail that links to the snapp detail page.
	// Reusable on every page that shows a grid of snapps.
	
	// eager = true for images that are visible right away (above the fold), so they are not lazy loaded
	let { snapp, label = '', size = 200, eager = false } = $props();

	const assetsUrl = 'https://fdnd-agency.directus.app/assets';

	// Directus crops the image to a square of the given size
	const imageUrl = $derived(`${assetsUrl}/${snapp.picture}?width=${size}&height=${size}&fit=cover`);
</script>

<a href="/snapps/{snapp.uuid}" aria-label={label}>
	<picture>
		<source srcset="{imageUrl}&format=avif" type="image/avif" />
		<source srcset="{imageUrl}&format=webp" type="image/webp" />
		<img src={imageUrl} alt="" width={size} height={size} loading="lazy" />
	</picture>
</a>

<style>
	a {
		display: block;
		transition: translate var(--transition-duration);

		@media (any-pointer: fine) {
			&:hover {
				translate: 0 -0.2rem;
			}
		}

		&:focus-visible {
			outline: 2px solid var(--accent-color-on-light-bg);
			outline-offset: -2px;
		}
	}

	img {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}
</style>
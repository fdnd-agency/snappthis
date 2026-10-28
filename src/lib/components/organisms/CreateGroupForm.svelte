<!-- Formulier om een nieuwe groep aan te maken, staat boven de groepenlijst -->
<!-- Werkt zonder JavaScript: het formulier post naar de default action in groups/+page.server.js -->
<!-- Met JavaScript (use:enhance) wordt het formulier verstuurd zonder dat de hele pagina herlaadt -->
<script>
	import { enhance } from '$app/forms';

	// result = de `form` prop van de pagina: wat de action teruggaf (naam + foutmelding), of null
	let { result } = $props();
</script>

<form method="POST" class="create-group-form" use:enhance>
	<label for="group-name" class="label">New group:</label>

	<!-- Bij een fout blijft de ingevulde naam staan, en leest een screenreader de foutmelding voor -->
	<input
		type="text"
		id="group-name"
		name="name"
		class="input"
		placeholder="new group name"
		maxlength="50"
		autocomplete="off"
		required
		value={result?.name ?? ''}
		aria-invalid={result?.error ? 'true' : undefined}
		aria-describedby={result?.error ? 'group-name-error' : undefined}
	/>

	{#if result?.error}
		<!-- role="alert": een screenreader leest de melding meteen voor, ook zonder herladen -->
		<p id="group-name-error" class="error" role="alert">{result.error}</p>
	{/if}

	<button type="submit" class="submit-button">Create</button>
</form>

<style>
	.create-group-form {
		display: grid;
		gap: var(--spacing-s);
		padding: var(--spacing-m) var(--spacing-s);
		background-color: var(--color-accent-blue-white-90);

		@media (min-width: 768px) {
			padding-inline: max(calc((100% - 600px) / 2), var(--spacing-s));
		}
	}

	.label {
		font-size: var(--font-size-h3);
		color: var(--color-accent-blue);
	}

	.input {
		width: 100%;
		padding: 0.75rem var(--spacing-s);
		border: 0;
		background-color: var(--color-white);
		color: var(--color-accent-blue);
		font: inherit;
		font-size: var(--font-size-h3);

		&::placeholder {
			color: var(--color-accent-blue-white-50);
		}

		&:focus-visible {
			outline: 3px solid var(--color-accent-blue-black-30);
			outline-offset: 2px;
		}
	}

	.error {
		font-size: var(--font-size-p);
		color: var(--color-accent-red-black-40);
	}

	.submit-button {
		justify-self: end;
		padding: 0.75rem var(--spacing-m);
		border-radius: 2rem;
		background-color: var(--color-accent-green-black-20);
		color: var(--color-white);
		font-size: var(--font-size-h3);
		transition: scale var(--transition-duration);

		@media (any-pointer: fine) {
			&:hover {
				scale: var(--hover-scale);
			}
		}

		&:focus-visible {
			outline: 3px solid var(--color-accent-blue-black-30);
			outline-offset: 4px;
		}
	}
</style>

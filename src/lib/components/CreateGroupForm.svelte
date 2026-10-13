<!-- Formulier om een nieuwe groep aan te maken, staat boven de groepenlijst -->
<!-- Werkt zonder JavaScript: het formulier post naar de default action in groups/+page.server.js -->
<!-- Met JavaScript (use:enhance) wordt het formulier verstuurd zonder dat de hele pagina herlaadt -->
<script>
	import { enhance } from '$app/forms';

	// result = de `form` prop van de pagina: wat de action teruggaf (naam + foutmelding), of null
	let { result } = $props();

	// Alleen met JavaScript: true zolang het formulier wordt verstuurd
	let creating = $state(false);

	// Loopt voordat het formulier wordt verstuurd
	function handleSubmit() {
		creating = true;

		// Loopt nadat de action heeft geantwoord
		return async ({ update }) => {
			// update() volgt de redirect bij succes, of geeft de foutmelding door als `form` prop
			await update();
			creating = false;
		};
	}
</script>

<form method="POST" class="create-group-form" use:enhance={handleSubmit}>
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

	<!-- Knop uitgeschakeld tijdens het versturen, zodat er niet twee keer een groep wordt gemaakt -->
	<button type="submit" class="submit-button" disabled={creating} aria-busy={creating}>
		{creating ? 'Creating…' : 'Create'}
	</button>
</form>

<style>
	.create-group-form {
		display: grid;
		gap: var(--spacing-s);
		padding: var(--spacing-m) var(--spacing-s);
		background-color: var(--pill-link-bg-color);
	}

	.label {
		font-size: var(--font-size-m);
		color: var(--dark-text-color-on-light-bg);
	}

	.input {
		width: 100%;
		padding: 0.75rem var(--spacing-s);
		border: 0;
		background-color: var(--lightest-color);
		color: var(--dark-text-color-on-light-bg);
		font: inherit;
		font-size: var(--font-size-m);

		&::placeholder {
			color: var(--text-color-on-light-bg);
		}

		&:focus-visible {
			outline: 3px solid var(--primary-color);
			outline-offset: 2px;
		}
	}

	.error {
		font-size: var(--font-size-xs);
		color: var(--color-accent-red-black-40);
	}

	.submit-button {
		justify-self: end;
		padding: 0.75rem var(--spacing-m);
		border-radius: 2rem;
		background-color: var(--accent-color-on-light-bg);
		color: var(--lightest-color);
		font-size: var(--font-size-m);
		transition: scale var(--transition-duration);

		@media (any-pointer: fine) {
			&:hover {
				scale: var(--hover-scale);
			}
		}

		&:focus-visible {
			outline: 3px solid var(--primary-color);
			outline-offset: 4px;
		}

		&:disabled {
			cursor: wait;
		}
	}
</style>

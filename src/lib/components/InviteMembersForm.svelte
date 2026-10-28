<!-- Form to add multiple emails for addin members, on the top of the page-->
<!-- Works without JavaScript: form post to default action in members/+page.server.js -->
<!-- Met JavaScript (use:enhance) wordt het formulier verstuurd zonder dat de hele pagina herlaadt -->
<script>
	import { enhance } from '$app/forms';

	// groupName = name of the group, shown in the label
	// result = what the action returned (or null)
	let { groupName, result } = $props();
</script>

<form method="POST" action="?/check" class="invite-members-form" use:enhance>
	<label for="member" class="label">Invite to {groupName}</label>
	<p id="member-hint" class="hint">Separate addresses with a comma.</p>
	<!-- Bij een fout blijft de ingevulde naam staan, en leest een screenreader de foutmelding voor -->
	<input
		type="email" multiple
		id="member"
		name="email-list"
		class="input"
		placeholder="Add (multiple) members by email"
		autocomplete="off"
		required
		value={result?.input ?? ''}
		aria-invalid={result?.error ? 'true' : undefined}
		aria-describedby={result?.error ? 'member-hint member-list-error' : 'member-hint'}
		
	/>


	{#if result?.error}
		<!-- role="alert": een screenreader leest de melding meteen voor, ook zonder herladen -->
		<p id="member-list-error" class="error" role="alert">{result.error}</p>
	{/if}

	<button type="submit" class="submit-button">Invite</button>
</form>





<style>
	.invite-members-form {
		display: grid;
		gap: var(--spacing-s);
		padding: var(--spacing-m) var(--spacing-s);
		background-color: var(--pill-link-bg-color);

		@media (min-width: 768px) {
			padding-inline: max(calc((100% - 600px) / 2), var(--spacing-s));
		}
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
	}
</style>

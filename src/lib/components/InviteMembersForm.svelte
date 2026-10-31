<!-- Form to invite one or more members by email, shown at the top of the members page -->
<!-- Works without JavaScript: the form posts to the check action in members/+page.server.js -->
<!-- With JavaScript (use:enhance) the form is sent without reloading the whole page -->
<script>
	import { enhance } from '$app/forms';

	// groupName = name of the group, shown in the label
	// result = what the action returned (or null)
	let { groupName, result } = $props();

	// There is something to report under the field: an error, or invalid addresses
	const hasError = $derived(Boolean(result?.error || result?.invalid?.length));
</script>

<form
	method="POST"
	action="?/check"
	class="invite-members-form"
	use:enhance={() => {
		// Don't empty the field after checking: it holds the addresses that still need fixing
		return async ({ update }) => update({ reset: false });
	}}
>
	<label for="member" class="label">Invite to {groupName}:</label>
	<p id="member-hint" class="hint">Separate addresses with a comma.</p>

	<input
		type="email"
		multiple
		id="member"
		name="email-list"
		class="input"
		placeholder="Add (multiple) members by email"
		autocomplete="off"
		required
		value={result?.input ?? ''}
		aria-invalid={hasError ? 'true' : undefined}
		aria-describedby={hasError ? 'member-hint member-list-error' : 'member-hint'}
	/>

	{#if hasError}
		<!-- role="alert": a screen reader reads the message right away, also without a page reload -->
		<div id="member-list-error" class="error" role="alert">
			{#if result.error}
				<p>{result.error}</p>
			{/if}

			{#if result.invalid?.length}
				<!-- Version A of the design: only the wrong addresses, they are also back in the field above -->
				<p class="error-title">Wrong email input:</p>
				<ul>
					{#each result.invalid as email (email)}
						<li>{email}</li>
					{/each}
				</ul>
				<p>Fix these addresses in the field above and press Invite again.</p>
			{/if}
		</div>
	{/if}

	{#if result?.alreadyMembers?.length}
		<!-- role="status": read out by a screen reader, but less urgent than an error -->
		<div class="notice" role="status">
			<p>Already a member, not invited again:</p>
			<ul>
				{#each result.alreadyMembers as email (email)}
					<li>{email}</li>
				{/each}
			</ul>
		</div>
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

	.hint {
		font-size: var(--font-size-xs);
		color: var(--icon-color-on-light-bg);
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

	.error,
	.notice {
		display: grid;
		gap: 0.25rem;
		padding: var(--spacing-s);
		background-color: var(--lightest-color);
		font-size: var(--font-size-xs);
		color: var(--dark-text-color-on-light-bg);

		ul {
			padding-inline-start: 1.25rem;
		}

		li {
			overflow-wrap: anywhere; /* long addresses wrap instead of overflowing */
		}
	}

	/* Not only colour: the border and the title also show it is an error */
	.error {
		border-inline-start: 4px solid var(--alert-accent-color);
	}

	.error-title {
		font-weight: 700;
	}

	.notice {
		border-inline-start: 4px solid var(--icon-color-on-light-bg);
	}

	.submit-button {
		justify-self: end;
		padding: 0.75rem var(--spacing-m);
		border: 0;
		border-radius: 2rem;
		background-color: var(--accent-color-on-light-bg);
		color: var(--lightest-color);
		font: inherit;
		font-size: var(--font-size-m);
		cursor: pointer;
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
<!-- List of checked addresses. Every address is approved separately with its own (+) button -->
<!-- Every row is its own small form, so it also works without JavaScript -->
<script>
	import { enhance } from '$app/forms';

	// toInvite = the valid addresses that are not a member yet
	let { toInvite = [] } = $props();
</script>

{#if toInvite.length}
	<section class="review" aria-labelledby="review-title">
		<h2 id="review-title" class="title">
			{toInvite.length === 1 ? 'Approve this address' : `Approve these ${toInvite.length} addresses`}
		</h2>

		<ul class="list">
			{#each toInvite as email (email)}
				<li>
					<form method="POST" action="?/invite" class="row" use:enhance>
						<!-- The address of this row -->
						<input type="hidden" name="email" value={email} />

						<!-- The rest of the list goes along, so it survives a page reload without JavaScript -->
						{#each toInvite as other (other)}
							{#if other !== email}
								<input type="hidden" name="remaining" value={other} />
							{/if}
						{/each}

						<span class="email">{email}</span>

						<label class="can-start">
							<input type="checkbox" name="can-start-snappmap" />
							Can start a snappmap
						</label>

						<button type="submit" class="approve-button" aria-label="Invite {email}">
							<svg viewBox="0 0 36 36" aria-hidden="true">
								<path
									d="M36 20.5714H20.5714V36H15.4286V20.5714H0V15.4286H15.4286V0H20.5714V15.4286H36V20.5714Z"
								/>
							</svg>
						</button>
					</form>
				</li>
			{/each}
		</ul>
	</section>
{/if}

<style>
	.review {
		padding-block: var(--spacing-s);
		background-color: var(--pill-link-bg-color);
	}

	.title {
		padding-inline: var(--spacing-s);
		padding-block-end: var(--spacing-s);
		font-size: var(--font-size-s);
		font-weight: 400;
		color: var(--dark-text-color-on-light-bg);
	}

	.list {
		list-style: none;
	}

	/* Email on the first line, checkbox below it, (+) on the right over both lines */
	.row {
		display: grid;
		grid-template-columns: 1fr auto;
		grid-template-areas:
			'email button'
			'option button';
		align-items: center;
		gap: 0.25rem var(--spacing-s);
		padding: 0.75rem var(--spacing-s);
		border-block-start: 1px solid var(--light-text-color-on-dark-bg);
		background-color: var(--lightest-color);
	}

	.email {
		grid-area: email;
		overflow-wrap: anywhere;
		color: var(--dark-text-color-on-light-bg);
	}

	.can-start {
		grid-area: option;
		display: flex;
		align-items: center;
		gap: 0.5rem;
		font-size: var(--font-size-xs);
		color: var(--icon-color-on-light-bg);

		input {
			width: 1.25rem;
			aspect-ratio: 1 / 1;
			accent-color: var(--accent-color-on-light-bg);
		}
	}

	.approve-button {
		grid-area: button;
		display: grid;
		place-items: center;
		width: 2.75rem; /* at least 44px: easy to tap */
		aspect-ratio: 1 / 1;
		border: 0;
		border-radius: 50%;
		background-color: var(--accent-color-on-light-bg);
		cursor: pointer;
		transition: scale var(--transition-duration);

		@media (any-pointer: fine) {
			&:hover {
				scale: var(--hover-scale);
			}
		}

		&:focus-visible {
			outline: 3px solid var(--primary-color);
			outline-offset: 3px;
		}

		svg {
			width: 45%;
			fill: var(--lightest-color);
		}
	}
</style>
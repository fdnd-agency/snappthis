<!-- Menu om een groep te beheren, klapt open onder de groep als je op de ⋮ klikt -->
<!-- Werkt zonder JavaScript: de knoppen posten naar de leave- en delete-action in groups/+page.server.js -->
<script>
	import { enhance } from '$app/forms';

	let { group } = $props();

	// Alleen met JavaScript: eerst vragen of je het zeker weet. Zonder JavaScript wordt direct verwijderd.
	function confirmDelete({ cancel }) {
		if (!confirm(`Are you sure you want to delete "${group.name}"? This can't be undone.`)) {
			cancel(); // formulier niet versturen
		}
	}
</script>

<div class="group-menu">
	<div class="options">
		<!-- TODO: opslaan in Directus zodra daar een veld voor bestaat. Nu slaat de checkbox nog niets op. -->
		<label class="option">
			<input type="checkbox" class="checkbox" checked />
			Members can add snapp from roll
		</label>

		<form method="POST" action="?/leave" use:enhance>
			<!-- Verborgen veld: zo weet de server om welke groep het gaat -->
			<input type="hidden" name="uuid" value={group.uuid} />
			<button type="submit" class="option">
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M14 4h5v16h-5M3 12h11M7 8l-4 4 4 4" />
				</svg>
				Leave this group
			</button>
		</form>

		<form method="POST" action="?/delete" use:enhance={confirmDelete}>
			<input type="hidden" name="uuid" value={group.uuid} />
			<button type="submit" class="option">
				<svg class="icon" viewBox="0 0 24 24" aria-hidden="true">
					<path d="M5 5l14 14M19 5L5 19" />
				</svg>
				Delete this group
			</button>
		</form>
	</div>
</div>

<style>
	.group-menu {
		container-type: inline-size; /* de breedte van het menu meten, zodat @container werkt */
		position: relative;
		padding: var(--spacing-s);
		background-color: var(--color-accent-blue-white-90);

		/* Driehoekje dat naar de ⋮ wijst (zoals bij het formulier onder de +) */
		&::before {
			content: '';
			position: absolute;
			top: -0.6rem;
			/* recht onder de ⋮-link: halve linkbreedte (1rem) min halve driehoekbreedte, met .05rem op het oog bijgesteld */
			left: calc(.05rem + 1rem - 0.6rem);
			width: 1.2rem;
			height: 0.6rem;
			background-color: var(--color-accent-blue-white-90);
			clip-path: polygon(50% 0, 100% 100%, 0 100%); /* knipt een driehoek uit het vlak */
		}
	}

	.options {
		display: grid;
		gap: 0.25rem;

		@container (min-width: 768px) {
			grid-template-columns: repeat(3, max-content); /* 3 kolommen, zo breed als de tekst */
			gap: var(--spacing-m); 
		}
	}

	.option {
		display: flex;
		align-items: center;
		gap: var(--spacing-s);
		min-height: 2.75rem; /* groot genoeg om op te tikken */
		width: 100%;
		color: var(--color-accent-blue-white-20);
		font-size: var(--font-size-h5);
		text-align: left;
		cursor: pointer;

		&:focus-visible {
			outline: 2px solid var(--color-accent-blue-black-30);
			outline-offset: 2px;
		}
	}

	.checkbox {
		width: 1.4rem;
		height: 1.4rem;
		accent-color: var(--color-accent-blue-white-20);

		&:focus-visible {
			outline: 2px solid var(--color-accent-blue-black-30);
			outline-offset: 2px;
		}
	}

	.icon {
		width: 1.4rem;
		height: 1.4rem;
		fill: none;
		stroke: currentColor;
		stroke-width: 2;
	}
</style>

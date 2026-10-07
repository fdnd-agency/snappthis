<!-- Dialog with the result of the upload: success or an error -->
<!-- Without JavaScript the dialog is rendered open and the OK button closes it (method="dialog") -->
<script>
	// result = the `form` prop of the page: what the action returned, or null
	let { result } = $props();

	let dialog = $state();

	const messages = {
		success: 'Your snapp has been added successfully!',
		upload_failed: 'Something went wrong, please try again.',
		no_file: 'Please take a photo first.',
		not_allowed: 'You can no longer add a snapp to this snappmap.'
	};

	const message = $derived(result?.status ? messages[result.status] : null);

	// With JavaScript: open as a modal, so focus moves into the dialog and Escape closes it.
	// Reads `result`, so it runs again for every new upload, even with the same status.
	$effect(() => {
		if (!dialog || !result?.status) return;
		if (dialog.open) dialog.close();
		dialog.showModal();
	});
</script>

{#if message}
	<dialog bind:this={dialog} open class:error={result.status !== 'success'}>
		<h2>{message}</h2>
		<form method="dialog">
			<button>OK</button>
		</form>
	</dialog>
{/if}

<style>
	dialog {
		margin: auto;
		width: min(80%, 25rem);
		padding: var(--spacing-m) var(--spacing-s);
		border: 0;
		background-color: var(--background-color-dialog);
		text-align: center;

		&::backdrop {
			background-color: rgb(0 0 0 / 0.4);
		}
	}

	h2 {
		margin-block-end: var(--spacing-m);
		font-size: var(--font-size-xs);
		font-weight: 400;
		line-height: 1.4;
		color: var(--dark-text-color-on-light-bg);
	}

	button {
		width: 3.5rem;
		aspect-ratio: 1 / 1;
		border: 0;
		border-radius: 50%;
		background-color: var(--accent-color-on-light-bg);
		color: var(--lightest-color);
		font: inherit;
		font-size: var(--font-size-xs);
		cursor: pointer;

		&:focus-visible {
			outline: 3px solid var(--primary-color);
			outline-offset: 4px;
		}
	}

	.error button {
		background-color: var(--alert-accent-color);
	}
</style>

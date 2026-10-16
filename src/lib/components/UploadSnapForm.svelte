<!-- Form to take a photo and add it as a snapp to the current snappmap -->
<!-- Works without JavaScript: the file input opens the camera and the form posts to the default action -->
<script>
	import { enhance } from '$app/forms';

	// Name of the snappmap, shown above the preview (like in the design)
	let { snappmapName } = $props();

	// Only used when JavaScript is available
	let previewUrl = $state(null);
	let uploading = $state(false);

	// Show the chosen photo before uploading
	function showPreview(event) {
		const [file] = event.currentTarget.files;
		if (previewUrl) URL.revokeObjectURL(previewUrl); // free the memory of the previous preview
		previewUrl = file ? URL.createObjectURL(file) : null;
	}

	// Ask the browser for the location. Never blocks the upload: on refusal or error it resolves with null
	function getLocation() {
		return new Promise((resolve) => {
			if (!navigator.geolocation) return resolve(null);

			navigator.geolocation.getCurrentPosition(
				(position) => resolve(position.coords),
				() => resolve(null),
				{ timeout: 5000 }
			);
		});
	}

	// Runs before the form is sent (only with JavaScript)
	async function handleSubmit({ formData }) {
		uploading = true;

		const coords = await getLocation();
		if (coords) {
			formData.set('latitude', String(coords.latitude));
			formData.set('longitude', String(coords.longitude));
		}

		// Runs after the action has responded
		return async ({ result, update }) => {
			// update() resets the form on success, reloads the page data (new snapp in the grid)
			// and passes the result to the page as the `form` prop (for the status message)
			await update();
			uploading = false;

			if (result.type === 'success' && previewUrl) {
				URL.revokeObjectURL(previewUrl);
				previewUrl = null;
			}
		};
	}
</script>

<form
	method="POST"
	enctype="multipart/form-data"
	class="upload-snap-form"
	class:has-preview={previewUrl}
	use:enhance={handleSubmit}
>
	{#if previewUrl}
		<img class="preview" src={previewUrl} alt="Preview of your snapp" />
		<h2>{snappmapName}</h2>
	{/if}

	<div class="actions">
		<label class="camera-button">
			<svg viewBox="0 0 78 64" aria-hidden="true">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M38.79 26.9C33.28 26.9 28.79 31.38 28.79 36.89C28.79 42.4 33.28 46.89 38.79 46.89C44.3 46.89 48.78 42.4 48.78 36.89C48.78 31.38 44.3 26.9 38.79 26.9ZM55.7 9.99C55.7 4.47 51.22 0 45.7 0H31.87C26.35 0 21.87 4.47 21.87 9.99H10.34C4.82 9.99 0.35 14.46 0.35 19.98V53.8C0.35 59.32 4.82 63.8 10.34 63.8H67.23C72.75 63.8 77.22 59.32 77.22 53.8V19.98C77.22 14.46 72.75 9.99 67.23 9.99H55.7ZM38.79 54.57C29.04 54.57 21.1 46.64 21.1 36.89C21.1 27.14 29.04 19.21 38.79 19.21C48.54 19.21 56.47 27.14 56.47 36.89C56.47 46.64 48.54 54.57 38.79 54.57Z"
				/>
			</svg>

			<!-- capture="environment" opens the rear camera on phones -->
			<input
				type="file"
				name="file"
				accept="image/*"
				capture="environment"
				required
				aria-label={previewUrl ? 'Retake photo' : 'Take a photo'}
				onchange={showPreview}
			/>
		</label>

		<!-- Only visible once a photo is chosen (CSS :has(input:valid)), also without JavaScript -->
		<button
			type="submit"
			class="submit-button"
			disabled={uploading}
			aria-busy={uploading}
			aria-label={uploading ? 'Uploading your snapp' : 'Add snapp'}
		>
			{#if uploading}
				<span class="loader" aria-hidden="true"></span>
			{:else}
				OK
			{/if}
		</button>
	</div>
</form>

<style>
	.upload-snap-form {
		display: grid;
		justify-items: center;
		gap: var(--spacing-s);
		padding-block-start: var(--spacing-m);
	}

	.preview {
		display: block;
		width: 100%;
		aspect-ratio: 1 / 1;
		object-fit: cover;
	}

	h2 {
		font-size: var(--font-size-s);
		color: var(--dark-text-color-on-light-bg);
	}

	.actions {
		display: flex;
		align-items: center;
		gap: var(--spacing-m);
	}

	/* Camera button: a big green circle with the file input on top of it */
	.camera-button {
		position: relative;
		display: grid;
		place-items: center;
		width: 7rem;
		aspect-ratio: 1 / 1;
		border-radius: 50%;
		background-color: var(--accent-color-on-light-bg);
		cursor: pointer;
		transition: scale var(--transition-duration);

		@media (any-pointer: fine) {
			&:hover {
				scale: var(--hover-scale);
			}
		}

		/* The input itself is invisible, so show the focus on the circle */
		&:has(input:focus-visible) {
			outline: 3px solid var(--primary-color);
			outline-offset: 4px;
		}

		svg {
			width: 45%;
			fill: var(--lightest-color);
		}

		input {
			position: absolute;
			inset: 0;
			opacity: 0;
			cursor: pointer;
		}
	}

	/* OK button is hidden until a photo is chosen */
	.submit-button {
		display: none;
		place-items: center;
		width: 5rem;
		aspect-ratio: 1 / 1;
		border: 0;
		border-radius: 50%;
		background-color: var(--accent-color-on-light-bg);
		color: var(--lightest-color);
		font: inherit;
		font-size: var(--font-size-s);
		cursor: pointer;

		&:focus-visible {
			outline: 3px solid var(--primary-color);
			outline-offset: 4px;
		}

		&:disabled {
			cursor: wait;
		}
	}

	.upload-snap-form:has(input:valid) .submit-button {
		display: grid;
	}

	/* Once a photo is chosen, the camera button becomes the small grey "retake" button */
	.upload-snap-form:has(input:valid) .camera-button {
		width: 3.5rem;
		background-color: var(--light-text-color-on-dark-bg);
	}

	.loader {
		width: 1.5rem;
		aspect-ratio: 1 / 1;
		border: 3px solid var(--lightest-color);
		border-block-start-color: transparent;
		border-radius: 50%;
		animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			rotate: 1turn;
		}
	}
</style>

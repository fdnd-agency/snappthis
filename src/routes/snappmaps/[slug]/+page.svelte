<!-- Snappmap page: group name, add-your-snapp form with countdown, status dialog and grid with all snapps -->
<script>
	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import UploadSnapForm from '$lib/components/UploadSnapForm.svelte';
	import SnappCountdown from '$lib/components/SnappCountdown.svelte';
	import FormStatusMessage from '$lib/components/FormStatusMessage.svelte';
	import SnappGrid from '$lib/components/SnappGrid.svelte';

	// data = from load, form = what the action returned (null until the form is submitted)
	let { data, form } = $props();
</script>

<svelte:head>
	<title>{data.snappmap.name} | SnappThis</title>
</svelte:head>

<Header title={data.snappmap.name} showBackButton={true} backUrl="/" />

<main>
	{#if data.snappmap.groupName}
		<p class="group">
			<svg viewBox="0 0 40 36" aria-hidden="true">
				<path
					fill-rule="evenodd"
					clip-rule="evenodd"
					d="M36.455 17.2464C36.455 20.4113 33.8721 22.9873 30.6992 22.9873C27.5268 22.9873 24.9531 20.4113 24.9531 17.2464C24.9531 14.0682 27.5268 11.4922 30.6992 11.4922C33.8653 11.4922 36.455 14.0728 36.455 17.2464ZM13.3312 0C8.64634 0 4.82779 3.81168 4.82779 8.50052C4.82779 13.1888 8.64233 17.0073 13.3312 17.0073C18.0217 17.0073 21.8368 13.1888 21.8368 8.50052C21.8397 3.81168 18.0212 0 13.3312 0ZM39.8847 34.6843C39.8847 29.4545 35.7557 25.2099 30.6906 25.2099C29.7871 25.2099 28.9243 25.3878 28.1032 25.6394C29.185 27.8083 29.8472 30.227 29.8472 32.8287V36H39.8853V34.6843H39.8847ZM0 36H26.6601V32.9848C26.6601 25.4221 20.6761 19.2694 13.3312 19.2694C5.97427 19.2694 0.00057181 25.4227 0.00057181 32.9848V36H0Z"
				/>
			</svg>
			<a href="/groups/{data.snappmap.groupSlug}">{data.snappmap.groupName}</a>
		</p>
	{/if}

	<!-- Only members of the group can post, and only while the snappmap is active -->
	{#if data.canPost}
		<section aria-label="Add your snapp">
			<UploadSnapForm snappmapName={data.snappmap.name} />
			<SnappCountdown timeEnd={data.snappmap.timeEnd} />
		</section>
	{/if}

	<FormStatusMessage result={form} />

	<section aria-label="Snapps">
		<SnappGrid snapps={data.snapps} snappmapName={data.snappmap.name} />
	</section>
</main>

<Footer />

<style>
	main {
		/* Room for the fixed footer, so the last row doesn't disappear behind it */
		padding-block-end: var(--bar-height);
	}

	.group {
		display: flex;
		align-items: center;
		gap: 0.5rem;
		height: var(--bar-height);
		padding-inline: var(--spacing-s);
		font-size: var(--font-size-m);

		svg {
			height: 0.8em;
			fill: var(--text-color-on-light-bg);
		}

		a {
			color: var(--text-color-on-light-bg);
			text-decoration: none;

			&:hover {
				text-decoration: underline;
			}

			&:focus-visible {
				outline: 2px solid var(--accent-color-on-light-bg);
				outline-offset: 4px;
			}
		}
	}
</style>

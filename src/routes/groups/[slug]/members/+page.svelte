<!-- Members page of a group: list of members, and a form to invite new members -->
<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import InviteMembersForm from '$lib/components/InviteMembersForm.svelte';
	import InviteReviewList from '$lib/components/InviteReviewList.svelte';

	// data = what load in +page.server.js returns
	// form = what the check or invite action returned (or null)
	let { data, form } = $props();

	// The URL of this page: /groups/stadswandelaars/members
	const membersUrl = $derived(`/groups/${data.group.slug}/members`);

	// Open via ?add-members, and stay open while the user is working on a list.
	// Without JavaScript the URL changes to ?/check after sending, so ?add-members is gone.
	const showForm = $derived(data.showForm || form !== null);
</script>

<svelte:head>
	<title>Members of {data.group.name} | SnappThis</title>
</svelte:head>

<!-- The + opens the form via ?add-members, the × closes it again -->
<Header
	title="Members"
	showBackButton={true}
	backUrl="/groups/{data.group.slug}"
	showAddButton={true}
	addUrl={showForm ? membersUrl : `${membersUrl}?add-members`}
	addLabel={showForm ? 'Close the invite form' : 'Invite members'}
	addOpen={showForm}
/>

<main>
	{#if showForm}
		<InviteMembersForm groupName={data.group.name} result={form} />

		{#if form?.approved}
			<!-- role="status": for screen readers (accsblt) -->
			<p class="success" role="status">
				{form.approved.email} is approved{form.approved.canStartSnappmap
					? ' and can start a snappmap'
					: ''}.
			</p>
		{/if}

		<InviteReviewList toInvite={form?.toInvite} />
	{/if}

	<ul class="members">
		{#each data.members as member (member.uuid)}
			<li>{member.isYou ? 'You' : member.name}</li>
		{:else}
			<li class="empty">This group has no members yet.</li>
		{/each}
	</ul>
</main>

<Footer />

<style>
	main {
		/* Room for the fixed footer, so the last member doesn't disappear behind it */
		padding-block-end: var(--bar-height);
	}

	.success {
		padding: var(--spacing-s);
		background-color: var(--pill-link-bg-color);
		color: var(--dark-text-color-on-light-bg);
		font-size: var(--font-size-xs);
	}

	.members {
		list-style: none;

		li {
			padding: var(--spacing-s);
			border-block-end: 1px solid var(--pill-link-bg-color);
			color: var(--dark-text-color-on-light-bg);
		}
	}

	.empty {
		color: var(--text-color-on-light-bg);
	}
</style>
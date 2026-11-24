<!-- Members page of a group: list of members and pending invites, and a form to invite new members -->
<script>
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import InviteMembersForm from '$lib/components/organisms/InviteMembersForm.svelte';
	import InviteReviewList from '$lib/components/organisms/InviteReviewList.svelte';

	// data = what load in +page.server.js returns
	// form = what the check or invite action returned (or null)
	let { data, form } = $props();

	// The URL of this page: /groups/stadswandelaars/members
	const membersUrl = $derived(`/groups/${data.group.slug}/members`);

	// Open via ?add-members, and stay open while the user is working on a list.
	// Without JavaScript the URL changes to ?/check after sending, so ?add-members is gone.
	const showForm = $derived(data.showForm || form !== null);

	// Nobody in the group yet, and nobody invited either
	const isEmpty = $derived(data.members.length === 0 && data.pendingInvites.length === 0);
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
			<!-- role="status": read out by a screen reader without moving the focus -->
			<p class="success" role="status">
				{form.approved.email} is approved{form.approved.canStartSnappmap
					? ' and can start a snappmap'
					: ''}.
			</p>
		{/if}

		<InviteReviewList toInvite={form?.toInvite} />
	{/if}

	<ul class="members" aria-label="Members of {data.group.name}">
		{#each data.members as member (member.uuid)}
			<li>{member.isYou ? 'You' : member.name}</li>
		{/each}

		<!-- Invited, but not registered yet: we only know their email address -->
		{#each data.pendingInvites as invite (invite.uuid)}
			<li class="pending">
				<span class="email">{invite.email}</span>
				<span class="badge">Pending</span>
			</li>
		{/each}

		{#if isEmpty}
			<li class="empty">This group has no members yet.</li>
		{/if}
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
		background-color: var(--color-accent-blue-white-90);
		color: var(--color-accent-blue);
		font-size: var(--font-size-p);
	}

	.members {
		list-style: none;

		li {
			padding: var(--spacing-s);
			border-block-end: 1px solid var(--color-accent-blue-white-90);
			color: var(--color-accent-blue);
		}
	}

	.pending {
		display: flex;
		align-items: center;
		justify-content: space-between;
		flex-wrap: wrap;
		gap: var(--spacing-xs);
	}

	/* The email is lighter than a real name, because this person hasn't joined yet */
	.pending .email {
		color: var(--color-accent-blue-white-30);
		overflow-wrap: anywhere; /* long addresses wrap instead of pushing the badge off screen */
	}

	/* The word "Pending" is the label, not only the colour */
	.badge {
		padding: 0.125rem var(--spacing-xs);
		border-radius: 1rem;
		background-color: var(--color-accent-blue-white-90);
		color: var(--color-accent-blue);
		font-size: var(--font-size-small);
	}

	.empty {
		color: var(--color-accent-blue-white-50);
	}
</style>
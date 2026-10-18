<script>
    import Header from '$lib/components/Header.svelte';

    import Footer from '$lib/components/Footer.svelte';

    // data = what load in +page.server.js returns
  
    let { data } = $props()

    // The URL of this page, e.g. /groups/stadswandelaars/members
	const membersUrl = $derived(`/groups/${data.group.slug}/members`);
</script>

<svelte:head>
	<title>Members of {data.group.name} | SnappThis</title>
</svelte:head>

<!-- De + opent het formulier via ?add-members -->
<Header
    title="Members"
    showBackButton={true}
    backUrl="/groups/{data.group.slug}"
    showAddButton={true}
    addUrl={data.showForm ? membersUrl : `${membersUrl}?add-members`}
    addLabel={data.showForm ? 'Close the invite form' : 'Invite members'}
    addOpen={data.showForm}
/>

<main>
    {#if data.showForm}
     <p>Invite to {data.group.name}:</p>
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
<script>
  let { data } = $props();

  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const timeOptions = {
    hour: "2-digit",
    minute: "2-digit",
  };

  import Header from '$lib/components/organisms/Header.svelte';
  import SnapReactions from '$lib/components/molecules/SnapReactions.svelte';
  import SnapReactionFeedback from '$lib/components/molecules/SnapReactionFeedback.svelte';
</script>

<Header showBackButton={true} backUrl={`/snappmaps/${data.snap.snapmap.slug}`}>
<SnapReactions reactions= {data.reactions}/>
</Header>

<SnapReactionFeedback reactions= {data.reactions} />

{#if data.snap.snapmap}
<h1>
    <a href="/snappmaps/{data.snap.snapmap.slug}">
        {data.snap.snapmap.name}
      </a>
</h1>
{/if}

<img src="https://fdnd-agency.directus.app/assets/{data.snap.picture}" alt="" />

{#each data.snap.snapmap?.groups ?? [] as group}
    <p>{group.snappthis_group_uuid.name}</p>
{/each}

{#if data.snap.location && data.snap.location !=="Unknown" }
<p>{data.snap.location}</p>
{/if}

<p>{data.snap.author.name}</p>
<p>
  {new Date(data.snap.date_created).toLocaleDateString("nl-NL", options)}
  {new Date(data.snap.date_created).toLocaleTimeString("nl-NL", timeOptions)}
</p>

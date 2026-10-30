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
  import GroupsGrey from '$lib/assets/icons/GroupsGrey.svg';
</script>

<Header showBackButton={true} backUrl={`/snappmaps/${data.snap.snapmap.slug}`}>
<SnapReactions reactions= {data.reactions}/>
</Header>

<SnapReactionFeedback reactions= {data.reactions} />

{#if data.snap.snapmap}
<section>
  <img class="groups-icon" src={GroupsGrey}  alt=""/>
<h1>
    <a href="/snappmaps/{data.snap.snapmap.slug}">
        {data.snap.snapmap.name}
      </a>
</h1>
</section>
{/if}

<img class="snap-image" src="https://fdnd-agency.directus.app/assets/{data.snap.picture}" alt="" />

<div class="snap-buttons">
{#each data.snap.snapmap?.groups ?? [] as group}
    <p>{group.snappthis_group_uuid.name}</p>
{/each}

{#if data.snap.location && data.snap.location !=="Unknown" }
<p>{data.snap.location}</p>
{/if}

<p>{data.snap.author.name}</p>

</div>
<p class="snap-date">
  {new Date(data.snap.date_created).toLocaleDateString("nl-NL", options)}
  {new Date(data.snap.date_created).toLocaleTimeString("nl-NL", timeOptions)}
</p>

<style>

  h1 {
    font-size:var(--font-size-h3);
    font-weight: 300;
  }

  h1:hover {
    text-decoration: underline;
    color: var(--color-accent-blue-white-50);
  }

  a {
   text-decoration: none;
   color: var(--color-accent-blue-white-50);
  }

 section {
   display: flex;
   align-items: center;
 }

 .groups-icon {
  width: 18px;
  height: 18px;
  margin: var(--spacing-s) 8px var(--spacing-s) var(--spacing-s);
 }

 .snap-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
 }

.snap-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-xs);
}

.snap-buttons p {
  font-size: var(--font-size-h5);
  background-color: var(--color-accent-blue-white-90);
  color:var(--color-accent-blue);
  border-radius: 2rem;
  padding: var(--spacing-xs);
  margin-top: var(--spacing-xs);
}

.snap-date {
  color: var(--color-accent-blue-white-50);
  font-size: var(--font-size-p);
  margin: var(--spacing-xs);
}

</style>
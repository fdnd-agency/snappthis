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
</script>

<h2>
    <a href="/snappmaps/{data.snap.snapmap.slug}">
        {data.snap.snapmap.name}
      </a>
</h2>


<img src="https://fdnd-agency.directus.app/assets/{data.snap.picture}" alt="" />

{#if data.snap.location && data.snap.location !=="Unknown" }
<p>{data.snap.location}</p>
{/if}

<p>{data.snap.author.name}</p>
<p>
  {new Date(data.snap.date_created).toLocaleDateString("nl-NL", options)}
  {new Date(data.snap.date_created).toLocaleTimeString("nl-NL", timeOptions)}
</p>

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

<img src="https://fdnd-agency.directus.app/assets/{data.snap.picture}" alt="" />

<p>{data.snap.location}</p>
<p>{data.snap.author.name}</p>
<p>
  {new Date(data.snap.date_created).toLocaleDateString("nl-NL", options)}
  {new Date(data.snap.date_created).toLocaleTimeString("nl-NL", timeOptions)}
</p>

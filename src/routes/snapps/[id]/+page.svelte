<script>

let { data } = $props();

</script>


<img src="https://fdnd-agency.directus.app/assets/{data.snap.picture}"
alt=""
/>

<p>{data.snap.location}</p>
<p>{data.snap.author.name}</p>
<p>{data.snap.date_created}</p>


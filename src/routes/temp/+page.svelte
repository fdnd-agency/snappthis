<script>
    let { data } = $props()
    const snappDetails = data.snappDetails
</script>

<h1> test </h1>


{#each snappDetails as snappDetail}
    <div>
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src={`https://fdnd-agency.directus.app/assets/${snappDetail.picture}`} alt="picture" width="200px"/>

        <p>{snappDetail.location}</p>
        <p>{snappDetail.author.name}</p>

        <p>{snappDetail.date_created.substring(0, 10)}</p>
    </div>
{/each}

<style>
    div{
        border: 1px solid red;
    }
</style>
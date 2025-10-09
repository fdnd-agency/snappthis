<script>
    let { data } = $props()
    const snappDetail = data.snappDetails
</script>

<h1> Snap Detail </h1>
    <h2> {snappDetail.snapmap.name} </h2>

    <section class="content-holder">
        <!-- svelte-ignore a11y_img_redundant_alt -->
        <img src={`https://fdnd-agency.directus.app/assets/${snappDetail.picture}?format=webp`} alt="picture" width="200px"/>


        <li class="info">
            <p>{snappDetail.location}</p>
            <p>{snappDetail.author.name}</p>
            <p> {snappDetail.snapmap.name} </p>
            <p>{snappDetail.date_created.substring(0, 10)}</p>
        </li>
    </section>


<style>

    .content-holder {
        display: flex;
        flex-direction: column;

        @media (width > 600px) {
            flex-direction: row;
        }

    }

    h1 {
        font-family: Bariol;
        font-size: 2em;
    }

    h2 {
        font-family: Bariol;
        font-size: 1.5em;
        width: 97%;
        padding: 1em;
        background-color: var(--neutral-color-90);
    }

    p {
        font-family: Bariol;
        font-size: 1em;
        background-color: var(--neutral-color-90);
        width: fit-content;
        height: fit-content;
        padding: 1em;
        border-radius: 1em;
        margin: 0;
    }

    img {
        /* width: 100vw; */
        object-fit: cover;
        height: 300px;
        width: 300px;
        transition: .5s;
        margin-bottom: 1em;

        @media (width > 600px) {
            object-fit: cover;
            height: 500px;
            width: 500px;
            margin-right: 1em;
        }
    }

    .info {
        display: flex;
        flex-wrap: wrap;
        gap: .5em;

        @media (width > 600px) {

        }

    }

</style>
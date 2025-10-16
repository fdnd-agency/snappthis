<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    let { title } = "title-example"
</script>

<header>

    <h1> { title } </h1>

</header>


<style>

    .user-pic {
        height: 75px;
        border-radius: 100%;
    }

    header {
        background: var( --primary-color);
        color: var(--neutral-color-100);
        font-family: "Bariol Bold";
        height: 9%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;

        img {
            height: 80%;
        }
    }
</style>
<script>
    // import data of user

</script>

<header>

    <img src="./src/lib/assets/header/logo_white.svg" height="100" width="100">

    <div class="user">

    </div>
</header>

<style>

    .user {
        display: block;
        height: 75px;
        width: 75px;
        border-radius: 100%;
        background-color: var(--neutral-color-100);
        margin: 1em;
    }
    header {
        background: linear-gradient(var(--primary-color), var( --primary-color-30)) ;
        color: var(--neutral-color-100);
        font-family: "Bariol Bold";
        height: 100px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        & img {
            height: 80%;
            padding: 1em;
        }
    }
</style>
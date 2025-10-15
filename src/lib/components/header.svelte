<script>
    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id

    import Dropdownbutton from './snappmap/dropdown-button.svelte'

</script>

<header>

    <img src="./src/lib/assets/header/logo_white.svg" height="100" width="100">

    <h1> { snaps.name } </h1>

    <Dropdownbutton />
</header>

<style>

    .user-pic {
            height: 75px;
            border-radius: 100%;
    }

    header {
        background: linear-gradient(var(--primary-color), var( --primary-color-30)) ;
        color: var(--neutral-color-100);
        font-family: "Bariol Bold";
        height: 100px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;

        img {
            height: 80%;
        }
    }
</style>
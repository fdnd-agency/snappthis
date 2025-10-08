<script>
    // import the snapmapname of the particular snapmap

    import Dropdown from '$lib/components/dropdown-button.svelte'
</script>

    <div class="snappmapnav">
        <a href="/"> <img src="src/lib/assets/svg/go-back.svg"> </a>
        <h2>Snappmapp</h2>
        <div class="snappmapnav-dropdown">
            <Dropdown />
        </div>
    </div>

<style>
    .snappmapnav {
        height: 75px;
        background-color: var(--neutral-color-60);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1em;
    }

    .snappmapnav-dropdown {
        display: flex;
        justify-content: flex-end;
    }
</style>
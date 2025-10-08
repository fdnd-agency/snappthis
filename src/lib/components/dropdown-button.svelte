<script>
    import GridTwo from '$lib/components/icons/Grid2.svelte'
    import GridThree from '$lib/components/icons/Grid3.svelte'
    import GridFour from '$lib/components/icons/Grid4.svelte'
    import GridFive from '$lib/components/icons/Grid5.svelte'
    import ListView from '$lib/components/icons/Listview.svelte'

    let open = false

    function toggleDropdown() {
        open = !open;
    }

    function gridOne() {
        const main document.querySelector('main') {
            main.style.toggleclass('.gridone')
        }
    }
</script>

<div class="dropdown-button">

    <button class="dropdwnbutton" on:click={toggleDropdown}></button>
     {#if open}
        <div class=dropdowncontent>
            <button class="grid" on:click={gridOne}> <GridTwo /> </button>
            <button class="grid-2"> <GridTwo /> </button>
            <button class="grid-3"> <GridThree /> </button>
            <button class="grid-4"> <GridFour /> </button>
            <button class="grid-5"> <GridFive /> </button>
            <button class="list-view"> <ListView /> </button>
        </div>
    {/if}
</div>

<style>
    .dropdwnbutton {
        height: 50px;
        width: 50px;
        border: var(--accent-green-70) 2px solid;
        color: var(--neutral-color-20);
        border-radius: 1em;
    }

    .dropdowncontent {
        position: absolute;
        margin-top: 0.5em;
        right: 1em;
        display: flex;
        flex-direction: column;
        background: white;
        border: 1px solid #ccc;
        border-radius: 0.5em;
        padding: 1em;
        z-index: 10;
        gap: 1em;
}

</style>
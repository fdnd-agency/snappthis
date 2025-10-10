<script>
    import GridOne from '$lib/components/icons/Grid1.svelte'
    import GridTwo from '$lib/components/icons/Grid2.svelte'
    import GridThree from '$lib/components/icons/Grid3.svelte'
    import GridFour from '$lib/components/icons/Grid4.svelte'
    import GridFive from '$lib/components/icons/Grid5.svelte'
    import ListView from '$lib/components/icons/Listview.svelte'

    let open = false

    function toggleDropdown() {
        open = !open
    }   

    // girdone should change the style of group overview to class "photo-overview grid-1"
    // so here you need to export a variable that the parent can bind to

    // gebruik hier een radio :binding

</script>

<div class="dropdown-button">

    <button class="dropdwnbutton" on:click={toggleDropdown}></button>
     {#if open}
        <div class=dropdowncontent>
            <radio name="grid" value="grid-1"><GridOne /></radio>
            <radio name="grid" value="grid-2"><GridTwo /></radio>
            <radio name="grid" value="grid-3"><GridThree /></radio>
            <radio name="grid" value="grid-4"><GridFour /></radio>
            <radio name="grid" value="grid-5"><GridFive /></radio>
            <radio name="grid" value="list-view"><ListView /></radio>
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
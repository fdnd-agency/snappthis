<script>
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/Grid5Icon.svelte'
</script>

<button> </button>

<div class="dropdownmenu-mobile">
    <span> <GridTwo></GridTwo> <label>XL</label> <label>XLarge</label> </span>
    <span> <GridThree></GridThree> <label>L</label> <label>Large</label> </span>
    <span> <GridFour></GridFour> <label>M</label> <label>Medium</label> </span>
    <span>
        <ListView></ListView> <label>List</label> <label>List View</label>
    </span>
</div>

<div class="dropdownmenu-desktop">
    <span> 
        <GridTwo></GridTwo> 
        <label>XLarge</label> 
    </span>

    <span>
         <GridThree></GridThree>
        <label>Large</label> 
    </span>

    <span> 
        <GridFour></GridFour> 
        <label>Medium</label> 
    </span>

    <span> 
        <GridFive></GridFive> 
            <label>Small</label>
        </span>
    <span>
        <ListView></ListView> 
        <label>List View</label>
    </span>
</div>

<style>


</style>

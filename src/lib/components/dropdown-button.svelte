<script>
    import GridTwo from '$lib/components/icons/Grid2.svelte'
    import GridThree from '$lib/components/icons/Grid3.svelte'
    import GridFour from '$lib/components/icons/Grid4.svelte'
    import GridFive from '$lib/components/icons/Grid5.svelte'
    import ListView from '$lib/components/icons/Listview.svelte'
</script>

<div class="dropdown-button">
    <button class="dropdwnbutton"></button>
    <div class=dropdowncontent>
        <GridTwo />
        <GridThree />
        <GridFour />
        <GridFive />
        <ListView />
    </div>
</div>
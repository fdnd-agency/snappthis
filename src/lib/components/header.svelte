<script>

    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";

    import Settings from "./icons/Settings.svelte";
    import Add from "./icons/PlusIcon.svelte";
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'

    export let title = 'SnappThis';
    import color;
</script>

<header class="header">

    <div class="left-icon">
        // the go back button should always have the previous page and it only shows if you are able to navigate back to the previous page
        <GobackIcon 
        href={"/"}/>
    </div>

    <h1>{title}</h1>

    <div class="right-icon">
        // the right icon should show one of these icons which is determined by the page where you are on
        <Settings />
        <Add />

        // the grid states is determined by the grid state binding action on the page.svelte
        <GridTwo color={white}/>
        <GridThree />
        <GridFour />
        <GridFive />
        <ListView />
    </div>

</header>

<style>
    .header {
        background-color: var(--primary-color);
        color: var(--neutral-color-100);
        height: 9%;
        width: 100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: sticky;
    }

    .dropdown-settings {
        position: absolute;
        top: 10%;
        background-color: var(--neutral-color-lighter);
        list-style: none;
        padding: 1em;

        li {
            padding: 1em;
        }
    }

    .layout-icon-grid2 {
        svg {
            display: none;
        }
        svg:nth-last-of-type(1) {
            display: block
        }
    }

    .layout-icon-grid3 {
        svg {
            display: none;
        }
        svg:nth-last-of-type(2) {
            display: block
        }
    }

    .layout-icon-grid4 {
        svg {
            display: none;
        }
        svg:nth-last-of-type(3) {
            display: block
        }
    }

    .layout-icon-grid5 {
        svg {
            display: none;
        }
        svg:nth-last-of-type(4) {
            display: block
        }
    }

    .layout-icon-list {
        svg {
            display: none;
        }
        svg:nth-last-of-type(5) {
            display: block
        }
    }
</style>

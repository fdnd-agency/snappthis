<script>
    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";

    import Settings from "./icons/Settings.svelte";
    import Add from "./icons/PlusIcon.svelte";
    import Dropdown from './icons/Dropdown.svelte'
    import Card from "./Card.svelte"
    import SortCard from "./Sort-Card.svelte"

    export let title = 'SnappThis';
    export let page;

    export let group = "SnappGroup";
</script>

<header class="header">
    <div class="left-icon-{page}">
        <div class="icon-1">
            <GobackIcon 
            href={"/"}/>
        </div>
    </div>

    <h1>{title}</h1>

    <div class="right-icon-{page}">
        <div class="icon-2">
            <Settings />
        </div>
        <div class="icon-3">
            <Add />
        </div>
        <div class="icon-4">
            <Dropdown />
        </div>
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

    .sidebar {
        position: fixed;
        height: 100vh;
        width: 15vw;
        background-color: var(--primary-color);
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

    .left-icon-home {
        div {
            display: none;
        }
    }

    .right-icon-home {
        div {
            display: none;
        }
    }

    .left-icon-add {
        div {
            display: block;
        }
    }

    .right-icon-add {
        div {
            display: none;
        }

        div:nth-last-of-type(2) {
            display: block;
        }
    }

    .left-icon-explore {
        div {
            display: none;
        }
    }

    .right-icon-explore {
        div {
            display: none;
        }

        div:nth-last-of-type(1) {
            display: block;
        }
    }
</style>

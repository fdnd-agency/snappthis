<script>
    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";

    import Settings from "./icons/Settings.svelte";
    import Add from "./icons/PlusIcon.svelte";
    import Dropdown from './icons/Dropdown.svelte'
    import Card from "./Card.svelte"
    import SortCard from "./Sort-Card.svelte"

    import GroupIcon from './icons/GroupIcon.svelte'
    import LogoIcon from './icons/LogoIcon.svelte'
    import SearchIcon from './icons/SearchIcon.svelte'
    import UserIcon from './icons/UserIcon.svelte'
    import Arrow from "./icons/Arrow.svelte";

    export let page
    export let title = "SnappMap"
</script>


<header class="header">
    <nav>
        <a href="/" aria-label="Home icon" class="active-{page}">
            <LogoIcon />
        </a>

        <a href="/explore" aria-label="Search Icon" class="active-{page}">
            <SearchIcon/>
        </a>

        <a href="/group" aria-label="Group Icon" class="active-{page}">
            <GroupIcon/>
        </a>

        <a href="/user" aria-label="User icon" class="active-{page}">
            <UserIcon/>
        </a>
    </nav>

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

<div class="header-block">

</div>


<style>

    .header-block {
        height: 75px;

        @media (width > 720px) {
            height: 100px;
        }
    }

    header {
        background-color: var(--primary-color);
        color: var(--neutral-color-100);
        width: 100vw;
        height: 75px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        position: fixed;

        @media (width > 720px) {
            height: 100px;
        }
    }

    h1 {
        @media (width > 720px) {
            height: 75px;
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

    .left-icon-snappmap {
        div {
            display: block;
        }
    }

    .right-icon-snappmap {
        div {
            display: none;
        }

        div:nth-last-of-type(1) {
            display: block;
        }
    }

    nav {
        position: fixed;
        top: 6.5%;
        color: var(--neutral-color-lightest);
        padding: 1rem;
        gap: 3em;
        display: flex;
        justify-content: space-around;
        margin-inline: auto;
    }


    nav a {
        color: var(--neutral-color-lightest);
        font-family: 'Bariol Bold';
        width: 100%;
        display: flex;
        flex-direction: column;
        height: 1.5em;
        width: 1.5em;

        align-items: center;
        color: var(--neutral-color-100);
        flex-direction: row;
    }

    nav a.active {
        color: var(--secondary-color);
    }

    @media (width < 720px) {
        nav {
            display: none;
        }
    }

    .active-snappmapp{
         color: var(--secondary-color);
    }

    .active-add ~ nav:nth-of-type(4){
         color: var(--secondary-color);
    }


    .dropdown-content {
        position: absolute;
        display: flex;
        flex-direction: column;
        gap: 1em;
        top: 7em;

        a {
            background-color: var(--neutral-color);
            padding: 1em;
            width: 18em;
            border-radius: 16px;
        }
    }

    .dropdown-content {
    display: none;
}

.dropdown-content.dropdownshow {
    display: block;
}

:global(body.xmas) header {
    background-color: var(--header-color);
}
</style>

<script>
    // icons
    import GobackIcon from "./icons/GobackIcon.svelte";
    import Settings from "./icons/SettingsIcon.svelte";
    import Add from "./icons/PlusIcon.svelte";
    import Dropdown from './icons/DropdownIcon.svelte'
    import Card from "./Card.svelte"
    import SortCard from "./SortCard.svelte"
    import GroupIcon from './icons/GroupIcon.svelte'
    import LogoIcon from './icons/LogoIcon.svelte'
    import SearchIcon from './icons/SearchIcon.svelte'
    import UserIcon from './icons/UserIcon.svelte'

    // exports
    export let page
    export let title = "SnappMap"
    export let active = "home"
</script>


<header class="header">
    <!-- this is the navigation bar for the header is only enabled when you use desktop -->
    <nav>
        <a href="/" aria-label="Home icon" class:active={active === 'home'}>
            <LogoIcon />
        </a>

        <a href="/explore" aria-label="Search Icon" class:active={active === 'explore'}>
            <SearchIcon/>
        </a>

        <a href="/group" aria-label="Group Icon" class:active={active === 'groups'}>
            <GroupIcon/>
        </a>

        <a href="/user" aria-label="User icon" class:active={active === 'you'}>
            <UserIcon/>
        </a>
    </nav>

    <!-- left icon with binding it shows the appropriate icon mostly back icon -->
    <div class="left-icon-{page}">
        <div class="icon-1">
            <GobackIcon 
            href={"/"}/>
        </div>
    </div>

    <!-- this is the middle section -->
    <h1>{title}</h1>

    <!-- this is the right section -->

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
    header {
        background-color: var(--primary-color);
        color: var(--neutral-color);
        width: 100vw;
        height: 75px;
        display: flex;
        justify-content: space-around;
        align-items: center;

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
            display: none;
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

    /* navigationbar in the header */

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
        transform: scale(1.2);
    }

    @media (width < 720px) {
        nav {
            display: none;
        }
    }

    /* dropdown */
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
</style>

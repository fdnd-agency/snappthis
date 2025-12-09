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



    export let page
    export let title = "SnappMap"
</script>

<header class="header">
    <nav>
        <a href="/" class={page === '/' ? 'active' : ''}>
            <LogoIcon />
        </a>

        <a href="/explore" class={page.startsWith('/explore') ? 'active' : ''}
            ><SearchIcon/>
        </a>

        <a href="/group" class={page.startsWith('/group') ? 'active' : ''}
            ><GroupIcon/>
        </a>

        <a href="/user" class={page.startsWith('/user') ? 'active' : ''}
            ><UserIcon/>
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

    * {
        box-sizing: border-box;
    }

    nav {
        background-color: #172f3b;
        color: white;
        padding: 1rem;
        top: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: space-around;
        margin-inline: auto;
    }


    nav a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.35rem;

        color: white;
        text-decoration: none;
    }

    @media (width > 600px) {
        nav a {
            flex-direction: row;
        }
    }

    @media (width < 720px) {
        nav {
            display: none;
        }
    }

    nav a :global(svg) {
        height: 1.5em;
    }

    nav a:hover,
    nav a:active {
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    nav a.active {
        color: var(--accent-green);
    }
</style>

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
    import SnappMapDropdown from "./SnappMapDropdown.svelte"

    export let page
    export let title = "SnappMap"
    export let active = "home"
    export let href = "/"
    export let dropdownContentSnapmapTwo
    
    let isDropdownOpen = false 

    const handleDropdownClick = () => {
    if (page !== 'snappmap') return
    isDropdownOpen = !isDropdownOpen 
    // arrow rotation should change from 90 to 180
  }

    const handleDropdownFocusLoss = ({ relatedTarget, currentTarget }) => {
        if (relatedTarget instanceof HTMLElement && currentTarget.contains(relatedTarget)) return 
        isDropdownOpen = false
    }
</script>


<header class="header">
    <nav>
        <a href="/" aria-label="Home icon" class:active={active === 'home'} id="home">
            <LogoIcon />
        </a>

        <a href="/explore" aria-label="Search Icon" class:active={active === 'explore'} id="explore">
            <SearchIcon/>
        </a>

        <a href="/group" aria-label="Group Icon" class:active={active === 'groups'} id="groups">
            <GroupIcon/>
        </a>

        <a href="/user" aria-label="User icon" class:active={active === 'you'} id="you">
            <UserIcon/>
        </a>
    </nav>

    <div class="left-icon-{page}">
        <a class="icon-1" href={href}>
            <GobackIcon />
        </a>
    </div>

    <div id="title" class="card-{page}" on:click={handleDropdownClick} on:focusout={handleDropdownFocusLoss}>
        <h1> {title} </h1>
        {#if page === 'snappmap'}
            <div class="arrow-snappmap" style="transform: rotate({isDropdownOpen ? 90 : 0}deg); transition: 0.2s;">
                <Arrow rotation="90" />
            </div>
        {/if}
    </div>

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

<div class="dropdown">
{#if isDropdownOpen}
 <SnappMapDropdown dropdownContentSnapmap={dropdownContentSnapmapTwo} />
{/if}
</div>


<style>

    .header-block {
        height: 75px;

        @media (width > 720px) {
            height: 120px;
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
        z-index: 2;

        @media (width > 720px) {
            height: 120px;
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

    .left-icon-explore {
        div {
            display: block;
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

    nav {
        position: fixed;
        color: var(--neutral-color-lightest);
        padding: 1rem;
        top: -0%;
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


.page-snappmap {
    display: block;
}


.card-snappmap {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5em;
    width: fit-content;
    gap: 3em;
    margin-top: 50px;
    background-color: var(--primary-color-darker);
    height: 3em;
    border-radius: 1em;
    pointer-events: cursor;
}

.card-snappmap ~ .arrow-dropdown {
    display: none;
}


#title {
    margin-top: 50px;
    h1 {
        margin-top: 2em;
    }

    @media (width < 720px) {
        margin-top: 0px;
        h1 {
        margin-top: 1em;
    }
    }
}

.dropdown {
        position: relative;
        width: 50%;
        background-color: var(--primary-color-darker);
        left: 25%;
}


</style>

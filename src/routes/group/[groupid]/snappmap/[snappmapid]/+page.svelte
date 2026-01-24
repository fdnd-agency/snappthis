<script>
    import { page } from '$app/state'
    import gsap from "https://esm.sh/gsap";
    import { MotionPathPlugin } from "https://esm.sh/gsap/MotionPathPlugin";

    gsap.registerPlugin(MotionPathPlugin);

    let { data } = $props()
    let track;
    const snaps = data.snaps[0].snaps
    const id = data.id
    let gridsize = $state('grid2')

    const snapMap = data.snaps?.[0]
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'
    import GridOne from '$lib/components/icons/Grid1Icon.svelte'
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'
    import Sidebar from '$lib/components/Sidebar.svelte'

    import GroupIcon from '$lib/components/icons/GroupIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'
    import SearchIcon from '$lib/components/icons/SearchIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'

    import Dropdown from '$lib/components/icons/Dropdown.svelte'

    import { onMount } from 'svelte'

</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>
<div class="page">
<header>
    <div class="title-block">
        <p> {snapMap.name} </p>
    </div>
    <nav>
        <div class="navigation-sphere">
            <LogoIcon />
        </div>

        <div class="navigation-sphere">
            <SearchIcon />
        </div>

        <div class="navigation-sphere">
            <GroupIcon />
        </div>

        <div class="navigation-sphere">
            <UserIcon />
        </div>
    </nav>

    <div class="dropdown-block">
         <Dropdown />
    </div>
</header>
<main>
        <ul class="carrouel">
            {#each snaps as snap}
            <li>
                <img src="https://fdnd-agency.directus.app/assets/{snap.picture}?format=webp" width="200">


            <div class="info-block">
                <h2>{snap.uuid}</h2>
                <h3>{snap.location}</h3>
            </div>
            </li>
            {/each}
        </ul>

            <!-- must show the details when the planet is in focus state -->
             <div class="block">
                <h2>User</h2>
                <h3>Location</h3>
            </div>
            
</main>
</div>

<style>
    :root {
        --dark-blue: #1d2152;
        --grey: #7a7a7a;
    }

    .page {
        background-color: var(--dark-blue);
        height: 100vh;
    }

    header {
        display: flex;
        height: 100px;
        width: 80vw;
        gap: 4em;
        align-items: center;
    }

    .title-block {
        padding: 1em;
        height: fit-content;
        width: fit-content;
        background-color: var(--grey);
        position: relative;
        top: 1em;
        left: 1em;
    }

    nav {
        display: flex;
        gap: 2em;
        margin-top: 2em;
        color: var(--neutral-color-darkest);
    }

    .navigation-sphere {
        background-color: var(--grey);
        padding: 1em;
        height: 3em;
        width: 3em;
        border-radius: 999px;
        background: radial-gradient(circle at center, white 0, black 100%);
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .navigation-sphere:nth-of-type(1) {
        scale: 1.25;
    }

    ul {
        display: flex;
        margin-top: 5em;
        height: 50em;
        gap: 1em;
        overflow-x: auto;
        width: 100%;
        list-style: none;
        scroll-behavior: smooth;
        anchor-name: --carousel;
        scroll-snap-type: x mandatory;
    }

    /* no scroll bar */
    ul::-webkit-scrollbar {
        display: none;
    }


    ul::scroll-button(right), ul::scroll-button(left){
        position: absolute;
        content: ">";
        border: none;
        background-color: black;
        color: white;
        padding: 1em;
        position: fixed;
        position-anchor: --carrousel;
    }

    ul::scroll-button(right){
        content: ">";
        position: absolute;
        right: 1em;
        top: 17em;
    }

    ul::scroll-button(left){
        content: "<";
        position: absolute;
        left: 1em;
        top: 17em;
        position-area: left center;
    }

    ul::scroll-button(right):disabled, ul::scroll-button(left):disabled{
        opacity: 0.5;
    }

    li {
        scroll-snap-align: start;
        flex: 0 0 10em;
        height: 4em;
        animation: floating 5s infinite;

        img {
            border-radius: 999px;
            padding: 1em;
        }
    }

    @media(max-width: 720px) {
        li {
            flex: 0 0 100%;
        }
        img {
            width: 100%;
        }
        
        ul::scroll-button(left), ul::scroll-button(right){
            top: 50%;
        }
    }

    .info-block h2, h3 {
        position: absolute;
        left: 50%;
        top: 90%;
    }


@keyframes floating {
    0%, 100% {
        transform: translateY(0em);
    }

    20%, 60%, 90% {
        transform: translateY(-2em);
    }

    40%, 80% {
        transform: translateY(0.1em);
    }
}
</style>
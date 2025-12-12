<script>
    import { page } from '$app/state'
    import gsap from "https://esm.sh/gsap";
    import { MotionPathPlugin } from "https://esm.sh/gsap/MotionPathPlugin";

    gsap.registerPlugin(MotionPathPlugin);

    let { data } = $props()
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

    onMount(async () => {
function random(min, max) {
  return min + Math.random() * (max + 1 - min);
}


        const body = document.querySelector('body');
        const canvasSize = body.offsetWidth * body.offsetHeight;
        const starsFraction = canvasSize / 2000;

for(let i = 0; i < starsFraction; i++) {
  // Set up random elements
  let xPos = random(0, 100);
  let yPos = random(0, 100);
  let alpha = random(0.5, 1);
  let size = random(1, 2);
  let colour = '#ffffff';
    
  // Add them to the body
  const star = document.createElement('div');
  star.style.position = 'fixed';
  star.style.left = xPos + '%';
  star.style.top = yPos + '%';
  star.style.opacity = alpha;
  star.style.width = size + 'px';
  star.style.height = size + 'px';
  star.style.backgroundColor = colour;
  document.body.appendChild(star);
}
    })

</script>

<svelte:head>
    <title>{snapMap.name}</title>
</svelte:head>

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
    <div class="curved-panel"> 
        <div class="curved-track">
            <ul>
            {#each snaps as snap}
            <li>
                <img src="https://fdnd-agency.directus.app/assets/{snap.picture}?format=webp" width="200">
                <figure></figure>
            </li>
            {/each}
             </ul>


            <!-- must show the details when the planet is in focus state -->
             <div class="block">
                <h2>User</h2>
                <h3>Location</h3>
            </div>
           
        </div>
   </div>
</main>

<style>
    :root {
        --dark-blue: #1d2152;
        --grey: #7a7a7a;
    }

    header {
        display: flex;
        height: 100px;
        width: 100vw;
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

    .dropdown-block {
        position: absolute;
        right: 25px;
        top: 25px;
        color: var(--neutral-color-darkest);
    }

    header {
        height: 10%;
    }

    img {
        border-radius: 999px;
        z-index: 99;
    }

    figure {
        height: 200px;
        width: 200px;
        box-shadow: inset 0 0 25px #000000;
        border-radius: 999px;
        position: relative;
        right: 40px;
        bottom: 221px;

    }

.curved-panel::before {
    content: "ellow";
    position: absolute;
    left: 0;
    right: 0;
    top: -42px;
    height: 120px;
    pointer-events: none;
    opacity: 80%;
    transform: translateY(8px);
}

ul {
    display: flex;
    gap: 2em;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    scroll-behavior: smooth;
    align-items: center;
    margin-top: 10%;
    animation: floating 10s infinite;
}

.curved-track::-webkit-scrollbar {
    display: none;
}

    li {
        flex: 0 0 260px;
        margin-top: 4em;
        height: fit-content;
        border-radius: 14px;
        scroll-snap-align: center;
        position: relative;

        &:hover {
            scale: 1.25;
            transition-duration: 0.3s;
        }
    }


    img:hover {
        transform: scale(1.15);
        transition-duration: 0.3s;
    }

    img:checked {
        transform: scale(1.15);
        transition-duration: 0.3s;
    }

    .curved-track::scroll-button(*) {
        position: fixed;
        position-anchor: auto;
        cursor: pointer;
        width: 2em;
        height: 2em;
        display: grid;
        place-items: center;
        z-index: 30;
    }

    .curved-track::scroll-button(left) {
        content: "<";
        position-area: left-center;
        translate: -58% 0%;
    }

    .curved-track::scroll-button(right) {
        content: ">";
        position-area: right-center;
        translate: 58% 0%;
    }

    .curved-track::scroll-button(*):disabled {
        opacity: 0.2;
        cursor: default;
    }

    .block {
        color: white;

        h2 {
            display: flex;
            justify-content: center;
        }

        h3 {
            display: flex;
            justify-content: center;
        }
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
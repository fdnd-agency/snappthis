<script>
    import { page } from '$app/state'

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
  star.style.position = 'relative';
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
   {#each snaps as snap}
    <h1>{snap.location}</h1>
   {/each}
</main>

<style>
    :root {
        --dark-blue: #1d2152;
        --grey: #7a7a7a;
    }

    .page {
        margin: 0;
        height: 100vh;
        background-color: var(--dark-blue);
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

    .dropdown-block {
        position: absolute;
        right: 25px;
        top: 25px;
        color: var(--neutral-color-darkest);
    }

    header {
        height: 10%;
    }
</style>
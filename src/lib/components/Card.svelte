<script>
    import { onMount } from 'svelte'
    import FavIcon from './icons/FavIcon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import List from '$lib/components/icons/ListViewIcon.svelte'
    import GroupIcon from './icons/GroupIcon.svelte'

    export let text
    export let icon
</script>

<div class="card">
    <div class="card-{icon}">
        <div>
        <GridThree />
        </div>
        <div>
        <GridFour />
        </div>
        <div>
        <GridFive />
        </div>
        <div>
        <List />
        </div>
        <div>
        <GroupIcon />
        </div>
    </div>

    <p> {text} </p>
</div>

<style>

    .card {
        width: auto;
        height: fit-content;
        background-color: var(--neutral-color);
        color: var(--primary-color);
        border-radius: 16px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        font-size: clamp(20px, 4vw, 28px);
        padding-left: 2em;
        padding-right: 2em;
        gap: 1em;
    }

    .card-small {
        div {
            display: none;
        }

        div:nth-of-type(1) {
            display: block;
        }
    }

    .card-group {
        div {
            display: none;
        }

        div:nth-of-type(5) {
            display: block;
        }
    }
</style>
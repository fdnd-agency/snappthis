<script>
    import { onMount } from 'svelte'
    import FavIcon from './icons/FavIcon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import List from '$lib/components/icons/ListViewIcon.svelte'

    export let text
    export let icon
</script>

<div class="card">
    <div class="card-{icon}">
        <GridThree />
        <GridFour />
        <GridFive />
        <List />
    </div>

    <p> {text} </p>
</div>

<style>

    .card {
        width: 500px;
        height: fit-content;
        background-color: var(--neutral-color);
        border-radius: 16px;
        display: flex;
        justify-content: center;
        font-size: clamp(20px, 4vw, 28px);
        padding-left: 2em;
        padding-right: 2em;
    }

    .card-small {
        svg {
            display: none;
        }

        svg:nth-of-type(1) {
            display: block;
        }
    }
</style>
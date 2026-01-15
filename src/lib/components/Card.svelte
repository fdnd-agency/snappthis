<script>
    import { onMount } from 'svelte'

    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import List from '$lib/components/icons/ListviewIcon.svelte'
    import GroupIcon from './icons/GroupIcon.svelte'
    import Arrow from './icons/Arrow.svelte'

    export let text
    export let icon
    export let href
    export let link
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
        <div>
            <Arrow rotation="180" />
        </div>
    </div>

    <p> {text} </p>
</div>

<a class="card-{href}" href="{link}">
  <p> {text} </p>
</a>

<style>

    .card {
        width: auto;
        height: fit-content;
        background: var(--primary-color-lighter);
        color: var(--neutral-color-lightest);
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

    .card-arrow {
        div {
            display: none;
        }

        div:nth-of-type(6) {
            display: block;
        }
    }

    .card-none {
        div {
            display: none;
        }
    }

    .card- {
        display: none;
    }

    .card-true {
        display: block;
    }

    
</style>
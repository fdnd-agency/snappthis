<script>
    import { onMount } from 'svelte'
    import FavIcon from './icons/FavIcon.svelte'
    import Arrow from './icons/Arrow.svelte'

    import Clock from './icons/Clock.svelte'
    import Star from './icons/StarIcon.Svelte'
    import Tomato from './icons/TomatoIcon.Svelte'

    export let icon
</script>

<div class="card">
    <div class="card-{icon}">
        <div>
            <Clock />
        </div>

        <div>
            <Star />
        </div>

        <div>
            <Tomato />
        </div>
    </div>

    <div class="arrow">
        <Arrow rotation={90}/>    
    </div>
</div>

<style>
    .card {
        background-color: var(--neutral-color);
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: clamp(20px, 4vw, 28px);
        padding: 0.5em;
        gap: 1em;
    }

    .card-clock {
        div {
            display: none;
        }

        div:nth-of-type(1) {
            display: block;
        }
    }

    .card-star {
        div {
            display: none;
        }

        div:nth-of-type(2) {
            display: block;
        }
    }

    .card-tomato {
        div {
            display: none;
        }

        div:nth-of-type(3) {
            display: block;
        }
    }

    .arrow {
        color: var(--neutral-color-darkest);
    }
</style>
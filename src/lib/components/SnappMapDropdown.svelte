<script>
    import { onMount } from 'svelte';
    import Card from './Card.svelte';

    export let dropdownContentSnapmap
</script>

{#if snappmaps.length}
    <div class="dropdown">
        {dropdownContentSnapmap}
    </div>
{/if}

<style>
    .dropdown {
        position: absolute;
        width: 60%;
        left: 20%;
        background-color: var(--neutral-color-lighter);
        display: flex;
        flex-direction: column;
        gap: 1em;
        padding: 1em;
        animation: slidedown 0.3s forwards;

        @media (width < 720px) {
            width: 200%;
            left: -50%;
    }

        a {
            display: flex;
            justify-content: flex-start;
            padding: 1em;
            background-color: var(--neutral-color-light);
            border-radius: 1em;
            text-decoration: none;

        }
    }

    @keyframes slidedown {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0%);
        }
    }

</style>

<script>
    import { onMount } from 'svelte'

    export let text;
</script>

<div class="card">
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
</style>
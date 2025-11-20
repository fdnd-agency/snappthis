<script>
    import { onMount } from 'svelte'

    export let text;
    export let textSmall; 
</script>

<div class="card">
    <p> {text} </p>
    <p> {text-small}</p>
</div>

<style>

    .card {
        width: 100%;
        height: fit-content;
        background-color: var(--neutral-color-60);
    }

</style>
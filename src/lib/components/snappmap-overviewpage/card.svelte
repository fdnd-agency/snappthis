<script>
    import { onMount } from 'svelte'

    export let text;
    export let textSmall; 
</script>

<div class="card">
    <p> {text} </p>
    <p> {textSmall}</p>
</div>

<style>

    .card {
        width: 150px;
        height: 60px;
        background-color: var(--neutral-color-60);
        border-radius: 16px;
        display: flex;
        justify-content: center;
    }

</style>
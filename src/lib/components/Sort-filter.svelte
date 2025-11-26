<script>
    import Chronological from '$lib/components/icons/ChronologicalIcon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'


    import { onMount } from 'svelte'

    let selected = "xlarge";

    function selectOption(value) {
        selected = value;
    }
</script>

<div class="sort-function">
    <span class="span-content">
        <Chronological />
        <label for="large">Chronological</label> 
    </span>
</div>


<style>
    .sort-function {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        background-color: var(--neutral-color-darker);
        padding: 1em;
        width: fit-content;
    
        .span-content {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background-color: var(--neutral-color-darker);
            padding: 1em;
            border-radius: 16px;
        }

        span label {
            align-items: center;
            flex-direction: column;
            padding-left: 3em;
        }
    }

</style>


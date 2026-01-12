<script>
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'

    import { onMount } from 'svelte'

    export let selected = "xlarge";

    function selectOption(value) {
        selected = value;
    }

    const options = [
        { value: "xlarge", short: "XL", long: "XLarge", icon: GridTwo },
        { value: "large", short: "L", long: "Large", icon: GridThree },
        { value: "medium", short: "M", long: "Medium", icon: GridFour },
        { value: "small", short: "S", long: "Small", icon: GridFive },
        { value: "list", short: "List", long: "List View", icon: ListView }
    ]
</script>

<div class="dropdownmenu">
    {#each options as opt}
    <label
    class="option {selected === opt.value ? 'selected' : ''}"
    for={opt.value} 
    >
            <input
                id={opt.value}
                type="radio"
                name="layout"
                value={opt.value}
                bind:group={selected} 
            />

        <svelte:component this={opt.icon} />
        <span class="short">{opt.short}</span>
        <span class="long">{opt.long}</span>
    </label>
    {/each}
</div>


<style>
    .dropdownmenu {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        background-color: var(--neutral-color-light);
        padding: 1em;
        width: fit-content;

        @media (min-width: 1080px) {
            width: 100%;

        }
    
        label:nth-of-type(4) {
            @media screen and (max-width: 1080px){
                display: none;
            }
        }

        label:nth-of-type(3) {
            @media screen and (max-width: 720px){
                display: none;
            }
        }

        label:nth-of-type(1) {
            @media screen and (min-width: 1080px){
                display: none;
            }
        }

        .option {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background: var(--neutral-color);
            
            padding: 1em;
            border-radius: 16px;
            cursor: pointer;

            &.selected {
                background: var(--primary-color);
                color: var(--neutral-color-lightest);
            }
        }

        label span {
            align-items: center;
            flex-direction: column;
            padding-left: 3em;
        }

        label span:nth-of-type(1) {
            @media screen and (min-width: 720px){
                display: none;
            }
        }

        label span:nth-of-type(2) {
            @media screen and (max-width: 720px){
                display: none;
            }
        }
    }

    input[type="radio"] {
    display: none;
    }

    .short { 
        padding-left: 3em;
    }

    .long { 
    padding-left: 3em;
    }      

</style>

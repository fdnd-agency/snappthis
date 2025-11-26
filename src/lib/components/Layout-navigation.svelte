<script>
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/Grid5Icon.svelte'

    import { onMount } from 'svelte'

    let selected = "xlarge";

    function selectOption(value) {
        selected = value;
    }
</script>

<div class="dropdownmenu">
    <span class="span-content"
        class:selected={selected === "xlarge"}
        on:click={() => selectOption("xlarge")}
    >
        <input type="radio" name="layout" value="xlarge" class="radio-element">  
        <GridTwo></GridTwo> 
        <label for="xlarge">XL</label> 
        <label for="xlarge">XLarge</label> 
    </span>

    <span class="span-content"
    class:selected={selected === "large"}
        on:click={() => selectOption("large")}
    >
        <input type="radio" name="layout" value="large" class="radio-element"> 
        <GridThree></GridThree> 
        <label for="large">L</label> 
        <label for="large">Large</label> 
    </span>

    <span class="span-content"
        class:selected={selected === "medium"}
        on:click={() => selectOption("medium")}
    >
        <input type="radio" name="layout" value="medium" class="radio-element"> 
        <GridFour></GridFour>
         <label for="medium">M</label> 
         <label for="medium">Medium</label> 
    </span>

    <span class="span-content"
        class:selected={selected === "small"}
        on:click={() => selectOption("small")}
    >
        <input type="radio" name="layout" value="small" class="radio-element"> 
        <GridFive></GridFive>
         <label for="small">S</label> 
         <label for="small">Small</label> 
    </span>

    <span class="span-content"
        class:selected={selected === "list-view"}
        on:click={() => selectOption("list-view")}
    >
        <input type="radio" name="layout" value="list" class="radio-element"> 
        <ListView></ListView> 
        <label for="list">List</label> 
        <label for="list">List View</label>
    </span>
</div>


<style>
    .dropdownmenu {
        display: flex;
        flex-direction: column;
        gap: 0.5em;
        background-color: var(--neutral-color-darker);
        padding: 1em;
        width: fit-content;

        @media (min-width: 1080px) {
            width: 100%;

        }
    
        span:nth-of-type(4) {
            @media screen and (max-width: 1080px){
                display: none;
            }
        }

        span:nth-of-type(3) {
            @media screen and (max-width: 720px){
                display: none;
            }
        }

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

        span label:nth-of-type(1) {
            @media screen and (min-width: 720px){
                display: none;
            }
        }

        span label:nth-of-type(2) {
            @media screen and (max-width: 720px){
                display: none;
            }
        }
    }

    .radio-element {
        display: none;
    }

.span-content.selected {
    background-color: var(--primary-color-light);
}
</style>


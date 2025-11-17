<script>
    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/Grid5Icon.svelte'

    import { onMount } from 'svelte'
</script>

<button class="dropdownmenu-button"> 
    <GridTwo/> 
</button>

<div class="dropdownmenu">
    <span>
        <input type="radio" name="xlarge" value="xlarge">  
        <GridTwo></GridTwo> 
        <label for="xlarge">XL</label> 
        <label for="xlarge">XLarge</label> 
    </span>

    <span>
        <input type="radio" name="large" value="large"> 
        <GridThree></GridThree> 
        <label for="large">L</label> 
        <label for="large">Large</label> 
    </span>

    <span>
        <input type="radio" name="medium" value="medium"> 
        <GridFour></GridFour>
         <label for="medium">M</label> 
         <label for="medium">Medium</label> 
    </span>

    <span>
        <input type="radio" name="small" value="small"> 
        <GridFive></GridFive>
         <label for="small">S</label> 
         <label for="small">Small</label> 
    </span>

    <span>
        <input type="radio" name="list" value="list"> 
        <ListView></ListView> 
        <label for="list">List</label> 
        <label for="list">List View</label>
    </span>
</div>


<style>
    .dropdownmenu {
        display: flex;
        flex-direction: column;
        gap: 1em;
        background-color: var(--neutral-color-100);
        padding: 1em;

        span:nth-of-type(3) {
            @media screen and (max-width: 720px){
                display: none;
            }
        }

        span {
            display: flex;
            align-items: center;
            justify-content: space-evenly;
            background-color: var(--neutral-color-90);
            padding: 1em;
            border-radius: var(--border-radius-small);
        }

        span label {
            align-items: center;
            flex-direction: column;
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


</style>

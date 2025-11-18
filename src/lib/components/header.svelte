<script>
    export let title = 'SnappThis'

    import Goback from '$lib/components/icons/GobackIcon.svelte'
    import Gallery from '$lib/components/icons/GalleryIcon.svelte'
    import ChronologicalIcon from '$lib/components/icons/ChronologicalIcon.svelte'
</script>

<header class="header">

    <div class="button-back">
        <a href="/"> <Goback/> </a>
    </div>



    <h1>{title}</h1>


    <div class="button-gallery">
        <!-- here will be all the buttons -->
        <button> <Gallery/> </button>
        <button> <ChronologicalIcon/> </button>
    </div>
</header>

<style>
    .header {
        background-color: var(--primary-color);
        color: var(--neutral-color-100);
        font-family: 'Bariol Bold';
        height: 10%;
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
</style>

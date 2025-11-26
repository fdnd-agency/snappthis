<script>
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'
    import Card from '$lib/components/Card.svelte'
    import GalleryComponent from '$lib/components/GalleryComponent.svelte'
    import Feedback from '$lib/components/Feedback.svelte'

    let { data } = $props()
    const snappMaps = data.snappMaps
</script>
<main>
<h1>Homepage</h1>

<h2>Welcome back!</h2>

<div class="last-snapps">
    <Card text="your last placed snapps" />
    <div class="gallery">
        <GalleryComponent/>
    </div>


</div>

    <Feedback />
</main>

<style>
    h1 {
        font-family: 'Bariol', sans-serif;
        margin: 2rem auto;
        width: max-content;
        flex-direction: row;
    }

    .last-snapps {
        width: 30vw;
        height: 30vh;
        overflow: hidden;
    }
</style>

<script>
    import Header from '$lib/components/header.svelte'
    import Nav from '$lib/components/navbar-snapmap.svelte'

    export let data
    const snappmapDetails = data.snappmapDetails

    let pictures = snappmapDetails.picture
    let notLoading = pictures.length === 0 ? true : false
</script>



<h1>{snappmapDetails.title}</h1>
<style>
    main {
        height: 100%;
        width: 100%;
        background-color: var(--neutral-color-80);

    }
</style>

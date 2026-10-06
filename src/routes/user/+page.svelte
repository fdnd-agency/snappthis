<script>
    import Header from '$lib/components/Header.svelte';

    import ProfileOverview from '$lib/components/ProfileOverview.svelte';

    import Footer from '$lib/components/Footer.svelte';

    let { data } = $props();

    // console.log(data.user);
</script>

<Header title="You"/>

<ProfileOverview user={data.user}/>

<Footer/>

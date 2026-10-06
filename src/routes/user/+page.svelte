<script>
    import Header from '$lib/components/Header.svelte';

    import ProfileOverview from '$lib/components/ProfileOverview.svelte';

    import Footer from '$lib/components/Footer.svelte';

    let { data } = $props();
</script>

<Header title="You"/>
<p>{data.users[15].name}</p>

<ProfileOverview/>
<Footer/>

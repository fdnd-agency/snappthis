<script>
    import Header from '$lib/components/Header.svelte';
    import ProfileGroupsOverview from '$lib/components/ProfileGroupsOverview.svelte';

    import ProfileOverview from '$lib/components/ProfileOverview.svelte';

    import Footer from '$lib/components/Footer.svelte';

    let { data } = $props();

    // console.log(data.user);
</script>

<Header title="You"/>

<ProfileOverview user={data.user}/>

<ProfileGroupsOverview  groups={data.groups}/>

<Footer/>

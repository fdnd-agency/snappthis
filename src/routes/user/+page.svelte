<script>
    import Header from '$lib/components/organisms/Header.svelte';
    import ProfileGroupsOverview from '$lib/components/organisms/ProfileGroupsOverview.svelte';

    import ProfileOverview from '$lib/components/organisms/ProfileOverview.svelte';

    import Footer from '$lib/components/organisms/Footer.svelte';

    let { data } = $props();

    // console.log(data.user);
</script>

<Header title="You"/>

<ProfileOverview user={data.user}/>

<ProfileGroupsOverview  groups={data.groups}/>

<Footer/>

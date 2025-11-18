<script>
    import Header from '$lib/components/Header.svelte'

    // icons
    import Star from '$lib/components/icons/StarIcon.svelte'
    import Tomato from '$lib/components/icons/TomatoIcon.svelte'
    import Heart from '$lib/components/icons/HeartIcon.svelte'

    import GridTwo from '$lib/components/icons/Grid2Icon.svelte'
    import GridThree from '$lib/components/icons/Grid3Icon.svelte'
    import GridFour from '$lib/components/icons/Grid4Icon.svelte'
    import GridFive from '$lib/components/icons/Grid5Icon.svelte'
    import ListView from '$lib/components/icons/ListviewIcon.svelte'

    let { data } = $props()
    const snaps = data.snaps[0].snaps
    const id = data.id
    const users = data.users
    const snapmap = data.snaps?.[0]

    // function to get the name
    const userMap = new Map(users.map((u) => [u.uuid, u.name]))
</script>

<svelte:head>
    <title>{snapmap.name}</title>
</svelte:head>

<Header title={snapmap.name}></Header>

<nav>

</nav>

<main>

</main>

<style>


</style>

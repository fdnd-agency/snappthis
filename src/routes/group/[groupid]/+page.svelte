<script>
    import Header from '$lib/components/Header.svelte'
    import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'
    import PlusIcon from '$lib/components/icons/PlusIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'

    let { data } = $props()
    const groups = data.groups
</script>
<Header title="{groups.name}"/>

    {#each snapmaps as snapmap}

    {/each}







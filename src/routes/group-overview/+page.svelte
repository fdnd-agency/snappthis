<script>
    import Header from '$lib/components/header.svelte'
    import Dropdown from '$lib/components/dropdown-button.svelte'
</script>

<Header />

<main>
    <Dropdown />
</main>

<style>
    main {
        height: 100vh;
        background-color: var(--neutral-color-80);
    }
</style>

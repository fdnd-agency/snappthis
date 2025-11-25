<script>
    import Header from '$lib/components/Header.svelte'
    import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'
    import PlusIcon from '$lib/components/icons/PlusIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'

    let { data } = $props()
    const groups = data.groups
</script>

<header>
    <div>
        <a href="/"><ArrowLeftIcon title="back"></ArrowLeftIcon></a>
        <h1>{groups.name}</h1>
        <a href="/"><PlusIcon title="Add group"></PlusIcon></a>
    </div>
</header>

<p> {groups.snappmap}</p>


<style>
    header {
        background-color: var(--primary-color);
        width: 100%;
        color: white;
        font-family: 'Bariol';
    }

    h1 {
        font-size: clamp(1.5rem, 1.3rem + 1.15vw, 2rem);
    }

    header a {
        color: white;
        text-decoration: none;
    }

    header a :global(svg) {
        height: 1.25em;
    }

    header > div,
    main > div {
        max-width: 1000px;
        margin-inline: auto;
    }

    header > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1rem;
    }
</style>







<script>
    import Header from '$lib/components/Header.svelte'
    import ArrowLeftIcon from '$lib/components/icons/ArrowLeftIcon.svelte'
    import LogoIcon from '$lib/components/icons/LogoIcon.svelte'
    import PlusIcon from '$lib/components/icons/PlusIcon.svelte'
    import UserIcon from '$lib/components/icons/UserIcon.svelte'

    let { data } = $props()
    const groups = data.groups
    const snappmaps = data.snappmap
</script>

<p>{snappmaps.name}</p>

<header>
    <div>
        <a href="/"><ArrowLeftIcon title="back"></ArrowLeftIcon></a>
        <h1>{groups.name}</h1>
        <a href="/"><PlusIcon title="Add group"></PlusIcon></a>
    </div>
</header>

<ul>
    <li>
        <p> {groups.snappmap}</p>
    </li>
</ul>



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

      main {
        font-family: 'Bariol';
        color: var(--primary-color);
        width: 100%;
    }

    ul,
    li {
        margin: 0;
        padding-inline: 0;
    }

    .group {
        list-style: none;
        padding: 1em;
        border-bottom: 2px solid #e9ecee;
        display: grid;
        grid-template-areas:
            'title link'
            'members link ';
        align-items: center;
    }

    .group > a {
        font-size: 1.5rem;
        margin: 0;
        color: currentColor;
        text-decoration: none;
        grid-area: title;
        align-self: top;
    }

    .group > p {
        grid-area: members;
        margin: 0;
        color: var(--primary-color-30);
    }

    .options {
        grid-area: link;
        justify-self: end;
        display: flex;
        list-style: none;
    }

    .options a {
        color: var(--primary-color-30);
    }

    .options a :global(svg) {
        height: 1.5em;
    }
</style>







<script>
    // icons
    import GroupIcon from './icons/GroupIcon.svelte'
    import LogoIcon from './icons/LogoIcon.svelte'
    import SearchIcon from './icons/SearchIcon.svelte'
    import UserIcon from './icons/UserIcon.svelte'

    let { page } = $props()
</script>

<nav>
    <div>
        <a href="/" class={page === '/' ? 'active' : ''}>
            <LogoIcon />
            Home
        </a>
        <a href="/explore" class={page.startsWith('/explore') ? 'active' : ''}
            ><SearchIcon />Explore</a>
        <a href="/group" class={page.startsWith('/group') ? 'active' : ''}
            ><GroupIcon />Groups</a>
        <a href="/user" class={page.startsWith('/user') ? 'active' : ''}
            ><UserIcon />You</a>
    </div>
</nav>

<style>
    nav {
        background-color: var(--primary-color);
        color: var(--neutral-color-lightest);
        padding: 1rem;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
    }

    div {
        display: flex;
        justify-content: space-around;
        max-width: 1000px;
        margin-inline: auto;
    }

    nav a {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.35rem;

        color: var(--neutral-color-lightest);
    }

    @media (width > 600px) {
        nav a {
            flex-direction: row;
        }
    }

    @media (width > 720px) {
        nav {
            display: none;
        }
    }

    nav a.active {
        color: var(--secondary-color);
        scale: 1.2;
    }
</style>

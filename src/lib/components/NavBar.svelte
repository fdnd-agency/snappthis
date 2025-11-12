<script>
    import GroupIcon from './icons/GroupIcon.svelte'
    import LogoIcon from './icons/LogoIcon.svelte'
    import SearchIcon from './icons/SearchIcon.svelte'
    import UserIcon from './icons/UserIcon.svelte'

    let { page } = $props()
</script>

<nav>
    <div>
        <a href="/" class={page === '/' ? 'active' : ''}>
            <LogoIcon></LogoIcon>
            Home
        </a>
        <a href="/explore" class={page.startsWith('/explore') ? 'active' : ''}
            ><SearchIcon></SearchIcon>Explore</a>
        <a href="/group" class={page.startsWith('/group') ? 'active' : ''}
            ><GroupIcon></GroupIcon>Groups</a>
        <a href="/user" class={page.startsWith('/user') ? 'active' : ''}
            ><UserIcon></UserIcon>You</a>
    </div>
</nav>

<style>
    * {
        box-sizing: border-box;
    }

    nav {
        background-color: #172f3b;
        color: white;
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

        color: white;
        text-decoration: none;
        font-family: 'Bariol';
    }

    @media (width > 600px) {
        nav a {
            flex-direction: row;
        }
    }

    nav a :global(svg) {
        height: 1.5em;
    }

    nav a:hover,
    nav a:active {
        text-decoration: underline;
        text-underline-offset: 2px;
    }

    nav a.active {
        color: var(--accent-green);
    }
</style>

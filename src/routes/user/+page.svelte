<script>
    import Header from '$lib/components/Header.svelte'


    import GalleryIcon from '../../lib/components/icons/GalleryIcon.svelte'
    import GroupIcon from '../../lib/components/icons/GroupIcon.svelte'
    import StarIcon from '../../lib/components/icons/StarIcon.svelte'

    let { data } = $props()
    const user = data.user
</script>
<Header page="add" active="you"/>

<section class="user-info">
    <h1>{user.name}</h1>

    <ul class="your-info">
        <li>{user.gender}</li>
        <li>{user.birthdate.substring(0, 10)}</li>
        <li>@{user.usecase}</li>
        <li><strong>{user.email}</strong></li>
    </ul>

    <ul class="your-data">
        <li><GalleryIcon /> 54 snapps</li>
        <li>
            <a href="/group">
                <GroupIcon />
                {user.groups} groups
            </a>
        </li>
        <li><StarIcon /> 21 stars</li>
    </ul>
</section>

<style>
    section {
        display: flex;
        justify-content: center;
        flex-direction: column;
        background-color: var(--neutral-color-lighter);
        height: 100vh;
    }

    a {
        color: var(--neutral-color-darkest);

    }

    .user-info {
        padding: 2em;
        height: 45vh;
        place-items: center;
        text-decoration: none;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        list-style: none;
        justify-content: center;
    }
</style>

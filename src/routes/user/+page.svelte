<script>
    import Header from '$lib/components/Header.svelte'
    import GalleryIcon from '../../lib/components/icons/GalleryIcon.svelte'
    import GroupIcon from '../../lib/components/icons/GroupIcon.svelte'
    import StarIcon from '../../lib/components/icons/StarIcon.svelte'
    import SnappMapPreview from '$lib/components/SnappMapPreview.svelte'

    let { data } = $props()
    const user = data.user
    const snappMaps = data.snappMaps
    const groups = data.groups
    
    const fourthGroup = data.groups[2]
    const ThirdSnappMap = data.snappMaps[2]
    const FourthSnappMap = data.snappMaps[3]

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
        <li><GalleryIcon></GalleryIcon> 54 snapps</li>
        <li>
            <a href="/group">
                <GroupIcon></GroupIcon>
                {user.groups} groups
            </a>
        </li>
        <li><StarIcon></StarIcon> 21 stars</li>
    </ul>

    <SnappMapPreview snappMap={ThirdSnappMap}  groupID={fourthGroup}></SnappMapPreview>
    <SnappMapPreview snappMap={FourthSnappMap}  groupID={fourthGroup}></SnappMapPreview>

</section>

<style>
    h1,
    li {
        font-family: 'bariol';
    }

    a {
        color: var(--neutral-color-0);
        text-decoration: none;
    }

    .user-info {
        background-color: var(--neutral-color-90);
        margin: 0;
        padding: 2em;
        height: 45vh;
        place-items: center;
    }

    ul {
        display: flex;
        flex-wrap: wrap;
        gap: 0.5em;
        list-style: none;
        padding: 0;
        justify-content: center;
    }
</style>

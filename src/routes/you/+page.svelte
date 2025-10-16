<script>
    import GalleryIcon from '../../lib/components/icons/GalleryIcon.svelte'
    import GroupIcon from '../../lib/components/icons/GroupIcon.svelte'
    import StarIcon from '../../lib/components/icons/StarIcon.svelte'

    let { data } = $props()
    const user = data.user
</script>

<section class="user-info">
    <h1>{ user.name }</h1>

    <ul class="your-info">
        <li>{ user.gender }</li>
        <li>{ user.birthdate.substring(0, 10) }</li>
        <li>@{ user.usecase }</li>
        <li>{ user.email }</li>
    </ul>

    <ul class="your-data">
        <li> <GalleryIcon></GalleryIcon> 54 snapps</li>
        <li> <a href="/group-overview"> <GroupIcon></GroupIcon> { user.groups } groups </a></li>
        <li> <StarIcon></StarIcon> 21 stars</li>
    </ul>
</section>


<style>

h1, li {
    font-family: 'bariol';
}

.user-info {
    background-color: var(--neutral-color-90);
    margin: 0;
    padding: 2em;
}

ul {
    display: flex;
    flex-wrap: wrap;
    gap: .5em;
    list-style: none;
    padding: 0;
}



</style>
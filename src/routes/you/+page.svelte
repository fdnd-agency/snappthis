<script>
    import GalleryIcon from '../../lib/components/icons/GalleryIcon.svelte'
    import GroupIcon from '../../lib/components/icons/GroupIcon.svelte'
    import StarIcon from '../../lib/components/icons/StarIcon.svelte'

    let { data } = $props()
    const user = data.user
</script>

<h1>You</h1>

<h2>{ user.name }</h2>

<ul>
    <li>{ user.gender }</li>
    <li>{ user.birthdate.substring(0, 10) }</li>
    <li>@{ user.usecase }</li>
    <li>{ user.email }</li>
</ul>

<ul>
    <li> <GalleryIcon></GalleryIcon> { } snapps</li>
    <li> <a href="/group-overview"> <GroupIcon></GroupIcon> { user.groups } groups </a></li>
    <li> <StarIcon></StarIcon> 21 stars</li>
</ul>

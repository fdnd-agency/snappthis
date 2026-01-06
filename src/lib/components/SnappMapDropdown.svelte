<script>
    import { onMount } from 'svelte'

    onMount(async () => {
    async function fetchSnappmap() {
    const pictureResponse = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap'
    )

    const snappmap = await pictureResponse.json()
    return snappmap
}
    })

console.log(fetchSnappmap)
</script>
<div class="active-card">
    <Card text="{snappmap.title}" active="" />
</div>
<div class="dropdown">
    <!-- check if the snappmap is active -->
    <!-- for each loop -->
    <Card text="{snappmap.title}" active="{}"/>
</div>
export async function load({ url, params }) {
    const snapsRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*,name,uuid&filter[uuid][_eq]=${encodeURIComponent(params.snappmapid)}`
    )
    const snapsData = await snapsRes.json()

    const snappMapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid'
    )
    const snappMapsData = await snappMapsRes.json()



    // fetch the group by the route param and include the group's snappmap relation
    const groupRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group?filter[uuid][_eq]=${encodeURIComponent(params.groupid)}&fields=name,uuid,snappmap.snappthis_snapmap_uuid.*`
    )
    const groupJson = await groupRes.json()
    const group = groupJson.data?.[0] ?? null

    // These are the snappmaps within a group
    const snappmapsInGroup =
    (group?.snappmap ?? [])
    .map(rel => rel?.snapthis_snapmap_uuid)
    .filter(Boolean)

    return {
        snaps: snapsData.data,
        snapName : snappMapsData.data,
        id: params.snappmapid,
        group,
        snappmapsInGroup
    }
}
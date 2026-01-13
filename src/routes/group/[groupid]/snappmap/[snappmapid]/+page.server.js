export async function load({ url, params }) {
    const snapsRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*,name,uuid&filter[uuid][_eq]=${encodeURIComponent(params.snappmapid)}`
    )
    const snapsData = await snapsRes.json()

    const snappMapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid'
    )
    const snappMapsData = await snappMapsRes.json()

    export async function load({ url, params }) {
    const allSnappmaps = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group?filter[uuid][_eq]=${params.groupid}&fields=snappmap.snappthis_snapmap_uuid.name,snappmap.snappthis_snapmap_uuid.uuid`
    ).then((response) => response.json())
    }
    
    // fetch the group by the route param and include the group's snappmap relation
    const groupRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group?filter[uuid][_eq]=${encodeURIComponent(params.groupid)}&fields=name,uuid,snappmap.snappthis_snapmap_uuid.*`
    )
    const groupJson = await groupRes.json()
    const group = groupJson.data?.[0] ?? null

    return {
        snaps: snapsData.data,
        snapName: snappMapsData.data,
        id: params.snappmapid,
        group
    }
}

export async function load({ url, params }) {
    const snapsRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*,name,uuid&filter[uuid][_eq]=${params.snappmapid}`
    )
    const snapsData = await snapsRes.json()

    const snappMapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid'
    )
    const snappMapsData = await snappMapsRes.json()

    // set up a list with the snapmap data in a particular group
    const snappMapinGroupRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_group/?fields=snappmap'
    )
    const snappMapinGroupData = await snappMapinGroupRes.json()

    return {
        snaps: snapsData.data,
        snapName: snappMapsData.data,
        snappMapinGroup: snappMapinGroupData.data,
        id: params.snappmapid,
    }
}

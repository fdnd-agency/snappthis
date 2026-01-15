export async function load({ url, params }) {
    const snapsRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*,name,uuid&filter[uuid][_eq]=${params.snappmapid}`
        
    )
    const snapsData = await snapsRes.json()

    const snappMapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid'
    )
    const snappMapsData = await snappMapsRes.json()

    return {
        snaps: snapsData.data,
        snapName: snappMapsData.data,
        id: params.snappmapid,
    }
}

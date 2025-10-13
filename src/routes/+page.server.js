export async function load({ url }) {
    const snappMaps = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid,snaps.picture'
    ).then((response) => response.json())
    return { snappMaps: snappMaps.data }
}

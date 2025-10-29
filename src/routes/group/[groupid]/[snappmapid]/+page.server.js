export async function load({ url, params }) {
    const snaps = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*&filter[uuid][_eq]=${params.snappmapid}`
    ).then((response) => response.json())
    return { snaps: snaps.data, id: params.snappmapid }
}

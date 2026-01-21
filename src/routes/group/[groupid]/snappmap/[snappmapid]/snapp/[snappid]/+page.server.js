export async function load({ url, params }) {
    const snappDetails = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snap/${params.snappid}?fields=*,author.name,snapmap.name`
    ).then((response) => response.json())
    return { snappDetails: snappDetails.data }
}
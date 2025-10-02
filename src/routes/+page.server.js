export async function load({ url }) {
    const snappDetails = await fetch('https://fdnd-agency.directus.app/items/snappthis_snap?fields=*,author.name').then(response => response.json())
    return { snappDetails: snappDetails.data }
}
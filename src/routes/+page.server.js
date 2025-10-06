export async function load({ url }) {
    const snappMaps = await fetch('https://fdnd.directus.app/items/squad').then(response => response.json())
    return { snappMaps: snappMaps.data }
}
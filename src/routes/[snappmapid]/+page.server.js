export async function load({ url, params }) {
    const response = await fetch(`https://fdnd-agency.directus.app/items/snappthis_snapmap/${params.uuid}?fields=uuid,snapmap`);
    const snappMap = await response.json();
    return { snappMap: snappMap.data };
}
export async function load({ url }) {
    const groups = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_group'
    ).then((response) => response.json())
    return { groups: groups.data }
}

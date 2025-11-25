

export async function load({ url, params }) {
    const groups = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group/${params.groupid}`
    ).then((response) => response.json())
    return { groups: groups.data }
}

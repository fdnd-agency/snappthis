export async function load({ url, params }) {
    // Load group
    const groupRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group/${params.groupid}`
    );
    const groupJson = await groupRes.json();
    const group = groupJson.data;

    // Load ALL snapmaps
    const snappMapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap'
    );
    const snapmapJson = await snappMapsRes.json();
    const snapmaps = snapmapJson.data;

    return {
        group,
        snapmaps
    };
}

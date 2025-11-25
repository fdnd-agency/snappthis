export async function load({ url, params }) {
    // all groups will be loaded
    const groupRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group/${params.groupid}`
    );
    const groupData = await groupRes.json();
    const group = groupData.data;

    const snapmapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap'
    );
    const snapmapsData = await snapmapsRes.json();
    const snapmaps = snapmapsData.data;
    
    return { groups: groups.data,
        snapmaps: snapmaps.data
     }
}

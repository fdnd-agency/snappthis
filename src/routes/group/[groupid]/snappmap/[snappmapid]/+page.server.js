export async function load({ params, fetch }) {
    const { groupId, snapMapId, snapId } = params;

    const snapMapRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/${snapMapId}`
    );
    const snapMapJson = await snapMapRes.json();

    const snapRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snap/${snapId}`
    );

    if (!snapRes.ok) {
        throw new Error('Snap not found');
    }

    const snapJson = await snapRes.json();

    return {
        groupId,
        snapMap: snapMapJson.data,
        snap: snapJson.data
    };
}
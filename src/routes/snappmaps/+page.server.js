export async function load({ fetch }) {
    const response = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap'
    );

    const { data: snappmaps } = await response.json();

    return { snappmaps };
}
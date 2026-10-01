export const csr = false

export async function load({ fetch, params }) {
    // Directus ondersteunt filters op relationele velden via de junction table.
    const response = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap?filter[groups][snappthis_group_uuid][_eq]=${params.slug}&fields=uuid,slug,name,time_start,time_end`
    )

    const { data } = await response.json()

    return {
        snappmaps: data
    }
}
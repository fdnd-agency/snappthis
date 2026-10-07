export const csr = false

export async function load({ fetch, params }) {
    // Get the selected group using the slug from the URL.
    const groupResponse = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group?filter[slug][_eq]=${params.slug}&fields=uuid,name`
    )

    const { data: groups } = await groupResponse.json()
    const group = groups[0]

    // Get the Snappmaps that are connected to this group's UUID.
    const snappmapsResponse = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap?filter[groups][snappthis_group_uuid][_eq]=${group.uuid}&fields=uuid,slug,name,time_start,time_end`
    )

    const { data: snappmaps } = await snappmapsResponse.json()

    return {
        group,
        snappmaps
    }
}
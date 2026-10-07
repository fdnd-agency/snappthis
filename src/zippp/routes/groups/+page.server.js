export const csr = false

export async function load({ fetch }) {
    const response = await fetch(
        // specifieke velden ophalen
        'https://fdnd-agency.directus.app/items/snappthis_group?fields=uuid,slug,name,users'
    )

    const { data: groups } = await response.json()

    return {
        groups
    }
}
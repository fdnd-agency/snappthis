export async function load({ url }) {
    const user = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_user/c317f593-e64b-42d6-8cbd-4f14829d44ed`
    ).then((response) => response.json())
    return { user: user.data }
}

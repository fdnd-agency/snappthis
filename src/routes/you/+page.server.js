// export async function load({ url, params }) {
//     const user = await fetch(
//         `https://fdnd-agency.directus.app/items/snappthis_user/${params.userid}`
//     ).then((response) => response.json())
//     return { user: user.data }
// }

export async function load({ url }) {
    const user = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_user/902bf505-c020-4663-aee8-2cef8074b8f2`
    ).then((response) => response.json())
    return { user: user.data }
}

export async function load({ url }) {
    const user = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_action`
    ).then((response) => response.json())
    return { user: user.data }
}


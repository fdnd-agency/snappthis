export async function load({ url, params }) {
    const snapsRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*,name,uuid&filter[uuid][_eq]=${params.snappmapid}`
    )
    const snapsData = await snapsRes.json()

    const snappMapsRes = await fetch(
        'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid'
    )
    const snappMapsData = await snappMapsRes.json()

    return {
        snaps: snapsData.data,
        snapName: snappMapsData.data,
        id: params.snappmapid,
    }
}

export const actions = {
    upload: async (event) => {
        // upload the image
        const formData = await event.request.formData()
        const snappmapid = event.params.snappmapid

        const uploadResponse = await fetch(
            'https://fdnd-agency.directus.app/files',
            {
                method: 'POST',
                body: formData,
            }
        )

        // get the new image ID from the response
        const uploadResponseData = await uploadResponse.json()
        const imageID = uploadResponseData.data.id

        // create a new snap
        let newSnap = {
            location: 'Amsterdam',
            snapmap: snappmapid,
            author: '6d6f682e-33aa-4d45-88db-e8c15263ccc6',
            picture: imageID,
        }

        // upload the new snap to directus
        const snapResponse = await fetch(
            `https://fdnd-agency.directus.app/items/snappthis_snap`,
            {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newSnap),
            }
        )
    },
}

let baseURL = 'https://fdnd-agency.directus.app/items/'

export async function load({ url, params }) {
    const snappmapDetails = await fetch(
        `${baseURL}snappthis_snap/${params.snappmap}/fields=picture`
    ).then(response => response.json())

    return { snappmapDetails: snappmapDetails.data }
}


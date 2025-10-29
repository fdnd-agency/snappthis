import { redirect } from '@sveltejs/kit'

export function load() {
    let latest = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*&filter[uuid][_eq]=${params.snappmapid}`
    ).then((response) => response.json())
    redirect(308, '/b')
}

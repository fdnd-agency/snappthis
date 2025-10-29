import { redirect } from '@sveltejs/kit'

export async function load({ url, params }) {
    let latest = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group/?fields=snappmap.*.*&filter[snappmap][snappthis_group_uuid][uuid][_eq]=${params.groupid}&sort=-snappmap.snappthis_snapmap_uuid.time_start&limit=1`
    ).then((response) => response.json())
    const latestUUID = latest.data[0].snappmap[0].snappthis_snapmap_uuid.uuid
    redirect(308, `${url.pathname}/${latestUUID}`)
}

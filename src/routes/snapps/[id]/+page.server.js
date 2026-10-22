export async function load({ params, fetch }) {
 const snapUuid = params.id;


const response = await fetch(
    `https://fdnd-agency.directus.app/items/snappthis_snap?filter[uuid][_eq]=${snapUuid}&fields=*,author.*,author.groups.snappthis_group_uuid.*,snapmap.*,snapmap.groups.snappthis_group_uuid.*`
);

const { data: snaps } = await response.json(); 


return { snap: snaps[0]};

}
export async function load({ params, fetch }) {
 const snapUuid = params.id;


const response = await fetch(
 `https://fdnd-agency.directus.app/items/snappthis_snap?filter[uuid][_eq]=${snapUuid}`
);

const { data: snaps } = await response.json(); 

console.log(snaps);

return { snap: snaps[0]};

}
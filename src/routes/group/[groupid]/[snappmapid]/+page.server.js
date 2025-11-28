export async function load({ url, params }) {
  const snapsRes = await fetch(
    `https://fdnd-agency.directus.app/items/snappthis_snapmap/?fields=snaps.*,name,uuid&filter[uuid][_eq]=${params.snappmapid}`
  );
  const snapsData = await snapsRes.json();

  const usersRes = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_user?fields=name,uuid'
  );
  const usersData = await usersRes.json();

  const snappMapsRes = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=name,uuid'
  );
  const snappMapsData = await snappMapsRes.json();

  const snapmap = snappMapsData.data.find(m => m.uuid === params.snappmapid);

  const groupRes = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group`
    );
  const groupJson = await groupRes.json();
  const group = groupJson.data;

  return {
    snaps: snapsData.data,
    users: usersData.data,
    snapmap,
    id: params.snappmapid,
    group 
  };
}
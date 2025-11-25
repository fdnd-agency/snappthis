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
  )
  const snappMapsData = await snappMapsRes.json()

  return {
    snaps: snapsData.data,
    users: usersData.data,
    snapmap: snappMapsData.data, 
    id: params.snappmapid,
  };
}

export async function load({ url, params }) {
    let latest = await fetch(
        `https://fdnd-agency.directus.app/items/snappthis_group/?fields=snappmap.*.*&filter[snappmap][snappthis_group_uuid][uuid][_eq]=${params.groupid}`
    ).then((response) => response.json())
}

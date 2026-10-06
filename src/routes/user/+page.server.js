const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

export async function load({fetch}) {
const response = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_user?fields=*,groups.*'
);

const { data: users } = await response.json();

const user = users.find((user) => user.uuid === userUuid);

const groupsResponse = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_group?fields=*,snappmap.*'
);

const { data: groups } = await groupsResponse.json();

// Filter all groups to only include the groups the user is part of
const userGroups = groups.filter((group) =>
user.groups.some(
    (userGroups) => userGroups.snappthis_group_uuid === group.uuid
)
);

const snappmapResponse = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_snapmap?fields=*,snaps.*'
)

const { data: snappmaps } = await snappmapResponse.json();

console.log(snappmaps[0].snaps[0]);
console.log(userGroups[0].snappmap[0].snappthis_snapmap_uuid);


const groupSnappmap = snappmaps.find(
    (snappmap) =>
   snappmap.uuid === userGroups[0].snappmap[0].snappthis_snapmap_uuid
);

console.log(groupSnappmap.snaps.map((snap) => snap.picture));
console.log(groupSnappmap);

console.log(`https://fdnd-agency.directus.app/assets/${groupSnappmap.snaps[0].picture}`);

return { user,groups, userGroups };



}
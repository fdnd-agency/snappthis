const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

export async function load({fetch}) {
const response = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_user'
);

const { data: users } = await response.json();

const user = users.find((user) => user.uuid === userUuid);

const groupsResponse = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_group'
);

const { data: groups } = await groupsResponse.json();

console.log(groups);

return { user,groups };

}
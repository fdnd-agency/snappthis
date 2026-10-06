export async function load({fetch}) {
const response = await fetch(
    'https://fdnd-agency.directus.app/items/snappthis_user'
);

const { data: users } = await response.json();

return { users };

}
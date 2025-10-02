export async function fetchUsers() {
  const response = await fetch('https://fdnd-agency.directus.app/items/snappthis_user');
  
  const data = await response.json();
  return data;
}
const baseUrl = 'https://fdnd-agency.directus.app/items/';

export async function loadPictures() {
  const response = await fetch(`${baseUrl}snappthis_snap`);
  const data = await response.json();

  return data.data;
}
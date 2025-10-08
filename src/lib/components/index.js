export async function fetchPictures() {
  const pictureResponse = await fetch('https://fdnd-agency.directus.app/items/snappthis_snap');
  
  const picture = await pictureResponse.json();
  return picture;
}
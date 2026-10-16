import { error } from '@sveltejs/kit';

// Base URL of the Directus API
const directusUrl = 'https://fdnd-agency.directus.app';

// Hardcoded user (Anne-Fleur Pietersen) until login is built, same as the Node.js version
const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

export async function load({ fetch }) {
	// Same query as server.js lines 35-38 of the Node.js version
	const params = new URLSearchParams();
	params.set('fields', '*,snaps.*'); // all snappmap fields plus all fields of its snaps
	params.set('sort', '-time_end'); // snappmaps sorted by end date, newest first
	params.set('deep[snaps][_sort]', '-date_created'); // snaps inside each snappmap, newest first

	const response = await fetch(`${directusUrl}/items/snappthis_snapmap?${params}`);

	// If Directus fails, show the SvelteKit error page instead of crashing
	if (!response.ok) {
		error(503, 'The snappmaps could not be loaded. Please try again later.');
	}

	const { data } = await response.json();
	const now = new Date();

	// Prepare everything the template needs, so the .svelte file stays simple
	const snappmaps = data.map((snappmap) => {
		const snaps = snappmap.snaps ?? [];
		const userHasSnapp = snaps.some((snap) => snap.author === userUuid);
		const isActive = new Date(snappmap.time_end) > now;

		return {
			uuid: snappmap.uuid,
			slug: snappmap.slug,
			name: snappmap.name,
			timeEnd: snappmap.time_end,
			userHasSnapp,
			// Same logic as index.liquid line 14. Check with the team whether this should be !userHasSnapp
			showAddSnapp: isActive && userHasSnapp,
			// Only the 5 newest snaps are needed for the thumbnails
			thumbnails: snaps.slice(0, 5).map((snap) => ({
				uuid: snap.uuid,
				picture: snap.picture
			}))
		};
	});

	// Snappmaps with a snapp from the user first, then by end date (newest first)
	snappmaps.sort((a, b) => {
		if (a.userHasSnapp && !b.userHasSnapp) return -1;
		if (!a.userHasSnapp && b.userHasSnapp) return 1;
		return new Date(b.timeEnd) - new Date(a.timeEnd);
	});

	return { snappmaps };
}
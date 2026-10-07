import { error, fail } from '@sveltejs/kit';
import { reverseGeocode } from '$lib/server/reverseGeocode.js';

const directusUrl = 'https://fdnd-agency.directus.app';

// Hardcoded user (Anne-Fleur Pietersen) until login is built, same as the Node.js version
const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

// Fetches one snappmap and checks if the user may post in it.
// Used by both load and the action, so the action never trusts hidden form fields.
async function getSnappmap(fetch, slug) {
	const snappmapParams = new URLSearchParams();
	snappmapParams.set(
		'fields',
		'uuid,slug,name,time_end,groups.snappthis_group_uuid.name,groups.snappthis_group_uuid.slug,snaps.uuid,snaps.picture,snaps.date_created'
	);
	snappmapParams.set('filter[slug][_eq]', slug);
	snappmapParams.set('deep[snaps][_sort]', '-date_created'); // newest snapps first

	const userParams = new URLSearchParams();
	userParams.set('fields', 'groups.snappthis_group_uuid.slug');
	userParams.set('filter[uuid][_eq]', userUuid);

	// Both requests are independent, so run them at the same time
	const [snappmapResponse, userResponse] = await Promise.all([
		fetch(`${directusUrl}/items/snappthis_snapmap?${snappmapParams}`),
		fetch(`${directusUrl}/items/snappthis_user?${userParams}`)
	]);

	if (!snappmapResponse.ok || !userResponse.ok) {
		error(503, 'This snappmap could not be loaded. Please try again later.');
	}

	const { data: snappmaps } = await snappmapResponse.json();
	const { data: users } = await userResponse.json();

	const snappmap = snappmaps[0];
	if (!snappmap) {
		error(404, 'Snappmap not found');
	}

	// The first group the snappmap belongs to (many-to-many via a junction table)
	const group = snappmap.groups?.[0]?.snappthis_group_uuid;

	// Is the user a member of one of the groups of this snappmap?
	const userGroupSlugs = (users[0]?.groups ?? []).map((g) => g.snappthis_group_uuid?.slug);
	const isMember = (snappmap.groups ?? []).some((g) =>
		userGroupSlugs.includes(g.snappthis_group_uuid?.slug)
	);

	const isActive = new Date(snappmap.time_end) > new Date();

	return {
		snappmap: {
			uuid: snappmap.uuid,
			slug: snappmap.slug,
			name: snappmap.name,
			timeEnd: snappmap.time_end,
			groupName: group?.name ?? '',
			groupSlug: group?.slug ?? ''
		},
		// Only snapps that actually have a picture
		snapps: (snappmap.snaps ?? [])
			.filter((snap) => snap.picture)
			.map((snap) => ({ uuid: snap.uuid, picture: snap.picture })),
		canPost: isMember && isActive
	};
}

export async function load({ fetch, params }) {
	return await getSnappmap(fetch, params.slug);
}

export const actions = {
	// Default action: <form method="POST"> without an action attribute posts here
	default: async ({ request, fetch, params }) => {
		const { snappmap, canPost } = await getSnappmap(fetch, params.slug);

		// Check again on the server: the deadline may have passed while the page was open
		if (!canPost) {
			return fail(403, { status: 'not_allowed' });
		}

		const formData = await request.formData();
		const file = formData.get('file');

		// No file selected (or an empty one): show an error instead of crashing
		if (!(file instanceof File) || file.size === 0) {
			return fail(400, { status: 'no_file' });
		}

		// Latitude and longitude are only filled in when JavaScript is available
		const latitude = formData.get('latitude');
		const longitude = formData.get('longitude');
		const location =
			latitude && longitude ? await reverseGeocode(fetch, latitude, longitude) : 'Unknown';

		// STEP 1: upload the file to Directus /files
		const uploadData = new FormData();
		uploadData.append('file', file, file.name);

		const uploadResponse = await fetch(`${directusUrl}/files`, {
			method: 'POST',
			body: uploadData
		});

		if (!uploadResponse.ok) {
			return fail(500, { status: 'upload_failed' });
		}

		const { data: uploadedFile } = await uploadResponse.json();

		// STEP 2: create the snap item that refers to the uploaded file
		const snapResponse = await fetch(`${directusUrl}/items/snappthis_snap`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				location,
				snapmap: snappmap.uuid,
				author: userUuid,
				picture: uploadedFile.id
			})
		});

		if (!snapResponse.ok) {
			return fail(500, { status: 'upload_failed' });
		}

		// SvelteKit reloads the page data after this, so the new snapp appears in the grid
		return { status: 'success' };
	}
};

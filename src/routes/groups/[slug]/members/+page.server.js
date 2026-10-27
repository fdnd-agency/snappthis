import { error, fail } from '@sveltejs/kit';

const directusUrl = 'https://fdnd-agency.directus.app';

// Hardcoded user (Anne-Fleur Pietersen) until login is built
const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

export async function load({ fetch, params, url }) {
	// 1. Build the query for Directus
	const query = new URLSearchParams();
	query.set(
		'fields',
		'uuid,slug,name,users.snappthis_user_uuid.uuid,users.snappthis_user_uuid.name,users.snappthis_user_uuid.email'
	);
	query.set('filter[slug][_eq]', params.slug);

	// 2. Fetch the group
	const response = await fetch(`${directusUrl}/items/snappthis_group?${query}`);

	if (!response.ok) {
		error(503, 'This group could not be loaded. Please try again later.');
	}

	const { data: groups } = await response.json();
	const group = groups[0];

	// No group with this slug: show the 404 page
	if (!group) {
		error(404, 'Group not found');
	}

	// users is the junction table: every item points to the real user via snappthis_user_uuid
	const members = (group.users ?? [])
		.map((relation) => relation.snappthis_user_uuid)
		.filter(Boolean)
		.map((user) => ({
			uuid: user.uuid,
			name: user.name,
			email: user.email?.toLowerCase() ?? '',
			isYou: user.uuid === userUuid
		}));

	// 3. Return what the page needs
	return {
		group: {
			uuid: group.uuid,
			slug: group.slug,
			name: group.name
		},
		members,
		// /groups/[slug]/members?add-members opens the form
		showForm: url.searchParams.has('add-members')
	};
}

export const actions = {
	//invite form posts here: <form method="POST" action="?/check"

	check: async ({ request }) => {
		// 1. read the form data
		const formData = await request.formData();

		// 2. Get the text from the email field
		const input = String(formData.get('email-list') ?? '');

		// 3. If empty then send the error back. Form stays open
		if (!input.trim()) {
			return fail(400, { input, error: 'Please enter at least one email address.'});
		}

		// 4. Split the text into seperate addresses
		const emails = input
			.split(',')
			.map((email) => email.trim().toLowerCase())
			.filter(Boolean);

		// 5. Send the text and the list back to the page
		return { input, emails };
	}
}  
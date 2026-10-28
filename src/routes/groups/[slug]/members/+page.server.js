import { error, fail } from '@sveltejs/kit';

const directusUrl = 'https://fdnd-agency.directus.app';

// Hardcoded user (Anne-Fleur Pietersen) until login is built
const userUuid = '5e9589a5-ebfa-4a99-87a6-010f2f571444';

// Simple check if a text looks like an email address.
// The browser already checks this (type="email"), this is the safety net on the server.
function isValidEmail(email) {
	// No spaces inside the address
	if (email.includes(' ')) return false;

	// Exactly one @
	const parts = email.split('@');
	if (parts.length !== 2) return false;

	const [name, domain] = parts;

	// Something before the @, and a domain with a dot that is not at the start or end
	return (
		name.length > 0 &&
		domain.includes('.') &&
		!domain.startsWith('.') &&
		!domain.endsWith('.')
	);
}

// Fetches the group and its members.
// Used by load and by the check action, so the code is only written once.
async function getGroup(fetch, slug) {
	// 1. Build the query for Directus
	const query = new URLSearchParams();
	query.set(
		'fields',
		'uuid,slug,name,users.snappthis_user_uuid.uuid,users.snappthis_user_uuid.name,users.snappthis_user_uuid.email'
	);
	query.set('filter[slug][_eq]', slug);

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

	// 3. Return only what the page and the action need
	return {
		group: {
			uuid: group.uuid,
			slug: group.slug,
			name: group.name
		},
		members
	};
}

export async function load({ fetch, params, url }) {
	const { group, members } = await getGroup(fetch, params.slug);

	return {
		group,
		members,
		// /groups/[slug]/members?add-members opens the form
		showForm: url.searchParams.has('add-members')
	};
}

export const actions = {
	// The invite form posts here: <form method="POST" action="?/check">
	check: async ({ request, fetch, params }) => {
		// 1. Read the form data
		const formData = await request.formData();

		// 2. Get the text from the email field
		const input = String(formData.get('email-list') ?? '');

		// 3. Empty? Send the error back, the form stays open
		if (!input.trim()) {
			return fail(400, { input, error: 'Please enter at least one email address.' });
		}

		// 4. Split the text into separate addresses
		const emails = input
			.split(',')
			.map((email) => email.trim().toLowerCase())
			.filter(Boolean);

		// 5. Remove duplicates: a Set keeps every value only once
		const uniqueEmails = [...new Set(emails)];

		// 6. Fetch the members again: an action can't use the data from load
		const { members } = await getGroup(fetch, params.slug);
		const memberEmails = members.map((member) => member.email);

		// 7. Put every address in one of three lists
		const toInvite = [];
		const invalid = [];
		const alreadyMembers = [];

		for (const email of uniqueEmails) {
			if (!isValidEmail(email)) {
				invalid.push(email);
			} else if (memberEmails.includes(email)) {
				alreadyMembers.push(email);
			} else {
				toInvite.push(email);
			}
		}

		// 8. Send the text and the three lists back to the page
		return { input, toInvite, invalid, alreadyMembers };
	}
};
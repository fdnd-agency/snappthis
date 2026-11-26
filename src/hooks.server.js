import { gridViewCookie, isGridView } from '$lib/gridView.js';

// Runs on every request to the server, before the page is made.
// Without JavaScript every view change is a request, so this is where the choice is saved.
export async function handle({ event, resolve }) {
	const view = event.url.searchParams.get('view');

	if (isGridView(view)) {
		event.cookies.set(gridViewCookie, view, {
			path: '/', // valid on every page, so on every snappmap
			maxAge: 60 * 60 * 24 * 365, // remember it for a year
			httpOnly: false, // +page.js must be able to update it with JavaScript
			sameSite: 'lax'
		});
	}

	return resolve(event);
}
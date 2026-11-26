import { browser } from '$app/environment';
import { defaultGridView, gridViewCookie, isGridView } from '$lib/gridView.js';

// Universal load: runs on the server for the first visit, and in the browser after that.
// It only reads the URL, so changing the view never refetches the snappmap from Directus.

// data = what load in +page.server.js returned
export function load({ data, url }) {
	const viewFromUrl = url.searchParams.get('view');

	// 1. A view in the URL wins, 2. then the saved choice, 3. then the default
	let gridView = defaultGridView;

	if (isGridView(viewFromUrl)) {
		gridView = viewFromUrl;
	} else if (isGridView(data.savedGridView)) {
		gridView = data.savedGridView;
	}

	// With JavaScript a view change stays in the browser and never reaches hooks.server.js,
	// so save the choice here. Without JavaScript the hook does this.
	if (browser && isGridView(viewFromUrl)) {
		document.cookie = `${gridViewCookie}=${viewFromUrl}; path=/; max-age=31536000; samesite=lax`;
	}

	return {
		...data,
		gridView,
		// ?options in the URL opens the view options panel, also without JavaScript
		showGridOptions: url.searchParams.has('options')
	};
}
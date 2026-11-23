// Universal load: runs on the server for the first visit, and in the browser after that.
// It only reads the URL, so changing the view never refetches the snappmap from Directus.

// The ways the photo grid can be shown: 2 to 5 columns, or a list (MoSCoW 90)
const gridViews = ['2', '3', '4', '5', 'list'];
const defaultGridView = '3'; // MoSCoW 89: 3 photos wide by default

// Anything we don't know falls back to the default, because a user can type anything in the URL
function getGridView(url) {
	const view = url.searchParams.get('view');
	return gridViews.includes(view) ? view : defaultGridView;
}

// data = what load in +page.server.js returned
export function load({ data, url }) {
	return {
		...data,
		gridView: getGridView(url),
		// ?options in the URL opens the view options panel, also without JavaScript
		showGridOptions: url.searchParams.has('options')
	};
}
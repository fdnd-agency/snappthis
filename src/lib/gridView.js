// The ways the photo grid on a snappmap can be shown (MoSCoW 89 and 90).
// Shared by hooks.server.js, +page.server.js and +page.js, so the list lives in one place.

export const gridViews = ['2', '3', '4', '5', 'list'];
export const defaultGridView = '3'; // MoSCoW 89: 3 photos wide by default
export const gridViewCookie = 'grid-view';

// A user can type anything in the URL or a cookie, so only accept values we know
export function isGridView(value) {
	return gridViews.includes(value);
}
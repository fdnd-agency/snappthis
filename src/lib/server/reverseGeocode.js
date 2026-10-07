// Turns coordinates into a place name, e.g. "Amsterdam-Westerpark".
// Same logic as reverseGeocode() in server.js of the Node.js version.
// Lives in $lib/server, so it can only be imported by server code.
export async function reverseGeocode(fetch, latitude, longitude) {
	try {
		const response = await fetch(
			`https://photon.komoot.io/reverse?lat=${latitude}&lon=${longitude}`,
			{ headers: { 'User-Agent': 'snappthis/1.0 (fdnd-agency)' } }
		);

		// Photon sometimes returns HTML on errors, so check before parsing
		const contentType = response.headers.get('content-type');
		if (!response.ok || !contentType?.includes('application/json')) {
			return 'Unknown';
		}

		const data = await response.json();
		const properties = data.features?.[0]?.properties;

		// Try the most specific name first, then fall back to broader ones
		const city = properties?.city ?? properties?.town ?? properties?.village;
		const district = properties?.district ?? properties?.suburb ?? properties?.neighbourhood;

		if (city && district) return `${city}-${district}`;
		if (city) return city;
		return 'Unknown';
	} catch {
		// Network error: the upload should still work, just without a location
		return 'Unknown';
	}
}

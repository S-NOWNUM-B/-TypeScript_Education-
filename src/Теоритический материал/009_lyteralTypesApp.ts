// ===== Literal Types =====

function fetchWithAuth(url: string, method: 'post' | 'get') {
	console.log(`Fetching ${url} with method ${method}`);
}

fetchWithAuth('/api/data', 'post');
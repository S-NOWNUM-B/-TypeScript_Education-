// ===== Type Aliases =====

type httpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function fetchWithAuth(url: string, method: httpMethod) {
	console.log(`Fetching ${url} with method ${method}`);
}

fetchWithAuth('https://api.example.com/data', 'PUT');

type User = {
	name: string;
	age: number;
	skills: string[];
};

type Role = {
	name: string;
	id: number;
}

type Admin = {
	name: User,
	role: Role
}

const adminUser: Admin = {
	name: {
		name: 'Alice',
		age: 30,
		skills: ['management', 'communication']
	},
	role: {
		name: 'Administrator',
		id: 1
	}
};

console.log(adminUser);
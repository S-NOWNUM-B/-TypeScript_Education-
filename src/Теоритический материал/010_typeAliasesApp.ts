// ===== Type Aliases =====

// Type Aliases позволяют создавать собственные именованные типы,
// что улучшает читаемость и поддержку кода.
// Например, можно создать тип для HTTP методов, чтобы ограничить возможные значения.

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

// Type Aliases помогают структурировать код и обеспечивают безопасность типов,
// предотвращая ошибки, связанные с неправильным использованием типов данных.
// Они особенно полезны в больших проектах, где поддержка и читаемость кода имеют важное значение.

type ID = string | number;

function printId(id: ID) {
	console.log(`ID: ${id}`);
}

printId(101);
printId("202A");
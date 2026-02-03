// ===== Interface =====

interface User {
	id: number;
	name: string;
	email: string;
	skills: string[];
	isAdmin: boolean;

	log: (id: number) => string;
}

interface Role {
	roleName: string;
	roleId: number;
}

interface UserWithRole extends User, Role {
	roleName: string;
	roleId: number;
	createdAt: Date;
}

type User2 = {
	id: number;
	name: string;
	email: string;
	skills: string[];
	isAdmin: boolean;

	log: (id: number) => string;
}

const user: UserWithRole = {
	id: 1,
	name: "Alice",
	email: "mymail@gmail.com",
	skills: ["TypeScript", "JavaScript"],
	isAdmin: true,
	roleName: "Administrator",
	roleId: 101,
	createdAt: new Date(),

	log(id) {
		return `User ID: ${id}`;
	}
};

console.log("User with Role:", user);

const user2: User2 = {
	id: 2,
	name: "Bob",
	email: "testmail@gmail.com",
	skills: ["HTML", "CSS"],
	isAdmin: false,

	log(id) {
		return `User2 ID: ${id}`;
	}
};

console.log("User2:", user2);

// Отличие interface и type в том, что интерфейсы могут быть расширены (extends),
// а типы - нет. Также интерфейсы могут быть объединены (declaration merging),
// тогда как типы не могут.
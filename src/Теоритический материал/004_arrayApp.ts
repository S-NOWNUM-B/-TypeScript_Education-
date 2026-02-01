// ===== Массивы =====

// Ошибка: Тип 'number' не может быть назначен типу 'string'
//const arrayString: string[] = ["apple", "banana", "cherry", 1];

const skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];

for (const skill of skills) {
	console.log(skill);
}

const res = skills
	.filter((s: string) => s !== "CSS")
	.map(s => s + "! ")
	.reduce((a, b) => a + b);

console.log(res);

type User = {
	id: number;
	name: string;
}

const users: User[] = [
	{ id: 1, name: "Alice" },
	{ id: 2, name: "Bob" },
	{ id: 3, name: "Charlie" }
];

const userNames: string[] = users.map((user: User) => user.name);

console.log("User Names:", userNames);
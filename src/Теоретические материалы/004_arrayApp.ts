// ===== Массивы =====

// В TypeScript массивы позволяют хранить упорядоченные коллекции данных определенного типа.

let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Числовой массив:", numbers);

// Ошибка: Тип 'string' не может быть назначен типу 'number'
//const invalidNumbers: number[] = [1, 2, "three", 4];

let mixedArray: (number | string)[] = [1, "two", 3, "four"];
console.log("Массив с числами и строками:", mixedArray);

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

// Массивы в TypeScript помогают организовать данные и обеспечивают безопасность типов,
// предотвращая ошибки, связанные с неправильным использованием элементов массива.
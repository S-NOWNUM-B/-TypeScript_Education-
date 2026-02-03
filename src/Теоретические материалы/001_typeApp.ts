// ===== Использование типов в TypeScript =====

// В TypeScript типы играют важную роль в обеспечении безопасности и надежности кода.
// Они помогают разработчикам выявлять ошибки на этапе компиляции, а не во время выполнения программы.

let money: number = 10000;
let bonus: number = 5000;
let result: number = money + bonus;
console.log("Total amount:", result);

// Пример с использованием строковых типов
let firstName: string = "John";
let lastName: string = "Doe";
let fullName: string = `${firstName} ${lastName}`;
console.log("Full Name:", fullName);

// Пример с использованием булевых типов
let isActive: boolean = true;
if (isActive) {
	console.log("The user is active.");
} else {
	console.log("The user is inactive.");
}

// Пример с использованием массивов
let numbers: number[] = [1, 2, 3, 4, 5];
let doubledNumbers: number[] = numbers.map(num => num * 2);
console.log("Doubled Numbers:", doubledNumbers);

// Пример с использованием кортежей
let userInfo: [string, number] = ["Alice", 30];
console.log(`User Name: ${userInfo[0]}, Age: ${userInfo[1]}`);

// Пример с использованием перечислений (enums)
enum Color {
	Red,
	Green,
	Blue
}
let favoriteColor: Color = Color.Green;
console.log("Favorite Color:", Color[favoriteColor]);

// Пример с использованием типов объектов
interface User {
	id: number;
	name: string;
	email: string;
}

const user: User = {
	id: 1,
	name: "Jane Smith",
	email: "jane.smith@example.com"
};
console.log("User Info:", user);

// Пример с использованием объединенных типов (union types)
function printId(id: number | string) {
	if (typeof id === "number") {
		console.log(`ID as number: ${id}`);
	} else {
		console.log(`ID as string: ${id}`);
	}
}

printId(101);
printId("202A");

// Пример с использованием пользовательских типов (type aliases)
type Point = {
	x: number;
	y: number;
};

const pointA: Point = { x: 10, y: 20 };
console.log("Point A:", pointA);

// TypeScript помогает разработчикам писать более надежный и поддерживаемый код,
// снижая вероятность ошибок, связанных с неправильным использованием типов данных.
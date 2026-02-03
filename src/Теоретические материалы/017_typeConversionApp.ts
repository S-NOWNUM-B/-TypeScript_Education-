// ===== Приведение типов в TypeScript =====

// В TypeScript есть несколько способов привести типы данных к нужному виду.
// Рассмотрим основные из них.

// 1. Приведение с помощью оператора "as"
let someValue: unknown = "Это строка";
let strLength: number = (someValue as string).length;
console.log(`Длина строки: ${strLength}`);

// 2. Приведение с помощью угловых скобок
let anotherValue: unknown = 42;
let numValue: number = <number>anotherValue;
console.log(`Числовое значение: ${numValue}`);

// 3. Приведение типов при помощи функций
function toNumber(value: string): number {
	return Number(value);
}

// Пример использования функции
let strNum: string = "123";
let convertedNum: number = toNumber(strNum);
console.log(`Преобразованное число: ${convertedNum}`);

// Дополнительные примеры приведения типов

// 1. Приведение строки к числу с помощью унарного плюса
let strValue: string = "456";
let numFromString: number = +strValue;
console.log(`Число из строки: ${numFromString}`);

// 2. Приведение числа к булевому типу
let zeroValue: number = 0;
let boolFromNumber: boolean = Boolean(zeroValue);
console.log(`Булевое значение из числа 0: ${boolFromNumber}`);

// 3. Приведение типов с помощью методов объектов

let a = 5;
let b: string = a.toString(); // Приведение числа к строке
let e: string = new String(a).valueOf(); // Приведение числа к строке через объект String
let f: boolean = new Boolean(a).valueOf(); // Приведение числа к булевому типу через объект Boolean
console.log(`Строковое значение: ${b}, ${e}`);
console.log(`Булевое значение: ${f}`);

let c = 'sddfg'
let d: number = parseInt(c); // Приведение строки к числу
console.log(`Числовое значение: ${d}`); // Результат будет NaN, так как 'sddfg' не является числом

// 4. Приведение типов с помощью конструктора
let boolValue: boolean = Boolean(1); // Приведение числа к булевому типу
console.log(`Булевое значение: ${boolValue}`);

// 5. Приведение типов с помощью шаблонных строк
let num = 100;
let strFromNum: string = `${num}`; // Приведение числа к строке
console.log(`Строка из числа: ${strFromNum}`);

// 6. Приведение типов с помощью объектов

interface User {
	id: number;
	name: string;
	login: string;
}

const user: User = {
	id: 1,
	name: "John Doe",
	login: "johndoe"
}

interface Admin {
	id: number;
	name: string;
	login: string;
	adminLevel: number;
	role: number;
}

const admin: Admin = {
	...user,
	role: 1,
	adminLevel: 5,
}

console.log(`Администратор: ${JSON.stringify(admin)}`);

// Функция для приведения User к Admin

function userToAdmin(user: User): Admin {
	return {
		name: user.name,
		id: user.id,
		login: user.login,
		role: 1,
		adminLevel: 0,
	}
}

const newAdmin: Admin = userToAdmin(user);
console.log(`Новый администратор: ${JSON.stringify(newAdmin)}`);

// Важно помнить, что приведение типов должно использоваться осознанно, чтобы избежать ошибок во время выполнения программы.
// Приведение типов помогает TypeScript понять, как именно мы собираемся использовать данные,
// что улучшает безопасность типов и предотвращает ошибки во время выполнения программы.
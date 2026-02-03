// ===== Never =====

// Never - это тип, который представляет значения, которые никогда не происходят.
// Например, функция, которая всегда выбрасывает ошибку или бесконечно выполняется, имеет тип возвращаемого значения Never.
// Это полезно для указания, что определенный код никогда не должен быть достигнут.

function generaterror(message: string) : never { // Функция, которая всегда выбрасывает ошибку
	throw new Error(message); // Эта функция никогда не возвращает значение
}

function dumpError(): never { // Функция, которая вызывает другую функцию, которая никогда не возвращает значение
	return generaterror("This is a critical error!"); // Эта функция также никогда не возвращает значение
}

function infiniteLoop(): never { // Функция, которая выполняется бесконечно
	while (true) { } // Эта функция никогда не завершится
}

function rec(): never {
	return rec(); // Рекурсивный вызов, который никогда не завершится
}

//const a: never = null; // Ошибка: Тип 'null' не может быть назначен типу 'never'
//const b: never = undefined; // Ошибка: Тип 'undefined' не может быть назначен типу 'never'
//const c: never = 42; // Ошибка: Тип 'number' не может быть назначен типу 'never'
//const d: never = "Hello"; // Ошибка: Тип 'string' не может быть назначен типу 'never'
//const e: never = true; // Ошибка: Тип 'boolean' не может быть назначен типу 'never'

// В этом примере показано, как использовать тип Never для функций, которые никогда не возвращают значение.
// Также продемонстрированы ошибки при попытке присвоить значения другим типам переменным типа Never.

type paymentAction = 'refund' | 'checkout' | 'reject';

function processAction(action: paymentAction) {
	switch(action) {
		case 'refund':
			console.log("Processing refund...");
			break;
		case 'checkout':
			console.log("Processing checkout...");
			break;
		case 'reject':
			console.log("Processing reject...");
			break;
		default:
			const _exhaustiveCheck: never = action; // Проверка на исчерпывающий список
			throw new Error('Нет такого действия'); // Этот блок никогда не будет достигнут
	}
}

processAction('refund');
processAction('checkout');
processAction('reject');
//processAction('other'); // Ошибка: Аргумент типа '"other"' не может быть назначен параметру типа 'paymentAction'.

function isString(x: string | number): boolean {
	if (typeof x === 'string') {
		return true;
	} else if (typeof x === 'number') {
		return false;
	} else {
		const _exhaustiveCheck: never = x; // Проверка на исчерпывающий список
		return _exhaustiveCheck; // Этот блок никогда не будет достигнут
	}
	generaterror("Unreachable code"); // Вызов функции, которая никогда не возвращает значение
}

console.log(isString("Hello")); // true
console.log(isString(42)); // false
//console.log(isString(true)); // Ошибка: Аргумент типа 'boolean' не может быть назначен параметру типа 'string | number'.

// Never помогает указать, что определенный код никогда не должен быть достигнут,
// что улучшает безопасность типов и предотвращает ошибки во время выполнения программы.
// Например, использование Never в функции processAction гарантирует,
// что все возможные значения перечисления paymentAction обработаны,
// и если появится новое значение, TypeScript выдаст ошибку компиляции,
// указывая на необходимость обновления функции для обработки нового случая.

interface User {
	name: string;
	email: string;
}

interface Admin {
	name: string;
	role: number;
}

const user: User = {
	name: 'Alice',
	email: 'a@a.com'
}

const admin: Admin = {
	name: 'Bob',
	role: 1
}

function getUserInfo(user: User | Admin) {
	if ('email' in user) {
		console.log(`User Email: ${user.email}`); // Type Guard с помощью оператора 'in'
	} else if ('role' in user) {
		console.log(`Admin Role: ${user.role}`); // Type Guard с помощью оператора 'in'
	} else {
		const _exhaustiveCheck: never = user; // Проверка на исчерпывающий список
		throw new Error('Неизвестный тип пользователя'); // Этот блок никогда не будет достигнут
	}
}

getUserInfo(user);
getUserInfo(admin);
//getUserInfo({ name: 'Charlie' }); // Ошибка: Аргумент типа '{ name: string; }' не может быть назначен параметру типа 'User | Admin'.

// В этом примере использование типа Never помогает гарантировать,
// что все возможные типы в объединении User | Admin обработаны,
// и если появится новый тип, TypeScript выдаст ошибку компиляции,
// указывая на необходимость обновления функции для обработки нового случая.
// Это повышает безопасность типов и предотвращает ошибки во время выполнения программы.
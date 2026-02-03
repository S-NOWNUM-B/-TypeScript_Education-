// ===== Optional =====

// Optional ? - это когда свойство или параметр функции может быть как задан, так и отсутствовать
// Обычно используется в интерфейсах и определениях функций
// Если свойство или параметр не заданы, они принимают значение undefined
// Это позволяет создавать более гибкие структуры данных и функции
// с необязательными параметрами
// Важно помнить, что optional не эквивалентно union с undefined
// Optional означает, что свойства может не быть вообще
// В то время как union с undefined означает, что свойство обязательно присутствует, но может иметь значение undefined
// Optional часто используется для настройки объектов и функций, где не все параметры обязательны
// Это помогает избежать избыточности и улучшает читаемость кода

interface User {
	id: number;
	email: string;
	password?: string; // Optional property
	skills: string[];
	isAdmin?: boolean; // Optional property
}

// ? не эквивалентно number | undefined
// ? означает, что свойства может не быть вообще

const user: User = {
	id: 1,
	email: "a@a.com",
	skills: ["TypeScript", "JavaScript"]

}

console.log("User with optional properties:", user);

// ===== ===== =====

function multiply(a: number, b?: number): number {
	if (!b) {
		return a * a;
	}
	
	return a * b;
}

console.log("Multiply with two args:", multiply(5, 2)); // 10
console.log("Multiply with one arg:", multiply(5));    // 25

// ===== ===== =====

interface UserPro {
	login: string;
	password?: {
		type: 'primery' | 'secondary';
	};
}

function testPass(user: UserPro) {
	const t = user.password ? user.password.type : 'no password';

	console.log(`User: ${user.login}, Password type: ${t}`);
}

function test(param?: string) {
	const t = param ?? multiply(17); // если param null или undefined, вызовется multiply(17)

	console.log(`Param value: ${t}`);
}

testPass({ login: 'user1', password: { type: 'primery' } });
testPass({ login: 'user2' });

test('Hello');
test(); // undefined

// Optional помогает создавать гибкие и адаптивные структуры данных и функции,
// позволяя пропускать необязательные параметры и свойства,
// что улучшает читаемость и поддержку кода.
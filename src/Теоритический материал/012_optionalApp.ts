// ===== Optional =====

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
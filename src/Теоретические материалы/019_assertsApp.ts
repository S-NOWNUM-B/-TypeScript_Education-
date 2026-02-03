// ===== Asserts =====

// Asserts это функции, которые проверяют, что определенное условие истинно.
// Если условие ложно, то функция выбрасывает ошибку.

interface User {
	name: string;
}

const a: unknown = [];

assertUser(a);
a.name = 'Test';

//a.name = "Test"; // Ошибка: свойство 'name' не существует в типе 'never[]'

function assertUser(obj: unknown): asserts obj is User {
	if (typeof obj === 'object' && !!obj && 'name' in obj) {
		return;
	}
	throw new Error("Это не пользователь!");
}
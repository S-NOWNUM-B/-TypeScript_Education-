// ===== Type Guard =====

// Type Guard - это специальная функция, которая позволяет сузить тип переменной
// и убедиться, что она соответствует определенному типу в определенном контексте.
// Это особенно полезно в TypeScript, когда мы работаем с объединенными типами (union types)
// или когда нам нужно проверить тип переменной перед выполнением определенных операций.

interface User {
	name: string;
	email: string;
	login: string;
}

const user: User = {
	name: "Alice",
	email: 'a@mail.com',
	login: 'alice123'
}

interface Admin {
	name: string;
	role: number;
}

function logId(id: string | number) {
	if (typeof id === 'string') {
		console.log(`ID как строка: ${id.toUpperCase()}`); // Type Guard с помощью typeof
	} else if (typeof id === 'number') {
		console.log(`ID как число: ${id.toFixed(2)}`); // Type Guard с помощью typeof
	}
	else {
		console.log('Неизвестный тип ID');
	}
}

logId("user_01");
logId(12345);

function isString(x: string | number): x is string {
	return typeof x === 'string';
}

function processValue(value: string | number) {
	if (isString(value)) {
		console.log(`Обработка строки: ${value.toLowerCase()}`); // Type Guard с помощью пользовательской функции
	} else {
		console.log(`Обработка числа: ${value.toFixed(3)}`); // Здесь TypeScript знает, что value - это число
	}
}

processValue("HELLO");
processValue(3.14159);

// Type Guard помогает избежать ошибок во время выполнения программы,
// обеспечивая безопасность типов и правильное поведение кода в зависимости от типа данных.

function isAdmin(user: User | Admin): user is Admin {
	return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
	return (user as Admin).role !== undefined;
}

function setRoleZero(user: User | Admin){
	if (isAdmin(user)) {
		user.role = 0;
		console.log(`Роль администратора установлена в 0 для ${user.name}`);
	} else {
		throw new Error(`Пользователь ${user.name} не является администратором`);
	}
}

setRoleZero(user);

setRoleZero({
	name: "Bob",
	role: 2
});

// Эта функция проверяет, является ли переданный объект типа User или Admin
// и, если это Admin, устанавливает его роль в 0.
// Type Guard позволяет безопасно работать с объединенными типами,
// предотвращая ошибки и обеспечивая правильное поведение кода.
// Type Guards особенно полезны при работе с Union Types,
// когда переменная может принимать несколько различных типов.
// Они позволяют точно определить тип переменной в определенном контексте,
// что помогает избежать ошибок и обеспечивает надежность кода.
// Например, в функции logId мы используем typeof для проверки типа параметра id
// и выполняем соответствующие операции в зависимости от его типа.
// Аналогично, в функции processValue мы используем пользовательскую функцию isString
// для определения, является ли параметр строкой или числом,
// и обрабатываем его соответственно.
// В функции setRoleZero мы используем оператор in для проверки наличия свойства role
// в объекте user, чтобы определить, является ли он администратором.
// Это позволяет нам безопасно работать с разными структурами данных,
// предотвращая ошибки и обеспечивая надежность кода.
// Таким образом, Type Guards в TypeScript предоставляют мощный инструмент
// для обеспечения безопасности типов и предотвращения ошибок во время выполнения программы.
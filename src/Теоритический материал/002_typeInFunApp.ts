// ===== Типы в функциях =====

// Функции в TypeScript могут иметь явно указанные типы для параметров и возвращаемого значения.

// Пример функции с типами параметров и возвращаемого значения
function add(a: number, b: number): number {
	return a + b;
}

let sum: number = add(10, 20);
console.log(`Сумма: ${sum}`);

// Пример функции без возвращаемого значения (void)
function logMessage(message: string): void {
	console.log(`Сообщение: ${message}`);
}

logMessage("Привет, TypeScript!");

// Пример функции с необязательным параметром
function greet(name: string, greeting?: string): string {
	if (greeting) {
		return `${greeting}, ${name}!`;
	} else {
		return `Hello, ${name}!`;
	}
}

console.log(greet("Alice"));
console.log(greet("Bob", "Good morning"));

// Пример функции с параметрами по умолчанию
function multiply(x: number, y: number = 2): number {
	return x * y;
}

console.log(`Умножение с параметром по умолчанию: ${multiply(5)}`);
console.log(`Умножение с заданным параметром: ${multiply(5, 3)}`);

// Пример стрелочной функции с типами

const fullName = (firstName: string, lastName: string): string => { return `${firstName} ${lastName}`; };
console.log(fullName("John", "Doe"));

// Типы в функциях помогают обеспечить правильное использование данных и предотвращают ошибки,
// делая код более надежным и понятным.
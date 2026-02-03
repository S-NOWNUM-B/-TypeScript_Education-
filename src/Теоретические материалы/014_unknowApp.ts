// ===== Unknown =====

// Unknown - это тип, который представляет значение, тип которого неизвестен на момент компиляции.
// В отличие от any, с unknown нельзя выполнять операции без предварительной проверки типа.
// Это делает unknown более безопасным выбором, когда вы работаете с данными из ненадежных источников.

let input: unknown;

input = 42;
input = "Hello, World!";
input = { key: "value" };
input = [1, 2, 3];
input = true;
input = null;
input = undefined;
input = () => console.log("This is a function");

//let res: string = input; Ошибка: Тип 'unknown' нельзя назначить типу 'string'

function run(i: unknown) {
	if (typeof i == "number") {
		i++;
		console.log("Number:", i);
	} else {
		console.log("Not a number:", i);
	}
}

run(input);


async function getData() {
	try {
		await fetch('') // Ошибка сети
	} catch (error) { // Тип unknown по умолчанию
		if (error instanceof Error) { // Проверка типа
			console.log("Error message:", error.message); // Теперь безопасно использовать error.message
		}
	}
}

async function getDataForce() {
	try {
		await fetch('') // Ошибка сети
	} catch (error) { // Тип unknown по умолчанию
		const e = error as Error; // Принудительное приведение типа
		console.log("Error message:", e.message); // Принудительное приведение типа
	}
}

getData();
getDataForce();

type U1 = unknown | string; // Результат: unknown
type I1 = unknown & string; // Результат: string

// Unknown помогает обеспечить безопасность типов,
// предотвращая выполнение операций с неизвестными типами без предварительной проверки.
// Это снижает риск ошибок во время выполнения программы и улучшает надежность кода.
// Например, следующий код вызовет ошибку компиляции:
// let str: string = input; // Ошибка: Тип 'unknown' нельзя назначить типу 'string'.
// Таким образом, использование unknown способствует написанию более безопасного и устойчивого к ошибкам кода.
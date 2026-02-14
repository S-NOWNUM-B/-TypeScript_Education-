// ===== Встроенные Generic-методы =====

// Встроенные Generic-методы — это методы, которые уже определены в стандартной библиотеке TypeScript и могут быть использованы для работы с различными типами данных. Они предоставляют удобные способы обработки массивов, строк, объектов и других типов данных. Вот некоторые из них:

// 1. Array.prototype.map<T, U>(callback: (value: T, index: number, array: T[]) => U): U[]
// Метод map позволяет создать новый массив, вызвав функцию для каждого элемента массива. Он принимает функцию обратного вызова, которая выполняется для каждого элемента массива и возвращает новый массив с результатами.

const numbers = [1, 2, 3];
const doubled = numbers.map((num) => num * 2); // [2, 4, 6]

// 2. Array.prototype.filter<T>(callback: (value: T, index: number, array: T[]) => boolean): T[]
// Метод filter создает новый массив со всеми элементами, которые прошли проверку, реализованную в предоставленной функции.

const mixed = [1, "two", 3, "four"];
const numbersOnly = mixed.filter((item) => typeof item === "number"); // [1, 3]

// 3. Array.prototype.reduce<T, U>(callback: (accumulator: U, currentValue: T, index: number, array: T[]) => U, initialValue: U): U
// Метод reduce применяет функцию к аккумулятору и каждому элементу массива (слева направо), сводя его к одному значению.

const sum = numbers.reduce((acc, num) => acc + num, 0); // 6

// 4. String.prototype.toUpperCase(): string
// Метод toUpperCase возвращает строку, в которой все символы преобразованы в верхний регистр.

const greeting = "hello";
const upperGreeting = greeting.toUpperCase(); // 'HELLO'

// Эти встроенные Generic-методы позволяют эффективно работать с различными типами данных и упрощают процесс обработки информации в TypeScript.

const num: Array<number> = [1, 2, 3];

async function test() {
  const a = new Promise<number>((resolve, reject) => {
    resolve(1);
  });
}

const check: Record<string, boolean> = {
	drive: true,
	ride: false,
};
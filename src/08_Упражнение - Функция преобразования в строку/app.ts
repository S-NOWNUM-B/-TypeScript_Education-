//Необходимо написать функцию toStringб которая принимает любой тип
//и возвращает его строковое представление. Если не может, то
//возвращает undefined. Использовать generic для реализации функции.

function toString<T>(value: T): string | undefined {
	if (typeof value === 'string') {
		return value;
	} else if (typeof value === 'number' || typeof value === 'boolean') {
		return value.toString();
	} else if (value instanceof Date) {
		return value.toISOString();
	} else if (typeof value === 'object' && value !== null) {
		try {
			return JSON.stringify(value);
		} catch (e) {
			return undefined;
		}
	}

	return undefined;
}

// Примеры использования:
console.log(toString(123)); // "123"
console.log(toString(true)); // "true"
console.log(toString(new Date(2024, 5, 1))); // "2024-06-01T00:00:00.000Z"
console.log(toString({ name: "Alice", age: 30 })); // '{"name":"Alice","age":30}'
console.log(toString(undefined)); // undefined
console.log(toString(null)); // undefined
console.log(toString(() => {})); // undefined

// Функция toString может быть расширена для поддержки других типов данных по мере необходимости.
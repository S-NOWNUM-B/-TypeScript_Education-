// ===== Tuples (кортежи) =====

// Кортежи позволяют хранить массивы с фиксированным числом элементов, где каждый элемент может иметь свой тип.
// Это полезно, когда нужно гарантировать определенную структуру данных.
// Например, кортеж может использоваться для представления координат (x, y) или записи с идентификатором и именем.

const arraySkills: [number, string] = [1, "HTML"];
console.log(arraySkills);

const arr: [number, string, ...boolean[]] = [1, "CSS", true, false, true];
console.log(arr);

// Кортежи в массивах
type skills = [number, string];

const skillsArray: skills[] = [
	[1, "HTML"],
	[2, "CSS"],
	[3, "JavaScript"],
];

for (const [id, name] of skillsArray) {
  console.log(id, name);
}

// Использование кортежей в функциях
function getUserInfo(): [number, string] {
	return [1, "Alice"];
}

const [userId, userName] = getUserInfo();
console.log(`User ID: ${userId}, User Name: ${userName}`);

// Кортежи помогают обеспечить структуру данных и безопасность типов,
// гарантируя, что каждый элемент имеет ожидаемый тип и порядок.
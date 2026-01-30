// ===== Использование типов в TypeScript =====

//let money: number = 10000;
//let bonus: number = 5000;
//let result: number = money + bonus;
//console.log("Total amount:", result);

// ===== Типы в функциях =====

//const fullName = (firstName: string, lastName: string): string => { return `${firstName} ${lastName}`; };
//console.log(fullName("John", "Doe"));

// ===== Объекты =====

//type User = {
//	firstName: string;
//	lastname: string;
//	age: number;
//}

//function getUserInfo(user: User): string {
//	return `Информация о пользователе:
//- Имя: ${user.firstName}
//- Фамилия: ${user.lastname}
//- Возраст: ${user.age}`;
//}

//const user: User = {
//	firstName: "Иван",
//	lastname: "Иванов",
//	age: 30	
//}

//console.log(getUserInfo(user));

// ===== Массивы =====

// Ошибка: Тип 'number' не может быть назначен типу 'string'
//const arrayString: string[] = ["apple", "banana", "cherry", 1];

//const skills: string[] = ["HTML", "CSS", "JavaScript", "TypeScript"];

//for (const skill of skills) {
//	console.log(skill);
//}

//const res = skills
//	.filter((s: string) => s !== "CSS")
//	.map(s => s + "! ")
//	.reduce((a, b) => a + b);

//console.log(res);

//type User = {
//	id: number;
//	name: string;
//}

//const users: User[] = [
//	{ id: 1, name: "Alice" },
//	{ id: 2, name: "Bob" },
//	{ id: 3, name: "Charlie" }
//];

//const userNames: string[] = users.map((user: User) => user.name);

//console.log("User Names:", userNames);

// ===== Tuples (кортежи) =====

//const arraySkills: [number, string] = [1, "HTML"];
//console.log(arraySkills);

//const arr: [number, string, ...boolean[]] = [1, "CSS", true, false, true];
//console.log(arr);

// Кортежи в массивах
//type skills = [number, string];

//const skillsArray: skills[] = [
//	[1, "HTML"],
//	[2, "CSS"],
//	[3, "JavaScript"],
//];

//for (const [id, name] of skillsArray) {
//  console.log(id, name);
//}
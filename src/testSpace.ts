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

// ===== Readonly =====

//const skills: readonly [number, string] = [1, "HTML"];
// Ошибка: Невозможно присвоить значение "CSS" элементу с индексом 1, так как он является только для чтения
//skills[1] = "CSS";
//console.log(skills);

// ===== Enums =====
//enum statusCode {
//	SUCCESS = 200,
//	IN_PROGRESS = 300,
//	FAILED = 400,
//};

//const res = {
//	message: 'Платёж успешно выполнен',
//	status: statusCode.FAILED,
//};

//if (res.status === statusCode.SUCCESS) {
//	console.log("Статус:", res.status, "-", res.message);
//} else if (res.status === statusCode.IN_PROGRESS) {
//	console.log("Статус:", res.status, "- Платёж в процессе");
//} else if (res.status === statusCode.FAILED) {
//	console.log("Статус:", res.status, "- Платёж не выполнен");
//}

//function getStatusMessage(status: statusCode): string {
//	switch (status) {
//		case statusCode.SUCCESS:
//			return "Платёж успешно выполнен";
//		case statusCode.IN_PROGRESS:
//			return "Платёж в процессе";
//		case statusCode.FAILED:
//			return "Платёж не выполнен";
//		default:
//			return "Неизвестный статус";
//	}
//}

//console.log(getStatusMessage(statusCode.SUCCESS));
//console.log(getStatusMessage(statusCode.IN_PROGRESS));
//console.log(getStatusMessage(statusCode.FAILED));
//console.log(getStatusMessage(statusCode.FAILED + 1));
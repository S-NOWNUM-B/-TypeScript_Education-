// ===== Объекты =====

type User = {
	firstName: string;
	lastname: string;
	age: number;
}

function getUserInfo(user: User): string {
	return `Информация о пользователе:
- Имя: ${user.firstName}
- Фамилия: ${user.lastname}
- Возраст: ${user.age}`;
}

const user: User = {
	firstName: "Иван",
	lastname: "Иванов",
	age: 30	
}

console.log(getUserInfo(user));
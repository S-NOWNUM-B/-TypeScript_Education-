// ===== Паттерн Декоратора =====

// Декоратор - это структурный паттерн проектирования, который позволяет динамически добавлять объектам новую функциональность, оборачивая их в полезные "обертки". Декораторы предоставляют гибкую альтернативу субклассированию для расширения функциональности.

interface IUserService {
	user: number;
	getUsersInDatabase(): number;
}

class UserService implements IUserService {
	user: number = 1000;

	getUsersInDatabase(): number {
		return this.user;
	}
}

function nullUser(obl: IUserService) {
	(obl as any).user = 0;
	return obl;
}

const userService = new UserService();
console.log(userService.getUsersInDatabase()); // Вывод: 1000

const nullifiedUserService = nullUser(userService);
console.log(nullifiedUserService.getUsersInDatabase()); // Вывод: 0

// В этом примере мы создали интерфейс IUserService и класс UserService, который реализует этот интерфейс. Затем мы создали функцию nullUser, которая принимает объект, реализующий IUserService, и изменяет его свойство user на 0. Это демонстрирует, как можно использовать паттерн Декоратора для динамического изменения поведения объекта без необходимости создавать новый класс или изменять существующий класс.
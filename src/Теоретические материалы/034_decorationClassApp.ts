// ===== Декоратор класса =====

// Декоратор класса - это функция, которая принимает конструктор класса и может изменять его или возвращать новый конструктор. Декораторы классов применяются к классам и могут использоваться для добавления свойств, методов или изменения поведения класса.

/*
function sealed(constructor: Function) {
	Object.seal(constructor);
	Object.seal(constructor.prototype);
}

@sealed // Применяем декоратор sealed к классу Greeter
class Greeter {
	greeting: string;

	constructor(message: string) {
		this.greeting = message;
	}

	greet() {
		return "Hello, " + this.greeting;
	}
}
	*/

// В этом примере декоратор sealed применяется к классу Greeter. Декоратор sealed использует метод Object.seal для предотвращения добавления новых свойств к классу и его прототипу. Это означает, что после применения декоратора sealed, нельзя будет добавить новые свойства или методы к классу Greeter или его прототипу

interface UserServiceInterface {
  user: number;
  getUsersInDatabase(): number;
}

@nullUser // Применяем декоратор nullUser к классу UserServiceInterface
class UserServiceInterface implements UserServiceInterface {
  user: number = 1000;

  getUsersInDatabase(): number {
    return this.user;
  }
}

function nullUser(target: Function) {
  // Декоратор класса, который устанавливает свойство user в 0. target - это конструктор класса, к которому применяется декоратор
  target.prototype.user = 0; // Устанавливаем свойство user в 0 на прототипе класса, чтобы все экземпляры класса UserServiceInterface имели значение user равное 0
}

console.log(new UserServiceInterface().getUsersInDatabase()); // Вывод: 0

// В этом примере декоратор nullUser применяется к классу UserServiceInterface. Декоратор nullUser изменяет прототип класса UserServiceInterface, устанавливая свойство user в 0. Это означает, что после применения декоратора nullUser, все экземпляры класса UserServiceInterface будут иметь значение user равное 0, независимо от того, что было установлено в конструкторе класса.

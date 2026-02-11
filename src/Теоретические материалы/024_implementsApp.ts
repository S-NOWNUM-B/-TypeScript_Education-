// ===== Implements =====

// Implements - это ключевое слово, которое используется в TypeScript для указания того, что класс реализует определенный интерфейс. Это позволяет гарантировать, что класс будет содержать все методы и свойства, определенные в интерфейсе. Например, если у нас есть интерфейс "Animal", который определяет метод "makeSound", мы можем создать класс "Dog", который реализует этот интерфейс и предоставляет конкретную реализацию метода "makeSound".

interface ILogger {
	log(...args: any): void;
	error(...args: any): void;
}

class Looger implements ILogger {
	log(...args: any[]) { // Реализуем метод log, который принимает любое количество аргументов
		console.log(...args); // Реализуем метод log, который выводит сообщения в консоль
	}
	error(...args: any[]) { // Реализуем метод error, который выводит ошибки в консоль
		console.error(...args); // Используем console.error для вывода ошибок
	}
}

const logger = new Looger();
logger.log('Hello, World!');
logger.error('An error occurred!');

interface IPlayable {
	pay(paymentId: number): void;
	price?: number;
}

interface IDeletable {
	delete(): void;
}

class User implements IPlayable, IDeletable {
	delete(): void {
		console.log('User has been deleted.');
	}
	pay(paymentId: number): void {
		console.log(`Payment with ID ${paymentId} has been processed.`);
	}
}

const user = new User();
user.pay(12345);
user.delete();

// В этом примере мы создали интерфейс ILogger, который определяет методы log и error. Затем мы создали класс Looger, который реализует этот интерфейс и предоставляет конкретные реализации этих методов. Мы также создали интерфейс IPlayable, который определяет метод pay и необязательное свойство price. Класс User реализует интерфейс IPlayable и IDeletable, предоставляя реализацию методов pay и delete.
// Использование интерфейсов и ключевого слова implements позволяет нам создавать более структурированный и типобезопасный код, обеспечивая, что классы соответствуют определенным контрактам, заданным интерфейсами.
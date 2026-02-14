//Задача:
//Необходимо реализовать абстрактный класс Logger с 2-мя методами
//printDate - выводящий в log дату
//К нему необходимо сделать реальный класс, который бы имел метод: logWithDate,
//выводящий сначала дату, а потом заданное сообщение

abstract class Logger {
	abstract printDate(): void; // Абстрактный метод для вывода даты
}

class ConsoleLogger extends Logger {
	printDate(): void {
		const currentDate = new Date();
		console.log(`Current Date: ${currentDate.toLocaleString()}`);
	}

	logWithDate(message: string): void {
		this.printDate(); // Выводим дату
		console.log(`Message: ${message}`); // Выводим сообщение
	}
}

// Пример использования
const logger = new ConsoleLogger();
logger.logWithDate("This is a log message.");
// ===== Методы =====

// Метод класса - функция, которая является свойством класса
// и имеет доступ к данным и другим методам этого класса через this.
// Методы определяются внутри тела класса.
// Они могут быть вызваны на экземпляре класса для выполнения
// определенных действий или операций с данными этого экземпляра.

enum PaymentStatus {
	Holded,
	Processed,
	Reversed
}

class Payment {
	id: number;
	status: PaymentStatus;
	createdAt: Date;
	updatedAt: Date;

	constructor(id: number) {
		this.id = id;
		this.status = PaymentStatus.Holded;
		this.createdAt = new Date();
		this.updatedAt = new Date();
	}

	getPaymentLifeTime(): number {
		return new Date().getTime() - this.createdAt.getTime();
	}

	unholdPayment(): void {
		if (this.status == PaymentStatus.Processed) {
			throw new Error("Payment is already processed");
		}
		this.status = PaymentStatus.Processed;
		this.updatedAt = new Date();
	}
}

const payment = new Payment(1);
const time = payment.getPaymentLifeTime();
//payment.status = PaymentStatus.Reversed; Ошибка: нельзя напрямую изменить статус
payment.unholdPayment(); // Правильный способ изменить статус

console.log(`Payment status: ${PaymentStatus[payment.status]}`);

// В этом примере мы создали класс Payment с методами getPaymentLifeTime и unholdPayment.
// Метод getPaymentLifeTime вычисляет время жизни платежа в миллисекундах,
// а метод unholdPayment изменяет статус платежа с Holded на Processed,
// если он еще не был обработан. Мы также продемонстрировали, что
// нельзя напрямую изменить статус платежа, а нужно использовать метод класса.
// Это обеспечивает инкапсуляцию и защиту данных внутри класса.

// Методы могут также принимать параметры и возвращать значения,
// что позволяет им быть более гибкими и полезными в различных сценариях.

class Calculator {
	add(a: number, b: number): number {
		return a + b;
	}

	subtract(a: number, b: number): number {
		return a - b;
	}

	multiply(a: number, b: number): number {
		return a * b;
	}

	divide(a: number, b: number): number {
		if (b === 0) {
			throw new Error("Division by zero is not allowed.");
		}
		return a / b;
	}
}

const calculator = new Calculator();
console.log(calculator.add(5, 3)); // Вывод: 8
console.log(calculator.subtract(5, 3)); // Вывод: 2
console.log(calculator.multiply(5, 3)); // Вывод: 15
console.log(calculator.divide(5, 0)); // Ошибка: Division by zero is not allowed.

// В этом примере мы создали класс Calculator с методами add, subtract, multiply и divide.
// Каждый метод принимает два числа в качестве параметров и возвращает результат соответствующей операции.
// Метод divide также проверяет деление на ноль и выбрасывает ошибку, если второй параметр равен нулю.
// Мы продемонстрировали использование каждого метода класса Calculator.
// Это показывает, как методы класса могут быть использованы для выполнения различных операций и обработки данных.

// Методы класса также могут быть использованы для изменения состояния объекта,
// выполнения вычислений или взаимодействия с другими объектами.

class BankAccount {
	accountNumber: string;
	balance: number;

	constructor(accountNumber: string, initialBalance: number) {
		this.accountNumber = accountNumber;
		this.balance = initialBalance;
	}

	deposit(amount: number): void {
		if (amount <= 0) {
			throw new Error("Deposit amount must be positive.");
		}
		this.balance += amount;
	}

	withdraw(amount: number): void {
		if (amount <= 0) {
			throw new Error("Withdrawal amount must be positive.");
		}
		if (amount > this.balance) {
			throw new Error("Insufficient funds.");
		}
		this.balance -= amount;
	}

	getBalance(): number {
		return this.balance;
	}
}

const account = new BankAccount("123456789", 1000);
account.deposit(500);
console.log(account.getBalance()); // Вывод: 1500
account.withdraw(200);
console.log(account.getBalance()); // Вывод: 1300
account.withdraw(2000); // Ошибка: Insufficient funds.

// В этом примере мы создали класс BankAccount с методами deposit, withdraw и getBalance.
// Метод deposit позволяет пополнить баланс счета, метод withdraw позволяет снять средства со счета,
// а метод getBalance возвращает текущий баланс счета.
// Мы также продемонстрировали использование этих методов и обработку ошибок при попытке
// снять больше средств, чем доступно на счете. Это показывает, как методы класса
// могут быть использованы для управления состоянием объекта и обеспечения его целостности.
// Методы класса могут быть объявлены с различными уровнями доступа:
// - public: доступен из любого места (по умолчанию).
// - private: доступен только внутри класса.
// - protected: доступен внутри класса и его подклассов.

class Example {
	public publicMethod(): void {
		console.log("This is a public method.");
	}

	private privateMethod(): void {
		console.log("This is a private method.");
	}

	protected protectedMethod(): void {
		console.log("This is a protected method.");
	}
}

const example = new Example();
example.publicMethod(); // Вывод: This is a public method.
// example.privateMethod(); // Ошибка: privateMethod недоступен
// example.protectedMethod(); // Ошибка: protectedMethod недоступен

// В этом примере мы создали класс Example с методами publicMethod, privateMethod и protectedMethod.
// Мы продемонстрировали, что publicMethod доступен из экземпляра класса,
// в то время как privateMethod и protectedMethod недоступны напрямую.
// Это показывает, как уровни доступа методов класса могут быть использованы
// для контроля доступа к функциональности класса и обеспечения инкапсуляции данных.	
// Методы класса также могут быть статическими, что означает, что они принадлежат самому классу, а не его экземплярам.
// Статические методы вызываются на самом классе и не имеют доступа к this,
// так как this в статическом методе ссылается на сам класс.

class MathUtils {
	static square(x: number): number {
		return x * x;
	}

	static cube(x: number): number {
		return x * x * x;
	}
}

console.log(MathUtils.square(4)); // Вывод: 16
console.log(MathUtils.cube(3)); // Вывод: 27

// В этом примере мы создали класс MathUtils с двумя статическими методами: square и cube.
// Эти методы принимают число в качестве параметра и возвращают его квадрат и куб соответственно.
// Мы продемонстрировали использование статических методов, вызывая их на самом классе MathUtils,
// без необходимости создавать экземпляр класса. Это показывает, как статические методы
// могут быть использованы для предоставления утилитарной функциональности, связанной с классом, но не зависящей от его экземпляров.
// Методы класса могут быть асинхронными, что позволяет выполнять операции, которые занимают время,
// такие как запросы к базе данных или сетевые запросы, без блокировки основного потока выполнения.

class DataFetcher {
	async fetchData(url: string): Promise<string> {
		const response = await fetch(url);
		if (!response.ok) {
			throw new Error("Network response was not ok");
		}
		const data = await response.text();
		return data;
	}
}

const dataFetcher = new DataFetcher();
dataFetcher.fetchData("https://jsonplaceholder.typicode.com/posts/1")
	.then(data => console.log(data))
	.catch(error => console.error("Error fetching data:", error));

// В этом примере мы создали класс DataFetcher с асинхронным методом fetchData.
// Этот метод принимает URL в качестве параметра, выполняет сетевой запрос к этому URL
// и возвращает полученные данные в виде строки. Мы использовали ключевое слово async
// для объявления метода как асинхронного и await для ожидания завершения промисов.
// Мы продемонстрировали использование асинхронного метода, вызывая его на экземпляре класса DataFetcher
// и обрабатывая результат с помощью then и catch. Это показывает, как асинхронные методы
// могут быть использованы для выполнения длительных операций без блокировки основного потока выполнения.
// Методы класса также могут быть геттеры и сеттеры, которые позволяют контролировать доступ к свойствам объекта.

class Rectangle {
	private _width: number;
	private _height: number;

	constructor(width: number, height: number) {
		this._width = width;
		this._height = height;
	}

	get width(): number {
		return this._width;
	}

	set width(value: number) {
		if (value <= 0) {
			throw new Error("Width must be positive.");
		}
		this._width = value;
	}

	get height(): number {
		return this._height;
	}

	set height(value: number) {
		if (value <= 0) {
			throw new Error("Height must be positive.");
		}
		this._height = value;
	}

	getArea(): number {
		return this._width * this._height;
	}
}

const rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea()); // Вывод: 50
rectangle.width = 15;
console.log(rectangle.getArea()); // Вывод: 75
rectangle.height = -10; // Ошибка: Height must be positive.

// В этом примере мы создали класс Rectangle с приватными свойствами _width и _height.
// Мы определили геттеры и сеттеры для этих свойств, которые позволяют контролировать
// доступ к ним и обеспечивают валидацию значений при их установке.
// Мы также добавили метод getArea, который вычисляет площадь прямоугольника.
// Мы продемонстрировали использование геттеров и сеттеров, а также обработку ошибок при попытке
// установить отрицательное значение для высоты. Это показывает, как геттеры и сеттеры
// могут быть использованы для управления доступом к свойствам объекта и обеспечения их целостности.
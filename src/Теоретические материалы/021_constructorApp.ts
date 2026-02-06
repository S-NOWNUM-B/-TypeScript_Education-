// ===== Конструктор =====

// Конструктор - это специальный метод класса, который вызывается при создании нового объекта этого класса. Он используется для инициализации свойств объекта и выполнения других действий, необходимых при его создании.
// В TypeScript конструктор объявляется с помощью ключевого слова "constructor". Он может принимать параметры, которые используются для инициализации свойств объекта.

class Person {
	name: string
	age: number

	constructor(name: string, age: number) {
		this.name = name
		this.age = age
	}

	greet() {
		console.log(`Привет, меня зовут ${this.name} и мне ${this.age} лет.`)
	}
}

const person1 = new Person("Алексей", 30)
person1.greet() // Вывод: Привет, меня зовут Алексей и мне 30 лет.

// В этом примере мы создали класс Person с конструктором, который принимает два параметра: name и age. Внутри конструктора мы инициализируем свойства name и age объекта. Затем мы создаем новый объект person1 класса Person, передавая ему имя и возраст, и вызываем метод greet, который выводит приветствие с именем и возрастом.

class User {
	name: string | undefined;
	age: number | undefined;

	constructor();
	constructor(name: string);
	constructor(age: number);
	constructor(ageOrName?: string | number) {
		if (typeof ageOrName === "string") {
			this.name = ageOrName
		} else if (typeof ageOrName === "number") {
			this.age = ageOrName
		}
	}
}

const user1 = new User("Иван")
console.log(user1.name) // Вывод: Иван

const user2 = new User()
console.log(user2.name) // Вывод: undefined

// В этом примере мы создали класс User с перегруженным конструктором. Первый конструктор не принимает параметров, а второй конструктор принимает один параметр name или age. В зависимости от того, какой конструктор вызывается, свойство name или age может быть инициализировано или оставаться неопределенным.

class BankAccountBasic {
	private accountNumber: string;
	private balance: number;

	constructor(accountNumber: string, initialBalance: number = 0) {
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

const myAccountBasic = new BankAccountBasic("123456789", 1000);
myAccountBasic.deposit(500);
console.log(myAccountBasic.getBalance()); // Вывод: 1500
myAccountBasic.withdraw(200);
console.log(myAccountBasic.getBalance()); // Вывод: 1300

// В этом примере мы создали класс BankAccountBasic с конструктором, который инициализирует номер счета и начальный баланс. Мы также добавили методы deposit, withdraw и getBalance для управления балансом счета. Метод deposit позволяет вносить деньги на счет, метод withdraw позволяет снимать деньги со счета, а метод getBalance возвращает текущий баланс счета.
// Мы продемонстрировали использование этих методов для управления состоянием объекта BankAccountBasic.

// Конструкторы могут быть перегружены, что позволяет создавать объекты класса с разными наборами параметров.
// В TypeScript перегрузка конструктора достигается путем объявления нескольких сигнатур конструктора и реализации одной функции конструктора.

class Rectangle {
	width: number;
	height: number;

	constructor();
	constructor(size: number);
	constructor(width: number, height: number);
	constructor(widthOrSize?: number, height?: number) {
		if (widthOrSize !== undefined && height === undefined) {
			this.width = widthOrSize;
			this.height = widthOrSize;
		} else if (widthOrSize !== undefined && height !== undefined) {
			this.width = widthOrSize;
			this.height = height;
		} else {
			this.width = 1;
			this.height = 1;
		}
	}

	getArea(): number {
		return this.width * this.height;
	}
}

const square = new Rectangle(5);
console.log(square.getArea()); // Вывод: 25

const rectangle = new Rectangle(4, 6);
console.log(rectangle.getArea()); // Вывод: 24

const defaultRectangle = new Rectangle();
console.log(defaultRectangle.getArea()); // Вывод: 1

// В этом примере мы создали класс Rectangle с перегруженным конструктором. Первый конструктор не принимает параметров и инициализирует ширину и высоту значением 1. Второй конструктор принимает один параметр size и инициализирует ширину и высоту одинаковым значением. Третий конструктор принимает два параметра width и height для инициализации соответствующих свойств.
// Мы также добавили метод getArea, который возвращает площадь прямоугольника. Мы продемонстрировали использование каждого конструктора для создания объектов класса Rectangle с разными размерами.


class BankAccountPrivate {
	private accountNumber: string;
	private balance: number;

	constructor(accountNumber: string, initialBalance: number = 0) {
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

const myAccountPrivate = new BankAccountPrivate("123456789", 1000);
myAccountPrivate.deposit(500);
console.log(myAccountPrivate.getBalance()); // Вывод: 1500
myAccountPrivate.withdraw(200);
console.log(myAccountPrivate.getBalance()); // Вывод: 1300

// В этом примере мы создали класс BankAccount с приватными свойствами accountNumber и balance.
// Мы добавили методы deposit, withdraw и getBalance для управления балансом счета.
// Метод deposit позволяет вносить деньги на счет, метод withdraw позволяет снимать деньги со счета, а метод getBalance возвращает текущий баланс счета.
// Мы продемонстрировали использование этих методов для управления состоянием объекта BankAccount.
// Использование приватных свойств помогает защитить внутреннее состояние объекта от прямого доступа извне, обеспечивая целостность данных.

// Мы продемонстрировали использование каждого метода класса Calculator.
// Это показывает, как методы класса могут быть использованы для выполнения различных операций и обработки данных.

// Методы класса также могут быть использованы для изменения состояния объекта,
// выполнения вычислений или взаимодействия с другими объектами.

class BankAccountWithErrors {
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

const accountWithErrors = new BankAccountWithErrors("123456789", 1000);
accountWithErrors.deposit(500);
console.log(accountWithErrors.getBalance()); // Вывод: 1500
accountWithErrors.withdraw(200);
console.log(accountWithErrors.getBalance()); // Вывод: 1300
accountWithErrors.withdraw(2000); // Ошибка: Insufficient funds.

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

	testMethods(): void {
		this.publicMethod(); // Доступно
		this.privateMethod(); // Доступно
		this.protectedMethod(); // Доступно
	}
}

class SubExample extends Example {
	testProtectedMethod(): void {
		this.protectedMethod(); // Доступно
	}
}

const example = new Example();
example.publicMethod(); // Доступно
// example.privateMethod(); // Ошибка: privateMethod is private
// example.protectedMethod(); // Ошибка: protectedMethod is protected

const subExample = new SubExample();
subExample.testProtectedMethod(); // Доступно

// В этом примере мы создали класс Example с методами, имеющими разные уровни доступа: public, private и protected.
// Метод publicMethod доступен из любого места, метод privateMethod доступен только внутри класса Example,
// а метод protectedMethod доступен внутри класса Example и его подклассов.
// Мы также создали подкласс SubExample, который может вызывать защищенный метод protectedMethod.
// Это демонстрирует, как уровни доступа методов класса могут быть использованы для контроля доступа к функциональности класса и обеспечения инкапсуляции данных.	
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

const num = 4;
const squared = MathUtils.square(num);
console.log(`The square of ${num} is ${squared}.`); // Вывод: The square of 4 is 16.
console.log(MathUtils.cube(3)); // Вывод: 27

// В этом примере мы создали класс MathUtils с двумя статическими методами: square и cube. Метод square принимает число и возвращает его квадрат, а метод cube возвращает куб числа.
// Мы продемонстрировали использование этих статических методов, вызывая их на самом классе MathUtils без создания экземпляра класса.
// Это показывает, как статические методы могут быть использованы для предоставления утилитарной функциональности, связанной с классом, но не зависящей от конкретных экземпляров класса.

class BankAccountAsync {
	private accountNumber: string;
	private balance: number;

	constructor(accountNumber: string, initialBalance: number = 0) {
		this.accountNumber = accountNumber;
		this.balance = initialBalance;
	}

	deposit(amount: number): void {
		if (amount <= 0) {
			throw new Error("Deposit amount must be positive.");
		}
		this.balance += amount;
	}

	async withdraw(amount: number): Promise<void> {
		return new Promise((resolve, reject) => {
			setTimeout(() => {
				if (amount <= 0) {
					return reject(new Error("Withdrawal amount must be positive."));
				}
				if (amount > this.balance) {
					return reject(new Error("Insufficient funds."));
				}
				this.balance -= amount;
				resolve();
			}, 1000); // Симуляция асинхронной операции
		});
	}

	getBalance(): number {
		return this.balance;
	}
}

const myAccountAsync = new BankAccountAsync("123456789", 1000);
myAccountAsync.deposit(500);
console.log(myAccountAsync.getBalance()); // Вывод: 1500

myAccountAsync.withdraw(200).then(() => {
	console.log(myAccountAsync.getBalance()); // Вывод: 1300
}).catch((error: Error) => {
	console.error(error.message);
});

// В этом примере мы создали класс BankAccount с асинхронным методом withdraw, который использует Promise для симуляции задержки при снятии средств со счета.
// Метод withdraw проверяет условия снятия средств и обновляет баланс после задержки в 1 секунду.
// Мы продемонстрировали использование этого асинхронного метода с помощью then и catch для обработки успешного выполнения и ошибок соответственно.
// Это показывает, как методы класса могут быть асинхронными и использоваться для выполнения операций, требующих времени на выполнение, таких как сетевые запросы или операции ввода-вывода.
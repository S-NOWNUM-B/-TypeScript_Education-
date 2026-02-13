// ===== Extendes =====

// Extendes - это способ создать новый класс на основе существующего класса. Новый класс наследует свойства и методы существующего класса, и может добавлять свои собственные свойства и методы или переопределять существующие.
// Использование ключевого слова extends позволяет нам создавать иерархии классов, где более специализированные классы могут наследовать общие функциональности от базовых классов, что способствует повторному использованию кода и улучшению структуры приложения.

type Paymentstatus = 'new' | 'paid';

class Payment {
	id: number;
	status: Paymentstatus = 'new';

	constructor(id: number) {
		this.id = id;
	}

	pay() {
		this.status = 'paid';
		console.log(`Payment with ID ${this.id} has been paid.`);
	}
}

class PersonalPayment extends Payment {
	constructor(id: number, public recipient: string) {
		super(id); // Вызываем конструктор базового класса Payment для инициализации id
	}

	send() {
		if (this.status === 'paid') {
			console.log(`Payment with ID ${this.id} has been sent to ${this.recipient}.`);
		} else {
			console.log(`Payment with ID ${this.id} cannot be sent because it is not paid.`);
		}
	}
}

const personalPayment = new PersonalPayment(1, 'John Doe');
personalPayment.pay(); // Сначала оплачиваем платеж
personalPayment.send(); // Затем отправляем платеж

// В этом примере мы создали базовый класс Payment, который имеет свойства id и status, а также метод pay. Затем мы создали класс PersonalPayment, который расширяет класс Payment и добавляет новое свойство recipient и новый метод send. Класс PersonalPayment наследует все свойства и методы класса Payment, что позволяет нам использовать метод pay для изменения статуса платежа, а затем использовать метод send для отправки платежа, если он уже оплачен. Это демонстрирует, как можно использовать наследование в TypeScript для создания новых классов на основе существующих классов.

class SpecialPayment extends Payment {
	constructor(id: number, public discount: number) {
		super(id); // Вызываем конструктор базового класса Payment для инициализации id
	}

	applyDiscount() {
		if (this.status === 'paid') {
			console.log(`Applying a discount of ${this.discount}% to payment with ID ${this.id}.`);
		} else {
			console.log(`Cannot apply discount to payment with ID ${this.id} because it is not paid.`);
		}
	}
}

const specialPayment = new SpecialPayment(2, 10);
specialPayment.pay(); // Сначала оплачиваем платеж
specialPayment.applyDiscount(); // Затем применяем скидку

// В этом примере мы создали класс SpecialPayment, который также расширяет класс Payment и добавляет новое свойство discount и новый метод applyDiscount. Класс SpecialPayment наследует все свойства и методы класса Payment, что позволяет нам использовать метод pay для изменения статуса платежа, а затем использовать метод applyDiscount для применения скидки, если платеж уже оплачен. Это демонстрирует, как можно создавать специализированные классы на основе базовых классов, добавляя новые функциональности и свойства.

class PremiumPayment extends Payment {
	constructor(id: number, public premiumFeature: string) {
		super(id); // Вызываем конструктор базового класса Payment для инициализации id
	}

	override pay() { // Переопределяем метод pay из базового класса
		this.status = 'paid';
		console.log(`Premium payment with ID ${this.id} has been paid. Premium feature: ${this.premiumFeature}`);
	}
}

const premiumPayment = new PremiumPayment(3, 'Priority Support');
premiumPayment.pay(); // Вызываем переопределенный метод pay

// В этом примере мы создали класс PremiumPayment, который расширяет класс Payment и добавляет новое свойство premiumFeature. Мы также переопределили метод pay, чтобы добавить дополнительную функциональность при оплате премиум платежа. Теперь, когда мы вызываем метод pay для объекта PremiumPayment, он выполняет свою собственную реализацию, которая включает информацию о премиум функции, в отличие от базового класса Payment. Это демонстрирует, как можно использовать ключевое слово override для переопределения методов базового класса и предоставления специализированной реализации в производных классах.

// Особенности наследования в TypeScript:
// 1. Конструктор базового класса должен быть вызван с помощью super() в конструкторе производного класса, чтобы инициализировать свойства базового класса.
// 2. Производный класс может переопределять методы базового класса, используя ключевое слово override для указания, что метод переопределяет метод базового класса.
// 3. Производный класс может добавлять новые свойства и методы, которые не существуют в базовом классе, расширяя функциональность базового класса.
// 4. Наследование позволяет создавать иерархии классов, где более специализированные классы могут наследовать общие функциональности от базовых классов, что способствует повторному использованию кода и улучшению структуры приложения.

// Пример использования наследования для создания иерархии классов:

class Vehicle {
	constructor(public make: string, public model: string) {}

	start() {
		console.log(`${this.make} ${this.model} is starting.`);
	}
}

class Car extends Vehicle {
	constructor(make: string, model: string, public numberOfDoors: number) {
		super(make, model); // Вызываем конструктор базового класса Vehicle
	}

	openTrunk() {
		console.log(`Opening the trunk of ${this.make} ${this.model}.`);
	}
}

class Motorcycle extends Vehicle {
	constructor(make: string, model: string, public hasSidecar: boolean) {
		super(make, model); // Вызываем конструктор базового класса Vehicle
	}

	popWheelie() {
		console.log(`${this.make} ${this.model} is popping a wheelie!`);
	}
}

const myCar = new Car('Toyota', 'Camry', 4);
myCar.start(); // Вызов метода из базового класса
myCar.openTrunk(); // Вызов метода из производного класса

const myMotorcycle = new Motorcycle('Harley-Davidson', 'Street 750', false);
myMotorcycle.start(); // Вызов метода из базового класса
myMotorcycle.popWheelie(); // Вызов метода из производного класса

// В этом примере мы создали базовый класс Vehicle, который имеет свойства make и model, а также метод start. Затем мы создали два производных класса Car и Motorcycle, которые расширяют класс Vehicle и добавляют свои собственные свойства и методы. Класс Car добавляет свойство numberOfDoors и метод openTrunk, а класс Motorcycle добавляет свойство hasSidecar и метод popWheelie. Оба производных класса наследуют метод start от базового класса Vehicle, что позволяет нам использовать его для обоих типов транспортных средств. Это демонстрирует, как можно использовать наследование для создания иерархии классов с общими функциональностями и специализированными возможностями.
// ===== Работа с This =====

// this - это ключевое слово в JavaScript, которое ссылается на текущий контекст выполнения функции. Контекст выполнения определяется тем, как функция была вызвана.

// 1. Внутри функции this - это глобальный объект (window в браузере, global в Node.js)
//function showThis() {
//	console.log(this);
//}

// 2. Внутри метода объекта this - это сам объект
//const obj = {
//	name: 'Object',
//	showThis() {
//		console.log(this);
//	}
//};

// 3. Внутри конструктора this - это новый создаваемый объект
//function Person(name) {
//	this.name = name;
//	this.showName = function() {
//		console.log(this.name);
//	};
//}

// 4. Внутри стрелочной функции this - это лексическое окружение, в котором она была создана
//const arrowFunc = () => {
//	console.log(this);
//};

// 5. Внутри обработчика событий this - это элемент, на котором произошло событие
//document.getElementById('myButton').addEventListener('click', function() {
//	console.log(this); // this будет указывать на кнопку
//});

// 6. Внутри setTimeout и setInterval this - это глобальный объект
//setTimeout(function() {
//	console.log(this); // this будет указывать на глобальный объект
//}, 1000);

// 7. Внутри класса this - это экземпляр класса
//class MyClass {
//	constructor(name) {
//		this.name = name;
//	}
//	showName() {
//		console.log(this.name);
//	}
//}

//const myInstance = new MyClass('My Instance');
//myInstance.showName(); // this будет указывать на myInstance

// 8. Внутри функции, вызванной с помощью call, apply или bind, this - это объект, переданный в качестве аргумента
//function showName() {
//	console.log(this.name);
//}

//const person1 = { name: 'Alice' };
//const person2 = { name: 'Bob' };

//showName.call(person1); // this будет указывать на person1
//showName.apply(person2); // this будет указывать на person2

//const boundShowName = showName.bind(person1);
//boundShowName(); // this будет указывать на person1

// 9. Внутри функции, вызванной с помощью new, this - это новый создаваемый объект
//function Car(model) {
//	this.model = model;
//}

//const myCar = new Car('Toyota');
//console.log(myCar.model); // this будет указывать на myCar

// 10. Внутри функции, вызванной с помощью strict mode, this - это undefined
//function strictFunction() {
//	'use strict';
//	console.log(this); // this будет undefined
//}

//strictFunction();

class Payment {
	private date: Date = new Date();

	constructor(public amount: number) {}

	getDate(this: Payment) {
		return this.date;
	}

	showPayment() {
		console.log(`Payment of ${this.amount} made on ${this.date}`);
	}
}

const payment = new Payment(100);
payment.showPayment(); // this будет указывать на payment

const User = {
	id: 1,
	paymentDate: payment.getDate.bind(payment) // привязываем контекст payment к методу getDate
}

console.log(User.paymentDate()); // this будет указывать на User, но метод getDate ожидает this, который является экземпляром Payment, поэтому возникнет ошибка
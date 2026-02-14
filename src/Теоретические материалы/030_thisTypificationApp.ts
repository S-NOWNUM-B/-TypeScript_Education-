// ===== Типизация this =====

// 1. В функции, которая не является методом объекта, this будет undefined (в строгом режиме) или глобальным объектом (в нестрогом режиме).

//function showThis() {
//	console.log(this);
//}

// 2. В методе объекта this будет указывать на сам объект.

//const obj = {
//	name: 'Object',
//	showThis() {
//		console.log(this);
//	}
//};

// 3. В конструкторе this будет указывать на новый создаваемый объект.

//function Person(name) {
//	this.name = name;
//	this.showName = function() {
//		console.log(this.name);
//	};
//}

// 4. В стрелочной функции this будет указывать на лексическое окружение, в котором она была создана.

//const arrowFunc = () => {
//	console.log(this);
//};

// 5. В обработчике событий this будет указывать на элемент, на котором произошло событие.

// document.getElementById('myButton').addEventListener('click', function() {
// 	console.log(this); // this будет указывать на кнопку
// });

// 6. В setTimeout и setInterval this будет указывать на глобальный объект.

// setTimeout(function() {
// 	console.log(this); // this будет указывать на глобальный объект
// }, 1000);

// 7. В классе this будет указывать на экземпляр класса.

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

// 8. В функции, вызванной с помощью call, apply или bind, this будет указывать на объект, переданный в качестве аргумента.

//function showName() {
//	console.log(this.name);
//}

//const person1 = { name: 'Alice' };
//const person2 = { name: 'Bob' };

//showName.call(person1); // this будет указывать на person1
//showName.apply(person2); // this будет указывать на person2

//const boundShowName = showName.bind(person1);
//boundShowName(); // this будет указывать на person1

class UserBuilder {
	name: string | undefined;

	setName(name: string): this { // Указываем, что метод возвращает this для поддержки цепочки вызовов
		this.name = name;
		return this; // Возвращаем текущий объект для цепочки вызовов
	}

	isAdmin(): this is AdminBuilder { // Указываем, что метод возвращает тип this, который может быть AdminBuilder
		return this instanceof AdminBuilder; // Проверяем, является ли текущий объект экземпляром AdminBuilder
	}
}

class AdminBuilder extends UserBuilder {
	role: string | undefined;
}

const user = new UserBuilder().setName('Alice');
console.log(user.name); // Вывод: Alice

const admin = new AdminBuilder().setName('Bob');
console.log(admin.name); // Вывод: Bob

let userTest: UserBuilder | AdminBuilder = new UserBuilder();

if (userTest.isAdmin()) {
	console.log(`User is an admin with role: ${userTest.role}`); // Здесь userTest будет иметь тип AdminBuilder
} else {
	console.log(`User is not an admin ${userTest.name}`); // Здесь userTest будет иметь тип UserBuilder
}
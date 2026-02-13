// ===== Visibility of properties =====

// Видимость свойств - это концепция, которая определяет, какие свойства объекта доступны для чтения и записи из других частей программы. В TypeScript есть несколько уровней видимости для свойств класса: public, private и protected.

// 1. Public (публичные) свойства доступны для чтения и записи из любой части программы. Они являются стандартными свойствами класса и не требуют специального указания.

class Person {
	public name: string; // Публичное свойство

	constructor(name: string) {
		this.name = name;
	}
}

const person1 = new Person("Alice");
console.log(person1.name); // Доступ к публичному свойству
person1.name = "Bob"; // Изменение публичного свойства
console.log(person1.name);

// 2. Private (приватные) свойства доступны только внутри класса, в котором они объявлены. Они не могут быть доступны или изменены из других частей программы.

class Employee {
	private salary: number; // Приватное свойство

	constructor(salary: number) {
		this.salary = salary;
	}

	public getSalary(): number {
		return this.salary; // Доступ к приватному свойству через публичный метод
	}
}

const employee1 = new Employee(50000);
console.log(employee1.getSalary()); // Получение значения приватного свойства через метод
//console.log(employee1.salary); // Ошибка: свойство 'salary' является приватным и недоступно

// 3. Protected (защищенные) свойства доступны внутри класса, в котором они объявлены, и в классах, которые наследуют этот класс. Они не могут быть доступны из других частей программы.

class Animal {
	protected species: string; // Защищенное свойство

	constructor(species: string) {
		this.species = species;
	}
}

class Dog extends Animal {
	public getSpecies(): string {
		return this.species; // Доступ к защищенному свойству через метод в подклассе
	}
}

const dog1 = new Dog("Canine");
console.log(dog1.getSpecies()); // Получение значения защищенного свойства через метод
// console.log(dog1.species); // Ошибка: свойство 'species' является защищенным и недоступно

// Важно понимать, что использование приватных и защищенных свойств помогает инкапсулировать данные и контролировать доступ к ним, что способствует лучшей организации кода и предотвращает нежелательные изменения данных из других частей программы.
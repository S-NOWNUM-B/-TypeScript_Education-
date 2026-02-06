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
// ===== Абстрактный класс =====

// Абстрактный класс - это класс, который не может быть инстанцирован напрямую, а служит в качестве шаблона для других классов. Он может содержать абстрактные методы, которые должны быть реализованы в подклассах.

abstract class Animal {
	abstract makeSound(): void; // Абстрактный метод

	move(): void {
		console.log("Moving...");
	}
}

class Dog extends Animal {
	makeSound(): void {
		console.log("Woof!");
	}
}

class Cat extends Animal {
	makeSound(): void {
		console.log("Meow!");
	}
}

const dog = new Dog();
dog.makeSound(); // Вывод: Woof!
dog.move(); // Вывод: Moving...

const cat = new Cat();
cat.makeSound(); // Вывод: Meow!
cat.move(); // Вывод: Moving...

// Попытка создать экземпляр абстрактного класса вызовет ошибку
// const animal = new Animal(); // Ошибка: Cannot create an instance of an abstract class.

abstract class Shape {
	abstract area(): number; // Абстрактный метод для вычисления площади

	abstract perimeter(): number; // Абстрактный метод для вычисления периметра
}

class Circle extends Shape {
	radius: number;

	constructor(radius: number) {
		super();
		this.radius = radius;
	}

	area(): number {
		return Math.PI * this.radius ** 2;
	}

	perimeter(): number {
		return 2 * Math.PI * this.radius;
	}
}

class Rectangle extends Shape {
	width: number;
	height: number;

	constructor(width: number, height: number) {
		super();
		this.width = width;
		this.height = height;
	}

	area(): number {
		return this.width * this.height;
	}

	perimeter(): number {
		return 2 * (this.width + this.height);
	}
}

const circle = new Circle(5);
console.log(`Circle area: ${circle.area()}`); // Вывод: Circle area: 78.53981633974483
console.log(`Circle perimeter: ${circle.perimeter()}`); // Вывод: Circle perimeter: 31.41592653589793

const rectangle = new Rectangle(4, 6);
console.log(`Rectangle area: ${rectangle.area()}`); // Вывод: Rectangle area: 24
console.log(`Rectangle perimeter: ${rectangle.perimeter()}`); // Вывод: Rectangle perimeter: 20

// Абстрактные классы полезны для создания иерархий классов и обеспечения того, чтобы подклассы реализовали определенные методы, что способствует более структурированному и поддерживаемому коду.
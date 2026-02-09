// ===== Getter and Setter =====

// Getter - это метод, который позволяет получить значение свойства объекта. Он вызывается при обращении к свойству объекта, и возвращает его значение. Синтаксис для создания геттера выглядит следующим образом:
// class MyClass {
//   private _property: string;

//   constructor(property: string) {
//     this._property = property;
//   }

//   get property(): string {
//     return this._property;
//   }
// }

// const myObject = new MyClass("Hello");
// console.log(myObject.property); // Output: Hello

// Setter - это метод, который позволяет установить значение свойства объекта. Он вызывается при присваивании значения свойству объекта, и устанавливает его значение. Синтаксис для создания сеттера выглядит следующим образом:

// class MyClass {
//   private _property: string;

//   constructor(property: string) {
//     this._property = property;
//   }

//   set property(value: string) {
//     this._property = value;
//   }
// }

// const myObject = new MyClass("Hello");
// myObject.property = "World";
// console.log(myObject.property); // Output: World

// Важно отметить, что геттеры и сеттеры позволяют контролировать доступ к свойствам объекта, обеспечивая инкапсуляцию данных. Они также могут использоваться для выполнения дополнительных действий при получении или установке значения свойства, таких как валидация данных или выполнение побочных эффектов.

class User {
	_login: string;
	password: string;

	constructor() {
		this._login = '';
		this.password = '';
	}

	set login(l: string) {
		this._login = 'user-' + l;
	}

	get login(): string {
		return `Вы имеете роль: ${this._login}`;
	}
}

const user = new User();
user.login = 'admin';
console.log(user._login); // Set -> Output: user-admin
console.log(user.login); // Get -> Output: Вы имеете роль: user-admin

// В данном примере мы создали класс User с приватным свойством _login и публичным свойством password. Мы определили сеттер для свойства login, который добавляет префикс "user-" к переданному значению, и геттер для свойства login, который возвращает строку с ролью пользователя. Когда мы устанавливаем значение login, сеттер автоматически добавляет префикс, а когда мы получаем значение login, геттер возвращает строку с ролью пользователя.
// Важно отметить, что геттеры и сеттеры позволяют нам контролировать доступ к свойствам объекта и выполнять дополнительные действия при получении или установке значений. Они обеспечивают инкапсуляцию данных и могут использоваться для валидации данных или выполнения побочных эффектов при изменении свойств объекта.
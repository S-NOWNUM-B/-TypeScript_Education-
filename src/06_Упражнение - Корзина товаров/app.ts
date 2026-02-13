//Необходимо сделать корзину (Cart) на сайте,

//которая имееет список продуктов (Product), добавленных в корзину

//и параметры доставки (Delivery). Для Cart реализовать методы:

//- Добавить продукт в корзину

//- Удалить продукт из корзины по ID

//- Посчитать стоимость товаров в корзине

//- Задать доставку

//- Checkout - вернуть что всё ок, если есть продукты и параметры доставки

//Product: id, название и цена

//Delivery: может быть как до дома (дата и адрес) или до пункта выдачи (дата = Сегодня и Id магазина)

class Product {
	constructor(public id: number, public name: string, public price: number) { }
}

class Delivery {
	constructor(public date: Date) { }
}

class HomeDelivery extends Delivery {
	constructor(date: Date, public address: string) {
		super(date);
	}
}

class StoreDelivery extends Delivery {
	constructor(date: Date, public storeId: number) {
		super(date);
	}
}

class Cart {
	private products: Product[] = [];
	private delivery: Delivery | null = null;

	addProduct(product: Product): void {
		this.products.push(product);
	}

	removeProductById(id: number): void {
		this.products = this.products.filter(product => product.id !== id);
	}

	calculateTotal(): number {
		return this.products.reduce((total, product) => total + product.price, 0);
	}

	setDelivery(delivery: Delivery): void {
		this.delivery = delivery;
	}

	checkout(): string {
		if (this.products.length === 0) {
			return "Корзина пуста.";
		}
		if (!this.delivery) {
			return "Параметры доставки не заданы.";
		}
		return "Все ок, заказ оформлен.";
	}
}

// Пример использования
const cart = new Cart();
cart.addProduct(new Product(1, "Товар 1", 100));
cart.addProduct(new Product(2, "Товар 2", 200));
console.log(cart.calculateTotal()); // 300

cart.setDelivery(new StoreDelivery(new Date(), 123));
console.log(cart.checkout()); // Все ок, заказ оформлен.

cart.removeProductById(1);
console.log(cart.calculateTotal()); // 200

cart.setDelivery(new HomeDelivery(new Date(), "ул. Пушкина, д. 10"));
console.log(cart.checkout()); // Все ок, заказ оформлен.
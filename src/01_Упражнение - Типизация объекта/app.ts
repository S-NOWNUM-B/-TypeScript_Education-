//{
//   "officeId": 45,
//   "isOpened": false,
//   "contacts": {
//      "phone": "+79100000000",
//      "email": "my@email.ru",
//      "address": {
//         "city": "Москва"
//      }
//   }
//}

type address = {
	officeId: number;
	isOpened: boolean;
	contacts: {
		phone: string;
		email: string;
		address: {
			city: string;
		}
	}
}

function getInfocorp(info: address): string {
	return `Информация об офисе:
- ID офиса: ${info.officeId}
- Открыт: ${info.isOpened ? "Да" : "Нет"}
- Телефон: ${info.contacts.phone}
- Email: ${info.contacts.email}
- Город: ${info.contacts.address.city}`;
}

const corpInfo: address = {
	officeId: 45,
	isOpened: false,
	contacts: {
		phone: "+79100000000",
		email: "my@email.ru",
		address: {
			city: "Москва"
		}
	}
}

console.log(getInfocorp(corpInfo));
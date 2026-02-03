// Запрос в виде платежа

//{
//   "sum": 10000,
//   "from": 2,
//   "to": 4
//}

// Возможные отвты сервера

//{
//   "status": "success",
//   "data": {
//      "databaseId": 567,
//      "sum": 10000,
//      "from": 2,
//      "to": 4
//   }
//},
           
//{
//   "status": "failed",
//   "data": {
//      "errorMessage": "Недостаточно средств",
//      "errorCode": 4
//   }
//}

// ===== Решение =====

interface IPayment {
	sum: number;
	from: number;
	to: number;
}

enum PaymentStatus {
	Success = "success",
	Failed = "failed"
}

// IPaymentRequest идентичен IPayment, поэтому можно использовать IPayment напрямую
// Но если нужен отдельный тип для запроса:
interface IPaymentRequest extends IPayment {
	// Все поля унаследованы от IPayment (sum, from, to)
	// Можно добавить дополнительные поля, если потребуется
}

interface IDataSuccess extends IPayment {
	databaseId: number;
}

interface IDataFailed {
	errorMessage: string;
	errorCode: number;
}

interface IResponceSuccess {
	status: PaymentStatus.Success;
	data: IDataSuccess;
}

interface IResponceFailed {
	status: PaymentStatus.Failed;
	data: IDataFailed;
}

type PaymentResponce = IResponceSuccess | IResponceFailed;

// ===== Пример использования =====

const exampleSuccess: PaymentResponce = {
	status: PaymentStatus.Success,
	data: {
		databaseId: 567,
		sum: 10000,
		from: 2,
		to: 4
	}
};

const exampleFailed: PaymentResponce = {
	status: PaymentStatus.Failed,
	data: {
		errorMessage: "Недостаточно средств",
		errorCode: 4
	}
};

function handlePaymentResponse(response: PaymentResponce) {
	if (response.status === PaymentStatus.Success) {
		console.log(`Платеж успешен! ID в базе данных: ${response.data.databaseId}`);
	} else {
		console.log(`Платеж не удался. Ошибка ${response.data.errorCode}: ${response.data.errorMessage}`);
	}
}

handlePaymentResponse(exampleSuccess);
handlePaymentResponse(exampleFailed);

// Функция handlePaymentResponse использует тип PaymentResponce,
// который объединяет оба возможных ответа сервера,
// и корректно обрабатывает каждый из них с помощью проверки статуса.
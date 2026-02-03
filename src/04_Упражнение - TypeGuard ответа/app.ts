// ===== Код =====

//interface IPayment {
//  sum: number;
//  from: number;
//  to: number;
//}

//enum PaymentStatus {
//  Success = "success",
//  Failed = "failed",
//}

//interface IPaymentRequest extends IPayment {}
//interface IDataSuccess extends IPayment {
//  databaseId: number;
//}

//interface IDataFailed {
//  errorMessage: string;
//  errorCode: number;
//}

//interface IResponseSuccess {
//  status: PaymentStatus.Success;
//  data: IDataSuccess;
//}

//interface IResponseFailed {
//  status: PaymentStatus.Failed;
//  data: IDataFailed;
//}

interface IPayment {
  sum: number;

  from: number;

  to: number;
}

enum PaymentStatus {
  Success = "success",

  Failed = "failed",
}

interface IPaymentRequest extends IPayment {}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;

  errorCode: number;
}

interface IResponseSuccess {
  status: PaymentStatus.Success;

  data: IDataSuccess;
}

interface IResponseFailed {
  status: PaymentStatus.Failed;

  data: IDataFailed;
}

type f = (res: IResponseSuccess | IResponseFailed) => number;

type Res = IResponseSuccess | IResponseFailed;

function isSeccuss(res: Res): res is IResponseSuccess {
	if (res.status === PaymentStatus.Success) {
		return true;
	}
	return false;
}

function getIdFromData(res: Res): number {
	if (isSeccuss(res)) {
		return res.data.databaseId;
	} else {
		throw new Error(`Ошибка ${res.data.errorCode}: ${res.data.errorMessage}`);
	}
}

const responseSuccess: IResponseSuccess = {
	status: PaymentStatus.Success,
	data: {
		sum: 100,
		from: 1,
		to: 2,
		databaseId: 12345,
	},
};

const responseFailed: IResponseFailed = {
	status: PaymentStatus.Failed,
	data: {
		errorMessage: "Недостаточно средств",
		errorCode: 402,
	},
};

console.log(getIdFromData(responseSuccess)); // Выведет: 12345
// console.log(getIdFromData(responseFailed)); // Выбросит ошибку: Ошибка 402: Недостаточно средств
// ===== Literal Types =====

// Literal Types позволяют переменной принимать только определённые значения,
// что полезно для создания более строгих и предсказуемых типов данных.
// Например, функция может принимать параметр, который может быть только строкой "post" или "get".
// Это ограничивает возможные значения и предотвращает ошибки, связанные с неправильным вводом.
// Literal Types также могут использоваться для создания константных значений,
// которые не могут быть изменены после их определения.
// Кроме того, Literal Types полезны при работе с перечислениями (enums),
// где каждый элемент может быть представлен конкретным литеральным типом.
// Важно использовать Literal Types для повышения безопасности типов и улучшения читаемости кода.

function fetchWithAuth(url: string, method: 'post' | 'get') {
	console.log(`Fetching ${url} with method ${method}`);
}

fetchWithAuth('/api/data', 'post');

function setStatus(status: 'success' | 'error' | 'loading') {
	console.log(`Status set to: ${status}`);
}

setStatus('loading');

// Literal Types помогают создавать более строгий и предсказуемый код,
// обеспечивая безопасность типов и предотвращая ошибки, связанные с неправильным вводом данных.
// Они позволяют ограничить возможные значения переменных,
// делая код более понятным и удобным для поддержки.
// Однако важно использовать Literal Types с умом,
// чтобы избежать чрезмерного усложнения типов и сохранить читаемость кода.

type Direction = 'up' | 'down' | 'left' | 'right';

function move(direction: Direction) {
	console.log(`Moving ${direction}`);
}

move('up');
move('left');
//move('forward'); // Ошибка: Argument of type '"forward"' is not assignable to parameter of type 'Direction'.

type YesNo = 'yes' | 'no';

function answerQuestion(answer: YesNo) {
	if (answer === 'yes') {
		console.log("You answered yes.");
	} else {
		console.log("You answered no.");
	}
}

answerQuestion('yes');
answerQuestion('no');
//answerQuestion('maybe'); // Ошибка: Argument of type '"maybe"' is not assignable to parameter of type 'YesNo'.

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

function makeRequest(method: HttpMethod, url: string) {
	console.log(`Making ${method} request to ${url}`);
}

makeRequest('GET', '/api/items');
makeRequest('POST', '/api/items');
//makeRequest('PATCH', '/api/items'); // Ошибка: Argument of type '"PATCH"' is not assignable to parameter of type 'HttpMethod'.

type CardinalDirection = 'North' | 'East' | 'South' | 'West';

function navigate(direction: CardinalDirection) {
	console.log(`Navigating to the ${direction}`);
}

navigate('North');
navigate('East');
//navigate('Northeast'); // Ошибка: Argument of type '"Northeast"' is not assignable to parameter of type 'CardinalDirection'.

type TrafficLight = 'red' | 'yellow' | 'green';

function changeLight(light: TrafficLight) {
	console.log(`Changing light to ${light}`);
}

changeLight('red');
changeLight('green');
//changeLight('blue'); // Ошибка: Argument of type '"blue"' is not assignable to parameter of type 'TrafficLight'.

type Size = 'small' | 'medium' | 'large';

function setSize(size: Size) {
	console.log(`Setting size to ${size}`);
}

setSize('medium');
setSize('large');
//setSize('extra-large'); // Ошибка: Argument of type '"extra-large"' is not assignable to parameter of type 'Size'.

type Weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday';

function scheduleMeeting(day: Weekday) {
	console.log(`Scheduling meeting on ${day}`);
}

scheduleMeeting('Wednesday');
scheduleMeeting('Friday');
//scheduleMeeting('Saturday'); // Ошибка: Argument of type '"Saturday"' is not assignable to parameter of type 'Weekday'.

type PaymentMethod = 'credit_card' | 'paypal' | 'bank_transfer';

function processPayment(method: PaymentMethod, amount: number) {
	console.log(`Processing ${method} payment of $${amount}`);
}

processPayment('paypal', 100);
processPayment('credit_card', 250);
//processPayment('bitcoin', 300); // Ошибка: Argument of type '"bitcoin"' is not assignable to parameter of type 'PaymentMethod'.

type Language = 'English' | 'Spanish' | 'French' | 'German';

function setLanguage(lang: Language) {
	console.log(`Setting language to ${lang}`);
}

setLanguage('French');
setLanguage('German');
//setLanguage('Italian'); // Ошибка: Argument of type '"Italian"' is not assignable to parameter of type 'Language'.

type AccessLevel = 'admin' | 'user' | 'guest';

function setAccess(level: AccessLevel) {
	console.log(`Setting access level to ${level}`);
}

setAccess('admin');
setAccess('user');
//setAccess('superuser'); // Ошибка: Argument of type '"superuser"' is not assignable to parameter of type 'AccessLevel'.

type statusCode = 200 | 300 | 400 | 500;

function handleResponse(status: statusCode) {
	switch (status) {
		case 200:
			console.log("OK");
			break;
		case 300:
			console.log("Multiple Choices");
			break;
		case 400:
			console.log("Bad Request");
			break;
		case 500:
			console.log("Internal Server Error");
			break;
		default:
			const _exhaustiveCheck: never = status;
			return _exhaustiveCheck;
	}
}

handleResponse(200);
handleResponse(400);
//handleResponse(600); // Ошибка: Argument of type '600' is not assignable to parameter of type 'statusCode'.
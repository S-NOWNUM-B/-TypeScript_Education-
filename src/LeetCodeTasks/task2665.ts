// ===== 2665: Counter II =====

type Counter = {
	increment: () => number;
	decrement: () => number;
	reset: () => number;
}

function createCounter(init: number): Counter {
	let val = init;

	return {
		increment: () => ++val,
		decrement: () => --val,
		reset: () => val = init
	};
}

const counter = createCounter(5);
console.log(counter.increment()); // 6
console.log(counter.increment()); // 7
console.log(counter.decrement()); // 6
console.log(counter.reset());     // 5
console.log(counter.decrement()); // 4
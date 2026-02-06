// ===== 2635: Apply Transform Over Each Element in Array =====

function map(arr: number[], fn: (n: number, i: number) => number): number[] {
	const result: number[] = [];

	for (let i = 0; i < arr.length; i++) {
		result[i] = fn(arr[i]!, i);
	}

	return result;
}

console.log(map([1, 2, 3], (n, i) => n + i)); // [1, 3, 5]
console.log(map([1, 2, 3], (n) => n * n)); // [1, 4, 9]
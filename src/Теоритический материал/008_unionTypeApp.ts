// ===== Union Types =====

function logId(id: string | number | boolean) {
	if (typeof id === "string") {
		console.log("ID as string:", id.toUpperCase());
	} else if (typeof id === "number") {
		console.log("ID as number:", id.toFixed(2));
	} else {
		console.log("ID as boolean:", id ? "True" : "False");
	}
}

function logError(err: string | string[]) {
	if (Array.isArray(err)) {
		console.log("Errors:");
		for (const e of err) {
			console.log("-", e);
		}
	} else {
		console.log("Error:", err);
	}
}

function logObject(obj: { a: number } | { b: string }) {
	if ("a" in obj) {
		console.log("Object has property 'a':", obj.a);
	} else {
		console.log("Object has property 'b':", obj.b);
	}
}

logId("user123");
logId(456);
logId(true);

logError("Single error message");
logError(["Error 1", "Error 2", "Error 3"]);

logObject({ a: 10 });
logObject({ b: "Hello" });
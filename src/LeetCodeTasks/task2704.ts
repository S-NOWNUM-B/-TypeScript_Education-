type ToBeOrNotToBe = {
    toBe: (val: any) => boolean;
    notToBe: (val: any) => boolean;
};

function expect(val: any): ToBeOrNotToBe {
    return {
        toBe: (expected: any) => {
            if (val === expected) return true;
            throw new Error("Not Equal");
        },
        notToBe: (expected: any) => {
            if (val !== expected) return true;
            throw new Error("Equal");
        }
    };
}

console.log(expect(5).toBe(5));      // true

try {
    expect(5).toBe(10);               // Выбросит Error: "Not Equal"
} catch (e) {
    console.log((e as Error).message);
}

try {
    expect(5).notToBe(5);            // Выбросит Error: "Equal"
} catch (e) {
    console.log((e as Error).message);
}

console.log(expect(5).notToBe(10));  // true

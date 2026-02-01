// ===== Readonly =====

const skills: readonly [number, string] = [1, "HTML"];
// Ошибка: Невозможно присвоить значение "CSS" элементу с индексом 1, так как он является только для чтения
//skills[1] = "CSS";
console.log(skills);
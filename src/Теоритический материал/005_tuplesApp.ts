// ===== Tuples (кортежи) =====

const arraySkills: [number, string] = [1, "HTML"];
console.log(arraySkills);

const arr: [number, string, ...boolean[]] = [1, "CSS", true, false, true];
console.log(arr);

// Кортежи в массивах
type skills = [number, string];

const skillsArray: skills[] = [
	[1, "HTML"],
	[2, "CSS"],
	[3, "JavaScript"],
];

for (const [id, name] of skillsArray) {
  console.log(id, name);
}
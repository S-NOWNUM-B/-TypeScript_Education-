class User {
	skills: string[] = [];

	addSkills(skills: string): void; // Перегрузка метода для одного навыка
	addSkills(skills: string[]): void; // Перегрузка метода для массива навыков
	addSkills(skills: string | string[]): void { // Реализация метода
		if (typeof skills === 'string') {
			this.skills.push(skills);
		} else {
			this.skills.push(...skills);
		}
	}
}

const user = new User(); // Создаем экземпляр класса User
user.addSkills('JavaScript');
user.addSkills(['TypeScript', 'React']);

console.log(user.skills);

function run(distance: number): void; // Перегрузка функции для одного параметра
function run(distance: number, speed: number): void; // Перегрузка функции для двух параметров
function run(distance: number, speed?: number): void { // Реализация функции
	if (speed) {
		console.log(`Running ${distance} meters at ${speed} m/s`);
	} else {
		console.log(`Running ${distance} meters`);
	}
}

run(100); // Вывод: Running 100 meters
run(200, 5); // Вывод: Running 200 meters at 5 m/s

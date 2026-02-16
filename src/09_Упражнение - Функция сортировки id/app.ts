// Код к упражнению:
//Необходимо написать функцию сортировки любых
//объектов, которые имеют id по убыванию и по возрастанию
//const data = [
//{ id: 2, name: 'Петя' },
//{ id: 1, name: 'Вася' },
//{ id: 3, name: 'Надя' },
//];

const data = [
	{ id: 2, name: 'Петя' },
  	{ id: 1, name: 'Вася' },
  	{ id: 3, name: 'Надя' },
];

function sortById(arr: { id: number; name: string }[], order: 'asc' | 'desc' = 'asc'): { id: number; name: string }[] {
	return arr.sort((a, b) => {
		if (order === 'asc') {
			return a.id - b.id;
		} else {
			return b.id - a.id;
		}
	});
}

console.log('Сортировка по возрастанию:');
console.log(sortById(data, 'asc'));

console.log('Сортировка по убыванию:');
console.log(sortById(data, 'desc'));
const rounds = 1000;
const dice = [4, 6, 8, 10, 12];
let total = 0;
let min = Number.POSITIVE_INFINITY;
let max = 0;

for (let i = 0; i < rounds; i++) {
	const result = test();
	total += result;
	min = Math.min(min, result);
	max = Math.max(max, result);
}

const avg = total / rounds;

console.log(`Average rounds: ${avg}  (min: ${min}, max: ${max})`);

function test() {
	let index = 0;
	let count = 0;

	while (index < dice.length) {
		count++;
		const result = roll(dice[index]);
		// console.log(`${count}: d${dice[index]} => ${result}`);
		if (result === dice[index]) {
			index++;
		}
	}
	return count;
}

function roll(die) {
	return Math.ceil(Math.random() * die);
}


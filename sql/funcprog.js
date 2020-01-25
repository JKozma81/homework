/**
 * 1.
 */
const t = [2, 30, 6, 8, 12, 4, 48];
const u = [2, 3];

const dividables = (numbers, divisors) =>
	numbers.filter(num => divisors.every(divisor => !(num % divisor)));

console.log(dividables(t, u));

/**
 * 2.
 */

const strs = ['aaa', 'abba', 'edda', 'abc'];
const chars = 'cba';

const legalStrings = (strings, charStr) =>
	strings.filter(word =>
		charStr.split('').every(char => word.includes(char))
	);

console.log(legalStrings(strs, chars));

/**
 * 3
 */

const nums = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10];

const getMax = nums =>
	nums.reduce(
		(maxVal, curentVal) =>
			(maxVal = curentVal > maxVal ? curentVal : maxVal)
	);

console.log(getMax(nums));

/**
 * 4.
 */

const condotionFn = num => num > 8;

const select = (arr, cond) => [
	arr.filter(element => cond(element)),
	arr.filter(element => !cond(element))
];

console.log(select(t, condotionFn));

/**
 * 5.
 */

const isPermutation = (subject, base) =>
	subject.length === base.length &&
	base.split('').every(char => subject.includes(char));

console.log('1. test: ', isPermutation('acbabac', 'bac'));
console.log('2. test: ', isPermutation('abc', 'bac'));

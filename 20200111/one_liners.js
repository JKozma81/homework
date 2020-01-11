/**
 * 1.
 */
const t = [ 2, 30, 6, 8, 12, 4, 48 ];
const u = [ 2, 3 ];

const division = (numbers, divisiors) => numbers.filter((num) => divisiors.every((divisor) => !(num % divisor)));

console.log(division(t, u));

/**
 * 2.
 */

const strs = [ 'aaa', 'abba', 'edda', 'abc' ];
const chars = 'cba';

const containsChars = (words, chars) => words.filter((word) => [ ...chars ].every((char) => word.includes(char)));

console.log(containsChars(strs, chars));

/**
 * 3
 */

const nums = [ 1, 2, 3, 4, 5, -6, -7, -8, -9, 10 ];

const getMax = (numList) => numList.reduce((maxVal, curentVal) => (maxVal = curentVal > maxVal ? curentVal : maxVal));

console.log(getMax(nums));

/**
 * 4.
 */

const condotionFn = (num) => num > 8;

const select = (arr, cond) => [ arr.filter((element) => cond(element)), arr.filter((element) => !cond(element)) ];

console.log(select(t, condotionFn));

// Alakítsuk arrow functionökké a függvényeket!
// Ahol lehet, hagyjunk el amit csak lehet a szintaxisból!

let double = x => 2 * x;

let invert = x => -x;

let hello = () => 'hello';

// Alakítsuk function expressionökké az arrow functionöket!

let helloPrefixer = function(s) {
	return 'hello ' + s;
};

let doNothing = function() {};

// Alakítsuk function declaractionné

function advice(raining) {
	return raining ? 'Take your umbrella' : 'Take you sunglasses';
}

function isEmpty(arr) {
	return !arr.length;
}

function tricky(want) {
	want = false;
	return want;
}

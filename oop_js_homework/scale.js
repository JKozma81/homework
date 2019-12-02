class Scale {
	constructor(minWeight) {
		this.minWeight = minWeight;
		this.weight = 0;
	}

	put(weight) {
		this.weight += weight;
	}

	take(weight) {
		this.weight -= weight;
	}

	measure() {
		if (this.weight < this.minWeight) {
			return 0;
		}
		return this.weight;
	}
}

/**
 * TEST CASES
 *
 * Simply uncomment the codes below to test for the diferent requirements
 */

// Túl kis súllyal való mérés

// const myScale = new Scale(50);
// console.log('The scale:', myScale);

// myScale.put(15);
// myScale.put(20);

// console.log('The scale:', myScale);
// console.log(`Measurement: ${myScale.measure()}`);

///////////////////////////////////////////////////////////////////////////////////////////

// Normál mérés

// const myScale = new Scale(50);
// console.log('The scale:', myScale);

// myScale.put(15);
// myScale.put(20);
// myScale.put(30);

// console.log('The scale:', myScale);
// console.log(`Measurement: ${myScale.measure()}`);

///////////////////////////////////////////////////////////////////////////////////////////

// Súly levétele

// const myScale = new Scale(50);
// console.log('The scale:', myScale);

// myScale.put(15);
// myScale.put(20);
// myScale.put(30);

// console.log('The scale:', myScale);

// myScale.take(15);

// console.log('The scale:', myScale);

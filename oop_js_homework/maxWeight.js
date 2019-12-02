class Scale {
	constructor(minWeight, maxWeight) {
		this.minWeight = minWeight;
		this.weight = 0;
		this.maxWeight = maxWeight;
		this.isBroken = false;
	}

	put(weight) {
		this.weight += weight;
		if (this.weight > this.maxWeight) {
			this.isBroken = true;
		}
	}

	take(weight) {
		this.weight -= weight;
	}

	measure() {
		if (this.isBroken) {
			return -1;
		} else {
			if (this.weight < this.minWeight) {
				return 0;
			}
			return this.weight;
		}
	}

	fix() {
		if (this.weight > 0) {
			console.log(
				'Before you fix the scale you need to remove the weights!'
			);
			return;
		} else {
			this.isBroken = false;
		}
	}
}

/**
 * TEST CASES
 *
 * Simply uncomment the codes below to test for the diferent requirements
 */

// Túl nagy súly mérlegre helyezése

// const myScale = new Scale(10, 30);
// console.log('The scale:', myScale);

// myScale.put(15);
// myScale.put(20);

// console.log(`Measuring: ${myScale.measure()}`);
// console.log('The scale:', myScale);

///////////////////////////////////////////////////////////////////////////////////////////

// Javítás lepakolás nélkül

// const myScale = new Scale(10, 30);
// console.log('The scale:', myScale);

// myScale.put(15);
// myScale.put(20);

// console.log(`Measuring: ${myScale.measure()}`);
// console.log('The scale:', myScale);
// myScale.fix();

///////////////////////////////////////////////////////////////////////////////////////////

// Javítás utánni mérés

// const myScale = new Scale(10, 30);
// console.log('The scale:', myScale);

// myScale.put(15);
// myScale.put(20);

// console.log(`Measuring: ${myScale.measure()}`);
// console.log('The scale:', myScale);

// myScale.take(15);
// myScale.take(20);

// myScale.fix();

// console.log('The scale:', myScale);

// myScale.put(10);
// myScale.put(10);

// console.log(`Measuring: ${myScale.measure()}`);

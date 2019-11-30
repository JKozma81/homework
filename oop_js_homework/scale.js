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

const myScale = new Scale(50);
console.log('The scale:', myScale);

myScale.put(15);
myScale.put(20);

console.log(`Measurement: ${myScale.measure()}`);

myScale.put(30);

console.log('The scale:', myScale);

console.log(`Measurement: ${myScale.measure()}`);

myScale.take(15);

console.log('The scale:', myScale);

console.log(`Measurement: ${myScale.measure()}`);

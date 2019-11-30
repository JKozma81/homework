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

const myScale = new Scale(50, 100);
console.log('The scale:', myScale);

myScale.put(15);
myScale.put(20);

console.log(`First measurement: ${myScale.measure()}`);

myScale.put(30);

console.log('The scale:', myScale);
console.log(`Second measurement: ${myScale.measure()}`);

myScale.put(30);
myScale.put(30);

console.log('The scale:', myScale);
console.log(`Third measurement: ${myScale.measure()}`);

myScale.take(20);

console.log('The scale:', myScale);

console.log(`Forth measurement: ${myScale.measure()}`);

myScale.fix();

myScale.take(15);
myScale.take(30);
myScale.take(30);
myScale.take(30);

console.log('The scale:', myScale);
myScale.fix();
console.log('The scale:', myScale);
myScale.put(80);
console.log(`Fifth measurement: ${myScale.measure()}`);

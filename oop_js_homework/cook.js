class Scale {
	constructor(minWeight, maxWeight) {
		this.minWeight = minWeight;
		this.maxWeight = maxWeight;
		this.isBroken = false;
		this.items = [];
	}

	put(item) {
		this.items.push(item);
		if (this.getWeight() > this.maxWeight) {
			this.isBroken = true;
		}
	}

	take(itemName) {
		let removableItem = this.items.find(item => item.name === itemName);
		if (removableItem) {
			this.items.splice(this.items.indexOf(removableItem), 1);
			return removableItem;
		}
		return null;
	}

	measure() {
		if (this.isBroken) {
			return -1;
		} else {
			if (this.getWeight() < this.minWeight) {
				return 0;
			}
			return this.getWeight();
		}
	}

	fix() {
		if (this.getWeight() > 0) {
			console.log(
				'Before you fix the scale you need to remove the weights!'
			);
			return;
		} else {
			this.isBroken = false;
		}
	}

	getWeight() {
		let weight = 0;
		this.items.forEach(item => (weight += item.weight));
		return weight;
	}
}

class Item {
	constructor(name, weight) {
		this.name = name;
		this.weight = weight;
	}
}

class Cook {
	constructor(scale) {
		this.scale = scale;
	}

	measure(items) {
		if (this.scale === null) {
			console.log(
				"My scale is at the mechanic and can't measure the items!"
			);
		} else {
			items.forEach(item => {
				this.scale.put(item);
			});
			return this.scale.measure();
		}
	}
	giveToMechanic(mechanic) {
		if (this.scale.isBroken) {
			if (this.scale.items.length !== 0) {
				// this.scale.items.forEach(item => {
				// 	this.scale.take(item.name);
				// });

				for (let i = 0; i < this.scale.items.length; i++) {
					console.log(this.scale.items);
					this.scale.take(this.scale.items[i].name);
				}
			}
			mechanic.scale = this.scale;
			this.scale = null;
		}
	}
	// takeFromMechanic(mechanic) {}
}

class Mechanic {
	constructor() {
		this.scale = null;
	}

	// take(scale: Scale)
	// fix()
	// giveBack(): Scale

	take(scale) {}
	fix() {}
	givback() {}
}

const myScale = new Scale(2, 10);
const item1 = new Item('Potato', 2);
const item2 = new Item('Salad', 4);
const item3 = new Item('Meat', 5);

const john = new Cook(myScale);
const peter = new Mechanic();

console.log(john);
console.log(john.measure([item1, item2, item3]));
console.log(myScale);
john.giveToMechanic(peter);
console.log(john);
console.log(peter);
console.log(peter.scale);

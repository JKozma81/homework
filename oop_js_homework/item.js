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

const myScale = new Scale(50, 100);
const item1 = new Item('Gaba monitor', 5);
const item2 = new Item('Cedrus mineral water', 9);
const item3 = new Item('LG washing machine', 50);

console.log('***************************************');
console.log('The scale:', myScale);
console.log('***************************************');

myScale.put(item3);
myScale.put(item1);
myScale.put(item2);

console.log('***************************************');
console.log(myScale.items);
console.log(myScale.getWeight());
console.log('***************************************');

console.log('***************************************');
console.log(myScale.take('Gaba monitor'));
console.log('***************************************');

console.log('***************************************');
console.log('The scale:', myScale);
console.log('***************************************');

console.log('***************************************');
console.log(myScale.take('Basket'));
console.log('***************************************');

console.log('***************************************');
console.log(myScale.getWeight());
console.log(myScale.measure());
console.log('***************************************');

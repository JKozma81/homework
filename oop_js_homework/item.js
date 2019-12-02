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

/**
 * TEST CASES
 *
 * Simply uncomment the codes below to test for the diferent requirements
 */

// Dolgok elhelyezése a mérlegen

// const myScale = new Scale(10, 30);
// const item1 = new Item('Meat', 5);
// const item2 = new Item('Potato', 9);
// const item3 = new Item('Salt', 10);

// console.log('The scale:', myScale);

// myScale.put(item3);
// myScale.put(item1);
// myScale.put(item2);

// console.log(myScale.items);

////////////////////////////////////////////////////////////////////////////////////

// Mérlegen elhelyezett dolgok súlyának lekérése

// const myScale = new Scale(10, 30);
// const item1 = new Item('Meat', 5);
// const item2 = new Item('Potato', 9);
// const item3 = new Item('Salt', 10);

// console.log('The scale:', myScale);

// myScale.put(item3);
// myScale.put(item1);
// myScale.put(item2);

// console.log(myScale.items);
// console.log(myScale.getWeight());

////////////////////////////////////////////////////////////////////////////////////

// Mérlegen lévő dolog levétele ha az valóban rajta is van

// const myScale = new Scale(10, 30);
// const item1 = new Item('Meat', 5);
// const item2 = new Item('Potato', 9);
// const item3 = new Item('Salt', 10);

// console.log('The scale:', myScale);

// myScale.put(item3);
// myScale.put(item1);
// myScale.put(item2);

// console.log(myScale.items);

// console.log('Taking one item from the scale ', myScale.take('Meat'));

// console.log(myScale.items);

////////////////////////////////////////////////////////////////////////////////////

// Mérlegen lévő dolog levétele ha az valójában nincs rajta

// const myScale = new Scale(10, 30);
// const item1 = new Item('Meat', 5);
// const item2 = new Item('Potato', 9);
// const item3 = new Item('Salt', 10);

// console.log('The scale:', myScale);

// myScale.put(item3);
// myScale.put(item1);
// myScale.put(item2);

// console.log(myScale.items);

// console.log('Taking one item from the scale ', myScale.take('Banana'));

// console.log(myScale.items);

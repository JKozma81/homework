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
		let removableItem = this.items.find((item) => item.name === itemName);
		if (removableItem) {
			this.items.splice(this.items.findIndex((item) => item === removableItem), 1);
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
			console.log('Before you fix the scale you need to remove the weights!');
			return;
		} else {
			this.isBroken = false;
		}
	}

	getWeight() {
		let weight = 0;
		this.items.forEach((item) => (weight += item.weight));
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
			console.log("My scale is at the mechanic and can't measure the items!");
		} else {
			items.forEach((item) => {
				this.scale.put(item);
			});

			if (this.scale.measure() === -1) {
				return 'Ajajaj, my scale is broken, i need to take it to the mechanic!';
			} else {
				return this.scale.measure();
			}
		}
	}

	getItemNames() {
		let itemNames = [];

		this.scale.items.forEach((item) => {
			itemNames.push(item.name);
		});

		return itemNames;
	}

	takeDownItemsFromScale() {
		if (this.scale.items.length !== 0) {
			let items = this.getItemNames();

			items.forEach((item) => {
				this.scale.take(item);
			});
		}
	}

	giveToMechanic(mechanic) {
		if (this.scale.isBroken) {
			this.takeDownItemsFromScale();
			mechanic.take(this.scale);
			this.scale = null;
		} else {
			console.log("My scale is working fine, i don't need to give it to the mechanic!");
		}
	}

	takeFromMechanic(mechanic) {
		if (mechanic.scale && !mechanic.scale.isBroken) {
			this.scale = mechanic.giveBack(this);
		} else if (mechanic.scale && mechanic.scale.isBroken) {
			console.log('The mechanic needs to fix my scale before i can take it back!');
		} else {
			console.log('My scale is working fine and the mechanic has no scale!');
		}
	}
}

class Mechanic {
	constructor() {
		this.scale = null;
	}

	take(scale) {
		if (scale.isBroken && scale.items.length === 0) {
			this.scale = scale;
		} else if (scale.isBroken && scale.items.length > 0) {
			console.log('Please take down all the things from the scale!');
		} else {
			console.log('The scale is working why to take it?');
		}
	}

	fix() {
		if (this.scale) {
			this.scale.fix();
		} else {
			console.log("I don't have anything to fix!");
		}
	}

	giveBack(cook) {
		if (this.scale && !this.scale.isBroken) {
			cook.scale = this.scale;
			this.scale = null;
			return cook.scale;
		} else if (this.scale && this.scale.isBroken) {
			console.log('The scale must be fixed before i can give it back!');
		} else {
			console.log("I don't have anything to give back!");
		}
	}
}

/**
 * TEST CASES
 *
 * Simply uncomment the codes below to test for the diferent requirements
 */

// Minden rendesen működik

// const myScale = new Scale(2, 15);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);

// console.log(
// 	'John measure the items please',
// 	john.measure([item1, item2, item3])
// );

//////////////////////////////////////////////////////////////////////////////

// Működőképes mérleg átadása a szerelőnek

// const myScale = new Scale(2, 15);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// john.giveToMechanic();

//////////////////////////////////////////////////////////////////////////////

// Mérleg visszavétele a szerelőtől úgy, hogy az a kuktánál van és működik

// const myScale = new Scale(2, 15);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// john.takeFromMechanic(peter);

//////////////////////////////////////////////////////////////////////////////

// Működő mérleget megpróbálja a szerelő elvenni

// const myScale = new Scale(2, 15);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// peter.take(john.scale);

//////////////////////////////////////////////////////////////////////////////

// Mérleg túlterhelése

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

//////////////////////////////////////////////////////////////////////////////

// Rossz mérleget átadja a kukta a szerelőnek

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

// john.giveToMechanic(peter);

// console.log('Kukta mérlege: ', john.scale);
// console.log('Szerelőnél lévő mérleg: ', peter.scale);

//////////////////////////////////////////////////////////////////////////////

// Rossz mérleget megpróbálja a kukta visszavenni

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

// john.giveToMechanic(peter);

// console.log('Kukta mérlege: ', john.scale);
// console.log('Szerelőnél lévő mérleg: ', peter.scale);

// john.takeFromMechanic(peter);

//////////////////////////////////////////////////////////////////////////////

// Rossz mérleget megpróbálja a szerelő visszaadni

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

// john.giveToMechanic(peter);

// console.log('Kukta mérlege: ', john.scale);
// console.log('Szerelőnél lévő mérleg: ', peter.scale);

// peter.giveBack(john);

//////////////////////////////////////////////////////////////////////////////

// Szerelő megjavítja a mérleget

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

// john.giveToMechanic(peter);

// console.log('Rossz a szerelőnél lévő mérleg?: ', peter.scale.isBroken);

// peter.fix();

// console.log('Rossz a szerelőnél lévő mérleg?: ', peter.scale.isBroken);

//////////////////////////////////////////////////////////////////////////////

// Kukta visszaveszi a javított mérleget és leteszteli

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

// john.giveToMechanic(peter);

// console.log('Szerelőnél lévő mérleg állapota: ', peter.scale.isBroken);

// peter.fix();
// john.takeFromMechanic(peter);

// console.log('Kukta mérlege: ', john.scale);
// console.log('Szerelőnél lévő mérleg: ', peter.scale);

// console.log('John measure the items please', john.measure([ item1, item2 ]));

//////////////////////////////////////////////////////////////////////////////

// Szerelő visszaadja a javított mérleget a kuktának és az leteszteli

// const myScale = new Scale(2, 10);
// const item1 = new Item('Potato', 2);
// const item2 = new Item('Salad', 4);
// const item3 = new Item('Meat', 5);

// const john = new Cook(myScale);
// const peter = new Mechanic();

// console.log('John measure the items please', john.measure([ item1, item2, item3 ]));

// john.giveToMechanic(peter);

// console.log('Rossz a szerelőnél lévő mérleg?: ', peter.scale.isBroken);

// peter.fix();
// peter.giveBack(john);

// console.log('Szerelőnél lévő mérleg: ', peter.scale);
// console.log('Kukta mérlege: ', john.scale);

// console.log('John measure the items please', john.measure([ item1, item2 ]));

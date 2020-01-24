// Írjuk át a function expressionöket, ahol lehet,
// arrow functionre. A paramétereken és a visszatérési értékeken
// ne változtassunk. Nem minden esetben lehetséges az
// átírás!

// (1)

let steve = {
	name: 'Steve',
	intro: function() {
		return `My name is ${this.name}`;
	},
	mood: function(weather) {
		switch (weather) {
			case 'rainy':
				return this.rainy();
			case 'sunny':
				return this.sunny();
			default:
				return this.default();
		}
	},
	rainy: () => 'coding',
	sunny: () => 'swimmimg',
	default: () => {}
};
console.log(steve.intro());
console.log(steve.mood('rainy')); // == 'coding'

// (2)

const factory = {
	manufacturer: 'Fjord',
	mechanic: function() {
		let that = this;
		return {
			canFix: car => car.manufacturer === that.manufacturer
		};
	}
};

const car = { manufacturer: 'Fjord' };
console.log(factory.mechanic().canFix(car)); // == true

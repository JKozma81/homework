// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére. Használjuk a default
// érték megadását az undefined ellenőrzések helyettesítésére.

// (1)
const userData = ['John Doe', 'john@example.com'];

const [name = 'N/A', email = 'N/A', phone = 'N/A'] = userData;

console.log(name, email, phone);

// (2)

const productData = {
	phones: ['phone 1', 'phone 2', 'phone 3'],
	tablets: ['tablet 1', 'tablet 2'],
	appliances: {
		kitchen: ['blender', 'toaster', 'microwave oven'],
		other: ['iron', 'haircutter']
	}
};

// Figyelem, a nyelvi szabályok miatt, ha nem használunk explicite
// pontosvesszőt, ReferenceError: Cannot access 'products' before initialization
// hibát kaphatunk, amikor a products objektumba próbálunk destrucuringelni
const products = {};

({
	phones: products.phones = [],
	tablets: products.tablets = [],
	appliances: {
		kitchen: products.kitchen = [],
		bathroom: products.bathroom = [],
		other: products.other = []
	}
} = productData);

console.log(products);

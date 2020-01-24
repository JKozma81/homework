// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// az objektumok adatainak kinyerésére

// (1)

const person = { first: 'John', last: 'Doe' };
const { first, last } = person;

console.log(first, last);

// (2)

person.address = {
	city: 'Whasington',
	state: 'DC',
	street: '6th street'
};

const {
	address: { state }
} = person;

/**
 * Másik megoldás:
 *
 * const { state } = person.address;
 */

console.log(state);

// Írjuk át a kódrészleteket, hogy destructuringet használjanak
// a tömbök adatainak kinyerésére

// (1) egyszerű destructuring
const arr1 = ['Budapest', 'HU'];
const [city, country] = arr1;

// (2) tömbelemek elhagyása
// Az eredeti példában a yob a data[0]-ra hivatkozott hibásan, mivel a dátum a data[1]-ben elérhető
const data = ['Steve Ballmest', '1970', '01', '01', 'Washington', 'DC'];
const [name, yob, , , city] = data;

// (3) visszatérési érték destructuringja
// Az eredeti példában a split paraméter nélkül volt megadva, ami így a teljes szöveget beteszi egy tömbbe
// a példát értelmezve viszont nekünk a ';' mentén kell a stringet felbontani elemeire
function details() {
	return 'Steve Ballmest;1970;01;01;Washington;DC'.split(';');
}
const [name, yob] = details();

// (4) visszatérési érték destructuringja

const [, removed] = [1, 2, 3];

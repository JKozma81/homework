// Derítsük fel a hátterét és javítsuk ki
// az alábbi SyntaxErrort!
// Tipp: a válasz az Exploring ES6 könyv Destructuring
// fejezetében van!
let a, b

{ a, b } = { foo: 1, bar: 2 }

/**
 * Maga a syntax error azért van, mivel egy statement nem kezdődhet kapcsos zárójellel "{".
 * Ennek a hibának a kijavítása érdekében a fenti expression-t teljes egészében zárójelek közé kell tenni ()
 */
let a, b

({ a, b } = { foo: 1, bar: 2 })

/**
 * Vagy magát a változók deklarációját kell az utasítással egy sorban megtenni
 */

let { a, b } = { foo: 1, bar: 2 };

/**
 * Ezen felül egy objektum destructuring-nál az esetek többségében a létező kulcsokra kell hivatkozniuk a változóknak,
 * máskülönben undefined értéket kapnak.
 *
 * let { foo, bar } = { foo: 1, bar: 2 }
 *
 * Amennyiben viszont mindenképpen a megadott változókat szeretnénk használni
 * és az adatokat is ki akarjuk nyerni, ezt az alábbi módszerrel tehetjük meg.
 * Azaz a létező kulcsokat/propetyket az új változókhoz rendeljük.
 *
 * let {foo: a, bar: b} = { foo: 1, bar: 2 }
 */


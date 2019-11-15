// Feladat 1
// 1. paros szamok tombbe gyujtese 1-100 ig, minden tizedik iteracioban irjuk ki a console-ba a tomb aktualis hosszat
// a ciklus utan irjuk ki a tomb erteket a console-ba

const evenNumbers = [];

for (let i = 1; i <= 100; i++) {
  if (!(i % 2)) {
    evenNumbers.push(i);
  }

  if (!(i % 10)) {
    console.log('*********************************');
    console.log(`A tömb hossza: ${evenNumbers.length}`);
    console.log('*********************************');
  }
}
console.log('*********************************');
console.log(`A tömb tartalma: ${evenNumbers}`);
console.log('*********************************');

// Feladat 2
// 2. veletlen szamok kiszamolasa
// 0 es 100 kozotti veletlen szamok generalasa ciklusban, kilepes, mikor osszegyujtottunk 10 szamot ami nagyobb mint 50.
// a ciklus futasa utan irjuk ki az osszegyujtott szamokat a console-ba

const randomNumbers = [];
let arrLength = randomNumbers.length;

while (arrLength < 10) {
  const num = Math.floor(Math.random() * 100 + 1);
  if (num > 50) {
    randomNumbers.push(num);
    arrLength++;
  }
}

console.log('*********************************');
console.log(`Véletlen számok: ${randomNumbers}`);
console.log('*********************************');

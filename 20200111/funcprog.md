# Funkcionális JavaScript

Az alábbi feladatok megoldásához igyekezzünk minél több magasabbrendű Array függvényt használni. Ciklust egyik
feladat megírásához sem használhatunk.

---

Írjunk egy `dividables(numbers, divisors)` függvényt, amely a numbers paraméterben kapott egész számokból álló tömbből kiválogatja azokat, amelyek a divisors tömbben kapott összes egész számmal osztható.

A visszatérési érték a kiválogatott számokat tartalmazó tömb.

Példa:
```js

console.log(dividables([1, 2, 3, 4, 5, 6, 7, 8], [2]))
// [2, 4, 6, 8]

console.log(dividables([1, 2, 3, 4, 5, 6, 7, 8], [2, 3]))
// [6]


```

1 pont

---

Írjunk egy `legalStrings(strings, charStr)` függvényt, amely a strings paraméterben kapott string tömbből kiválogatja azokat a stringeket, amelyekben nincs más karakter csak olyan, amely a 
charStr paraméterben található stringben van.

A visszatérési érték a kiválogatott stringek tömbje.

Tipp: használjuk a String.prototype.Split függvényt a stringek
tömbbé alakítására

```js
console.log(legalStrings(['a', 'aa', 'ab', 'aaa'], 'a'))
// ['a', 'aa', 'aaa']

console.log(legalStrings(['a', 'aa', 'ab', 'aaa'], 'ab'))
// ['a', 'aa', 'ab', 'aaa']

console.log(legalStrings(['b', 'bb', 'ab', 'ba'], 'ab'))
// ['b', 'bb', 'ab', 'ba']
```

1 pont

---

Legyen nums = [1, 2, 3, 4, 5, -6, -7, -8, -9, 10]

Írjunk egy getMax(nums) függvényt, amely a nums paraméterben érkező egész számokat tartalmazó tömbből visszaadja a legnagyobb elemet. 

Tipp: használjunk reducet!

```js
console.log(getMax([4])) // 4
console.log(getMax([1, 2, 3, 4, 5])) // 5
console.log(getMax([])) // undefined

```

2 pont

---

Írjunk egy select(arr, cond) egy függvény, ahol arr egy tömb, cond egy logikai értéket visszaadó függvény

A select az arr elemeit két külön tömbbe válogatja
aszerint, hogy igaz volt-e rájuk a cond feltétel vagy sem

A select visszatérési értéke egy kételemű tömb.

```js

```

---

Írjunk egy `isPermutation(subject, base)` függvényt, amely megmondja a subject stringről, hogy a base string permutációja-e,
azaz, hogy a subject string előállítható-e kizárólag a base string karaktereiből úgy, hogy csak a base karaktereit használjuk.

Példa:

```js
console.log('aa', 'a') // false, base karakterei "elfogytak"
console.log('a', 'aa') // false, subject nem használta fel az összes karaktert
console.log('aa', 'aa') // true, felhasználtuk az összes karaktert

console.log('ab', 'ab') // true
console.log('ab', 'ba') // true
console.log('ba', 'ab') // true
console.log('ba', 'ba') // true

```

2 pont

---



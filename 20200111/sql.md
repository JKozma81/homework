# SQL

## Adatok előkészítése (3 pont)

Írjuk meg a megfelelő tábla szerkezetet létrehozó SQL-t,
hogy a példa adatbázist importálni tudjuk.

Az SQL-t egy `prepare.sql` fájlba írjuk meg.

Az importálandó CSV adatforrás: [golden-globe-awards.zip](./golden-globe-awards.zip)

Aki nem boldogul a tábla létrehozásával, annak a kész adatbázis: [sqlhw01](./sqlhw01)

## Írjunk lekérdezést a következő kérdések megválaszolására! (3 pont)

1. Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek.

1. Azoknak a színészeknek a nevei, akik az 5. díjátadón díjat is kaptak.

1. Az 1950-es években jelölt színészek nevei. Egy név csak egyszer szerepeljel az eredményben.

1. Azoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert.
**Tipp**: ne féljük JOIN-t használni

> például: ha Meryl Streepet 1960-ban jelölték, de nem nyert, majd 1961-ben is jelölték és akkor nyert, akkor 1961 benne lesz az eredményhalmazban

## Lekérdezések futtatása Node.jsből (3 pont)

Írjunk egy `runqueries.js` programot amely csatlakozik az `sqlhw01` adatbázishoz.

A program egymás után lefuttatja a fenti lekérdezéseket és kiírja az eredményüket.

A kiííráskor egy sorba kerül a lekérdezés szövege, majd az eredményhalmaz elemei soronként (**a nevek csak példák!**):

```
$ node runqueries.js
Azoknak a színészeknek a nevei, akiket az 5. díjátadón jelöltek:

- Mercedes McCambridge          
- Miriam Hopkins                
- James Whitmore                
- David Brian                   
- Robert Rossen 
...

Az 1950-es években jelölt színészek nevei:
- Mercedes McCambridge          
- Miriam Hopkins                
- James Whitmore                
- David Brian                   
- Robert Rossen 
...


```

## Paraméterezhető lekérdezések (5 pont)

Fejlesszük tovább a programot.

Legyen a továbbfejlesztett program a `parameterized.js`.

A program két argumentumot vár, a lekérdezés sorszámát (1, 2, 3 vagy 4) illetve a lekérdezésben szereplő feltétel paraméterét.

1. Azoknak a színészeknek a nevei, akiket az **5. díjátadón** jelöltek: a paraméter a díjátadó sorszáma legyen.
1. Azoknak a színészeknek a nevei, akik az **5. díjátadón** díjat is kaptak: a paraméter a díjátadó sorszáma legyen.
1. Az **1950-es években** jelölt színészek nevei. Egy név csak egyszer szerepeljel az eredményben: a paraméter az évtized legyen
1. Azoknak az éveknek a listája, amikor **Meryl Streep** úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert.
A paraméter a színész neve legyen.

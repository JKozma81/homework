1. Minek a rövidítése az SQL?

structured query language

2. Mit jelent az, hogy egy adatbázis relációs?

azt jelenti ,hogy az adatokat egy relációs modell szerint tárolja

a relációs modell lényege, hogy adott halmaz elemeit (pl. alkalmazottak)
más halmazok elemeivel "kapcsoljuk" (pl. munkakörök)

reláció szabatos definíciója: két halmaz direkt szorzatának a részhalmaza

3. Mik ezek a nyelvi elemek és mire valók?

- SELECT: az eredményhalmaz (result set) oszlopainak felsorolása
- FROM: az eredményhalmaz halmaz sorai ezekből a táblákból kerülnek lekérdezésre
  a select lista oszlopai a from lista tábláiank oszlopai vagy azoknak derivatív oszlopai lehetnek
- WHERE
- az eredményhalmaz szűrési feltétele, az eredményhalmaz elemei azok a sorok, amelyek megfelelnek a feltétel(ek)nek
- JOIN

a lekrédezés alapjául szolgáló táblák kapcsolásának megadására való

adott feltétel mentén egy sort egy táblából hozzákapcsolhatunk egy másik táblának
az adott feltételt teljesítő sorához

4. Mi a különbség a JOIN és a LEFT JOIN között?

a join nem veszi figyelembe azokat a sorokat, ahol a megadott kapcsoló attribútum
értéke null, míg a left join a kapcsolás bal oldalán álló tábla esetén tartalmazi fogja
azokat a sorokat is, amelekhez nem lehetett adatsort kapcsolni

5. Mi a különbség a CHAR és a VARCHAR között?

a char fix méretű területen tárolja az adatot, akkor is, ha a megadott
méretnél kisebb az adat, míg a varchar, mindig annyi helyet foglal, amekkora
az adat (de legfelejebb a megadott méretet)

6. Írj egy valid szövegdarabot az alábbi szinaxisgráfra!


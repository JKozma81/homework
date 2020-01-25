- Al Pacino jelölései a film megjelenésének növekvő sorrendjében

SELECT
    year_film,
    nominee,
    category,
    film
FROM
    awards
WHERE
    nominee = 'Al Pacino'
ORDER BY
    year_film;


SELECT
    year_film,
    nominee,
    category,
    film
FROM
    awards
HAVING
    nominee = 'Al Pacino'
ORDER BY
    year_film;


- A jelölt jeloltek száma (=== hány darab egyedi név szerepel az adatbázisban)

- Melyik évben hány jelölt volt? Év szerint növekvő sorrendben.



- Melyik évben hány kategória volt? Év szerint növekvő sorrendben.


- Melyik évben jelölték először Tom Hankset?
- Melyik évben nyert először Tom Hanks?



Melyik évben volt a legtöbb női jelölt?

TIPP: WHERE category LIKE '%Actress%'



Rakjuk csökkenő sorrendbe a színészeket a jelölés/nyerés arány szerint

az eredményhalmaznak az első 10 sorát tartsuk meg



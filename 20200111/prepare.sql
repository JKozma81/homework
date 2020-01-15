CREATE TABLE awards
(
  year_film YEAR,
  year_award YEAR,
  ceremony INT,
  category VARCHAR(200),
  nominee VARCHAR(100),
  film VARCHAR(100),
  win BOOLEAN
);

-- Az alábbi 2 parancsot kikommenteltem, mivel nem specifikusan sql parancsok
-- és a linterem folyamatos hibát jelzett rájuk

-- .mode csv
-- .import golden_globe_awards.csv awards

DELETE FROM awards WHERE rowid=1;
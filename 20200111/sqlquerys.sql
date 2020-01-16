SELECT nominee
FROM awards
WHERE ceremony = 5 AND (category LIKE '%Actress%' OR category LIKE '%Actor%');
-- 
SELECT nominee
FROM awards
WHERE ceremony = 5 AND (category LIKE '%Actress%' OR category LIKE '%Actor%') AND win = 'True';
-- 
SELECT DISTINCT nominee
FROM awards
WHERE year_award BETWEEN 1950 AND 1959 AND (category LIKE '%Actress%' OR category LIKE '%Actor%');
-- 
SELECT DISTINCT a.year_award
FROM awards AS a JOIN awards AS b ON a.nominee = b.nominee
WHERE a.nominee = 'Meryl Streep' AND b.nominee = 'Meryl Streep' AND a.year_award = b.year_award + 1 AND a.win = 'True' AND b.win = 'False';

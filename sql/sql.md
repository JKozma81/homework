# limit es offset

SELECT rowid, nominee FROM awards LIMIT 3;
SELECT rowid, nominee FROM awards LIMIT 3 OFFSET 3; # atugorja az elso 3 sort
SELECT rowid, nominee FROM awards OFFSET 3 LIMIT 3; # syntax error

# order by

SELECT rowid, nominee FROM awards ORDER BY nominee LIMIT 10;
SELECT rowid, nominee FROM awards ORDER BY nominee ASC LIMIT 10;
SELECT rowid, nominee FROM awards ORDER BY nominee DESC LIMIT 10;

# count, max, min, avg

# group by

select count(win), nominee from awards group by nominee  order by count(win) desc limit 5;
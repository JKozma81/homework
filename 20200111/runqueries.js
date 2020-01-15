const sqlite3 = require('sqlite3').verbose();

const DBFILE = './DB/sqlhw01';
const QUERIES = {
	1: {
		desc: 'Az 5. Golden Globe Díjátadó jelöltjei:',
		query:
			'SELECT nominee FROM awards WHERE ceremony = 5 AND (category LIKE "%Actress%" OR category LIKE "%Actor%");'
	},

	2: {
		desc: 'Az 5. Golden Globe Díjátadó nyertesei:',
		query:
			'SELECT nominee FROM awards WHERE ceremony = 5 AND (category LIKE "%Actress%" OR category LIKE "%Actor%") AND win = "True";'
	},

	3: {
		desc: 'Az 1950-es években Golden Globe Díjra jelöltek:',
		query:
			'SELECT DISTINCT nominee FROM awards WHERE year_award BETWEEN 1950 AND 1959 AND (category LIKE "%Actress%" OR category LIKE "%Actor%");'
	},

	4: {
		desc:
			'Azoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert:',
		query:
			'SELECT DISTINCT a.year_award FROM awards AS a JOIN awards AS b ON a.nominee = b.nominee WHERE a.nominee = "Meryl Streep" AND b.nominee = "Meryl Streep" AND a.year_award = b.year_award + 1 AND a.win = "True" AND b.win = "False";'
	}
};

const db = new sqlite3.Database(DBFILE);

const runQuery = (queryNum, queryParam) => {
	db.all(QUERIES[queryNum].query, (err, rows) => {
		if (err) console.error(err);

		console.log('\n\r', QUERIES[queryNum].desc, '\n\r');
		rows.forEach((res) => {
			console.log(' -', res[queryParam]);
		});
	});
};

db.serialize(() => {
	runQuery(1, 'nominee');
	runQuery(2, 'nominee');
	runQuery(3, 'nominee');
	runQuery(4, 'year_award');
});

db.close();

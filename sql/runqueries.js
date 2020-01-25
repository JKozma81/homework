const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');

const QUERYLIST = fs.readFileSync('./sqlquerys.sql').toString().split('--');
const DBFILE = './DB/sqlhw01';

const QUERIES = {
	1: {
		desc: 'Az 5. Golden Globe Díjátadó jelöltjei:',
		query: QUERYLIST[0]
	},

	2: {
		desc: 'Az 5. Golden Globe Díjátadó nyertesei:',
		query: QUERYLIST[1]
	},

	3: {
		desc: 'Az 1950-es években Golden Globe Díjra jelöltek:',
		query: QUERYLIST[2]
	},

	4: {
		desc:
			'Azoknak az éveknek a listája, amikor Meryl Streep úgy nyert díjat, hogy a megelőző évben is jelölték, de akkor nem nyert:',
		query: QUERYLIST[3]
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

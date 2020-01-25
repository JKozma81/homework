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

const queryId = parseInt(process.argv[2]);
const queryCondParam = !(parseInt(process.argv[3]) % 10)
	? process.argv[3]
	: parseInt(process.argv[3]) - parseInt(process.argv[3]) % 10;

const modifyStr = (strToModify, queryNum, queryCondParam) => {
	if ((strToModify === 'desc' || strToModify === 'query') && (queryNum === 1 || queryNum === 2)) {
		return QUERIES[queryNum][strToModify].replace('5', queryCondParam);
	}

	if (strToModify === 'desc' && queryNum === 3) {
		let condParamInt = parseInt(queryCondParam);
		let dateStr = condParamInt <= 20 ? `20${queryCondParam}` : `19${queryCondParam}`;

		switch (condParamInt) {
			case 00:
			case 10:
			case 40:
			case 50:
			case 70:
			case 90:
				dateStr += '-es';
				break;
			case 20:
			case 30:
			case 60:
			case 80:
				dateStr += '-as';
				break;
		}
		return QUERIES[queryNum][strToModify].replace('1950-es', dateStr);
	}

	if (strToModify === 'query' && queryNum === 3) {
		let dateStr = parseInt(queryCondParam) / 10 <= 2 ? `20${queryCondParam}` : `19${queryCondParam}`;
		let qeryDateStr = QUERIES[queryNum][strToModify].replace(1950, dateStr);

		return qeryDateStr.replace(1959, parseInt(dateStr) + 9);
	}

	if (strToModify === 'desc' && queryNum === 4) {
		return QUERIES[queryNum][strToModify].replace('Meryl Streep', queryCondParam);
	}

	if (strToModify === 'query' && queryNum === 4) {
		let res = QUERIES[queryNum][strToModify].replace(
			`a.nominee = 'Meryl Streep'`,
			`a.nominee = "${queryCondParam}"`
		);
		return res.replace(`b.nominee = 'Meryl Streep'`, `b.nominee = "${queryCondParam}"`);
	}
};

const runQuery = (queryNum, queryParam) => {
	const db = new sqlite3.Database(DBFILE);
	db.serialize(() => {
		db.all(modifyStr('query', queryNum, queryCondParam), (err, rows) => {
			if (err) console.error(err);

			console.log('\n\r', modifyStr('desc', queryNum, queryCondParam), '\n\r');

			if (!rows.length) {
				console.log('Nincs eredmény az adatbázisban!');
				return;
			}

			rows.forEach((resObj) => {
				console.log(' -', resObj[queryParam]);
			});
		});
	});
	db.close();
};

if (queryId === 4) {
	runQuery(queryId, 'year_award');
} else {
	runQuery(queryId, 'nominee');
}

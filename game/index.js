const express = require('express');
const path = require('path');

const checkForWin = require('./controllers/gameController')

const PORT = process.env.PORT || 5000;
const app = express();


const table = [
	[undefined, undefined, undefined],
	[undefined, undefined, undefined],
	[undefined, undefined, undefined]
];

let freeSpaces = 9;
let lastChar = '';

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.get('/places', (req, res) => {
	const messages = [];

	if (Object.keys(req.query).length && freeSpaces > 0) {
		const { char, x, y } = req.query;

		if (char === lastChar) {
			messages.push('Another player is comming');
			res.render('home', { table, messages });
			return;
		}

		if (x > 2 || y > 2 || x < 0 || y < 0) {
			messages.push('Coordinates must be between 0 and 2');
			res.render('home', { table, messages });
			return;
		}

		if (!x || !y || !char) {
			messages.push('Missing parameter');
			res.render('home', { table, messages });
			return;
		}

		if (table[x][y] != undefined) {
			messages.push('Place allready taken');
			res.render('home', { table, messages });
			return;
		}

		if (table[x][y] === undefined) {
			table[x][y] = char;
			lastChar = char;
			freeSpaces--

			let { win, winnerChar } = checkForWin(table, char);

			if (win) {
				messages.push(`THE WINNER IS ${winnerChar.toUpperCase()}`);
				res.render('home', { table, messages });
				return;
			}

			if (freeSpaces === 0 && !win) {
				messages.push(`It's a draw!`);
				res.render('home', { table, messages });
				return;
			}

		}

		res.render('home', { table, messages });
		return;
	}

	res.render('home', { table, messages });
});

app.get('/places', (req, res) => {
	console.log(req)
})

app.listen(PORT, () => console.log('App is started'));

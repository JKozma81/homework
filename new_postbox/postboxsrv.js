const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');
const path = require('path');
const fetch = require('node-fetch');

const mails = require('./data/mail');

const PORT = 3000;

const app = express();

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
	res.render('home', { mails });
});

app.get('/inbox', (req, res) => {
	res.status(200).json(mails);
});

app.post('/inbox', (req, res) => {
	mails.unshift(req.body);
	res.sendStatus(200);
});

app.post('/outgoing', (req, res) => {
	let { nameAndAddress, message } = req.body;

	nameAndAddress = nameAndAddress.split(' ');

	const url =
		nameAndAddress.length === 2
			? 'http://' + nameAndAddress[1] + '/inbox'
			: 'http://' + nameAndAddress[0] + '/inbox';

	const from = nameAndAddress.length === 2 ? nameAndAddress.join(' ') : '<Anonymous> ' + nameAndAddress[0];

	fetch(`${url}`, {
		method: 'POST',
		headers: {
			'Content-Type': 'Application/json'
		},
		body: JSON.stringify({ from, message })
	})
		.then((resp) => {
			if (resp.status === 200) {
				res.sendStatus(200);
				return;
			}
			throw "Can't send message";
		})
		.catch((err) => {
			console.error(err.toString());
			res.status(404).json({ message: err.toString() });
		});
});

app.listen(PORT, () => console.log(`App is started and listening on port ${PORT}`));

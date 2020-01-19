const express = require('express');
const path = require('path');
const { existsSync } = require('fs');
const sqlite3 = require('sqlite3');

const PORT = process.env.PORT || 5000;
const USERSDB = './db/users.db';
const app = express();
const usersTable = `
<table>
<thead>
	<tr><th>Name</th><th>Email</th><th>Password</th></tr>
</thead>
<tbody>
`;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

function getUsersFromDB(callback) {
	const db = new sqlite3.Database(USERSDB);
	db.serialize(() => {
		db.all('SELECT * FROM users', (err, rows) => {
			callback(rows);
		});
	});
	db.close();
}

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/adduser', (req, res) => {
	const { user_name, user_email, user_password } = req.body;

	const db = new sqlite3.Database(USERSDB);
	db.serialize(() => {
		db.run(
			`INSERT INTO users(user_name, user_email, user_password) VALUES("${user_name}", "${user_email}", "${user_password}")`
		);
	});
	db.close();

	res.redirect('/users');
});

app.get('/users', (req, res) => {
	getUsersFromDB((users) => {
		const userDataInCells = users
			.map((user) => {
				const { user_name, user_email, user_password } = user;
				return `<tr><td>${user_name}</td><td>${user_email}</td><td>${user_password}</td><tr>`;
			})
			.join('');
		res.send(`${usersTable}${userDataInCells}</tbody></table>`);
	});
});

app.use((req, res, next) => {
	res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

app.listen(PORT, () => {
	if (!existsSync(USERSDB)) {
		const db = new sqlite3.Database(USERSDB);
		db.serialize(() => {
			db.run(
				'CREATE TABLE users(id INTEGER PRIMARY KEY, user_name VARCHAR(20), user_email VARCHAR(50), user_password TEXT)'
			);
			db.run(
				'INSERT INTO users(user_name, user_email, user_password) VALUES ("john_doe", "john_doe@gmail.com", "asdf1234")'
			);
			db.run(
				'INSERT INTO users(user_name, user_email, user_password) VALUES ("jane_doe", "jane_doe@gmail.com", "qwe789")'
			);
			db.run(
				'INSERT INTO users(user_name, user_email, user_password) VALUES ("b1ll1", "billi@gmail.com", "qay741")'
			);
			db.run(
				'INSERT INTO users(user_name, user_email, user_password) VALUES ("codingGod", "cg@yahoo.com", "wsx963")'
			);
			db.run(
				'INSERT INTO users(user_name, user_email, user_password) VALUES ("dark_phonix", "phonix@yahoo.com", "tgb456")'
			);
		});
		db.close();
	}
	console.log(`App is started and listening on port ${PORT}`);
});

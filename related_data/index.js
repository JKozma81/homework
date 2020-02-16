const express = require('express');
const hbs = require('express-handlebars');
const cors = require('cors');

const PORT = 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(cors());

app.get('/', (req, res) => {
	res.render('home');
});

app.listen(PORT, () => console.log(`App is started and listening on port ${PORT}`));

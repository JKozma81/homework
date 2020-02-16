const express = require('express');
const cors = require('cors');

const categories = require('./data/categories');

const PORT = 3030;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/categories', (req, res) => {
	const catIDs = categories.map((cat) => cat.id);
	res.status(200).json(catIDs);
});

app.get('/categories/:id', (req, res) => {
	const category = categories.find((cat) => cat.id === +req.params.id);

	if (!category) {
		res.status(404).json({ errorCode: 404, message: 'Category not found!' });
		return;
	}
	res.status(200).json(category);
});

app.listen(PORT, () => console.log(`App is started and listening on port ${PORT}`));

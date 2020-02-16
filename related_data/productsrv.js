const express = require('express');
const cors = require('cors');

const products = require('./data/products');

const PORT = 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/products', (req, res) => {
	const prodIDs = products.map((prod) => prod.id);
	res.status(200).json(prodIDs);
});

app.get('/products/:id', (req, res) => {
	const product = products.find((prod) => prod.id === +req.params.id);

	if (!product) {
		res.status(404).json({ errorCode: 404, message: 'Product not found!' });
		return;
	}
	res.status(200).json(product);
});

app.listen(PORT, () => console.log(`App is started and listening on port ${PORT}`));

const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const router = require('./routes/mail_routes');

const PORT = process.env.PORT || 3000;
const app = express();
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'static')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);

app.get('/', (req, res) => {
    res.redirect('/inbox');
})

app.listen(PORT, () => console.log(`App is started and listening on port: ${PORT}`))

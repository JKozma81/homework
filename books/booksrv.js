const express = require('express');
const path = require('path');
const hbs = require('express-handlebars');

const myRouter = require('./router/book_routes');

const app = express();
const PORT = process.env.PORT || 3000;

app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))


app.get('/', (req, res) => {
    res.redirect('/books.html');
})

app.use(myRouter);

app.listen(PORT, () => console.log('App is started...'));
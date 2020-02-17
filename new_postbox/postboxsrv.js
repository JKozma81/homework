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
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
    res.render('home', { mails })
});

app.get('/inbox', (req, res) => {
    res.status(200).json(mails);
});

app.post('/inbox', (req, res) => {
    mails.push(req.body);
    res.sendStatus(200);
});

app.post('/outgoing', (req, res) => {
    const { nameAndAddress, message } = req.body;
    const url = nameAndAddress.split(' ').length === 2 ? 'http://' + nameAndAddress.split(' ')[1] : 'http://' + nameAndAddress + '/inbox'

    fetch(`${url}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ from: nameAndAddress, message })
    })
        .then(resp => {
            if (resp.status === 200) {
                res.sendStatus(200);
                return;
            };
            throw "Can't send message";
        })
        .catch(err => {
            console.error(err.toString());
            res.sendStatus(404);
        })

});

app.listen(PORT, () => console.log(`App is started and listening on port ${PORT}`));
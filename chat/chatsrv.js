const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const { addMessage, getMessages } = require('./data/Message');
const app = express();

const PORT = process.env.PORT || 3000;

const myAddress = process.argv[2];
const clientAddress = process.argv[3];

if (!myAddress) throw new Error("You don't provided your address!");
if (!clientAddress) throw new Error("You don't provided the client address!");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/messages', (req, res) => {
    try {
        addMessage(myAddress, clientAddress, req.body.content);
        res.status(200).send();
    } catch (err) {
        console.error(err.message);
        res.status(404).send();
    }
});

app.get('/messages', (req, res) => {
    res.json(getMessages());
});

app.post('/forward', (req, res) => {
    try {
        addMessage(clientAddress, myAddress, req.body.content);
        fetch(`${clientAddress}/messages`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(req.body)
        }).then(result => {
            if (result.status === 200) {
                res.status(200).send();
                return;
            }
            throw new Error('Something went wrong...')
        }).catch(err => {
            console.error(err);
            res.status(500).send();
        });
    } catch (err) {
        console.error(err.message);
        res.status(404).send();
    }
});

app.get('/', (req, res) => {
    res.redirect('/messages');
})

app.listen(PORT, () => console.log(`Server is started and listening on port ${PORT}`));


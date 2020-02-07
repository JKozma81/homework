const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.redirect('/hello');
})

app.get('/hello', (req, res) => {
    res.send('siker')
})

app.listen(3000);
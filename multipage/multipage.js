const express = require('express');
const hbs = require('express-handlebars');
const path = require('path');

const app = express();
app.engine('handlebars', hbs());
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

const me = {
    name: 'Kozma János',
    favs: ['JavaScript', 'gaming', 'beer']
}

const szl = {
    name: 'Szűcs László',
    favs: ['JavaScript', 'wiskey', 'black metal']
}

app.get('/', (req, res) => {
    res.redirect('/home');
})

app.get('/home', (req, res) => {
    res.render('single', {
        layout: 'me',
        person: me,
        page_title: 'My favorites',
        name: '# Home #'
    })
})

app.get('/compare', (req, res) => {

    if (Object.keys(req.query).length === 0) {
        res.render('error', {
            layout: 'errorpage',
            error_text: 'Both, right and left query parameters missing!',
            page_title: 'Upsz, something went wrong',
            name: '# Error #'
        })
        return;
    }

    const { left, rigth } = req.query;

    if (!left) {
        res.render('error', {
            layout: 'errorpage',
            error_text: 'Left query parameter missing!',
            page_title: 'Upsz, something went wrong',
            name: '# Error #'
        })
        return;
    }

    if (!rigth) {
        res.render('error', {
            layout: 'errorpage',
            error_text: 'Right query parameter missing!',
            page_title: 'Upsz, something went wrong',
            name: '# Error #'
        })
        return;
    }

    if (left === 'kozmajanos') {
        res.render('multi', {
            layout: 'compare',
            person1: me,
            person2: szl,
            page_title: `Compare ${me.name} and ${szl.name} favorites`,
            name: '# Compare #'
        })
        return;
    }

    if (left === 'szucslaszlo') {
        res.render('multi', {
            layout: 'compare',
            person1: szl,
            person2: me,
            page_title: `Compare ${szl.name} and ${me.name} favorites`,
            name: '# Compare #'
        })
        return;
    }
})

app.listen(3000, () => console.log('app is started and listening on port 3000'));
/*
 Gratefully adapted from https://github.com/HemingwayLee/sample-mustache-express
*/
const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'))

app.get('/', function(req, res) {
    const data = {
        time: 'a million years'
    };

    res.render('index.mustache', data);
});

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
});

/*
 Gratefully adapted from https://github.com/HemingwayLee/sample-mustache-express
*/
const fs = require('fs');

const express = require('express');
const app = express();
const mustacheExpress = require('mustache-express');

let timeSince = 'N/A';

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');
app.set('views', __dirname + '/views');
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index.mustache', {
        time: timeSince,
    });
});

app.listen(8000, () => {
    timeSince = getSecsSinceDeploy();
    console.log('Server running at http://localhost:8000/');
});

function getSecsSinceDeploy() {
    let curTimeMs = new Date().getTime();
    let contents = fs.readFileSync('/app/start-time.txt', 'utf8');
    let startTimeMs  = parseInt(contents.trim()) / 10**6;
    return ((curTimeMs - startTimeMs) / 10**3).toFixed(2)
}

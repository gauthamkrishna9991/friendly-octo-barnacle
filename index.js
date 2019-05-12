/*
    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

     This program is distributed in the hope that it will be useful,
     but WITHOUT ANY WARRANTY; without even the implied warranty of
     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
     GNU General Public License for more details.

     You should have received a copy of the GNU General Public License
     along with this program.  If not, see <https://www.gnu.org/licenses/>.

     The Complete GPL 3.0 Licence can be found in COPYING
*/
const express = require('express');
const request = require('request');

const app = express();
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.redirect('/new');
});

app.get('/new', (req, res) => {
    request('https://api.memeload.us/v1/new.php', (err, response, body) => {
        if (err) res.render('index', {err: true, isMemePresent: false});
        else {
            const obj = JSON.parse(body);
            // console.log(obj);
            res.render('index', {err: false, isMemePresent: true, memeObj: obj});
        }
    });
});

app.get('/random', (req, res) => {
    request('https://api.memeload.us/v1/random.php', (err, response, body) => {
        if (err) res.render('index', {err: true, isMemePresent: false});
        else {
            const obj = JSON.parse(body);
            // console.log(obj);
            res.render('index', {err: false, isMemePresent: true, memeObj: obj});
        }
    });
});

const port = process.env.PORT || 80;

app.listen(port);
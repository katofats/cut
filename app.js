const express = require('express');
const path = require('path')
const app3 = require('./public/app2')
const app4 = require ('body-parser')
const ejs = require('ejs')
const port = process.env.port || 3000;
const app = express();
require('dotenv').config()

console.log(process.env)

app.use(app4.urlencoded({ extended: false }))

//app3(access);

app.set('view-engine', 'ejs')
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
    res.render('index.ejs');
});

app.get('/info', (req, res) => {
    res.render('info.ejs');
});

app.post('/index', (req, res) => {
    const letsgo = process.env.API_KEY;
    if(req.body.pass == letsgo){
        res.redirect('/info');
    }else{
         res.redirect('/');
    }
});


app.listen(port);
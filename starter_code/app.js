const express = require('express');
const hbs     = require('hbs');
const app     = express();
const path    = require('path');
const PunkAPIWrapper = require('punkapi-javascript-wrapper');
const punkAPI = new PunkAPIWrapper();

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'public')));
hbs.registerPartials(__dirname + '/views/partials')

app.get('/', (req, res, next) => {
  res.render('index');
});

app.get('/beers', (req, res, next) => {
  punkAPI.getBeers()
      .then(beers => {
        console.log(beers)
        res.render('beers', {
          beers: beers
        });
      });

      
  
});
app.get('/randomBeer', (req, res, next) => {
  punkAPI.getRandom()
      .then(beers => {
        res.render('randomBeer', {
          beers: beers
        });
        
      });

      
  
});
app.listen(3000);
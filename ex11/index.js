'use strict';
let express = require('express'),
fs = require('fs'),
http = require('http'),
morgan = require('morgan');

//ROUTES
let restaurants = require(`${__dirname}/routes/restaurants`);

let app = express();

//LOGGER IN PLACE
let accesLogStream = fs.createWriteStream(`${__dirname}/logs/acces.log`,{flags:'a'});
app.use(morgan('combiend',{stream:accesLogStream}));

//USE STATIC ASSETS
app.use(express.static(`${__dirname}/public`));

// SET APP ROUTES AS MIDDLEWARES
app.use('/api/restaurants', restaurants);

http.createServer(app).listen(80, function(){
  console.log("Express started on localhost:3000 \n Press CTRL+c to terminate")
});


app.get('/api/restaurants', function(req,res){
  db.restaurants.find(function(err,docs){
    if(err) throw err;
    res.json(docs);
  })
});

app.get('/api/restaurants', function(req,res){
  db.restaurants.findOne({_id:mongoJS.ObjectId(req.params.id)},function(err,docs){
    if(err) throw err;
    console.log(docs);
    res.json(docs);
  })
});

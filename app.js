// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./src/routes/index');
const flerbs = require('./src/routes/flerbs');
const db = require('./database');

//models from mongoose
require('./src/models/Flerb.js');

//initialize express app
const app = express();

//View Engine  for PUG
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');


//Make a folder for front end stuffs
app.use(express.static(path.join(__dirname, '/public')));



//                 MIDDLE WARE!!!!


// Body parser (parse json )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Set home route 
app.use(flerbs);


//HARK! Are you listening???? Dev mode...
app.listen(8080, ()=> {
	console.log("Running on 8080");
});



//error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
  res.render('error', {
   message: err.message,
   error: {}
  });
});
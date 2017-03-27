// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./src/routes/index');
const flerbs = require('./src/routes/flerbs');
const db = require('./database');

//you forgot your models
require('./src/models/Flerb.js');

//initialize express app
const app = express();

//View Engine  for EJS and can use html ((switch to pug later))
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'pug');


//Make a folder for front end stuffs
app.use(express.static(path.join(__dirname, '/public')));



//                 MIDDLE WARE!!!!


// Body parser (parse json )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//Set home route to index and tasks to api
//app.use('/', index);
//app.use('/flerbs', flerbs);
app.use(flerbs);


//HARK! Are you listening???? Dev mode...
app.listen(8080, ()=> {
	console.log("Running on 8080");
});



//error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send(err);
  //res.render('error', {
  //  message: err.message,
  //  error: {}
  //});
});
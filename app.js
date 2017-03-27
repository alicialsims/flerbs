// Dependencies
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const index = require('./routes/index');
const tasks = require('./routes/tasks');


//initialize express app
const app = express();

//View Engine  for EJS and can use html
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


//Make a folder for front end stuffs
app.use(express.static(path.join(__dirname, '/public')));


//Setting up that there router
//app.use('/', router);


//                 MIDDLE WARE!!!!


// Body parser (parse json )
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set home route to index and tasks to api
app.use('/', index);
app.use('/api', tasks);


//HARK! Are you listening???? Dev mode...
app.listen(8080, ()=> {
	console.log("Running on 8080");
});


//error handler
//error handler
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/flerbs', function(){
	console.log("look at that silly mongoose");
});

let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

module.exports = db;
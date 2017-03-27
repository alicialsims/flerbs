const mongoose = require('mongoose');
const Schema = mongoose.schema;


//setting up schema for each flerb

const FlerbSchema = new Schema({
	name: {type: String, required: true, trim: true},
	picUrl: {type: String, required: false, trim: true},
	about: {type: String, required: false, trim: true}
});

const Flerb = mongoose.model('Flerb', FlerbSchema);
module.exports = Flerb;


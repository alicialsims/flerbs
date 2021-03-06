const express = require('express');
const router = express.Router();
const db = require('../../database');
const mongoose = require('mongoose');



//          GET REQUESTS

// index page
router.get('/', (req, res, next)=>{
	res.render('index', {title: 'Home'});
});

// page with all the flerbs
router.get('/flerbs', (req, res, next)=>{
 	mongoose.model('Flerb').find((err, flerbs)=>{
 	if (err) {
 		return res.send(err)
 	}
 	res.json({flerbs: flerbs});
 });
});

// page with a particular flerb by id SINGULAR
router.get('/flerb/:id', (req, res, next)=>{
	console.log('can i get by id', req.params);
	let flerb = req.params;
 mongoose.model('Flerb').findOne(flerb._id, (err, flerb)=>{

 	//console.log('can i get by id', flerb._id);
 	if (err) {
 		return res.send(err)
 	}
 	res.json({flerb: flerb});
 });
});

//           POST REQUESTS
router.post('/flerb', (req, res, next)=>{
    // get new flerb from input form
	let flerb = req.body;
	mongoose.model('Flerb').create(flerb, (err, flerb)=>{
		if (err){
			return res.send(err);
		}
		console.log('flerb added');
		res.json({flerb: flerb});
	});
});

//           PUT REQUESTS

// update or edit a flerb
router.put('/flerb/:id', (req, res, next) => {
	let id = req.params.id;
	let flerb = req.body;
	// validation should go here !!!!!
	if(flerb && flerb._id !== id){
		return res.status(500).json({err: "IDs do not match"});
	}
	//else ...
	mongoose.model('Flerb').findByIdAndUpdate(id, flerb, {new: true}, (err, flerb)=>{
		if (err){
			return res.status(500).json({err: err.message});		
		}
		res.json({'flerb': flerb, message: 'Flerb Edited'});
	});
});

//  Delete a particular flerb
router.delete('/flerb/:id', (req,res,next)=>{
	//console.log('debug');
	let id = req.params.id;
	mongoose.model('Flerb').remove({ _id: id }, (err, flerb)=>{
		if (err){
			res.send(err);
		}
		res.json({flerb: flerb});
			//console.log('flerb.id');
	});
});


module.exports = router;
const express = require('express');
const router = express.Router();
const db = require('../../database');
const mongoose = require('mongoose');



//          GET REQUESTS
console.log('are we loading this at all?');
// page with all the flerbs
router.get('/flerbs', (req, res, next)=>{
	console.log('does the get request even work?');
 	mongoose.model('Flerb').find((err, flerbs)=>{
 	if (err) {
 		res.send(err)
 	}
 	console.log('I cant find the bug');
 	res.json({flerbs: flerbs});
 	//return res.render('index', { title: 'Home' });
 });
});

// page with a particular flerb by id SINGULAR
router.get('/flerb/:id', (req, res, next)=>{
 Flerb.findById(flerb.id, (err, flerb)=>{
 	if (err) {
 		res.send(err)
 	}
 	res.json(flerb);
 });
});

//           POST REQUESTS
router.post('/flerb', (req, res, next)=>{
    // get new flerb from input form
	let flerb = req.body;
	//if it doesn't exist throw an error????
	// INSERT error handler here

	//else - save the post request to db
	Flerb.save(flerb, (err, flerb)=>{
		if (err){
			res.send(err);
		}
		res.json(flerb);
	});
});

//           PUT REQUESTS

// update or edit a flerb
router.put('/flerb/:id', (req, res, next) => {
	let flerb = req.body;
	let editedFlerb = {};
	// validation should go here !!!!!
	// YOUR CODE HERE
	//else ...
	Flerb.update(flerb.id, editedFlerb, {}, (err, flerb)=>{
		if (err){
			res.send(err);
		}
		res.json(flerb);
	});
});

//  Delete a particular flerb
router.delete('/flerb/:id', (req,res,next)=>{
	console.log('debug');
	Flerb.remove(flerb.id, (err)=>{
		if (err){
			res.send(err);
		}
		res.json(flerb);
	});
});


module.exports = router;
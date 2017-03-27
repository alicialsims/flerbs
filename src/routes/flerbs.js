const express = require('express');
const router = express.Router();
const db = require('../../database');

//          GET REQUESTS

// page with all the flerbs
router.get('/flerbs', (req, res, next)=>{
 db.flerbs.find((err, flerbs)=>{
 	if (err) {
 		res.send(err)
 	}
 	res.json(flerbs);
 });
});

// page with a particular flerb by id SINGULAR
router.get('/flerb/:id', (req, res, next)=>{
 db.flerbs.findById(flerb.id, (err, flerb)=>{
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
	db.flerbs.save(flerb, (err, flerb)=>{
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
	db.flerbs.update(flerb.id, editedFlerb, {}, (err, flerb)=>{
		if (err){
			res.send(err);
		}
		res.json(flerb);
	});
});

//  Delete a particular flerb
router.delete('/flerb/:id', (req,res,next)=>{
	console.log('debug');
	db.flerbs.remove(flerb.id, (err)=>{
		if (err){
			res.send(err);
		}
		res.json(flerb);
	});
});


module.exports = router;
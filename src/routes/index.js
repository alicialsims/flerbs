const express = require('express');
const router = express.Router();


//setting up home page as index pug file
router.get('/', (req, res, next)=>{
	res.render('index', {title: 'FLERBS'});
});

module.exports = router;

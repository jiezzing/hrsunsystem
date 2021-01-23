const express = require('express');
const router = express.Router();

// calling controller methods
const { 
	getAllPositions,
} = require('../controllers/PositionsController');

router.route('/').get(getAllPositions);
    
module.exports = router;

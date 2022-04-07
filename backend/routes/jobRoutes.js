const express = require('express');
const {
   getAllJobs
} = require('./../controllers/jobControllers');


//**************** variables ****************//
const router = express.Router();

//**************** job routes ****************//
router.route('/').get(getAllJobs);



module.exports = router;

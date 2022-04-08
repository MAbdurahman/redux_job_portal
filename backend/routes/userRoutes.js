//**************** imports ****************//
const express = require('express');
const { signUpUser, signInUser } = require('./../controllers/userControllers')

//**************** variables ****************//
const router = express.Router();

//**************** user routes ****************//
router.route('/sign-up').post(signUpUser);
router.route('/sign-in').post(signInUser);



module.exports = router;

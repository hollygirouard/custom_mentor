const express = require('express');
const router = express.Router();
// Parses information from POST
const bodyParser = require('body-parser');
// Used to manipulate POST methods
const methodOverride = require('method-override');
const passport = require('passport');
const usersController = require('../controllers/users');
const staticsController = require('../controllers/statics');

function authenticatedUser(req, res, next) {
	if(req.isAuthenticated()) {return next();}
	res.redirect('/login');
}

// main page 
router.route('/')
	.get(authenticatedUser, staticsController.home)

// user sign up
 router.route('/signup')
 	.get(usersController.getSignup)
 	.post(usersController.postSignup)

// user login
 router.route('/login')
 	.get(usersController.getLogin)
 	.post(usersController.postLogin)

// user logout
 router.route('/logout')
 	.get(usersController.getLogout)

// get all users
	router.route('/users')
	.get(usersController.getUsers)

module.exports = router;
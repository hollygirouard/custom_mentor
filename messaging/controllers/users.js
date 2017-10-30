var passport = require("passport");
let db = require('../models');

// GET /signup
function getSignup(request, response, next) {
	response.render('signup', {message: request.flash('signupMessage')});
}

// POST /signup
function postSignup(request, response, next) {
	let signupStrategy = passport.authenticate('local-signup', {
		successRedirect: '/',
		failureRedirect: '/signup',
		failureFlash: true
	});

	return signupStrategy(request, response, next);
}

// GET /login
function getLogin(request, response, next) { 
	response.render('login', {message: request.flash('loginMessage')});
}

// POST /login 
function postLogin(request, response, next) {
	let loginStrategy = passport.authenticate('local-login', {
		successRedirect: '/',
		failureRedirect: '/login',
		failureFlash : true
	});

	return loginStrategy(request, response, next);
}

// GET /logout
function getLogout(request, response, next) {
	request.logout();
	response.redirect('/login');
}

// GET /users
function getUsers(request, response, next) {
	console.log("getUsers controller hit");
	db.User.find({}, function(err, users) {
		response.json(users);
	});
}



module.exports = {
  getLogin: getLogin,
  postLogin: postLogin ,
  getSignup: getSignup,
  postSignup: postSignup,
  getLogout: getLogout,
  getUsers: getUsers
};
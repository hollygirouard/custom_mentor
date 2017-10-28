let LocalStrategy = require('passport-local').Strategy;
let db = require('../models');

module.exports = function(passport) {

	passport.serializeUser(function(user, callback) {
		callback(null, user.id);
	});

	passport.deserializeUser(function(id, callback) {
		db.User.findById(id, function(err, user) {
			callback(err, user);
		});
	});

	passport.use('local-signup', new LocalStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true
	}, function(req, email, password, callback) {
		//Find a user with this email
		db.User.findOne({'local.email' : email}, function(err, user) {
			if (err) return callback(err);
			//If there already is a user with that email
			if (user) {
				return callback(null, false, req.flash('signupMessage', 'Username is already taken.'));
			} else {
				//There is not already a user with that email
				//Create one
				let newUser = new db.User();
				newUser.local.email = email;
				newUser.local.password = newUser.encrypt(password);
				newUser.save(function(err) {
					if (err) throw err;
					return callback(null, newUser);
				});
			}
		});
	}));

	passport.use('local-login', new LocalStrategy({
		usernameField : 'email',
		passwordField : 'password',
		passReqToCallback : true
	}, function(req, email, password, callback) {
		db.User.findOne({'local.email': email}, function(err, user) {
			if (err) return callback(err);
			//No user found
			if(!user) {
				return callback(null, false, req.flash('loginMessage', 'Username not found'));
			}
			//Wrong password
			if(!user.validPassword(password)) {
				return callback(null, false, req.flash('loginMessage', 'Password incorrect! Keep trying!'));
			}

			return callback(null, user);
		});
	}));	
};
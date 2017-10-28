const mongoose = require('mongoose');
mongoose.connect( process.env.MONGODB_URI ||
									process.env.MONGOLAB_URI ||
									process.env.MONGOHQ_URL ||
									"mongodb://localhost/custom-mentor");

module.exports.User = require('./user.js');
let mongoose = require('mongoose');
let messageModels = require('./message.js');
mongoose.connect( process.env.MONGODB_URI ||
									process.env.MONGOLAB_URI ||
									process.env.MONGOHQ_URL ||
									"mongodb://localhost/custom-mentor");


let Message = messageModels.Message;
let Conversation = messageModels.Conversation;

module.exports.User = require('./user.js');
module.exports.Message = Message;
module.exports.Conversation = Conversation;
let ObjectId = require('mongodb').ObjectId;
let db = require('../models');

// GET /conversations
function getConversations(request, response, next) {
	console.log("getConversations route hit");
	db.Conversation.find({}, function(err, conversations) {
		response.json(conversations);
	});
}

// GET /conversations/user
function getUserConversations (request, response, next) {
	console.log("getUserConversations route hit");
	console.log(request.user);
	db.Conversation.find(
		{'participants.sender_id': ObjectId()}, function(err, conversations) {
		response.json(conversations);
	});
}

// GET /messages
function getMessages(request, response, next) {
	console.log("getMessages route hit");
	db.Messages.find({}, function(err, messages) {
		response.json(messages);
	});
}

// GET /user/:id
function findUser(request, response, next) {
	console.log("findUser controller hit");
	console.log(request.params.id);
	db.User.findOne({"_id": request.params.id}, function(err, user) {
		console.log(user._id);
		db.Conversation.find(
			{'participants.sender_id': request.params.id}, function(err, conversations) {
			console.log(JSON.stringify(conversations));
			response.json(conversations);
		});
	});
}



module.exports = {
  getConversations: getConversations,
  getUserConversations: getUserConversations,
  getMessages: getMessages,
  findUser: findUser
};

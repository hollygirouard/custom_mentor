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
	db.User.findOne({"_id": request.user.id}, function(err, user) {
		console.log(request.user._id);
		db.Conversation.find(
			{'participants.sender_id': request.user.id}, function(err, conversations) {
			if(conversations) {
				console.log(JSON.stringify(conversations));
				response.json(conversations);
			}
			else {
				response.json("Make a Conversation!");
			}

		});
	});
}

// GET /messages
function getMessages(request, response, next) {
	console.log("getMessages route hit");
	db.Message.find({}, function(err, messages) {
		response.json(messages);
	});
}

// GET /messages by Conversation id
function getMessagesById(request, response, next) {
	console.log("getMessageById route hit");
	db.Message.find({'conversation_id': request.params.id}, function(err, messages) {
		console.log(messages);
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
  getMessagesById: getMessagesById,
  findUser: findUser
};

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

// POST /messages by Conversation id
function postMessage(request, response, next) {
	console.log("postMessage route hit");
	console.log(request.body);
}

// GET /conversations/:id
function findConversationById(request, response, next) {
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

// POST /conversations
function postConversation(request, response, next) {
	console.log("createNewConversation route hit");
	console.log(request.body);
	// let newConversation = new db.Conversation({
	// 	participants: {
	// 		sender_id: request.user._id,
	// 		recipient_id: request.body.recipient_id
	// 	}
	// });
}



module.exports = {
  getConversations: getConversations,
  getUserConversations: getUserConversations,
  getMessages: getMessages,
  getMessagesById: getMessagesById,
  postMessage: postMessage,
  postConversation: postConversation
};
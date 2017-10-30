let mongoose = require('mongoose');
let Schema = mongoose.Schema,
		User = require('./user.js');

let ConversationSchema = new Schema ({
	participants: {
		sender_id: String,
		// {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: 'User'
		// },
		recipient_id: String
		// {
		// 	type: mongoose.Schema.Types.ObjectId,
		// 	ref: 'User'
		// }
	},
	message_id: String
	// {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Message'
	// }
});

let MessageSchema = new Schema({
	sender_id: String,
	// {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'User'
	// },
	content: String,
	time_stamp: {
		type: Date,
		default: Date.now
	},
	conversation_id: String
	// {
	// 	type: mongoose.Schema.Types.ObjectId,
	// 	ref: 'Conversation'
	// }
});


let Conversation = mongoose.model('Conversation', ConversationSchema);
let Message = mongoose.model('Message', MessageSchema);

module.exports = {
  Conversation: Conversation,
  Message: Message
};
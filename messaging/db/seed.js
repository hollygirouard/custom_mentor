let mongoose = require('mongoose'); 
let db = require('../models');

let message_list = [
	{
		sender_id: '59f73fdde1e37857977e7eb5',
		content: 'Hey!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fe8e1e37857977e7eb6',
		content: 'Hello!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fdde1e37857977e7eb5',
		content: 'Hola!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fe8e1e37857977e7eb6',
		content: 'Que pasa!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fdde1e37857977e7eb5',
		content: 'Greetings!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fe8e1e37857977e7eb6',
		content: 'Goodbye!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fdde1e37857977e7eb5',
		content: 'Hasta la pasta!',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	},
	{
		sender_id: '59f73fe8e1e37857977e7eb6',
		content: 'What?',
		conversation_id: '59f61dbfde3d8554a0d5648e'
	}
];

let conversation_list = [
	{	
		participants: {
			sender_id: "59f4ea3fdd7ec242440e7acc",
			recipient_id: "59f4ea3fdd7ec242440e7acc"
		}
	}
];

console.log(message_list);

console.log(conversation_list);

db.Conversation.remove({}, function(err, conversations) {
	db.Conversation.create(conversation_list, function(err, conversations) {
		if (err) { return console.log('ERROR', err) ;}
		console.log("all conversations:", conversations);
		console.log("created", conversations.length);
	});
});

db.Message.remove({}, function(err, messages){
	db.Message.create(message_list, function(err, messages) {
		if (err) { return console.log('ERROR', err); }
		console.log("all messages:", messages);
		console.log("created", messages.length);
		process.exit();
	});
});


/*
*
* - DATA SCHEMA -
*
*/

// participants: {
// 	sender_id: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'User'
// 	},
// 	recipient_id: {
// 		type: mongoose.Schema.Types.ObjectId,
// 		ref: 'User'
// 	}
// }

// sender_id: {
// 	type: mongoose.Schema.Types.ObjectId,
// 	ref: 'User'
// },
// content: String,
// time_stamp: {
// 	type: Date,
// 	default: Date.now
// },
// conversation_id: {
// 	type: mongoose.Schema.Types.ObjectId,
// 	ref: 'Conversation'
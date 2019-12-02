const users = require('./user');

class Message {
	constructor(from, to, text) {
		this.from = from;
		this.to = to;
		this.text = text;
	}
}

const message1 = new Message('steve', 'liz', 'Hello! Do you come to the party on friday?');
const message2 = new Message('liz', 'steve', 'Hi! Of course. Will you be there to??');
const message3 = new Message('steve', 'liz', 'Yes, then we will meet there, see you!');

const messages = [ message1, message2, message3 ];

function add(from, to, msg) {
	if (users.isRegistered(from) && users.isRegistered(to)) {
		let newMsg = new Message(from, to, msg);
		messages.push(newMsg);
		return true;
	}
	return false;
}

function getMessageFrom(userName) {
	if (users.isRegistered(userName)) {
		let messagesFrom = messages.filter((msg) => {
			return msg.from === userName;
		});
		return messagesFrom;
	}
	return [];
}

function getMessageTo(userName) {
	if (users.isRegistered(userName)) {
		let messagesTo = messages.filter((msg) => {
			return msg.to === userName;
		});
		return messagesTo;
	}
	return [];
}

module.exports = { add, getMessageFrom, getMessageTo };

class Message {
	constructor(messageFrom, messageTo, subject, content) {
		this.id = Math.floor(Math.random() * 1000 + 1);
		this.from = messageFrom;
		this.to = messageTo;
		this.subject = subject;
		this.content = content;

		const d = new Date();
		const result = d.toISOString();

		this.date = result;
	}
}

const inboxMessages = [ new Message('1a2b3c4d.ngrok.io', '4d3c2b1a.ngrok.io', 'Teszt', 'This is a test message') ];
const sentMessages = [];

function getMessages(flag) {
	switch (flag) {
		case 'inbox':
			return inboxMessages;
		case 'sent':
			return sentMessages;
	}
}

function addMessage(flag, msg) {
	switch (flag) {
		case 'inbox':
			inboxMessages.push(msg);
			break;
		case 'sent':
			sentMessages.push(msg);
			break;
	}
}

module.exports = { Message, addMessage, getMessages };

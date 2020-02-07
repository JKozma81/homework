const messages = [];

class Message {
    constructor(to, from, content) {
        this.id = messages.length;
        this.date = new Date().toISOString();
        this.to = to;
        this.from = from;
        this.content = content;
    }
}

/**
 * These functions are the models for the MVC patern.
 * Since there is not to many data manipulation in this app i don't separate them in other files.
 */

function addMessage(messageTo, messageFrom, content) {
    messages.push(new Message(messageTo, messageFrom, content));
}

function getMessages() {
    return messages;
}

module.exports = { addMessage, getMessages }
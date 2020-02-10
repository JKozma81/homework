const messageForm = document.querySelector('.message-form');
const chatDisplay = document.querySelector('.chat-text');
const messageText = document.querySelector('input[name="content"]');
const refreshButton = document.querySelector('.refresh');

const serverUrl = 'http://localhost:3000'

function getMessages() {
    return fetch(serverUrl + '/messages');
}

function sendMessage(message) {
    return fetch(serverUrl + '/forward', {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify({ content: message })
    })
}

function displayMessages(messages, display) {
    let chatText = '<li>';
    messages.forEach(message => {
        const { date, from, to, content } = message;
        chatText += `<p> - ${date} [${to}] [${from}]: ${content}</p>`
    })
    chatText += '</li>';
    display.innerHTML = chatText;
}

document.addEventListener('DOMContentLoaded', () => {
    const data = getMessages();
    data.then(result => result.json())
        .then(messageData => {
            displayMessages(messageData, chatDisplay);
        });
});

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();
    sendMessage(messageText.value)
        .then(result => {
            if (result.status === 200) {
                return getMessages();
            }
        })
        .then(data => data.json())
        .then(messageData => {
            displayMessages(messageData, chatDisplay);
        });
    messageText.value = '';
});

refreshButton.addEventListener('click', () => {
    getMessages().then(data => data.json()).then(messageData => {
        displayMessages(messageData, chatDisplay);
    })
})
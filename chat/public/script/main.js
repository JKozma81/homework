const messageForm = document.querySelector('.message-form');
const chatDisplay = document.querySelector('.chat-text');
const messageText = document.querySelector('input[name="content"]');
const refreshButton = document.querySelector('.refresh');
const modal = document.querySelector('.modal');
const errorText = document.querySelector('.error-message');
const formForServerUrl = document.querySelector('.modal form');
const urlInput = document.querySelector('#server_url');

let serverUrl = '';

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

formForServerUrl.addEventListener('submit', (e) => {
    e.preventDefault();
    serverUrl = 'http://' + urlInput.value;
    fetch(`${serverUrl}/messages`)
        .then(result => {
            if (result.status === 404) {
                throw new Error();
            }
            urlInput.value = '';
            return result.json();
        })
        .then(messageData => {
            modal.style.display = 'none';
            errorText.style.display = 'none';
            displayMessages(messageData, chatDisplay);
        })
        .catch(err => {
            console.error(err.toString());
            errorText.textContent = 'Content not found, please provide a new server address!';
            errorText.style.display = 'block';
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
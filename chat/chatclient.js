const fetch = require('node-fetch');

let operation = '';
let chatServer = '';
let textToSend = '';

try {
    operation = process.argv[2];
    chatServer = process.argv[3];
    textToSend = process.argv[4];
} catch (err) {
    console.error(err.toString());
}


switch (operation) {
    case 'send':
        fetch(`${chatServer}/forward`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ content: textToSend })
        }).then(response => {
            if (response.status === 200) {
                console.log('Your message was sent!');
                return;
            };
            console.log('Can not send your message!')
        })
        break;
    case 'log':
        fetch(`${chatServer}/messages`)
            .then(response => response.json())
            .then(messages => {
                messages.forEach(message => {
                    const { date, to, from, content } = message;
                    console.log(`- ${date} [${from}] [${to}]: ${content}`);
                });
            })
        break;
}
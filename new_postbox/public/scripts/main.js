const messageContainer = document.querySelector('.message-container');
const messageList = document.querySelector('.message-container ul')
const nameAndAddress = document.querySelector('#validation01');
const messageText = document.querySelector('#FormControlTextarea');

const url = 'http://localhost:3000';

function getMessages(url) {
	return fetch(`${url}/inbox`);
}

function sendMessage(url) {
	return fetch(`${url}/outgoing`, {
		method: 'POST',
		headers: {
			'Content-Type': 'Application/json'
		},
		body: JSON.stringify({ nameAndAddress: nameAndAddress.value, message: messageText.value })
	})
}

function createElement(parent, position, element, properties = undefined) {
	const parentElement = document.querySelector(parent);
	const htmlElement = document.createElement(element);
	if (properties) {
		for (const propeerty in properties) {

			if (propeerty === 'classlist') htmlElement.classList.add(...properties[propeerty]);

			if (propeerty === 'attributes') {
				properties[propeerty].forEach(prop => {
					for (const attribute in prop) {
						htmlElement.setAttribute(attribute, prop[attribute])
					}
				})
			}

			if (propeerty === 'text') {
				if (element === 'div') {
					htmlElement.appendChild(document.createTextNode(` ${properties[propeerty]}`));
				} else {
					htmlElement.textContent = properties[propeerty];
				}
			}
		}
	}
	if (position === 'first') {
		parentElement.prepend(htmlElement);
		return;
	}
	parentElement.appendChild(htmlElement);
}

function createAlert(message, flag) {
	const result = flag === 'success' ? 'success' : 'danger';
	createElement('.alert-container', 'first', 'div', {
		classlist: ['alert', `alert-${result}`, 'fade', 'show'],
		attributes: [{ role: 'alert' }],
		text: ` ${message}`
	})

	const condition = flag === 'success' ? 'Success!' : 'Failed!'
	createElement('.alert-container .alert', 'first', 'strong', {
		text: `${condition}`
	})

	createElement('.alert-container .alert', 'last', 'button', {
		attributes: [{ 'type': 'button' }, { 'data-dismiss': 'alert' }, { 'aria-label': 'Close' }],
		classlist: ['close']
	})

	createElement('.alert-container .alert button', 'last', 'span', {
		attributes: [{ 'aria-hidden': 'true' }],
		text: '\327'
	})
}

function createMessageBox(data) {

	data.forEach((messageData, idx) => {
		createElement('.message-container ul', 'last', 'li', { classlist: [`message-item${idx}`] })
		createElement(`.message-item${idx}`, 'last', 'div', { classlist: [`message-box${idx}`, 'p-3'] })
		createElement(`.message-item${idx} .message-box${idx}`, 'last', 'div', { classlist: ['container-fluid', `message-header${idx}`] })
		createElement(`.message-box${idx} .message-header${idx}`, 'last', 'p', { text: messageData.from });
		createElement(`.message-box${idx} .message-header${idx} p`, 'first', 'strong', { text: 'From: ' });
		createElement(`.message-box${idx}`, 'last', 'div', { classlist: ['container-fluid', `message-body${idx}`] });
		createElement(`.message-box${idx} .message-body${idx}`, 'last', 'div', { classlist: ['card', 'card-body'], text: messageData.message })
	})

}

window.addEventListener(
	'load',
	function () {
		const form = document.querySelector('.needs-validation');
		form.addEventListener('submit', (event) => {
			event.preventDefault();
			if (form.checkValidity() === false) {
				event.stopPropagation();
			}

			form.classList.add('was-validated');

			sendMessage(url)
				.then((resp) => {
					if (resp.status === 200) {
						nameAndAddress.value = '';
						messageText.value = '';
						form.classList.remove('was-validated');

						createAlert('Your message was sent.', 'success');
						return;
					}

					resp.json();
					createAlert("Your message can't be sent.", 'fail');
				})
				.catch((err) => console.error(err.toString()));
		});

		setInterval(() => {
			getMessages(url)
				.then((stream) => stream.json())
				.then((data) => {
					if (document.querySelectorAll('li').length < data.length) {
						messageList.innerHTML = '';
						createMessageBox(data)
					}
				});
		}, 1000)
	},
	false
);


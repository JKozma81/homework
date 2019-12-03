const users = ['steve', 'jhonny', 'liz', 'andrea', 'pete'];

function isRegistered(userName) {
	if (users.indexOf(userName) !== -1) {
		return true;
	}
	return false;
}

function register(userName) {
	if (!isRegistered(userName)) {
		users.push(userName);
		return true;
	}
	return false;
}

function getUsers() {
	return users.join(' ');
}

module.exports = { isRegistered, register, getUsers };

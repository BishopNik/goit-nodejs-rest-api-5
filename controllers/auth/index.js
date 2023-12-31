/** @format */

const login = require('./login.js');
const register = require('./register.js');
const logout = require('./logout.js');
const getCurrent = require('./getcurrent.js');
const changeAvatar = require('./changeavatar.js');

module.exports = {
	register,
	login,
	logout,
	getCurrent,
	changeAvatar,
};

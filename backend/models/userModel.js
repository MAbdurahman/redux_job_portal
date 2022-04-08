//**************** imports ****************//
const mongoose = require('mongoose');

//**************** variables ****************//
const name_pattern =
	/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;

const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const password_pattern =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;

const location_pattern = /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;

const userSchema = new mongoose.Schema({





});


module.exports = mongoose.model('User', userSchema);
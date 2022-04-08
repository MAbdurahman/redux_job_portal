//**************** imports ****************//
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

//**************** variables ****************//
const name_pattern =
	/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;

const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const password_pattern =
	/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-+_!@#$%^&*?]).{8,}$/i;

const phone_pattern =
	/^([(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4})$/i;	

const location_pattern = /([A-Za-z]+(?: [A-Za-z]+)*),? ([A-Za-z]{2})/;

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		minlength: [4, 'Name must be at least 4 characters!'],
		maxLength: [32, 'Name cannot exceed 32 characters!'],
		match: [name_pattern, 'Enter first and last name!'],
		default: 'Name need to be updated!',
	},
	email: {
		type: String,
		trim: true,
		required: [true, 'Email is required!'],
		unique: true,
		match: [email_pattern, 'Enter a valid email address!'],
	},
	password: {
		type: String,
		trim: true,
		required: [true, 'Password is required!'],
		match: [
			password_pattern,
			'Password -> at least 8 characters, have lowercase, uppercase, digit, and special character!',
		],
		select: false,
	},
	address: {
		type: String,
		trim: true,
		maxlength: 20,
		match: [
			location_pattern,
			'Location -> Some City or Somecity, state abbreviation!',
		],
		default: 'Some City, ST',
	},

	about: {
		type: String,
		maxlength: 250,
		default: 'About bio needs to be updated!',
	},
	phone: {
		type: String,
		trim: true,
		match: [phone_pattern, 'Preferred Phone Pattern is: 123-456-7890'],
		default: '123-456-7890',
	},
	education: {
		type: [],
		default: ['Education needs to be updated!'],
	},
	portfolio: {
		type: String,
		default: 'This field needs to be updated!',
	},
	projects: {
		type: [],
		default: ['This field needs to be updated!'],
	},
	skills: {
		type: [],
		default: ['This field needs to be updated!'],
	},
	experience: { type: [], default: ['This field needs to be updated!'] },

	appliedJobs: { type: [], default: ['No jobs applied listed!'] },
	createdAt: {
		type: Date,
		default: Date.now,
	},
	resetPasswordToken: String,
	resetPasswordExpire: Date,
});
userSchema.pre('save', async function () {
	if (!this.isModified('password')) return;
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

userSchema.methods.createJWT = function () {
	return jwt.sign({ userId: this._id }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_LIFETIME,
	});
};

userSchema.methods.comparePassword = async function (candidatePassword) {
	const isMatch = await bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};


module.exports = mongoose.model('User', userSchema);
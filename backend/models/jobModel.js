const mongoose = require('mongoose');

//**************** variables ****************//
const name_pattern =
	/^([a-zA-Z]{2,}\s[a-zA-z]{1,}'?-?[a-zA-Z]{1,}\s?([a-zA-Z]{1,})?)/i;
const phone_pattern =
	/^[(]{0,1}[0-9]{3}[)]{0,1}[-\s.]{0,1}[0-9]{3}[-\s.]{0,1}[0-9]{4}$/i;
const email_pattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

const jobSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			trim: true,
			required: [true, 'Job Title is a required field!'],
		},
		department: {
			type: String,
			trim: true,
			required: [true, 'Department is a required field!'],
		},
		salaryFrom: {
			type: Number,
			trim: true,
			required: [true, 'Salary From  is a required field!'],
		},
		salaryTo: {
			type: Number,
			trim: true,
			required: [true, 'Salary To is a required field!'],
		},
		experience: {
			type: String,
			trim: true,
			required: [true, 'Experience is a required filed!'],
		},
		smallDescription: {
			type: String,
			trim: true,
			required: [true, 'Small description is a required field!'],
		},
		fullDescription: {
			type: String,
			trim: true,
			required: [true, 'Full Description is a required field!'],
		},
		minimumQualification: {
			type: String,
			trim: true,
			required: [true, 'Minimum qualification is a required field!'],
		},
		skillsRequired: {
			type: String,
			trim: true,
			required: [true, 'Skills is a required field!'],
		},
		company: {
			type: String,
			trim: true,
			required: [true, 'Company name is required!'],
		},
		email: {
			type: String,
			trim: true,
			required: [true, 'Email is required!'],
			match: [email_pattern, 'Enter a valid email address!'],
		},
		phoneNumber: {
			type: String,
			trim: true,
			required: [true, 'Phone number is required!'],
			match: [phone_pattern, 'Preferred phone pattern is:  123-456-7890!'],
		},
		companyDescription: {
			type: String,
			trim: true,
			required: [true, 'Company description is a required field!'],
		},
		appliedCandidates: {
			type: [],
			trim: true,
		},
		postedBy: {
			type: String,
			trim: true,
			required: true
		},
	},
	{
		timestamp: true,
	}
);
module.exports = mongoose.model('Job', jobSchema);
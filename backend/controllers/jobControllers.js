const moment = require('moment');
const { StatusCodes } = require('http-status-codes');
const Job = require('../models/jobModel');

/*=============================================
   Get All Jobs(GET) -> /api/v1/jobs
================================================*/
exports.getAllJobs = async (req, res) => {
	try {
		const jobs = await Job.find({});
		res.status(StatusCodes.OK).json({ jobs });
	} catch (error) {
		res.status(StatusCodes.InternalServerError).json({ error });
	}
};

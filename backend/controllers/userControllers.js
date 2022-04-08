//**************** imports ****************//
const User = require('./../models/userModel');
const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('./../errors');

/*=========================================================
      sign up a new user -> /api/v1/users/sign-up
============================================================*/
exports.signUpUser = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      throw new BadRequestError('Please provide email and/or password!');
   }

   const userAlreadyExists = await User.findOne({ email });

	if (userAlreadyExists) {
		throw new BadRequestError('Email already exists!');
	}

   const user = await User.create({ email, password });
   const token = user.createJWT();

   res.status(StatusCodes.CREATED).json({
		user: {
			email: user.email,
			createdAt: user.createdAt,
		},
		token,
	});
}

/*======================================================
      sign in user -> /api/v1/users/sign-in
=========================================================*/
exports.signInUser = async (req, res) => {

	const { email, password } = req.body;

	if ( !email || !password ) {
		throw new BadRequestError('Please provide email and/or password!');
	}

	const user = await User.findOne({ email }).select('+password');

	if ( !user ) {
		throw new UnauthenticatedError('Email does not exist!');
	}

	const isPasswordCorrect = await user.comparePassword(password);

	if ( !isPasswordCorrect ) {
		throw new UnauthenticatedError('Invalid email or password!');

	}
	const token = user.createJWT();
	user.password = undefined;
	
	res.status(StatusCodes.OK).json({ user, token });

};
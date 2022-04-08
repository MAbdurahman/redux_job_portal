import React, { useEffect } from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AppliedJobsPage from '../pages/AppliedJobsPage';
import PostJobPage from '../pages/PostJobPage';
import ProfilePage from '../pages/ProfilePage';
import JobInfoPage from '../pages/JobInfoPage';
import SignInPage from '../pages/SignInPage';
import SignUpPage from '../pages/SignUpPage';
import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import {useDispatch, useSelector } from 'react-redux'
import { getAllJobs } from './../redux/actions/jobsActions'




export default function App() {
	//**************** variables ****************//
	const { loading } = useSelector(state => state.loader);
	const dispatch = useDispatch();

	//**************** functions ****************//
	useEffect(() => {
		dispatch(getAllJobs());
	}, []);
	
	return (
		<div>
			{loading && (
				<div className='sweet-loading text-center'>
					<ClipLoader color={'#0D5BA3'} size={75} />
				</div>
			)}
			<BrowserRouter>
				<Route path='/' exact component={HomePage} />
				<Route path='/applied-jobs' exact component={AppliedJobsPage} />
				<Route path='/post-job' exact component={PostJobPage} />
				<Route path='/profile' exact component={ProfilePage} />
				<Route path='/jobs/:id' exact component={JobInfoPage} />
				<Route path='/sign-in' exact component={SignInPage} />
				<Route path='/sign-up' exact component={SignUpPage} />
			</BrowserRouter>
		</div>
	);
}

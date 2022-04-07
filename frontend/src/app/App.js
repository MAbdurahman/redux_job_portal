import React from 'react'
import { BrowserRouter, Redirect, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage'
import AppliedJobsPage from '../pages/AppliedJobsPage';
import PostJobPage from '../pages/PostJobPage';
import ProfilePage from '../pages/ProfilePage';
import JobInfoPage from '../pages/JobInfoPage';
import { css } from '@emotion/react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import {useDispatch, useSelector } from 'react-redux'



export default function App() {
    const { loading } = useSelector(state => state.loader);
    const dispatch = useDispatch();

  return (
		<div>
			{loading && (
				<div className='sweet-loading text-center'>
					<ClimbingBoxLoader color={'#0D5BA3'} size={21} />
				</div>
			)}
			<BrowserRouter>
				<Route path='/' exact component={HomePage} />
				<Route path='/applied-jobs' exact component={AppliedJobsPage} />
				<Route path='/post-job' exact component={PostJobPage} />
				<Route path='/profile' exact component={ProfilePage} />
				<Route path='/job-info' exact component={JobInfoPage} />
			</BrowserRouter>
		</div>
  );
}

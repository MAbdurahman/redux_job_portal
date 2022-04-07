import React, { useEffect } from 'react';
import DefaultLayout from './../components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from './../redux/actions/jobsActions'

export default function HomePage() {
	//**************** variables ****************//
	const { jobs } = useSelector(state => state.jobs);
	const dispatch = useDispatch();
	//**************** functions ****************//
	useEffect(() => {
		dispatch(getAllJobs())
	
	}, []);

	return (
		<div>
			<DefaultLayout>
				<h2>homepage component</h2>
				{jobs.length} 
			</DefaultLayout>
		</div>
	);
}

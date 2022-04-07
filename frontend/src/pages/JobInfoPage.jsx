import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Tag } from 'antd';
import { Link } from 'react-router-dom'
import moment from 'moment';

export default function JobInfoPage({ match }) {
	//**************** variables ****************//
	const { jobs } = useSelector(state => state.jobs);
	const job = jobs.find(job => job._id === match.params.id);
	const dispatch = useDispatch();

	//**************** functions ****************//
	const applyNow = () => {
		console.log('apply now')
	}
	return (
		<div>
			<DefaultLayout>
				{job && (
					<div className="job-info-wrapper">
						<p>
							<b>Title</b> : {job.title}
						</p>
						<p>
							<b>Company</b> : {job.company}
						</p>

						<p>
							<b>Small Description</b> : {job.smallDescription}
						</p>
						<p>
							<b>Full Description</b> : {job.fullDescription}
						</p>
						<p>
							<b>Title</b> : {job.title}
						</p>
						<p>
							<b>Skills Required</b> : {job.skillsRequired}
						</p>
						<p>
							<b>Experience</b> : {job.experience}
						</p>
						<p>
							<b>Minimum Qualification</b> : {job.minimumQualification}
						</p>

						<hr />

						<p>
							<b>Salary Range</b> : ${job.salaryFrom} - ${job.salaryTo}
						</p>
						<p>
							<b>Department</b> : {job.department}
						</p>
						<p>
							<b>Company Profile</b> : {job.companyDescription}
						</p>
						<p>
							<b>Total Candidates applied</b> :{' '}
							{job.appliedCandidates.length}
						</p>

						<hr />

						<div className='flex justify-content-between'>
							{job.postedBy === '' ? (
								<Button>
									<Link to=''>Edit Now</Link>
								</Button>
							) : '' ? (
								<Tag color='green'>Already Applied</Tag>
							) : (
								<Button onClick={applyNow}>Apply Now</Button>
							)}
							<p>
								<b>Posted on</b>{' '}
								{moment(job.createdAt).format('DD MMM YYYY')}
							</p>
						</div>
					</div>
				)}
			</DefaultLayout>
		</div>
	);
}

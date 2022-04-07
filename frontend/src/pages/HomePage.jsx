import React, { useEffect } from 'react';
import DefaultLayout from './../components/DefaultLayout';
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobs } from './../redux/actions/jobsActions';
import { Row, Col, Button } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default function HomePage() {
	//**************** variables ****************//
	const { jobs } = useSelector(state => state.jobs);
	const dispatch = useDispatch();
	//**************** functions ****************//
	useEffect(() => {
		dispatch(getAllJobs());
	}, []);

	return (
		<div>
			<DefaultLayout>
				<Row gutter={16}>
					{jobs.map(job => {
						return (
							<Col key={job._id} lg={12} sm={24}>
								<div className='job-div bs m-2 p-2'>
									<h4>{job.title}</h4>
									<p>{job.company}</p>
									<hr />
									<p>{job.smallDescription}</p>
									<div className='flex'>
										<p>
											Salary :{' '}
											<b>
												${job.salaryFrom} -${job.salaryTo}
											</b>{' '}
											,{' '}
										</p>
										<p style={{ marginLeft: 20 }}>
											Experience : <b>{job.experience} Years</b>{' '}
										</p>
									</div>
									<hr />

									<div className='flex justify-content-between'>
										<Link to={`/jobs/${job._id}`}>
											<Button>View More</Button>
										</Link>
										<p>
											Posted on :{' '}
											{moment(job.createdAt).format('DD MMM YYYY')}
										</p>
									</div>
								</div>
							</Col>
						);
					})}
				</Row>
			</DefaultLayout>
		</div>
	);
}

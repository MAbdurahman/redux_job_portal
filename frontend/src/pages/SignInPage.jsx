import React from 'react';
import { Row, Col, Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';

export default function SignInPage() {
	//**************** functions ****************//
   function SignIn(values) {
      console.log(values);
   }
	return (
		<div className='sign-in'>
			<Row justify='center' className='flex align-items-center'>
				<Col lg={10} sm={24} className='bs p-5'>
					<h3>Sign In</h3>
					<hr />
					<Form layout='vertical' onFinish={SignIn}>
						<Form.Item
							label='Email'
							name='email'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>

						<Form.Item
							label='Password'
							name='password'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>

						<Button htmlType='submit' className='mb-3'>
							Sign In
						</Button>
						<br />

						<Link to='/sign-up' className='mt-3'>
							Have not Signed Up? , Click here to Sign Up
						</Link>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

import React from 'react';
import { Row, Col, Form, Input, Button, message } from 'antd';
import { Link } from 'react-router-dom';

export default function SignUpPage() {
	//**************** functions ****************//
   function SignUp(values) {
      if (values.password !== values.confirmpassword) {
            message.error('Passwords Must Match!');
      } else {
         console.log(values)
      }
   }
	return (
		<div className='sign-up'>
			<Row justify='center' className='flex align-items-center'>
				<Col lg={10} sm={24} className='bs p-5'>
					<h3>Sign Up</h3>
					<hr />
					<Form layout='vertical' onFinish={SignUp}>
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

						<Form.Item
							label='Confirm Password'
							name='confirmpassword'
							rules={[{ required: true }]}
						>
							<Input />
						</Form.Item>

						<Button htmlType='submit' className='mb-3'>
							Sign Up
						</Button>
						<br />

						<Link to='/sign-in' className='mt-3'>
							Already Signed Up? , Click here to Sign In
						</Link>
					</Form>
				</Col>
			</Row>
		</div>
	);
}

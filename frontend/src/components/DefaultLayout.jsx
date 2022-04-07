import React from 'react'
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
	MenuUnfoldOutlined,
	MenuFoldOutlined,
	PlusSquareOutlined,
	VideoCameraOutlined,
	UploadOutlined,
	HomeOutlined,
	UserOutlined,
	PlusOutlined,
	CheckOutlined,
	LogoutOutlined,
} from '@ant-design/icons';


const { Header, Sider, Content } = Layout;

class DefaultLayout extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: false,
		};
	}
	

	toggle = () => {
		this.setState({
			collapsed: !this.state.collapsed,
		});
	};

	render() {
		return (
			<Layout>
				<Sider
					trigger={null}
					collapsible
					collapsed={this.state.collapsed}
					style={{
						position: 'sticky',
						overflow: 'auto',
						height: '100%',
						top: 0,
					}}
				>
					<div className='logo'>
						{this.state.collapsed ? <h1>JP</h1> : <h1>Jobs Portal</h1>}
					</div>
					<Menu
						theme='dark'
						mode='inline'
						defaultSelectedKeys={[window.location.pathname]}
					>
						<Menu.Item key='/' icon={<HomeOutlined />}>
							<Link to='/'>Home</Link>
						</Menu.Item>
						<Menu.Item key='/profile' icon={<UserOutlined />}>
							<Link to='/profile'>Profile</Link>
						</Menu.Item>
						<Menu.Item key='/applied-jobs' icon={<PlusSquareOutlined />}>
							<Link to='/applied-jobs'>Applied Jobs</Link>
						</Menu.Item>

						<Menu.Item key='/post-job' icon={<PlusOutlined />}>
							<Link to='/post-job'>Post Job</Link>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout className='site-layout'>
					<Header
						className='site-layout-background'
						style={{
							padding: 0,
							position: 'sticky',
							overflow: 'auto',
							top: 0,
							zIndex: 9999,
						}}
					>
						{React.createElement(
							this.state.collapsed
								? MenuUnfoldOutlined
								: MenuFoldOutlined,
							{
								className: 'trigger',
								onClick: this.toggle,
							}
						)}
					</Header>
					<Content
						className='site-layout-background'
						style={{
							margin: '24px 16px',
							padding: 24,
							minHeight: 280,
						}}
					>
						{this.props.children}
					</Content>
				</Layout>
			</Layout>
		);
	}
}

export default DefaultLayout;
